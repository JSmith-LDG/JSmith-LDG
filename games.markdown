---
layout: default
title: Games
---

<h1>Games</h1>
<p>Check out these cool games I've made!</p>

<ul class="game-list">
  {% for game in site.games %}
    <li>
      <a href="{{ game.url }}">
        <h2>{{ game.title }}</h2>
        <p>{{ game.description }}</p>
      </a>
    </li>
  {% endfor %}
</ul>