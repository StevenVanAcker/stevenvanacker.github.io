---
layout: page
title: homelab-backup privacy policy
permalink: /homelab-backup/privacy/
---

*Last updated: 8 November 2026*

This policy covers [homelab-backup](/homelab-backup/), a personal backup script that I, Steven Van Acker,
run on my own home server. I am its only user.

## What it accesses

The script uses the Google Drive permission `drive.file`. This lets it read and change only the files
it created itself. It cannot see any other file in the Drive account, and it does not request any other
Google account data.

## How the data is used

The files it stores are encrypted backups of my own server. They are encrypted before they leave the
server, and they are used only to restore that server.

## Sharing

Nothing is sold or shared with anyone. The script has no analytics or advertising, and it does not send
data to any service other than Google Drive.

The use of information received from Google APIs adheres to the
[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy),
including its Limited Use requirements.

## Retention and removal

Backups are kept for up to six months, then deleted automatically. The access token is stored only on
my own server and in my password manager. Access can be withdrawn at any time at
[Google account permissions](https://myaccount.google.com/permissions), and the backups can be deleted
from Google Drive.

## Contact

Questions can be sent using the contact details on [my home page](/).
