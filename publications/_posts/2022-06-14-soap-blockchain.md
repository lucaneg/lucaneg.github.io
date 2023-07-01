---
layout: publication
kind: "Workshop paper"
title: "Ensuring Determinism in Blockchain Software with GoLiSA: An Industrial Experience Report"
tags: blockchain static-analysis abstract-interpretation
venue: "Proceedings of the 11th ACM SIGPLAN International Workshop on the State Of the Art in Program Analysis (SOAP 2022)"
location: "San Diego, CA, USA & online"
when: "June 14, 2022"
authors: "L. Olivieri, F. Tagliaferro, V. Arceri, M. Ruaro, L. Negrini, A. Cortesi, P. Ferrara, F. Spoto, E. Tallin"
manuscript: "yes"
---

### Abstract

Ensuring determinism is mandatory when writing blockchain software. When determinism is not met it can lead to serious implications in the blockchain network while compromising the software development, release, and patching processes. In the industrial context, it is widespread to adopt general-purpose languages, such as Go, for developing blockchain solutions. However, it is not surprising that non-deterministic behaviors may arise, being these programming languages not originally designed for blockchain purposes. In this paper, we present an experience report on ensuring determinism in blockchain software with GoLiSA, a static analyzer based on abstract interpretation for Go applications, in an industrial context. In particular, we ran GoLiSA on Commercio.network, a blockchain-based solution for exchanging electronic documents in a legally binding way. Thanks to GoLiSA, non-trivial bugs got detected and the analysis performed made it possible to identify the critical points where to apply the fixes.

<div class="divtable"> 
  <table>
    <thead>
      <tr>
        <th>Related content</th>
        <th>External links</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="{{ site.baseurl }}/manuscripts/SOAP22.pdf"><i class="fas fa-file-pdf"></i> Manuscript</a></td>
        <td><a href="https://pldi22.sigplan.org/details/SOAP-2022-papers/4/Ensuring-Determinism-in-Blockchain-Software-with-GoLiSA-An-Industrial-Experience-Rep">Conference page</a></td>
      </tr>
      <tr>
        <td><a href="{% link projects/lisa.md %}">The LiSA project</a></td>
        <td><a href="https://dl.acm.org/doi/10.1145/3520313.3534658">ACM link</a></td>
      </tr>
    </tbody>
  </table>
 </div>

#### Cite as

```
@inproceedings{10.1145/3520313.3534658,
  author = {Olivieri, Luca and Tagliaferro, Fabio and Arceri, Vincenzo and Ruaro, Marco and Negrini, Luca and Cortesi, Agostino and Ferrara, Pietro and Spoto, Fausto and Talin, Enrico},
  title = {Ensuring Determinism in Blockchain Software with GoLiSA: An Industrial Experience Report},
  year = {2022},
  isbn = {9781450392747},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3520313.3534658},
  doi = {10.1145/3520313.3534658},
  abstract = {Ensuring determinism is mandatory when writing blockchain software. When determinism is not met it can lead to serious implications in the blockchain network while compromising the software development, release, and patching processes. In the industrial context, it is widespread to adopt general-purpose languages, such as Go, for developing blockchain solutions. However, it is not surprising that non-deterministic behaviors may arise, being these programming languages not originally designed for blockchain purposes. In this paper, we present an experience report on ensuring determinism in blockchain software with GoLiSA, a static analyzer based on abstract interpretation for Go applications, in an industrial context. In particular, we ran GoLiSA on Commercio.network, a blockchain-based solution for exchanging electronic documents in a legally binding way. Thanks to GoLiSA, non-trivial bugs got detected and the analysis performed made it possible to identify the critical points where to apply the fixes.},
  booktitle = {Proceedings of the 11th ACM SIGPLAN International Workshop on the State Of the Art in Program Analysis},
  pages = {23–29},
  numpages = {7},
  keywords = {Static Analysis, Software testing, Go language, Non-determinism, Blockchain, Cosmos SDK},
  location = {San Diego, CA, USA},
  series = {SOAP 2022}
}
```