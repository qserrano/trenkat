---
layout: default
title: Arduino bàsic
permalink: /categorias/basic/
---

<link rel="stylesheet" href="{{ '/assets/css/categories.css' | relative_url }}">

<div class="tutorial-container">
    <div class="tutorial-content">
            <h1>Tutorial de Arduino bàsic</h1>

        {% assign sorted_posts = site.posts | sort: 'date' %}
        {% for post in sorted_posts %}
            {% if post.categories contains "arduino" and post.categories contains "basic" %}
            <article class="articulo">
                <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
            </article>
            {% endif %}
        {% endfor %}
    </div>
    <div class="tutorial-image">
            <img src="{{ site.baseurl }}/assets/imatges/tutoriales/tutorial-arduino-basic.png" alt="Tutorial Arduino bàsic" width="300" height=auto>
    </div>
</div>
