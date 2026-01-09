---
layout: publication
kind: "Conference paper"
title: "Don’t Panic: Error Handling Patterns in Go Smart Contracts and Blockchain Software"
tags:
  - blockchain
  - error-handling
  - static-analysis
venue: "2025 7th Conference on Blockchain Research & Applications for Innovative Networks and Services (BRAINS 2025)"
location: "Zurich, Switzerland"
when: "November 18-21, 2025"
pubdate: "2025/12/24"
authors:
  - Luca Olivieri
  - Luca Negrini
manuscript: "BRAINS25.pdf"
confpage: "https://brains.dnac.org/2025/"
publishername: "IEEE Xplore"
publisherpage: "https://ieeexplore.ieee.org/document/11302935"
---

### Abstract

Issues in error handling may have critical consequences in blockchain software, ranging from silent execution with invalid states to denial of services due to unexpected crashes. This paper discusses the pitfalls of errors handling within blockchain frameworks written in Go such as Hyperledger Fabric, Tendermint Core (including its derivatives, e.g. CometBFT, Ignite), and other frameworks (e.g. Cosmos SDK), as well as the Ethereum implementation. Then, it explores how a static analysis approach can be applied for the automatic detection of such of issues, allowing to fix buggy code before deployment, i.e., when the code becomes difficult to patch being blockchain a trustless, distributed, and decentralized environment. Finally, we evaluate our analysis implementation within GoLiSA on a set of existing smart contracts and blockchain applications, empirically demonstrating the feasibility of the proposed approach.
