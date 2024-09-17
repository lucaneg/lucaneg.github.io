---
layout: talk
kind: Workshop presentation
title: "Stability: an Abstract Domain for the Trend of Variation of Numerical Variables"
tags: static-analysis abstract-interpretation numeric-abstractions
venue: "10th ACM SIGPLAN International Workshop on Numerical and Symbolic Abstract Domains (NSAD 2024)"
location: "Pasadena, California, United States"
when: "October 22, 2024, 3:00 PM - 3:30 PM PST"
relatedpub: "2024-10-22-nsad-stability.md"
relatedpubtitle: "Paper @ NSAD 2024"
confpage: "https://2024.splashcon.org/details/nsad-2024-papers/2/Stability-an-Abstract-Domain-for-the-Trend-of-Variation-of-Numerical-Variables"
---

### Abstract

State-of-the-art abstract domains for static analysis typically focus on over-approximating either the values a variable can hold at a specific program point or the relational dependencies among variables. In this paper, we aim to capture the trend of numerical values during program executions (e.g., increasing, decreasing, or stable) relative to preceding states. By integrating the Stability domain with numerical domains, we can verify covariance and contravariance relationships among potentially unrelated variables. This approach has promising applications for anomaly detection in complex software systems, and for the verification of functional requirements.
