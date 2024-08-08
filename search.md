---
layout: secondary
---

<h2 id="lunrsearchheader"></h2>

<div>
	<ul class="fa-ul" id="lunrsearchresults"></ul>
</div>

<script src="/js/lunr.js"></script>
<script>
var documents = [];

{%- assign counter = 0 -%}
{%- assign projects = site.pages | where: "project", true -%}
{%- for page in projects -%}
	{%- if page.url contains '.xml' or page.url contains 'assets' -%}{%- else -%}
documents.push({
	"id": {{ counter }},
	"url": "{{ page.url }}",
	"title": "{{ page.title }}",
	"tags": "",
	"kind": "project",
	"body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"
	}); 
	{%- assign counter = counter | plus: 1 -%}
	{%- endif -%}
{%- endfor -%};

{%- for page in site.categories.publications -%}
	{%- if page.url contains '.xml' or page.url contains 'assets' -%}{%- else -%}
documents.push({
	"id": {{ counter }},
	"url": "{{ page.url }}",
	"title": "{{ page.title }}",
	"tags": "{{ page.tags | join: " " }}",
	"kind": "publication",
	"body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"
	}); 
	{%- assign counter = counter | plus: 1 -%}
	{%- endif -%}
{%- endfor -%};

{%- for page in site.categories.talks -%}
	{%- if page.url contains '.xml' or page.url contains 'assets' -%}{%- else -%}
documents.push({
	"id": {{ counter }},
	"url": "{{ page.url }}",
	"title": "{{ page.title }}",
	"tags": "{{ page.tags | join: " " }}",
	"kind": "talk",
	"body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '"', ' ' }}"
	}); 
	{%- assign counter = counter | plus: 1 -%}
	{%- endif -%}
{%- endfor -%};

lunr.QueryLexer.termSeparator = /\s+/
lunr.tokenizer.separator = /\s+/
var customPipeline = function (builder) {
	var pipelineFunction = function (token) {
		console.log(token);
		if (!token.toString().includes('-'))
			return token;

		var tokens = token.toString().split('-').map(function (s) {
			return token.clone(function () { return s });
		});

		tokens.push(token.clone(function (s) {
			return s.replace('-', '');
		}));

		tokens.push(token);

		return tokens;
	};
	lunr.Pipeline.registerFunction(pipelineFunction, 'customPipeline');
	builder.pipeline.before(lunr.stemmer, pipelineFunction);
	builder.searchPipeline.before(lunr.stemmer, pipelineFunction);
};

var idx = lunr(function () {
	this.use(customPipeline);

	this.ref('id')
	this.field('title')
	this.field('body')
	this.field('tags')

	documents.forEach(function (doc) {
		this.add(doc)
	}, this)
});

function lunr_search(term) {
	document.getElementById('lunrsearchheader').innerHTML = "Search results"
	document.getElementById('lunrsearchresults').innerHTML = '';
	if (term) {
		var results = idx.search(term);
		document.getElementById('lunrsearchheader').innerHTML = "Search results for '" + term + "' (" + results.length + ")";
		if (results.length > 0) {
			for (var i = 0; i < results.length; i++) {
				var ref = results[i]['ref'];
				var doc = documents[ref];
				var url = doc['url'];
				var title = doc['title'];
				var body = doc['body'].substring(0,160) + '...';
				var icon;
				switch (doc['kind']) {
					case "project":
						icon = "fas fa-laptop-code"
						break;
					case "publication":
						icon = "fas fa-book-open"
						break;
					default:
						// case "talk":
						icon = "fas fa-calendar-alt"
						break;
				} 
				
				var element = "<li class='lunrsearchresult'><span class=\"fa-li\"><i class=\"" + icon + "\"></i></span>"
					+ "<a href='" + url + "'><span class='title'>" + title + "</span></a><br/>";
				
				if (doc['tags'] != "") {
					tags = doc['tags'].split(" ").join("</topic>&nbsp;&nbsp;<topic>");
					element = element + "<topic>" + tags + "</topic><br/>"
				}
				
				var element = element + "<span class='body'>"+ body +"</span></li>";
				document.getElementById('lunrsearchresults').innerHTML = document.getElementById('lunrsearchresults').innerHTML + element;
			}
		} else {
			document.querySelectorAll('#lunrsearchresults').innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
		}
	} else {
		document.getElementById('lunrsearchheader').innerHTML = "Nothing has been searched :(";
	}
	return false;
}

const urlParams = new URLSearchParams(window.location.search);
const term = urlParams.get('term');
lunr_search(term);
</script>
