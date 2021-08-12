---
layout: default
---

I am currently a Java and C# developer at [Corvallis](http://www.corvallis.it/), where we develop the Julia static analyzer. My work at Corvallis goes beyond the simple software development: I am also part of the Scientific LAB, whose main focus is to bring the theoretical resesarch on Static analysis in contact with the industrial ecosystem. This led to a vast number of publications and continues to bring contributions to the scientific community.

[Recently](https://news.grammatech.com/grammatech-acquires-juliasoft), Julia has become part of [CodeSonar](https://www.grammatech.com/codesonar-cc), enabling a wider impact on the Static Analysis market.

## <a name="cv"></a>SHORT CV

I started studying computer science in high school, continuing with both Bechelor's and Master's degree at the University of Verona. I got in touch with JuliaSoft during my Master's thesis, and that was the place where I fell for Abstract Interpretation. I joined JuliaSoft as a developer of the Julia static analyzer in April 2018. 

I also joined the Ca' Foscari University of Venice as a PhD student in Computer Science in October 2019, focusing on Multi-language Static Analysis.

You can find my full CV [here](cv.pdf).

## <a name="projects"></a>PROJECTS

### LiSA

As part of my PhD research project, I started the development of LiSA, together with the [Software and System Verification group](https://ssv.dais.unive.it/) @ Ca’ Foscari University of Venice, Italy. LiSA (Library for Static Analysis) eases the creation and implementation of static analyzers based on the Abstract Interpretation theory. LiSA provides an analysis engine that works on a generic and extensible control flow graph representation of the program to analyze. Abstract interpreters in LiSA are built for analyzing such representation, providing a unique analysis infrastructure for all the analyzers that will rely on it. 

Building an analyzer upon LiSA boils down to writing a parser for the language that one aims to analyze, translating the source code or the compiled code towardsthe control flow graph representation of LiSA. Then, simple checks iterating over the results provided by the semantic analyses of LiSA can be easily defined to translate semantic information into warnings that can be of value for the final user. 

LiSA is distributed under the MIT license, and is available on [GitHub](https://github.com/UniVE-SSV/lisa).

### Tarsis

Tarsis is a new abstract domain for string values based on finite state automata. Standard finite state automata abstract domain has been shown to provide precise abstractions of string values when all the components of such strings are known, but with high computational cost. Instead of considering standard finite automata built over an alphabet of single characters, Tarsis considers automata that are built over an alphabet of strings, comprising a special value to represent statically unknown strings. Tarsis is maintained by the [Software and System Verification group](https://ssv.dais.unive.it/) @ Ca’ Foscari University of Venice, Italy, and it is available on [GitHub](https://github.com/UniVE-SSV/tarsis).

## <a name="publications"></a>PUBLICATIONS

<table>
  <tr>
	<td><b>2021</b></td>
	<td></td>
  </tr>
  <tr>
    <td valign="top"><b><a href="https://dl.acm.org/doi/10.1145/3460946.3464316">FNAC21</a></b></td>
    <td>P. Ferrara, L. Negrini, V. Arceri, A. Cortesi, <i>Static analysis for dummies: experiencing LiSA</i>, in Proceedings of the 10th ACM SIGPLAN International Workshop on the State Of the Art in Program Analysis.<br>SOAP 2021, Online, June 22-23, 2021</td>
  </tr>
  <tr>
    <td valign="top"><b><a href="https://link.springer.com/chapter/10.1007/978-3-030-67067-2_13">NAFC21</a></b></td>
    <td>L. Negrini, V. Arceri, P. Ferrara, A. Cortesi, <i>Twinning Automata and Regular Expressions for String Static Analysis</i>, in Proceedings of the 22nd International Conference on Verification, Model Checking, and Abstract Interpretation.<br>VMCAI 2021, Online, January 17-22, 2021</td>
  </tr>
  <tr>
	<td><b>2020</b></td>
	<td></td>
  </tr>
  <tr>
    <td valign="top"><b><a href="https://link.springer.com/chapter/10.1007/978-3-030-63618-0_1">FN20</a></b></td>
    <td>P. Ferrara, L. Negrini, <i>SARL: OO Framework Specification for Static Analysis</i>, in Software verification. Springer, Cham, 2020. PP. 3-20.<br>VSTTE 2020, Virtual conference, July 20-21, 2020</td>
  </tr>
  <tr>
	<td><b>2018</b></td>
	<td></td>
  </tr>
  <tr>
    <td valign="top"><b><a href="https://staticanalysis.org/tapas2018/abstracts/TAPAS_2018_Negrini_Ferrara.pdf">NF18</a></b></td>
    <td>L. Negrini, P. Ferrara, <i>SARL: Framework Modeling for Static Analysis</i>, in Proceedings of the 9th Workshop on Tools for Automatic Program Analysis (TAPAS2018).<br>
	TAPAS 2018, Freiburg im Breisgau, Germany, August 28, 2018</td>
  </tr>
</table>

## <a name="talks"></a>TALKS

<table>
  <tr>
	<td><b>2021</b></td>
	<td></td>
  </tr>
  <tr>
    <td>January 18</td>
    <td>Twinning Automata and Regular Expressions for String Static Analysis, VMCAI 2021, Virtual conference</td>
  </tr>
  <tr>
	<td><b>2020</b></td>
	<td></td>
  </tr>
  <tr>
    <td>July 20</td>
    <td>SARL: OO Framework Specification for Static Analysis, VSTTE 2020, Virtual conference</td>
  </tr>
  <tr>
	<td><b>2018</b></td>
	<td></td>
  </tr>
  <tr>
    <td>August 28</td>
    <td>SARL: Framework Modeling for Static Analysis, TAPAS 2018, Freiburg im Breisgau, Germany</td>
  </tr>
</table>

## <a name="myself"></a>ABOUT MYSELF

### Volleyball

I started playing volleyball when I was 14, and it is one of the best choices that I made in my entire life. 

### Music

I used to be a self-taught guitar player. I really enjoyed playing acoustic songs, and I hope to get back to that sooner or later.

### Astrophysics and Astronomy

This is my newest interest, born mostly from growing curiosity after watching tons of youtube videos. I just can't get enough of reading and watching stuff!
