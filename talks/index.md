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
	<li>
		<span class="fa-li"><i class="fas fa-calendar-alt"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<a class="topic">{{ post.tags | join: '</a>&nbsp;&nbsp;<a class="topic">' }}</a><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small>{{ post.kind }} - {{ post.date | date: "%-d %B %Y" }} - {{ post.location }}
		{% if post.manuscript %}
			 • <i class="fas fa-file-pdf"></i> PDF available
		{% endif %}
		{% if post.presentation %}
			 • <i class="fas fa-file-powerpoint"></i> Slides available
		{% endif %}
		</small>
	</li>
{% endfor %}
</ul>
