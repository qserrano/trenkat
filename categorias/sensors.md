---
layout: default
title: Arduino sensors
permalink: /categorias/sensors/
---

<link rel="stylesheet" href="{{ '/assets/css/categories.css' | relative_url }}">

<div class="tutorial-container">
    <div class="tutorial-content">
            <h1>Tutorial de Arduino sensors</h1>

        {% assign sorted_posts = site.posts | sort: 'date' %}
        {% for post in sorted_posts %}
            {% if post.categories contains "arduino" and post.categories contains "sensors" %}
            <article class="articulo">
                <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
            </article>
            {% endif %}
        {% endfor %}
    </div>
    <div class="tutorial-image">
            <img src="{{ site.baseurl }}/assets/imatges/tutoriales/tutorial-arduino-sensores.png" alt="Tutorial Arduino sensors" width="300" height=auto>
    </div>
</div>
