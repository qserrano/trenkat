---
layout: default
title: "Fundaments de Pneumàtica"
permalink: /categorias/fonaments/
---

<link rel="stylesheet" href="{{ '/assets/css/categories.css' | relative_url }}">

<div class="tutorial-container">
    <div class="tutorial-content">
            <h1>Fonaments de Pneumàtica</h1>

        {% assign sorted_posts = site.posts | sort: 'date' %}
        {% for post in sorted_posts %}
            {% if post.categories contains "pneumatica" and post.categories contains "fonaments" %}
            <article class="articulo">
                <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
            </article>
            {% endif %}
        {% endfor %}
    </div>
    <div class="tutorial-image">
            <img src="{{ site.baseurl }}/assets/imatges/categorias/neumatica-fundamentos.png" alt="Fonaments de Pneumàtica" width="300" height=auto>
    </div>
</div>
