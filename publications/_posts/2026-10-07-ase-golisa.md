---
layout: publication
kind: "Conference paper"
title: "GoLiSA: An Advanced Static Analysis Tool for Detecting Potential Risks and Vulnerabilities in Hyperledger Fabric Smart Contracts"
tags:
  - blockchain
  - static-analysis
  - abstract-interpretation
venue: "ASE '26: Proceedings of the 41st IEEE/ACM International Conference on Automated Software Engineering"
location: "Munich, Germany"
when: "October 12-16, 2026"
pubdate: "2026/10/7"
authors:
  - Luca Olivieri
  - Luca Negrini
  - Vincenzo Arceri
  - Pietro Ferrara
  - Fausto Spoto
  - Agostino Cortesi
projects: lisa
manuscript: "ASE26.pdf"
confpage: "https://conf.researchr.org/details/ase-2026/ase-2026-tools-and-data-sets/52/GoLiSA-An-Advanced-Static-Analysis-Tool-for-Detecting-Potential-Risks-and-Vulnerabil"
publishername: "ACM"
publisherpage: "https://dl.acm.org/doi/10.1145/3832783.3834644"
---

### Abstract

GoLiSA is a static analysis tool that allows the verification of smart contracts written in Go, the most widely used language for developing smart contracts in Hyperledger Fabric. GoLiSA relies on abstract interpretation to model program semantics and identify potential risks and vulnerabilities in smart contracts. It supports advanced analyses such as information flow tracking and numerical and string value analysis, enabling the approximation of semantic program behaviors. Building on these analyses, GoLiSA implements a suite of checks for detecting non-trivial issues and potential risks in Hyperledger Fabric, including non-determinism, phantom reads, untrusted cross-contract invocations, read-after-write and over-write issues, cross-channel invocation risks, numerical issues, and unhandled errors.

GoLiSA is publicly available at https://github.com/lisa-analyzer/go-lisa. A demonstration video showcasing the tool is available at https://youtu.be/WqkYOpWc9oE.
