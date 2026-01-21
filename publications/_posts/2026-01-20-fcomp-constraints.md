---
layout: publication
kind: "Journal paper"
title: "Whole-value analysis by abstract interpretation"
tags:
  - static-analysis
  - abstract-interpretation
  - products
  - value-analysis
venue: "Frontiers in Computer Science"
when: "January 20, 2026"
pubdate: "2026/01/20"
authors:
  - Luca Negrini
projects: lisa
manuscript: "FCOMP26.pdf"
publishername: "Frontiers"
publisherpage: "https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1655377/full"
---

### Abstract

Value analysis is the task of understanding what concrete values a program might compute for each variable or memory region. Historically, research focused mostly on numerical analysis (i.e., value analysis of programs manipulating numeric values), while string analyses have received wider attention in the last two decades. String analyses present a key challenge: reasoning about strings entails reasoning about integer values either used as arguments to string operations (e.g., evaluating a substring) or returned by string operations (e.g., calculating the length of a string). Traditionally, string analyses were formalized with respect to a specific numeric analysis, usually considering constant values or their possible ranges, tailoring definitions, semantic proofs, and implementations to that particular combination, hence hindering the adoption of the analyses in different contexts. This study presents a modular framework to define whole-value analyses (that is, combinations of numeric analyses, string analyses, and possibly other value types computed by a program) by Abstract Interpretation. The framework defines information exchange between the different analyses in the form of abstract constraints, allowing each analysis to perform given only a generic and analysis-independent description of the abstract values computed by other analyses. Adopting such a framework (i) ensures that soundness proofs are still valid when changing the combination of domains used, and (ii) eases implementation and experimentation of different combinations of value analyses, simplifying comparisons between different scientific contributions and augmenting the set of domains an abstract interpreter can use to analyze a program.
