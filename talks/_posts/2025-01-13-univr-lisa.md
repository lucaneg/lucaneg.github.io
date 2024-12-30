---
layout: talk
kind: Seminar
title: "Practical Abstract Interpretation with LiSA"
tags:
  - tutorial
  - static-analysis
  - abstract-interpretation
venue: "Università degli Studi di Verona"
location: "Verona, Italy"
when: "January 13, 2024, 9:30 AM - 12:30 PM CET"
confpage: "https://www.univr.it/en/seminars/-/evento/6485?p_auth=ZBNhgDT1
projects: lisa
---

### Abstract

The development of a fully semantic static analyzer based on the Abstract Interpretation theory requires theoretical knowledge, development skills, and quite a lot of time. Usually, such analyzers require the development of a parser, and several standard components for the analysis (such as fixpoint computations, standard abstraction of values and heap structures, etc..). Unfortunately, the current industrial trend is to develop and adopt syntactic analyzers (that are usually quite imprecise and unsound) instead of adopting more semantics approaches (usually more precise and sound[y]). LiSA (LIbrary for Static Analysis, https://github.com/lisa-analyzer) aims to ease the creation and implementation of those static analyzers by providing the implementations of the main analysis components. In this seminar, we will explain how one can use such a library to implement some standard value abstractions, and property checkers, and to extend it to other programming languages.

Work partially supported by SERICS (PE00000014) project funded by PNRR NextGeneration EU.
