---
layout: secondary
---

## All manuscripts

<h3>Manuscripts</h3>

Files here are listed by the conference/book/journal acronym and the year they were published.

<ul class="fa-ul talk-list">
{% assign static = site.static_files | sort: "name" %}
{% for file in static %}
  {% if file.extname == ".pdf" and file.path contains "papers/" and file.name != "phd-thesis.pdf" -%}
	<li>
		<span class="fa-li"><i class="fas fa-file-pdf"></i></span> 
		<a href="{{ site.baseurl }}/papers/{{ file.name }}">{{ file.name }}</a>
	</li>
  {%- endif %}
{% endfor %}
</ul>

<h3>PhD Thesis</h3>

<ul class="fa-ul talk-list">
	<li>
		<span class="fa-li"><i class="fas fa-file-pdf"></i></span> 
		<a href="{{ site.baseurl }}/papers/phd-thesis.pdf">phd-thesis.pdf</a>
	</li>
</ul>

