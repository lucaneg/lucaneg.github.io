---
layout: default
---

## All talks

{% for category in site.categories %}
	{% if category[0] == "talks" %}
<ul class="fa-ul talk-list">
	{% for post in category[1] %}
	<li>
		<span class="fa-li"><i class="fas fa-calendar-alt"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic> <topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small>{{ post.kind }} - {{ post.date | date: "%-d %B %Y" }} - {{ post.location }}</small><br/>
	</li>
	{% endfor %}
</ul>
	{% endif %}
{% endfor %}
