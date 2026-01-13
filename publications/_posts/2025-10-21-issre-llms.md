---
layout: publication
kind: "Conference paper"
title: "Code Generation of Smart Contracts with LLMs: A Case Study on Hyperledger Fabric"
tags:
  - llms
  - blockchain
  - static-analysis
  - abstract-interpretation
venue: "2025 IEEE 36th International Symposium on Software Reliability Engineering (ISSRE 2025)"
location: "São Paulo, Brazil"
when: "October 21-24, 2025"
pubdate: "2025/11/13"
authors:
  - Luca Olivieri
  - David Beste
  - Luca Negrini
  - Lea Schönherr
  - Antonio Emanuele Cinà
  - Pietro Ferrara
manuscript: "ISSRE25.pdf"
projects: lisa
confpage: "https://issre.github.io/2025/index.html"
publishername: "IEEE Xplore"
publisherpage: "https://ieeexplore.ieee.org/document/11229563/"
---

### Abstract

Hyperledger Fabric (HF) is currently the one that made blockchain and smart contracts accessible to industries, providing highly customizable solutions for many enterprise use cases. Despite this, programmers are often discouraged from implementing smart contracts due to the high learning curve and security risks of naive smart contract implementations. At the same time, the advent of Large Language Models (LLMs) for code generation led to new possible scenarios such as creating new smart contract applications starting from natural language, allowing to reduce costs and development times. This paper investigates the maturity of LLMs for the code generation of HF smart contracts. In particular, we (i) generate smart contracts written in Go for HF starting from natural language descriptions, (ii) select state-of-the-art static analyzers of Go program, and (iii) perform a quality and security assessment of the generated smart contracts. Our empirical results show current LLMs do not produce high-quality smart contracts, and a relevant effort to debug and patch contracts containing bugs and possible vulnerabilities.
