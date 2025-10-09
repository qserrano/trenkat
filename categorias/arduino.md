---
layout: default
title: Arduino
permalink: /categorias/arduino/
---

<div class="blog-container">
        <h1>Publicacions d'Arduino</h1>

    {% for post in site.posts %}
        {% if post.categories contains "arduino" %}
        <article class="articulo">
            <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
            <div class="fecha">
                Publicat el {{ post.date | date: "%-d de %B, %Y" }}
            </div>
            {% if post.excerpt %}
                <p class="resumen">{{ post.excerpt }}</p>
            {% endif %}
            <a href="{{ site.baseurl }}{{ post.url }}" class="leer-mas">Llegir més →</a>
            <hr>
        </article>
        {% endif %}
    {% endfor %}
</div>
