---
layout: default
---

## All projects

{% assign projectlist = "" | split: ',' %}
{% for p in site.pages %}
	{% if p.project == true and p.pinned == true %}
		{% assign projectlist = projectlist | push: p %}
	{% endif %}
{% endfor %}
{% for p in site.pages %}
	{% if p.project == true and p.pinned != true %}
		{% assign projectlist = projectlist | push: p %}
	{% endif %}
{% endfor %}
<div class="project-item-wrapper">
{% for p in projectlist %}
	<div class="project-item">
		<a href="{{ p.url }}">{{ p.title }}</a><br/>
		<venue>{{ p.description }}</venue><br/>
		{% assign langs = p.languages | split: " " %}
		<small>
		{% for lang in langs %}
			<span class="language-dot {{ lang | downcase }}-dot"></span> {{ lang }}&nbsp;
		{% endfor %}
		</small><br/>
	</div>
{% endfor %}
</div>
<p/>
