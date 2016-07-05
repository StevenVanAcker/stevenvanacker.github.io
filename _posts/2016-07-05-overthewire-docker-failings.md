---
layout: post
title: OverTheWire docker failings
comments: true
---

**TL;DR: OverTheWire experimented with dropping each player in a Docker container
for better isolation. The Docker setup uses a lot of memory, does not work
together with pwntools/paramiko for automated tests and causes resource
exhaustion because it doesn't clean up after itself.**

For about a year now, we've been experimenting with docker containers for the
OverTheWire games.  Containers are interesting for their isolation properties.
Every logged in user gets a fresh copy of the entire filesystem and process
space. When they log out, the temporary filesystem is reset and the processes
killed.  Users have the impression that they are alone on the wargames machine
and there are more advantages.  For instance, because the filesystem is reset
anyway, there is no need for special permissions to be set.  A logged in user
can have a fully writable homedirectory, access to cronjobs and whatever else
can be available on a regular Linux installation.

Sadly, what worked in testing has shown to have unexpected problems in
production.  The problems turned out to be so bad that we've had to stop using
docker for now.  Maybe in the future, these issues can be ironed out and we can
have a fun docker ride after all.  I'm writing all of this down so that others,
facing similar issues, don't feel alone in the cold.

# How OverTheWire used docker

Each wargame is installed in its own docker image, which then contains all the
files and users associated with that wargame. Each wargame image inherits from
a common base image. This base image contains all software and configuration
that is typical for a wargame.

Some wargames (think bandit, vortex, semtex, ...) have network-facing daemons
that need to run permanently. Solely for this, we run permanent docker
instances that have network access. While these permanent instances for each of
the games also contain all other levels of the same game, they are not intended
to be used for interactive shells.

For all wargame levels that need SSH access (which is the bulk of the levels),
we spawn a container when a user logs in.  The wargames host machine has passwd
entries for all wargames' users that require SSH access.  These user accounts
are configured to use a special shell on login.  This shell is what spawns the
container, by figuring out the username and associated game, and then launching
a container and dropping the user in it.

More specifially, we basically run this command when a player logs in as e.g. bandit0:

	/usr/bin/docker docker run
	-h bandit
	-e HOME=/home/bandit0
	-w /home/bandit0
	-t
	-i
	--rm=true
	bandit
	/bin/bash -c '/usr/bin/supervisord -c /etc/supervisor/supervisord.conf && login -f -p bandit0'


In this command, we set the hostname to "bandit" with -h, configure the user's
home directory with -e and -w, request a TTY with -t, request interactive mode
with -i, request that the container is non-persistent and cleaned up when it
exists (instead of taking up diskspace) with --rm=true.  The container to
launch is called "bandit" in this case, and we execute the command 

	/usr/bin/supervisord -c /etc/supervisor/supervisord.conf && login -f -p bandit0

Because it is setup in this way, our docker containers run as root, so this
command also runs as root. The command executed in the container will start
supervisor in the background and then spawn a login shell for the user.

At this point, the user is logged in and can use the shell normally.  When the
user logs out, the docker command exits and removes the container instance so
that no trace of this session remains.  In theory this is perfect: each user is
isolated from all other users and leaves no traces behind on the system.  In
practice though, we ran into several issues that forced us to stop using docker
altogether for the OverTheWire games...

# Encountered problems with Docker

## High memory usage

Even before going to production, we noticed that Docker consumes quite a bit of
memory.  Each running container instance consumes an extra 100MB or of memory
on average.  The permanent docker instances (for network-facing wargame levels)
alone take up about 500MB of memory, but they are not really the issue.  The
real issue is that each logged in user spawns a new container instance.
OverTheWire is visited (via SSH) by players from [about 400 unique IP addresses
per day](http://stats.melinda.labs.overthewire.org/), on average.  At any given
time, there are about 30-60 players logged in through SSH, with peaks over 300:

<https://twitter.com/StevenVanAcker/status/620940603484962816>

A quick back-of-the-envelope calculation indicated that there would have to be
at least 8GB of ram to keep working comfortably (keep in mind that there is
more running than just docker).  For unexpected peaks, we could provision extra
machines to spread the load.  For the test setup, we picked Amazon EC2 (instead
of the current Linode), so that we could more easily scale if needed.

## Automated SSH tests failed

Keeping things up and running in a hostile wargames environment is not always
trivial.  Wargame challenges are designed to endure quite some abuse, but that
is not always enough.  Players are very inventive (as they should be!) and
sometimes break challenges in unexpected ways.  When such breakage happens, we
fix the problem as soon as we can.

In most cases however, things do not break. On OverTheWire's IRC support
channel #wargames, players often wonder if a challenge is broken when they are
not able to exploit it for a while.  Because it is always possible that
something unexpected is wreaking havoc on the games machine, we have some
semi-automated tests that log in over SSH and exploit challenges to determine
if they still work as intended.

For these tests, we depend on
[pwntools](https://github.com/Gallopsled/pwntools), which uses
[Paramiko](http://www.paramiko.org/) for its SSH pipes.

Unfortunately, our automated tests no longer work on the Docker setup, for
unknown reasons.

## Unclean exits cause resource exhaustion

High memory consumption is something that can be handled with more hardware.
Failing automated tests can probably be fixed with some more debugging, or
using another approach.  But this third problem is what really killed the
Docker migration.

When container instances exit, they are supposed to clean themselves up,
removing processes running inside the instance as well as removing the
temporary layover filesystem which the player could have written many changes
in.  Docker cleans up after itself when a container terminates and the
--rm=true flag is given.  However, this only happens when the container
terminates.

In our setup, containers are spawned at login and remain attached to the active
SSH session.  When this SSH session disappears for whatever reason (e.g.
network problems), the container instance goes in a "detached" state instead of
terminating. Because the containter has not terminated, the processes in it
keep running and the temporary filesystem keeps using diskspace.

At this time, it is not clear whether Docker can be configured to terminate a
container when stdin is closed (i.e. when the SSH session dies).  In itself,
this is not really a problem as we could have a cronjob find all detached
containers and kill them ourselves.  However, it seems that Docker has no way
to tell the difference between attached and detached instances either.

Because docker instances keep running when SSH dies, and there is no way to
differentiate between attached and detached containers, "dead" containers keep
piling up in the background. These dead containers consume memory and
diskspace.  This problem did not show up in the test setup since we could not
perform automated tests (since paramiko fails).  Once in production however,
the Docker setup trashed itself multiple times because of this problem.  The
Docker process would keep eating up memory until the OOM killer terminated it.
When given more memory, the disk space would run out because of all the
temporary storage allocated by "dead" containers.

The only way to solve this situation as far as we could determine, is to
reboot.  Because this is not a very nice solution, and because the cost of
frequent reboots currently outweighs the benefits that Docker gives us, the
Docker migration was shelved for now.
















