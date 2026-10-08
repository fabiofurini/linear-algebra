---
title: "Products"
---

# Products

<div class="info-capitolo" markdown>

**Sums and products · Chapter 2** · lecture notes by Fabio Furini · [:material-file-pdf-box: Chapter PDF](../pdf/sums-products-02-products.pdf)

</div>

## 1. Definition

<a id="box-def_product-1"></a>

!!! definizione "Definition 1: product"

    Given  $n$ values $a_j \in \R$ with $j \in \{1,2,\dots,n\}$, the <strong>product</strong>

    $$
    a_1 \; a_2 \; {\rm \dots} \; a_n
    $$

    can be indicated in compact form with the product symbol:

    $$
    \prod_{j=1}^n a_j
    $$

    which reads: “product for $j$ from $1$ to $n$ of $a_j$”. The symbol $j$ is called <strong>product index</strong>.

- The product symbol is therefore very useful when the terms $a_j$ are explicitly defined as a function of the product index $j$.

<a id="box-ex_products-2"></a>

!!! esempio "Example 1: products"

    \begin{align*}
    \prod_{j=1}^{10} \frac{1}{j} &~~=~~ 1 \; \frac{1}{2} \; \frac{1}{3} \; \frac{1}{4} \; \frac{1}{5} \; \frac{1}{6} \; \frac{1}{7} \; \frac{1}{8} \; \frac{1}{9} \; \frac{1}{10} \\[2ex]
     \prod_{j=3}^{n} j^2 &~~=~~ 3^2 \; 4^2 \; 5^2 \; {\rm \dots} \; n^2
    \end{align*}

## 2. Properties

<a id="box-obs_prod-constant-term-3"></a>

!!! teorema "Observation 1: product with constant term"

    For every natural number $n\ge 1$ and real number $c$, we have:

    \begin{equation}
    \label{P2}
    \prod_{j=1}^n c  = c^n
    \end{equation}

??? dimostrazione "Proof"

    We have:

    $$
    \underbrace{c\:  \; c  \; {\rm \dots} \; c\:}_{=\prod_{j=1}^n c, {\rm ~~~} c {\rm ~multiplied~} n {\rm ~times}} =  c^n
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-obs_prod-product-constant-4"></a>

!!! teorema "Observation 2: product by a constant"

    For every  product $\prod_{j=1}^n a_j$ and real number $c$, we have:

    \begin{equation}
    \label{P1}
    \prod_{j=1}^n (c \; a_j) = c^n \: \prod_{j=1}^n a_j
    \end{equation}

??? dimostrazione "Proof"

    From the commutative and associative properties of the product, we have:

    $$
    \underbrace{c\: a_1 \; c\: a_2 \; {\rm \dots} \; c\: a_n}_{=\prod_{j=1}^n (c \; a_j)} = \underbrace{\underbrace{(c\:  \; c  \; {\rm \dots} \; c)\:}_{=\prod_{j=1}^n c, {\rm ~~~} c {\rm ~multiplied~} n {\rm ~times}} \; (a_1 \; a_2 \; {\rm \dots} \; a_n)}_{= c^n \: \prod_{j=1}^n a_j}
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-obs_prod-of-products-5"></a>

!!! teorema "Observation 3: product of products"

    For every pair of products $\prod_{j=1}^n a_j$ and $\prod_{j=1}^n b_j$, we have:

    \begin{equation}
    \label{P3}
    \prod_{j=1}^n a_j  \; \prod_{j=1}^n b_j = \prod_{j=1}^n (a_j \; b_j)
    \end{equation}

??? dimostrazione "Proof"

    We have:

    $$
    \underbrace{a_1 \;  a_2 \; {\rm \dots} \; a_n \;  b_1 \;  b_2 \; {\rm \dots} \;  b_n}_{=\prod_{j=1}^n a_j  \; \prod_{j=1}^n b_j} = \underbrace{a_1 \; b_1 \; a_2 \;  b_2 \; {\rm \dots} \; a_n \; b_n}_{=\prod_{j=1}^n (a_j \; b_j) }
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-obs_prod-decomposition-6"></a>

