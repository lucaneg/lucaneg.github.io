---
layout: publication
kind: "Conference paper"
title: "SARL: OO Framework Specification for Static Analysis"
tags: library-models software-frameworks static-analysis
venue: "12th Working Conference on Verified Software: Theories, Tools, and Experiments (VSTTE 2020)"
location: "Online conference"
when: "July 20-21, 2020"
authors: "P. Ferrara, L. Negrini"
---

## Abstract

Semantic static analysis allows sound verification of program properties, that is, to prove that a given property holds for all possible executions. However, modern object-oriented applications make heavy use of third-party frameworks. These provide various functionalities (like libraries), as well as an extension of the execution model of the program. Applying standard models to statically analyze software relying on such frameworks could be potentially unsound and imprecise.

In this paper we introduce SARL, a domain-specific language which allows one to specify the runtime behaviors of frameworks of object-oriented programs. Such specifications can be then applied to automatically generate annotations on program components of the application to model the framework runtime environment. In addition, SARL specifications document which aspects of a framework are supported by the static analyzer and how. We adopted SARL to model WindowsForms and ASP.NET, two of the most popular .NET frameworks in an existing industrial static analyzer (Julia). We then analyzed the three most popular GitHub repositories using these frameworks, comparing the results with and without SARL. Our experimental results show that the application of SARL sensibly improved the precision and soundness of the analysis without affecting its runtime performances.

### Related content

[Talk @ VSTTE 2020]({% link talks/_posts/2020-07-20-vstte-sarl.md %})

### External links

[Conference page](https://sri-csl.github.io/VSTTE20/#program) • [Springer link](https://link.springer.com/chapter/10.1007/978-3-030-63618-0_1)

### Cite as

```
@InProceedings{10.1007/978-3-030-63618-0_1,
author="Ferrara, Pietro
and Negrini, Luca",
editor="Christakis, Maria
and Polikarpova, Nadia
and Duggirala, Parasara Sridhar
and Schrammel, Peter",
title="SARL: OO Framework Specification for Static Analysis",
booktitle="Software Verification",
year="2020",
publisher="Springer International Publishing",
address="Cham",
pages="3--20",
abstract="Semantic static analysis allows sound verification of program properties, that is, to prove that a given property holds for all possible executions. However, modern object-oriented applications make heavy use of third-party frameworks. These provide various functionalities (like libraries), as well as an extension of the execution model of the program. Applying standard models to statically analyze software relying on such frameworks could be potentially unsound and imprecise.",
isbn="978-3-030-63618-0"
}
```