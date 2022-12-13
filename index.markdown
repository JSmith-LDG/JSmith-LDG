---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default

--- 

{% if site.categories.blog %}
<h1><a href="{{ site.baseurl }}/blog">Latest</a></h1>
<article class="grid-container">
    {% for post in site.categories.blog limit:2 %}
    <a href="{{ site.baseurl }}{{post.url}}">
        <h3>{{post.title}}</h3>
         <p>
            {{post.excerpt}}
        </p>
    </a>
    {% endfor %}
</article>
{% endif %}
<h1><a href="{{ site.baseurl }}/projects">Projects</a></h1>
<article class="grid-container">
    {% for post in site.categories.projects limit:4 %}
    <a href="{{post.project_url}}">
         <p>
            {{post.excerpt}}
        </p>
    </a>
    {% endfor %}
</article>