!!! teorema "Observation 4: decomposition"

    For every product $\prod_{j=1}^{n+m} a_j$, we have:

    \begin{align}
    \label{P4}
    \prod_{j=1}^{n+m} a_j   &= \prod_{j=1}^n a_j \; \prod_{j=n+1}^{n+m} a_j
    \end{align}

<a id="box-obs_prod-index-translation-7"></a>

!!! teorema "Observation 5: index translation"

    For every product $\prod_{j=1}^{n} a_j$ and natural number $m \ge 1$, we have:

    \begin{align}
    \label{P5}
    \prod_{j=1}^n a_j   &= \prod_{j=1+m}^{n+m} a_{j-m} =  \prod_{j=1-m}^{n-m} a_{j+m}
    \end{align}

<a id="box-obs_prod-index-reflection-8"></a>

!!! teorema "Observation 6: index reflexion"

    For every product $\prod_{j=1}^{n} a_j$, we have:

    \begin{align}
    \label{P6}
    \prod_{j=1}^n a_j   &= \prod_{j=1}^n a_{n-j+1} = \prod_{j=0}^{n-1} a_{n-j}
    \end{align}

??? dimostrazione "Proof"

    The three properties are simply different notations and/or arrangements of the terms in the products. <span class="qed">□</span>

## 3. Factorial

<a id="box-def_factorial-9"></a>

!!! definizione "Definition 2: Factorial"

    The <strong>factorial</strong> of a natural number \( n \), denoted as \( n! \), is the product of the first \( n \) positive natural numbers. By convention, the factorial of 0 is defined as \( 1 \).

- Formally, the factorial is defined as follows:

    \begin{equation}
    n! =
    \begin{cases} 
    1 & \text{if~~} n = 0, \\[2ex]
    \prod_{j=1}^n j & \text{if~~} n \geq 1.
    \end{cases}
    \end{equation}

- A closed formula for the factorial is not known but   Stirling's approximation provides an asymptotic  approximation.

<a id="box-obs_factorial-ratio-10"></a>

!!! teorema "Observation 7"

    For every pair of natural numbers $n \ge 0$ and $k \in \{0,1,\dots, n\}$, we have:

    \begin{equation}
    \label{MM}
    \frac{n!}{(n-k)!}  =  \prod_{j=1}^{k} (n-j+1) =  \prod_{j=n-k+1}^{n} j
    \end{equation}

- Formula \(\eqref{MM}\) is the product of $k$ factors,  from $n$ and decreasing by one unit at a time.

- By convention, a product with no factors (i.e., whose upper index is smaller than its lower index, as $\prod_{j=1}^{0} a_j$) is equal to $1$. This convention is consistent with $0!=1$ and makes formula \(\eqref{MM}\) valid also for $k=0$ and $k=n$.

??? dimostrazione "Proof"

    We have:

    $$
    \frac{n!}{(n-k)!}  
    =
    \frac{\prod_{j=1}^n j}{\prod_{j=1}^{n-k} j}
    =
    \frac{\prod_{j=1}^{n-k} j \; \prod_{j=n-k+1}^{n} j }{\prod_{j=1}^{n-k} j}
    = \prod_{j=n-k+1}^{n} j
    =  \prod_{j=1}^{k} (n-j+1)
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-ex_factorial-ratio-11"></a>

!!! esempio "Example 2: use of the observation"

    $$
    \frac{100!}{98!}= \frac{100!}{(100-2)!}=\prod_{j=1}^{2} (100-j+1)=100 \cdot 99  = 9.900
    $$

!!! interattivo "Try it in the lab"

    the same computation step by step: change the matrix and watch the steps change.

<div class="la-tool" data-tool="somme" data-f="k" data-tipo="prod"></div>

## Exercises and lab

- :material-pencil-box-multiple: **Exercises** · [the exercise sheet of this chapter: 9 exercises with worked solutions](../exercises/es-sums-products-02-products.md)
- :material-calculator-variant: **Lab** · [Sums and products](../lab/sums.md) — choose «Product Π»: for example \(\prod_{k=1}^{n} k = n!\)

