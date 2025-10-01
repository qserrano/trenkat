---
layout: default
title: Neumatica
permalink: /categorias/neumatica/
---

<div class="blog-container">
        <h1>Artículos de Neumatica</h1>

    {% for post in site.posts %}
        {% if post.categories contains "neumatica" %}
        <article class="articulo">
            <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
            <div class="fecha">
                Publicado el {{ post.date | date: "%-d de %B, %Y" }}
            </div>
            {% if post.excerpt %}
                <p class="resumen">{{ post.excerpt }}</p>
            {% endif %}
            <a href="{{ post.url }}" class="leer-mas">Leer más →</a>
            <hr>
        </article>
        {% endif %}
    {% endfor %}
</div>
