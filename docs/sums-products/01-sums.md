---
title: "Sums"
---

# Sums

<div class="info-capitolo" markdown>

**Sums and products · Chapter 1** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes (PDF)](../pdf/lecture-notes-linear-algebra.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-01-sums.pdf)

</div>

## 1. Definition

<a id="box-def_sum-1"></a>

!!! definizione "Definition 1: sum"

    Given  $n$ values $a_j \in \R$ with $j \in \{1,2,\dots,n\}$, the <strong>sum</strong>

    $$
    a_1 + a_2 + {\rm \dots} + a_n
    $$

    can be indicated in compact form with the sum symbol:

    $$
    \sum_{j=1}^n a_j
    $$

    which reads: “sum for $j$ from $1$ to $n$ of $a_j$”. The symbol $j$ is called <strong>sum index</strong>.

- The sum symbol is therefore very useful when the terms $a_j$ are explicitly defined as a function of the sum index $j$.

<a id="box-ex_sums-2"></a>

!!! esempio "Example 1: sums"

    \begin{align*}
    \sum_{j=1}^{10} \frac{1}{j} &~~=~~ 1 +\frac{1}{2} +\frac{1}{3} +\frac{1}{4} +\frac{1}{5} +\frac{1}{6} +\frac{1}{7} +\frac{1}{8} +\frac{1}{9} +\frac{1}{10} \\[2ex]
     \sum_{j=3}^{n} j^2 &~~=~~ 3^2 +4^2 +5^2 + {\rm \dots} +n^2
    \end{align*}

- The sum index is a <strong>dummy index</strong>. This means that if $j$ is replaced with $i$, $k$ or any other index in all its occurrences the value of the sum does not change.

<a id="box-ex_dummy-index-3"></a>

!!! esempio "Example 2: dummy index"

    We have:

    $$
    \sum_{j=1}^n j^2 ~~=~~  \sum_{i=1}^n i^2 ~~=~~   \sum_{k=1}^{n} k^2
    $$

    as the two symbols indicate the sum of the squares of the first $n$ natural numbers (without zero). On the contrary, we have:

    $$
    \sum_{j=1}^n j^2 ~~\neq~~   \sum_{j=1}^{m} j^2
    $$

    as the two symbols indicate the sum, respectively, of the first $n$ and the first $m$ squares of the  natural numbers (without zero). Clearly, if $n \neq m$, the result is different.

## 2. Properties

<a id="box-obs_sum-constant-term-4"></a>

!!! teorema "Observation 1: sum with constant term"

    For every natural number $n\ge 1$ and real number $c$, we have:

    \begin{equation}
    \label{P2}
    \sum_{j=1}^n c  = n  \; c
    \end{equation}

??? dimostrazione "Proof"

    We have:

    $$
    \underbrace{c\:  + c  + {\rm \dots} + c\:}_{=\sum_{j=1}^n c, {\rm ~~~} c {\rm ~summed~up~} n {\rm ~times}} = n \: c
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-obs_sum-product-constant-5"></a>

!!! teorema "Observation 2: product by a constant"

    For every  sum $\sum_{j=1}^n a_j$ and real number $c$, we have:

    \begin{equation}
    \label{P1}
    \sum_{j=1}^n (c \; a_j) = c \: \sum_{j=1}^n a_j
    \end{equation}

??? dimostrazione "Proof"

    From the distributive property, we have:

    $$
    \underbrace{c\: a_1 + c\: a_2 + {\rm \dots} + c\: a_n}_{=\sum_{j=1}^n (c \; a_j)} = \underbrace{c \: (a_1+a_2+{\rm \dots}+a_n)}_{= c \: \sum_{j=1}^n a_j}
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-obs_sum-union-6"></a>

!!! teorema "Observation 3: union of sums"

    For every pair of sums $\sum_{j=1}^n a_j$ and $\sum_{j=1}^n b_j$, we have:

    \begin{equation}
    \label{P3}
    \sum_{j=1}^n a_j  + \sum_{j=1}^n b_j = \sum_{j=1}^n (a_j + b_j)
    \end{equation}

??? dimostrazione "Proof"

    We have:

    $$
    \underbrace{a_1 +  a_2 + {\rm \dots} + a_n +  b_1 +  b_2 + {\rm \dots} +  b_n}_{=\sum_{j=1}^n a_j  + \sum_{j=1}^n b_j} = \underbrace{a_1 + b_1 +a_2 + b_2+{\rm \dots}+a_n + b_n}_{=\sum_{j=1}^n (a_j + b_j) }
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-obs_sum-decomposition-7"></a>

