---
layout: secondary
---

## All slides

<h3>Slides</h3>

Files here are listed by the conference/event acronym and the year they were published.

<ul class="fa-ul talk-list">
{% assign static = site.static_files | sort: "name" %}
{% for file in static %}
  {% if file.path contains "slides/" and file.name != "phd-defence.pptx" -%}
	<li>
		<span class="fa-li"><i class="fas fa-file-powerpoint"></i></span> 
		<a href="{{ site.baseurl }}/slides/{{ file.name }}">{{ file.name }}</a>
	</li>
  {%- endif %}
{% endfor %}
</ul>

<h3>PhD Thesis</h3>

<ul class="fa-ul talk-list">
	<li>
		<span class="fa-li"><i class="fas fa-file-powerpoint"></i></span> 
		<a href="{{ site.baseurl }}/slides/phd-defence.pptx">phd-defence.pptx</a>
	</li>
</ul>

