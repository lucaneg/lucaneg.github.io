---
layout: publication
kind: "Conference paper"
title: "A Modular Framework for Stack-Heap and Value Abstractions"
tags:
  - static-analysis
  - abstract-interpretation
  - memory-abstraction
venue: "33rd Static Analysis Symposium (SAS 2026)"
location: "Oakland, CA, USA"
when: "October 6-8, 2026"
pubdate: "2026/10/7"
authors:
  - Giacomo Boldini
  - Luca Negrini
  - Luca Olivieri
  - Pietro Ferrara
projects: lisa
manuscript: "SAS2026.pdf"
confpage: "https://conf.researchr.org/details/splash-issta-2026/sas-2026-papers/11/A-Modular-Framework-for-Stack-Heap-and-Value-Abstractions"
publishername: "Springer"
publisherpage: "https://link.springer.com/chapter/10.1007/978-3-032-40374-2_6"
---

### Abstract

Advanced static program analysis requires reasoning on the semantics of non-trivial program behaviors (e.g., pointers and complex data structures such as lists and sets, functions, and objects) and how they affect the memory. In most programming languages, static and dynamic allocations are typically managed by the stack and the heap, respectively. However, how allocations behave and how the memory is managed at runtime can vary significantly depending on the programming language being analyzed. Proper handling of these aspects is essential, as an accurate memory model enables the detection of critical issues such as buffer overflows and underflows, use-after-free errors, and null pointer exceptions prior to execution, that is, before such erroneous behaviors occur.

In this paper, we propose and formalize a generic memory framework to handle stack and heap memory during the analysis, that is able to support various behaviors from different programming languages (e.g., C, , Java, and Python), while remaining parametric, allowing different memory and value analyses to be independently chosen and combined. It relies on the Abstract Interpretation theory and enables sound approximation of different memory models and program behaviors. We introduce a split state abstraction that separates value and memory analyses into two modular abstract domains. These domains interact through a set of memory identifiers, along with a set of operations defined by the domains to manipulate them, allowing the framework to capture both value information and structural memory relationships.
