---
layout: default
---

## Hi, I'm Luca!

I am currently a Java and C# developer at [Corvallis](http://www.corvallis.it/), where the Julia static analyzer was developed recently. My work at Corvallis goes beyond the simple software development: I am also part of the Scientific LAB, whose main focus is to bring the theoretical resesarch on Static analysis in contact with the industrial ecosystem. This led to a vast number of publications and continues to bring contributions to the scientific community. [Recently](https://news.grammatech.com/grammatech-acquires-juliasoft), Julia has become part of [CodeSonar](https://www.grammatech.com/codesonar-cc), enabling a wider impact on the Static Analysis market.

I'm also part of the [Software and System Verification (SSV)](https://ssv.dais.unive.it/) group at Ca' Foscari University of Venice, mainly focusing on static analysis and its applications.

<span class="subsect">Interests:</span> Static Program Analysis, Program Verification, Abstract Interpretation.

## Short CV

I started studying computer science in high school, continuing with both Bechelor's and Master's degree at the University of Verona. I got in touch with JuliaSoft during my Master's thesis, and that was the place where I fell for Abstract Interpretation. I joined JuliaSoft as a developer of the Julia static analyzer in April 2018. 

I also joined the Ca' Foscari University of Venice as a PhD student in Computer Science in October 2019, focusing on Multi-language Static Analysis.

You can find my full CV [here](cv.pdf).

## Projects

{% assign pinned_prjs = site.pages | where: "project", true | where: "pinned", true %}
{% assign unpinned_prjs = site.pages | where: "project", true | where: "pinned", false %}
{% assign projectlist = pinned_prjs | concat: unpinned_prjs %}
{% if pinned_prjs.size > 4 %}
	{% assign limit = pinned_prjs.size %}
{% else %}
	{% assign limit = 4 %}
{% endif %}

<div class="project-box-wrapper">
{% for p in projectlist limit: limit %}
	<a href="{{ p.url }}" class="project-box">
		<i class="fas fa-laptop-code"></i> <span>{{ p.title }}</span><br/>
		<venue>{{ p.description }}</venue><br/>
		{% assign langs = p.languages | split: " " %}
		<small>
		{% for lang in langs %}
			<span class="language-dot {{ lang | downcase }}-dot"></span> {{ lang }}&nbsp;
		{% endfor %}
		</small><br/>
	</a>
{% endfor %}
</div>
<p/>


{% assign prj_count = pinned_prjs.size | plus: unpinned_prjs.size %}
[All projects ({{ prj_count }}) >>]({{ site.baseurl }}/projects/)

## Publications

<ul class="fa-ul">
{% for post in site.categories.publications limit: 2 %}
	<li>
		<span class="fa-li"><i class="fas fa-book-open"></i></span>
		{{ post.authors }}. <a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic> <topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small>{{ post.kind }} - {{ post.date | date: "%-d %B %Y" }} - {{ post.location }}</small><br/>
	</li>
{% endfor %}
</ul>

[All publications ({{ site.categories.publications.size }}) >>]({{ site.baseurl }}/publications/)

## Talks

<ul class="fa-ul">
{% for post in site.categories.talks limit: 2 %}
	<li>
		<span class="fa-li"><i class="fas fa-calendar-alt"></i></span>
		<a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic> <topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small>{{ post.kind }} - {{ post.date | date: "%-d %B %Y" }} - {{ post.location }}</small><br/>
	</li>
{% endfor %}
</ul>


[All talks ({{ site.categories.talks.size }}) >>]({{ site.baseurl }}/talks/)

