---
layout: project
project: true
pinned: true
languages: Java
title: "Tarsis"
description: "Implementation of the Tarsis abstract domain"
---

Tarsis is a new abstract domain for string values based on finite state automata. Standard finite state automata abstract domain has been shown to provide precise abstractions of string values when all the components of such strings are known, but with high computational cost. Instead of considering standard finite automata built over an alphabet of single characters, Tarsis considers automata that are built over an alphabet of strings, comprising a special value to represent statically unknown strings. Tarsis is maintained by the [Software and System Verification group](https://ssv.dais.unive.it/) @ Ca’ Foscari University of Venice, Italy, and it is available on [GitHub](https://github.com/UniVE-SSV/tarsis).

### Related content

[Paper @ VMCAI 2021]({% link publications/_posts/2021-01-18-vmcai-tarsis.md %}) • [Talk @ VMCAI 2021]({% link talks/_posts/2021-01-18-vmcai-tarsis.md %})

### External links

[GitHub repository](https://github.com/UniVE-SSV/tarsis)