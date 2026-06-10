---
layout: post
title: Teaching frequentist statistics
date: 2024-12-01
description: Contains traces of Poisson law and fishes (sounds funnier in French)
tags: teaching
thumbnail: assets/img/guppy.jpg
---


<article>
    <div class="teaching">
    {% for entry in site.data.teaching %}
        <a class="anchor" id="{{ entry.title }}"></a>
        <div class="card mt-2 p-3">
            <h5 class="card-title font-weight-medium">{{ entry.title }}</h5>
            <p><em>{{ entry.institution }}, {{ entry.year }}</em></p>

            {% if entry.description %}
                <ul class="items">
                {% for item in entry.description %}
                    <li>
                        <span class="item">{{ item }}</span>
                    </li>
                {% endfor %}
                </ul>
            {% endif %}
        </div>
    {% endfor %}
    </div>
</article>
