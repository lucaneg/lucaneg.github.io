---
layout: secondary
---

## All publications

You can find all available PDFs for the publications in this page [here]({{ site.baseurl }}/papers/). Each individual publication's page will contain a direct link to the corresponding manuscript when available.

{% assign first_publication = site.categories.publications | first %}
{% assign year = first_publication.date | date: "%Y" %}

<h3>{{ year }}</h3>
<ul class="fa-ul talk-list">
{% for post in site.categories.publications %}
	{% assign cur_year = post.date | date: "%Y" %}
	{% if cur_year != year %}
</ul>
		{% assign year = cur_year %} 
<h3>{{ year }}</h3>
<ul class="fa-ul talk-list">
	{% endif %}
	{% include post-item.html post=post %}
{% endfor %}
</ul>

<h3>PhD Thesis</h3>
<ul class="fa-ul talk-list">
{% assign thesis = site.pages | where: "phdthesis", true %}
{% for post in thesis %}
	{% include post-item.html post=post icon="fas fa-graduation-cap" %}
{% endfor %}
</ul>
