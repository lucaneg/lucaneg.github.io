---
layout: publication
kind: "PhD Thesis"
title: "A Generic Framework for Multilanguage Analysis"
tags:
  - static-analysis
  - abstract-interpretation
  - multilanguage-analysis
  - string-analysis
  - data-science
  - jupyter-notebooks
  - blockchain
  - library-models
  - software-frameworks
  - teaching
venue: "Ca' Foscari University of Venice"
location: "Venice, Italy"
when: "January 23, 2023"
authors: "Luca Negrini"
projects:
  - lisa
  - tarsis
manuscript: "phd-thesis.pdf"
presentation: "phd-defence.pptx"
phdthesis: true
---

### Abstract

Modern software engineering revolves around distributed applications. From IoT networks to client-server infrastructures, the application code is increasingly being divided into separate sub-programs interacting with each other. As they are completely independent of each other, each such program is likely to be developed in a separate programming language, choosing the best fit for the task at hand.

From a static program analysis perspective, taking on a mixture of languages is challenging. Traditionally, analyzers targeted a single language, or a family of similar ones, to accurately tune the analysis to its (or theirs) features. In this context, a wholeprogram semantic analysis on software built through multiple languages can only be achieved by a combination of analyzers, setting up a communication scheme between the tools to consider inter-language interactions. As multiple analyses are required, that might also need to get iterated several times to exchange information, this setup does not permit static analysis to have an appreciable and meaningful impact in realworld scenarios.

This thesis defines a generic framework where modular multilanguage static analyses can be defined through the abstract interpretation theory. The framework has been implemented in LiSA (Library for Static Analysis), an open-source Java library that provides the complete infrastructure necessary for developing static analyzers. LiSA strives to be modular, ensuring that all components taking part in the analysis are both easy to develop and highly interchangeable. LiSA also ensures that components are parametric to all language-specific features: semantics, execution model and memory model are not directly encoded within the components themselves. LiSA analyzes CFGs where the set of possible nodes is not fixed: users of the library can define language-specific node instances with customized semantics, enabling different behaviors for the same construct depending on the programming language it was written with.

The framework has been instantiated to analyze smart contracts written in Go and data science notebooks written in Python. As nondeterminism is known to be troublesome for blockchain ecosystems, GoLiSA (an analyzer for Go based on LiSA) applies information flow analyses to detect when nondeterministic constructs can affect the blockchain state. Instead, PyLiSA (an analyzer for Python based on LiSA) provides an abstraction for software that deals with dataframes, constructing a graph tracking all the operations that the program performs over them, thus unifying all syntactic constructs performing the same operation. Further abstractions can be developed relying on such a graph to derive properties about the original program, such as data leakages or data provenance. A third proof-of-concept instantiation is also provided, demonstrating LiSA’s capability to analyze multiple languages in a single analysis through the discovery of an IoT vulnerability spanning C++ and Java code.

Two additional contributions are part of this thesis to provide a full analysis ecosystem: SARL and Tarsis. SARL is a domain-specific language that can be used to compactly model how frameworks and libraries interact with the analyzed application. Through SARL, one can produce concise specification files that an analyzer can exploit to automatically annotate a program, such that analysis components can use the presence (or absence) of specific annotations to agnostically react to the usage of a framework. Instead, Tarsis abstracts strings as regular languages, exploiting finite state automata operating on an alphabet of strings. Using such an alphabet shrinks the automata, resulting in a noticeable performance improvement w.r.t. existing automata-based abstractions.
