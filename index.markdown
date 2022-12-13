---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default

--- 

<h1><a href="{{ site.baseurl }}/blog/">Latest Blog Post</a></h1>
<article class="grid-container">
    {% for post in site.categories.blog limit:2 %}
    <a href="{{ site.baseurl }}/blog/{{post.url}}">
         <p>
            {{post.excerpt}}
        </p>
    </a>
    {% endfor %}
</article>
<h1><a href="{{ site.baseurl }}/projects/">Projects</a></h1>
<article class="grid-container">
    {% for post in site.categories.projects limit:4 %}
    <a href="{{post.project_url}}">
         <p>
            {{post.excerpt}}
        </p>
    </a>
    {% endfor %}
</article>