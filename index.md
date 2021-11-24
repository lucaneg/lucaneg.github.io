---
layout: default
---

## Hi, I'm Luca!

I am currently a Java and C# developer at [Corvallis](http://www.corvallis.it/), where we develop the Julia static analyzer. My work at Corvallis goes beyond the simple software development: I am also part of the Scientific LAB, whose main focus is to bring the theoretical resesarch on Static analysis in contact with the industrial ecosystem. This led to a vast number of publications and continues to bring contributions to the scientific community.

[Recently](https://news.grammatech.com/grammatech-acquires-juliasoft), Julia has become part of [CodeSonar](https://www.grammatech.com/codesonar-cc), enabling a wider impact on the Static Analysis market.

## Short CV

I started studying computer science in high school, continuing with both Bechelor's and Master's degree at the University of Verona. I got in touch with JuliaSoft during my Master's thesis, and that was the place where I fell for Abstract Interpretation. I joined JuliaSoft as a developer of the Julia static analyzer in April 2018. 

I also joined the Ca' Foscari University of Venice as a PhD student in Computer Science in October 2019, focusing on Multi-language Static Analysis.

You can find my full CV [here](cv.pdf).

## Projects

### LiSA

As part of my PhD research project, I started the development of LiSA, together with the [Software and System Verification group](https://ssv.dais.unive.it/) @ Ca’ Foscari University of Venice, Italy. LiSA (Library for Static Analysis) eases the creation and implementation of static analyzers based on the Abstract Interpretation theory. LiSA provides an analysis engine that works on a generic and extensible control flow graph representation of the program to analyze. Abstract interpreters in LiSA are built for analyzing such representation, providing a unique analysis infrastructure for all the analyzers that will rely on it. 

Building an analyzer upon LiSA boils down to writing a parser for the language that one aims to analyze, translating the source code or the compiled code towardsthe control flow graph representation of LiSA. Then, simple checks iterating over the results provided by the semantic analyses of LiSA can be easily defined to translate semantic information into warnings that can be of value for the final user. 

LiSA is distributed under the MIT license, and is available on [GitHub](https://github.com/UniVE-SSV/lisa).

### Tarsis

Tarsis is a new abstract domain for string values based on finite state automata. Standard finite state automata abstract domain has been shown to provide precise abstractions of string values when all the components of such strings are known, but with high computational cost. Instead of considering standard finite automata built over an alphabet of single characters, Tarsis considers automata that are built over an alphabet of strings, comprising a special value to represent statically unknown strings. Tarsis is maintained by the [Software and System Verification group](https://ssv.dais.unive.it/) @ Ca’ Foscari University of Venice, Italy, and it is available on [GitHub](https://github.com/UniVE-SSV/tarsis).

## Publications

{% for category in site.categories %}
	{% if category[0] == "publications" %}
<ul class="fa-ul">
	{% for post in category[1] limit: 2 %}
	<li>
		<span class="fa-li"><i class="fas fa-book-open"></i></span>
		{{ post.authors }}. <a href="{{ post.url }}">{{ post.title }}</a><br/>
		<topic>{{ post.tags | join: "</topic> <topic>" }}</topic><br/>
		<venue>{{ post.venue }}</venue><br/>
		<small>{{ post.kind }} - {{ post.date | date: "%-d %B %Y" }} - {{ post.location }}</small><br/>
	</li>
	{% endfor %}
</ul>
	{% endif %}
{% endfor %}


[More publications >>]({{ site.baseurl }}/publications/)

## Talks

{% for category in site.categories %}
	{% if category[0] == "talks" %}
<ul class="fa-ul">
	{% for post in category[1] limit: 2 %}
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


[More talks >>]({{ site.baseurl }}/talks/)
