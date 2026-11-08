---
layout: page
title: homelab-backup
permalink: /homelab-backup/
---

homelab-backup is a personal script that I, Steven Van Acker, run on my own home server. Every night it
copies encrypted backups of my server's data to my own Google Drive, so that I can restore the server
after a disk failure.

It is not a public service: there is nothing to sign up for, and I am its only user.

It uses restic for encryption and rclone to reach Google Drive. It only asks for access to files it
creates itself, so it cannot see anything else in the Drive account.

See the [privacy policy](/homelab-backup/privacy/).
