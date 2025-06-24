---
layout: secondary
---

## All talks

You can find all available slides for the talks in this page [here]({{ site.baseurl }}/slides/). Each individual talk's page will contain a direct link to the corresponding slides when available.

{% assign first_talk = site.categories.talks | first %}
{% assign year = first_talk.date | date: "%Y" %}

<h3>{{ year }}</h3>
<ul class="fa-ul talk-list">
{% for post in site.categories.talks %}
	{% assign cur_year = post.date | date: "%Y" %}
	{% if cur_year != year %}
</ul>
		{% assign year = cur_year %} 
<h3>{{ year }}</h3>
<ul class="fa-ul talk-list">
	{% endif %}
	{% include post-item.html post=post icon="fas fa-calendar-alt" %}
{% endfor %}
</ul>

<h3>PhD Thesis</h3>
<ul class="fa-ul talk-list">
{% assign thesis = site.pages | where: "phdthesis", true %}
{% for post in thesis %}
	{% include post-item.html post=post icon="fas fa-graduation-cap" %}
{% endfor %}
</ul>
