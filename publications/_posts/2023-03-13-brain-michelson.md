---
layout: publication
kind: "Workshop paper"
title: "MichelsonLiSA: A Static Analyzer for Tezos"
tags: blockchain static-analysis abstract-interpretation 
venue: "023 IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events (PerCom Workshops) (BRAIN 2023)"
location: "Atlanta, GA, USA"
when: "March 13, 2023"
authors: "L. Olivieri, T. Jensen, L. Negrini, F. Spoto"
---

### Abstract

Smart contracts are immutable code deployed in a blockchain, whose execution modifies its global state. Code im-mutability leads to immutable bugs. To prevent such bugs, static program analysis infers information about the behavior of the code, statically, before code execution and deployment. This paper introduces MichelsonLiSA, a static analyzer based on abstract interpretation for the verification of smart contracts written in the Michelson low-level language of the Tezos blockchain. It applies MichelsonLiSA to the identification of security issues arising from cross-contract invocations.

#### Related content

[Project]({% link projects/lisa.md %})

#### External links
[Conference page](https://sites.google.com/view/brain-2023/workshop-program) • [IEEE link](https://ieeexplore.ieee.org/abstract/document/10150247)

#### Cite as

```
@inproceedings{10150247,
  author={Olivieri, Luca and Jensen, Thomas and Negrini, Luca and Spoto, Fausto},
  booktitle={2023 IEEE International Conference on Pervasive Computing and Communications Workshops and other Affiliated Events (PerCom Workshops)}, 
  title={MichelsonLiSA: A Static Analyzer for Tezos}, 
  year={2023},
  volume={},
  number={},
  pages={80-85},
  doi={10.1109/PerComWorkshops56833.2023.10150247}
}
```
