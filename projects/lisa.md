---
layout: project
project: true
pinned: true
languages: Java
title: "LiSA"
description: "A modular easy to use Library for Static Analysis aiming at multi-language analysis"
---

As part of my PhD research project, I started the development of LiSA, together with the [Software and System Verification group](https://ssv.dais.unive.it/) @ Ca’ Foscari University of Venice, Italy. LiSA (Library for Static Analysis) eases the creation and implementation of static analyzers based on the Abstract Interpretation theory. LiSA provides an analysis engine that works on a generic and extensible control flow graph representation of the program to analyze. Abstract interpreters in LiSA are built for analyzing such representation, providing a unique analysis infrastructure for all the analyzers that will rely on it. 

Building an analyzer upon LiSA boils down to writing a parser for the language that one aims to analyze, translating the source code or the compiled code towardsthe control flow graph representation of LiSA. Then, simple checks iterating over the results provided by the semantic analyses of LiSA can be easily defined to translate semantic information into warnings that can be of value for the final user. 

LiSA is distributed under the MIT license.

### Related content

[Paper @ SOAP 2021]({% link publications/_posts/2021-06-22-soap-lisa.md %})

### External links

[GitHub repository](https://github.com/lisa-analyzer/lisa) • [Project website](https://lisa-analyzer.github.io/)
