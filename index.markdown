---
layout: default
title: Home
---

<!-- Showcase of Key Projects -->
<!-- <br> -->
<!-- <h2>Recent</h2> -->
<section id="projects">
  <div class="carousel">
  <h2>Recent</h2>
    <div class="carousel-wrapper">
      {% assign sorted_projects = site.projects | where: 'shown', true | sort: 'date' | reverse %}
      {% for project in sorted_projects limit:4 %}
        <div class="carousel-item">
            {% if project.project_url %}
            <a href="{{ project.project_url }}" class="project-link">
            {% else %}
                <div class="no-link">
            {% endif %}
                <img src="{{ project.image }}" alt="{{ project.title }}">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
            {% if project.project_url %}
                </a>
            {% else %}
                </div>
            {% endif %}
        </div>
      {% endfor %}
    </div>
    <button class="carousel-prev">&lt;</button>
    <button class="carousel-next">&gt;</button>
  </div>
</section>

<!-- All Projects Section -->
<section id="projects-list">
  <h2>Other Projects</h2>
  <div class="projects-container">
    {% assign remaining_projects = sorted_projects | slice: 4, 100 %}
    {% for project in remaining_projects %}
      <div class="project-item">
        {% if project.project_url %}
          <a href="{{ project.project_url }}" class="project-link">
        {% else %}
            <div class="no-link">
        {% endif %}
            <img src="{{ project.image }}" alt="{{ project.title }}">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
        {% if project.project_url %}
            </a>
        {% else %}
            </div>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</section>

<!-- Skills and Technologies -->
<section id="skills">
  <div class="container">
    <h2>Skills & Technologies</h2>
    <ul class="skills-list">
      {% for skill in site.skills %}
        <li>{{ skill }}</li>
      {% endfor %}
    </ul>
  </div>
</section>


<script src="{{ base.url | prepend: site.url }}/assets/js/carousel.js"></script>