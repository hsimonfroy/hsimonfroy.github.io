---
layout: page
permalink: /teaching/
title: teaching
description: Materials for courses teaching, outreach, and tutorials.
nav: true
nav_order: 6
---

<!-- For now, this page is assumed to be a static description of your courses. You can convert it to a collection similar to `_projects/` so that you can have a dedicated page for each course.

Organize your courses by years, topics, or universities, however you like! -->


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


<!-- # teaching
* Statistical Modeling
    * Université Paris-Saclay/ENSTA, *Autumn 2024*
    * Teaching assistant at Master-level in Mathematics: 
    <a href='/assets/pdf/poly-ENSTA-STA201-2022.pdf'>notes</a>

* Biostatistics
    * Université Paris-Saclay, *Autumn 2024*
    * Teaching assistant at Bachelor-level in Biology: 
      <a href='/assets/pdf/poly_bio_math291_2024-2025.pdf'>notes</a> -->




<!-- {% if course.notes %}
<a href="/assets/pdf/{{ course.notes }}">notes</a>
{% endif %} -->