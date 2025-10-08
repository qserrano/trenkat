---
layout: default
title: "Fundaments de Neumàtica"
permalink: /categorias/fundamentos/
---

<link rel="stylesheet" href="{{ '/assets/css/categories.css' | relative_url }}">

<div class="tutorial-container">
    <div class="tutorial-content">
            <h1>Fundaments de Neumàtica</h1>

        {% assign sorted_posts = site.posts | sort: 'date' %}
        {% for post in sorted_posts %}
            {% if post.categories contains "neumatica" and post.categories contains "fundamentos" %}
            <article class="articulo">
                <a href="{{ post.url }}">{{ post.title }}</a>
            </article>
            {% endif %}
        {% endfor %}
    </div>
    <div class="tutorial-image">
            <img src="/assets/imatges/categorias/neumatica-fundamentos.png" alt="Fundaments de Neumàtica" width="300" height=auto>
    </div>
</div>
