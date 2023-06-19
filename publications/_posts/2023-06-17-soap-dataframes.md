---
layout: publication
kind: "Workshop paper"
title: "Static Analysis of Data Transformations in Jupyter Notebooks"
tags: data-science static-analysis abstract-interpretation jupyter-notebooks
venue: "Proceedings of the 12th ACM SIGPLAN International Workshop on the State Of the Art in Program Analysis (SOAP 2023)"
location: "Orlando, FL, USA & online"
when: "June 17, 2023"
authors: "L. Negrini, G. Shabadi, C. Urban"
---

## Abstract

Jupyter notebooks used to pre-process and polish raw data for data science and machine learning processes are challenging to analyze. Their data-centric code manipulates dataframes through call to library functions with complex semantics, and the properties to track over it vary widely depending on the verification task. This paper presents a novel abstract domain that simplifies writing analyses for such programs, by extracting a unique CFG from the notebook that contains all transformations applied to the data. Several properties can then be determined by analyzing such CFG, that is simpler than the original Python code. We present a first use case that exploits our analysis to infer the required shape of the dataframes manipulated by the notebook.

### Related content

[Talk @ SOAP 2023]({% link talks/_posts/2023-06-17-soap-dataframes.md %}) • [Project]({% link projects/lisa.md %})

### External links
[Conference page](https://pldi23.sigplan.org/details/SOAP-2023-papers/1/Static-Analysis-of-Data-Transformations-in-Jupyter-Notebooks) • [ACM link](https://dl.acm.org/doi/10.1145/3589250.3596145)

### Cite as

```
@inproceedings{10.1145/3589250.3596145,
author = {Negrini, Luca and Shabadi, Guruprerana and Urban, Caterina},
title = {Static Analysis of Data Transformations in Jupyter Notebooks},
year = {2023},
isbn = {9798400701702},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3589250.3596145},
doi = {10.1145/3589250.3596145},
abstract = {Jupyter notebooks used to pre-process and polish raw data for data science and machine learning processes are challenging to analyze. Their data-centric code manipulates dataframes through call to library functions with complex semantics, and the properties to track over it vary widely depending on the verification task. This paper presents a novel abstract domain that simplifies writing analyses for such programs, by extracting a unique CFG from the notebook that contains all transformations applied to the data. Several properties can then be determined by analyzing such CFG, that is simpler than the original Python code. We present a first use case that exploits our analysis to infer the required shape of the dataframes manipulated by the notebook.},
booktitle = {Proceedings of the 12th ACM SIGPLAN International Workshop on the State Of the Art in Program Analysis},
pages = {8–13},
numpages = {6},
keywords = {Jupyter Notebooks, Data Science, Abstract Interpretation, Static Analysis},
location = {Orlando, FL, USA},
series = {SOAP 2023}
}
```