!!! teorema "Observation 4: decomposition"

    For every sum $\sum_{j=1}^{n+m} a_j$, we have:

    \begin{align}
    \label{P4}
    \sum_{j=1}^{n+m} a_j   &= \sum_{j=1}^n a_j + \sum_{j=n+1}^{n+m} a_j
    \end{align}

<a id="box-obs_sum-index-translation-8"></a>

!!! teorema "Observation 5: index translation"

    For every sum $\sum_{j=1}^{n} a_j$ and natural number $m \ge 1$, we have:

    \begin{align}
    \label{P5}
    \sum_{j=1}^n a_j   &= \sum_{j=1+m}^{n+m} a_{j-m} =  \sum_{j=1-m}^{n-m} a_{j+m}
    \end{align}

<a id="box-obs_sum-index-reflection-9"></a>

!!! teorema "Observation 6: index reflexion"

    For every sum $\sum_{j=1}^{n} a_j$, we have:

    \begin{align}
    \label{P6}
    \sum_{j=1}^n a_j   &= \sum_{j=1}^n a_{n-j+1} = \sum_{j=0}^{n-1} a_{n-j}
    \end{align}

??? dimostrazione "Proof"

    The three properties are simply different notations and/or arrangements of the terms in the sums. <span class="qed">□</span>

## 3. Some important sums

<a id="box-obs_sum-first-n-naturals-10"></a>

!!! teorema "Observation 7: sum of the first $n$ positive natural numbers"

    For every natural number $n \ge 1$, we have:

    \begin{equation}
    \sum_{j=1}^n j  = \frac{n^2 +n}{2}
    \end{equation}

??? dimostrazione "Proof"

    We have:

    \begin{align*}
    \sum_{j=1}^n j &= \frac{1}{2} \left( \sum_{j=1}^n j + \sum_{j=1}^n j \right)\\[2ex] 
    & = \frac{1}{2} \left( \sum_{j=1}^n j + \sum_{j=1}^n \big( n-j+1 \big) \right)\\[2ex]
     & = \frac{1}{2}  \; \sum_{j=1}^n  \big(j+ n-j+1 \big)\\[2ex]
      &= \frac{1}{2} \; \sum_{j=1}^n  \big(n +1  \big)
      = \frac{n \: (n+1)}{2} = \frac{n^2 +n}{2}
    \end{align*}

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-obs_sum-first-n-even-11"></a>

!!! teorema "Observation 8: sum of the first $n$ positive even numbers"

    For every natural number $n \ge 1$, we have:

    \begin{equation}
    \sum_{j=1}^n 2\:j = n^2 + n
    \end{equation}

??? dimostrazione "Proof"

    We have:

    \begin{align*}
    \sum_{j=1}^n 2\:j &= 2\:\sum_{j=1}^n j = 2 \left(\frac{n^2 + n}{2} \right) =  n^2 + n
    \end{align*}

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-obs_sum-first-n-odd-12"></a>

!!! teorema "Observation 9: sum of the first $n$ odd numbers"

    For every natural number $n \ge 1$, we have:

    $$
    \sum_{j=0}^{n-1} (2\:j+1) = n^2 \quad {\rm ~~or~~~equivalently~~} \quad \sum_{j=1}^n (2\:j-1) = n^2
    $$

??? dimostrazione "Proof"

    We have:

    \begin{align*}
    \sum_{j=0}^{n-1} (2\: j+1) &= 2\:\sum_{j=0}^{n-1} j + {\sum_{j=0}^{n-1} 1} = 2\:\sum_{j=1}^{n} (j-1) + {\sum_{j=1}^{n} 1}\\[2ex]
     &  = 2\:\left(\sum_{j=1}^n j - \sum_{j=1}^n 1 \right)+ n \\[2ex]
        & = 2\:\left( \frac{n^2 + n}{2} - n \right)+ n 
         =  n^2 + n - 2\:n + n 
         =  n^2 \\[5ex]
          \sum_{j=1}^n (2\:j-1) &= 2\:\sum_{j=1}^n j - {\sum_{j=1}^n 1}\\[2ex]
        & = 2\:\left( \frac{n^2 + n}{2}  \right)- n 
         =  n^2 + n -n 
         =  n^2
    \end{align*}

    <p class="qed-riga"><span class="qed">□</span></p>

!!! interattivo "Try it in the lab"

    the same computation step by step: change the matrix and watch the steps change.

<div class="la-tool" data-tool="somme" data-f="k^2" data-tipo="sum"></div>

## Exercises and lab

- :material-pencil-box-multiple: **Exercises** · [the exercise sheet of this chapter: 12 exercises with worked solutions](../exercises/es-sums-products-01-sums.md)
- :material-calculator-variant: **Lab** · [Sums and products](../lab/sums.md) — type the general term and compare with the closed-form sums of this chapter

