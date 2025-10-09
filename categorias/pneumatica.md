---
layout: default
title: Pneumàtica
permalink: /categorias/pneumatica/
---

<img class="centered" src="{{ site.baseurl }}/assets/imatges/categorias/neumatica-blog.jpg" alt="Pneumàtica" width="300" height=auto>

<div class="blog-container">
        <h1>Publicacions de Pneumàtica</h1>

    {% for post in site.posts %}
        {% if post.categories contains "pneumatica" %}
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
