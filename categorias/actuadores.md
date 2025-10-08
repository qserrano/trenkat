---
layout: default
title: Arduino actuadors
permalink: /categorias/actuadores/
---

<link rel="stylesheet" href="{{ '/assets/css/categories.css' | relative_url }}">

<div class="tutorial-container">
    <div class="tutorial-content">
            <h1>Tutorial de Arduino actuadors</h1>

        {% assign sorted_posts = site.posts | sort: 'date' %}
        {% for post in sorted_posts %}
            {% if post.categories contains "arduino" and post.categories contains "actuadores" %}
            <article class="articulo">
                <a href="{{ post.url }}">{{ post.title }}</a>
            </article>
            {% endif %}
        {% endfor %}
    </div>
    <div class="tutorial-image">
            <img src="/assets/imatges/tutoriales/tutorial-arduino-actuadores.png" alt="Tutorial Arduino actuadors" width="300" height=auto>
    </div>
</div>
