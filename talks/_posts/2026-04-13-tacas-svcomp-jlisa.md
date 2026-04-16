---
layout: talk
kind: Conference presentation
title: "JLiSA: the Java Frontend of LiSA"
tags:
  - sv-comp
  - static-analysis
  - abstract-interpretation
venue: "32nd International Conference on Tools and Algorithms for the Construction and Analysis of Systems (TACAS 2026)"
location: "Turin, Italy"
when: "April 13, 2026, 17:00 AM - 17:05 PM CET"
confpage: "https://etaps.org/2026/programme/programme-monday/"
projects: lisa
presentation: "TACAS26.pdf"
relatedpub: "2026-04-13-tacas-svcomp-jlisa.md"
relatedpubtitle: "Paper @ TACAS 2026"
---

### Abstract

JLiSA is the extension to the Java programming language of LiSA, an analysis engine that works on a generic and extensible control flow graph representation of the program to analyze. LiSA implements several standard abstract domains and analyses aimed at approximating numerical values, strings, and heap structures. At the end of the analy- sis, it produces an abstract state for each program point. Then, checkers produce warnings indicating whether a property of interest is respected. JLiSA provides a front-end to translate Java programs into the internal LiSA control flow graph representation, the semantics of various parts of the Java standard library, and checkers to verify assertions and de- tect whether exceptions might be thrown and not caught. This paper presents our first participation in SV-COMP in the Java category, where we achieved 3rd place.
