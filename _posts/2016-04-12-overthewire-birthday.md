---
layout: post
title: OverTheWire birthday!
comments: true
---

It's OverTheWire.org's 10th anniversary today, and that deserves some celebrating!

<https://twitter.com/StevenVanAcker/status/719786141038288896>
<https://twitter.com/StevenVanAcker/status/719786851410788354>

	deepstar@perdix:~$ whois overthewire.org
	Domain Name: OVERTHEWIRE.ORG
	Domain ID: D120267631-LROR
	WHOIS Server:
	Referral URL: www.internet.bs
	Updated Date: 2014-04-22T06:56:28Z
	Creation Date: 2006-04-12T11:06:47Z
	               ^^^^^^^^^^

I have already announced some changes on Twitter, but there is room here for a bit more elaboration.

### 1. Password changes
<https://twitter.com/StevenVanAcker/status/719812528436551680>

In general, we do not like it when write-ups of our challenges are posted online for the whole world to see.
The main reason for this is that it spoils the game-play for new players, who often stumble across write-ups
while googling how to tackle certain problems encountered during challenges.
What is even worse, is that many of these write-ups contain the passwords attained by solving a challenge.
It is perfectly possible for a new player to completely solve a game, just by copying passwords from write-ups.

The only measure we have to keep the games from being flooded by dishonest players, is to change the passwords
from time to time. And this is exactly what we will do in the near future. 

### 2. Docker containers
<https://twitter.com/StevenVanAcker/status/719847958678736897>

OverTheWire currently hosts 12 wargames on a limited budget. In practice this
means that all games are hosted on the same (rented) VM with 1GB of RAM.  A
downside of this setup is that all players share the same filesystem and that
access from one game can be leveraged to gain access in another game (I'll
leave this as an exercise to the reader).

Our philosophy has always been that there is no such thing as cheating in a
wargame.  There is no "incorrect" way in which you can elevate your privileges,
and if you manage to do it with a creative setup, then all the more kudos to
you.

However, because we design challenges to teach specific things, we like to
close off loopholes that make it too easy to solve certain challenges.
Unfortunately, this is not always possible when the filesystem is shared.

An alternative setup we have been exploring recently is to use linux containers
(via docker) to isolate individual players from each other.  Upon logging in
via SSH, each player is dropped into a fresh container as if playing completely
alone on the server.  There are no stray files or processes left by other games
or users, so that there is no interference.

### 3. New Natas levels
<https://twitter.com/StevenVanAcker/status/719881977009188864>

Morla, awesome as always, has created several new levels for our web wargame natas.
Currently these levels are undergoing testing in the docker setup.
Be sure to check back when they go online!

### 4. New game Formula1
<https://twitter.com/StevenVanAcker/status/719897764545564672>

A while back, OverTheWire adopted several games from intruded.net after they shut down.
A presumed lost game called formula1, has been recovered and we have been converting it (with adc's help)
to be used as an OverTheWire game. For now, this game is only available in the docker setup.

### 5. Bringing back tag files
<https://twitter.com/StevenVanAcker/status/719941350154747904>

Players like to show off when they beat a certain challenge. In the past, we
have had tag-files where they could log their name with a note. However, these
tag-files were a recipe for abuse (especially in the lower-ranking levels of
games) and required us to keep backups of the tag-files.  We've decided to give
tag-files another go, so you can expect to see them again in the near future.

### 6. Uplink to the warzone
<https://twitter.com/StevenVanAcker/status/719981262702800897>

The OverTheWire warzone has been around for a while now, but is mostly unused.
We presume that many people do not wish to create a user account for the
warzone and setup VPN access just to have a quick look around.  As a shortcut,
we will be hooking up the games server to the warzone so that interested
players can have a quick look around the warzone and discover extra challenges
in it.

