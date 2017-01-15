---
layout: page
title: Blog archive
sidebar: true
undersep: true
rank: 99
---

{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}
