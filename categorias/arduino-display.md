---
layout: default
title: Arduino display
permalink: /categorias/arduino-display/
---

<link rel="stylesheet" href="{{ '/assets/css/categories.css' | relative_url }}">

<div class="tutorial-container">
    <div class="tutorial-content">
            <h1>Tutorial de Arduino display</h1>

        {% assign sorted_posts = site.posts | sort: 'date' %}
        {% for post in sorted_posts %}
            {% if post.categories contains "arduino" and post.categories contains "display" %}
            <article class="articulo">
                <a href="{{ post.url }}">{{ post.title }}</a>
            </article>
            {% endif %}
        {% endfor %}
    </div>
    <div class="tutorial-image">
            <img src="/assets/imatges/tutoriales/tutorial-arduino-display.png" alt="Tutorial Arduino display" width="300" height=auto>
    </div>
</div>
