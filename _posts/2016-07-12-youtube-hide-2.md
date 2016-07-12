---
layout: post
title: YouTube-hide extension, part 2
comments: true
---

The YouTube-hide extension I built last week to hide watched YouTube videos
automatically, works fine.  However, sometimes I like to rewatch videos and I
can not do that when the extension removes it from the webpage automatically.
So, I'm changing the functionality of the extension to be able to "unhide"
videos as well, with a browser action.

Creating an browser action in an extension is easy.
I just added the following to manifest.json:

	"browser_action": {
	  "default_icon": "images/icon.png",
	  "default_popup": "popup.html"
	}

And I downloaded [a YouTube-related
icon](http://www.iconarchive.com/show/social-inside-icons-by-icontexto/social-inside-youtube-icon.html)
into images/icon.png.  This icon is shown in Chrome's navigation bar after
reloading the extension, and when clicked, popup.html pops up.

This popup should have a toggle-switch inside that hides or shows watched
videos.  This "mode" setting is stored using the "storage" functionality of
Chrome's extensions.

The contentscript registers a listener to receive updates from the storage
subsystem, so that any change to the "mode" setting in popup.html triggers an
automatic update in any webpage where the contentscript is running at that
time.


The original contentscript simply deleted all HTML elements that contained
watched videos.  This had to be changed, since we want to keep the HTML
elements around to show them again when the user requests it.  So instead of
deleting the HTML elements, we change the "display" CSS property to "none",
effectively hiding it on the webpage.  To avoid messing up YouTube's CSS, we
keep a copy of the "display" CSS property of the original HTML element around,
so that it can be restored when the HTML element is unhidden.

The code is on <https://github.com/StevenVanAcker/youtube-hide>
