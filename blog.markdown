---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
--- 

<article class="grid-container">
{% for post in site.categories.blog %}
    <!-- <div class="grid-container"> -->
        <a href="{{post.url}}">
            <h1>{{post.title}}</h1>
            <p>
                {{post.excerpt}}
            </p>
        </a>
    <!-- </div> -->
    <!-- <br> -->
{% endfor %}
</article>