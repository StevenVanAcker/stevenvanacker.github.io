---
layout: post
title: Messing with chrome extensions
comments: true
---

For research purposes, we are currently looking into changing the Chrome
extensions architecture, but that is not trivial without a firm grasp of
extensions themselves. That is why I've set myself the goal of writing a dummy
Chrome extension to play around with. And because I don't want this to be a
useless exercise, I will make the extension useful for me.

I regularly watch YouTube videos and am subscribed to a couple YouTubers. When
videos have been watched already, YouTube indicates this with a "WATCHED" badge
on the video. While this is useful to keep track of what videos I've already
seen, I don't think it is good enough for the way I use YouTube.  For me, it
would be best to be able to hide videos I've already watched. In addition, it
would also be great if I could mark some videos as watched without having to
watch them. Believe it or not, but not all content produces by the YouTubers I
follow, is interesting. Most of the time, I can decide whether I want to watch
a video, by looking at the title. So a useful YouTube extension for me would be
able to both hide watched videos, but also allow me to mark videos as watched
based on some user-specified criteria (like a regex on the video title).

My current solution for hiding watched videos on <https://www.youtube.com/feed/subscriptions>
is the following bookmarklet:

        javascript:(function(){p="parentElement"; l = document.getElementsByClassName("watched"); for(x = 0; x < l.length; x++) { l[x][p][p][p][p][p][p][p][p][p][p][p].style.display = "none" }})()

In a more readable form:


        (function(){
            p="parentElement"; 
            l = document.getElementsByClassName("watched"); 
            for(x = 0; x < l.length; x++) { 
                l[x][p][p][p][p][p][p][p][p][p][p][p].style.display = "none" 
            }
        })()

In short, the snippet looks up all HTML elements with class "watched", and sets
the CSS "display" property of the 11th parent element to "none" for each of
those "watched" elements.  This works fairly well, but only on the
subscriptions page.  I want this behavior in my extension, but I also want to
have this same behavior on other webpages, such as a YouTube user's video list
page.

## Building an extension

Building a Chrome extension is not really difficult and rather well explained
on <https://developer.chrome.com/extensions/devguide>.  A Chrome extension is
basically a bunch of web pages made from HTML, CSS and JavaScript.  For a basic
extension like YouTube-hide that I am making here, we actually don't even need
HTML and CSS.  HTML and CSS are used if you want to alter the style of a web
page, or you want the extension to have an options page or a popup or something
like that.

For now, the YouTube-hide extension will only alter the visited page using
JavaScript, which means it only needs to have a content script (in addition to
the manifest file, which is mandatory for every extension).

The manifest file (manifest.json) looks like this:

        {
          "manifest_version": 2,

          "name": "Hide watched YouTube videos",
          "description": "Automatically hide watched YouTube videos from listings on YouTube pages",
          "version": "1.0",

          "content_scripts": [
            {
              "matches": ["https://www.youtube.com/*"],
              "js": ["contentscript.js"]
            }
          ]
        }

Besides some metadata, this manifest only specifies that it needs to inject a
contentscript.js into all webpage at https://www.youtube.com/*.

The Chrome extensions page can be found at
[chrome://extensions](chrome://extensions) and that page can be used to load an
unpacked Chrome extension by enabled developer mode. For development, that is
how to load your extension in Chrome.


## The beefy part of the extension: the content script

The content script will be injected in every webpage of which the URL matches
the regular expression in the manifest file.  In our case, that would be all
YouTube pages.

YouTube has several different web pages that all list videos in various ways.
For instance, there is a user's subscriptions feed at
<https://www.youtube.com/feed/subscriptions> which shows videos in list or grid
format, but there are also playlist such as [Scott Manley's "Kerbal Space
Program Tutorials"
playlist](https://www.youtube.com/playlist?list=PLYu7z3I8tdEm5nyZU3a-O2ak6mBYXWPAL).

To hide (or delete) HTML elements that indicate a watched video
(class="watched"), you need to find the correct parent element of that element
and then hide or delete it. For the subscriptions feed in list mode, this means
the 11th parent. For the playlist page, this means the 3rd parent.

Given a URL, the following function will determine the correct "parent level"
to use for whatever web page we happen to be visiting:

        function getParentLevelFromPage(loc) {
            var relist = [
                {re: new RegExp("https://www.youtube.com/user/[^/]+/videos\?.*flow=list.*"), level: 8}, // grid
                {re: new RegExp("https://www.youtube.com/user/[^/]+/videos.*"), level: 5},
                {re: new RegExp("https://www.youtube.com/user/[^/]+/featured.*"), level: 5},
                {re: new RegExp("https://www.youtube.com/channel/.*"), level: 5},
                {re: new RegExp("https://www.youtube.com/playlist.*"), level: 3},
                {re: new RegExp("https://www.youtube.com/feed/subscriptions\?.*flow=1.*"), level: 3}, // grid
                {re: new RegExp("https://www.youtube.com/feed/subscriptions.*"), level: 11},
            ];

            for(var rei = 0; rei < relist.length; rei++) {
                re = relist[rei];
                if(loc.match(re["re"])) {
                    return re["level"];
                }
            }

            return -1;
        }

The "relist" variable contains a list of regular expressions against which the
URL can be matched. This function will go through the list sequentially and
report the level for the first matching regular expression. If nothing matches,
-1 is returned.  The real code contains some debugging
information to help find the correct level for an unknown page.

The following function is used to help determine the parent level for unknown
pages:

        function showParentsOfFirstWatched() {
            var watchedlist = document.getElementsByClassName("watched");

            if(watchedlist.length > 0) debug("Found "+watchedlist.length+" watched videos");

            var e = watchedlist[0];
            for(var i = 0; i < 15; i++) {
                debug("Parent "+i, getNthParentElement(e, i));
            }
        }

This code will find all elements of class "watched" and print the first 15
parents of the first "watched" element to the console.  In the console, you can
then mouse over the list to find the biggest rectangle that matches the entire
video element, thus determining the optimal "parent level".

The getNthParentElement() function is pretty much what it's named after:

        function getNthParentElement(e, n) {
            if(n < 0) return null;
            if(n == 0) return e;
            if(!e || !("parentElement" in e)) return null;

            return getNthParentElement(e.parentElement, n-1);
        }

It will just go up the "parentElement" chain of an element "e" for "n"
recursive iterations and return the result.

Once the correct parent element is identified, it can be hidden or removed. This happens
for all HTML elements with class "watched" using this function:

        function removeWatchedVideos(parentLevel) {
            var watchedlist = document.getElementsByClassName("watched");

            if(watchedlist.length > 0) debug("Found "+watchedlist.length+" watched videos, removing them.");

            // iterate in reverse order to avoid race condition...
            for(var ei = watchedlist.length - 1; ei >= 0; ei--) {
                var e = watchedlist[ei];
                var pe = getNthParentElement(e, parentLevel);
                if(pe) pe.parentNode.removeChild(pe);
            }
        }

Finally, the content script will register a timer to purge all watched videos
every 0.5 seconds:

        var pageParentLevel = -1;
        var currentLocation = "";
        setInterval(function() {
            if(window.location.href != currentLocation) {
                currentLocation = window.location.href;
                pageParentLevel = getParentLevelFromPage(currentLocation);
            }
            removeWatchedVideos(pageParentLevel);
        }, 500);

This code also takes care of any changes to the URL while viewing the page,
since YouTube updates the URL without actually reloading the page.

## It's on github

I've shared the code on GitHub for those who are interested: <https://github.com/StevenVanAcker/youtube-hide>

