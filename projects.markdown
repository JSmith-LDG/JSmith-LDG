---
layout: default
title: Projects
--- 

<div class="breadcrumbs">
    <a href="/">Home</a>>Projects
</div>

<article class="grid-container">
{% for post in site.categories.projects %}
    <!-- <div class="grid-container"> -->
        <a href="{{post.project_url}}">
            <!-- <h1 class="post-text-center">{{post.title}}</h1> -->
            <p>
                {{post.excerpt}}
            </p>
        </a>
    <!-- </div> -->
    <!-- <br> -->
{% endfor %}
</article>