---
layout: publication
kind: "Workshop paper"
title: "Sound Static Analysis for Microservices: Utopia? A preliminary experience with LiSA"
tags: static-analysis abstract-interpretation microservices
venue: "Formal Techniques for Java-like Programs (FTfJP 2024)"
location: "Wien, Austria"
when: "September 16, 2024"
authors: "G. Zanatta, P. Ferrara, T. Lisovenko, L. Negrini, G. Caiazza, R. White"
projects: lisa
manuscript: "FTFJP24-1.pdf"
confpage: "https://conf.researchr.org/details/issta-ecoop-2024/FTfJP-2024-papers/7/Sound-Static-Analysis-for-Microservices-Utopia-A-preliminary-experience-with-LiSA"
publishername: "ACM"
publisherpage: "https://dl.acm.org/doi/10.1145/3678721.3686229"
---

### Abstract

Sound static analysis allows one to overapproximate all possible program executions to infer various properties. However, it requires quite some effort to formalize and prove the soundness of program semantics. Most software applications developed nowadays are distributed systems in which different \[micro\]services communicate through synchronous and asynchronous mechanisms. These applications are composed of programs developed in many programming languages and rely on many technologies. However, sound static analysis might be particularly promising in distributed architectures, where exhaustively (or even partially) testing such systems is often prohibitive. This paper presents our ongoing work on applying LiSA (Library for Static Analysis) to microservices. So far, our effort has focused on one programming language (Python), a few libraries (ROS2, pika, FastAPI, Django), and the architectural reconstruction of distributed applications. However, it already shows some promising results and general patterns that might be followed to develop such analyses.
