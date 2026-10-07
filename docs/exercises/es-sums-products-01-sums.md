---
title: "Sums"
---

# Sums

<div class="info-capitolo" markdown>

**Exercises · Sums and products** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-sums-products-01-sums.pdf)

</div>

<a id="box-exe_sum_squares_proof-1"></a>

!!! esercizio "Exercise 1"

    Prove, using the properties of the sums, that for every natural number $n \ge 1$ we have:

    \begin{equation}
    \label{EXSQ}
    \sum_{k=1}^{n} k^2 = \underbrace{\frac{2\;n^3 + 3\;n^2 + n}{6}}_{
    =\frac{n\:(n+1)\:(2\:n+1)}{6}}
    \end{equation}

    (sum of the squares of the first $n$ natural numbers without zero).

??? soluzione "Solution"

    We start by writing $\sum_{k=0}^n (k+1)^3$ in two different ways:

    \begin{align*}
    1)~~~\sum_{k=0}^n (k+1)^3 &=\sum_{k=0}^n(k^3+3\:k^2+3\:k+1)\\[2ex]
    &= \left( \sum_{k=1}^n k^3 + 3\: \sum_{k=1}^n k^2 + 3\: \sum_{k=1}^n k + \sum_{k=1}^n 1 \right)  +1 \\[2ex]
    &=\sum_{k=1}^n k^3 + 3\: \sum_{k=1}^n k^2 + \frac{3\;(n^2+n)}{2} +n +1\\[5ex]
    2)~~~ \sum_{k=0}^n (k+1)^3&=\sum_{k=1}^{n+1} k^3=\sum_{k=1}^n k^3 + (n+1)^3
    \end{align*}

    (in 1) the term with $k=0$, equal to $1$, has been separated from the others). Equating the expressions and canceling the sum with $k^3$ we get:

    $$
    3\: \sum_{k=1}^n k^2 + \frac{3\:(n^2+n)}{2} +n +1=   (n+1)^3
    $$

    Isolating the sum with $k^2$ we get:

    \begin{align*}
    3\: \sum_{k=1}^n k^2 &= (n+1)^3 - \frac{3\:(n^2+n)}{2} -n -1 \\[2ex]
     &= n^3 + 3n^2 +3n+1 - \frac{3n^2+3n}{2} -n -1\\[2ex]
       &= \frac{2n^3 + 3n^2 + n}{2}
    \end{align*}

    Then we have:

    \begin{align*}
    \sum_{k=1}^n k^2 &= \frac{2n^3 + 3n^2 + n}{6}
    \end{align*}

<a id="box-exe_sum_squares_numbers-2"></a>

!!! esercizio "Exercise 2"

    Compute the sum of the squares of the first $10$, $100$ and $1000$ natural numbers (without zero).

??? soluzione "Solution"

    Using formula \(\eqref{EXSQ}\), the sum of squares of the first 10 natural numbers (without zero) is:

    $$
    \sum_{k=1}^{10} k^2  = \frac{2\cdot 10^3 + 3\cdot 10^2 + 10}{6} = 385
    $$

    The sum of squares of the first 100 natural numbers (without zero) is:

    $$
    \sum_{k=1}^{100} k^2  = \frac{2\cdot 100^3 + 3\cdot 100^2 + 100}{6} = 338.350
    $$

    The sum of squares of the first 1000 natural numbers (without zero) is:

    $$
    \sum_{k=1}^{1000} k^2  = \frac{2\cdot 1000^3 + 3\cdot 1000^2 + 1000}{6} = 333.833.500
    $$

<a id="box-exe_sum_cubes_proof-3"></a>

!!! esercizio "Exercise 3"

    Prove, using the properties of the sums, that for every natural number $n \ge 1$ we have:

    \begin{equation}
    \label{EXCU}
    \sum_{k=1}^{n} k^3 = \underbrace{\frac{n^4 + 2\;n^3 + n^2}{4}}_{
    =\frac{n^2\:(n+1)^2}{4}=\frac{(n^2+n)^2}{4}}
    \end{equation}

    (sum of the cubes of the first $n$ natural numbers without zero).

??? soluzione "Solution"

    We start by writing $\sum_{k=0}^n (k+1)^4$ in two different ways, using formula \(\eqref{EXSQ}\) for the sum of the squares:

    \begin{align*}
    1)~~~\sum_{k=0}^n (k+1)^4 &=\sum_{k=0}^n(k^4+4\:k^3+6\:k^2+4\:k+1)\\[2ex]
    &= \left( \sum_{k=1}^n k^4 + 4\: \sum_{k=1}^n k^3 + 6\: \sum_{k=1}^n k^2 + 4\: \sum_{k=1}^n k + \sum_{k=1}^n 1 \right) +1 \\[2ex]
    &=\sum_{k=1}^n k^4 + 4\: \sum_{k=1}^n k^3 + 2n^3 + 3n^2 + n + 2\:n^2 +2\:n +n +1\\[2ex]
    &=\sum_{k=1}^n k^4 + 4\: \sum_{k=1}^n k^3 + 2n^3 + 5n^2 +4n +1\\[2ex]
    2)~~~  \sum_{k=0}^n (k+1)^4&=\sum_{k=1}^{n+1} k^4=\sum_{k=1}^n k^4 + (n+1)^4
    \end{align*}

    Equating the expressions and canceling the sum with $k^4$ we get:

    $$
    4\: \sum_{k=1}^n k^3 +
    2n^3 + 5 n^2 +4n +1  =   (n+1)^4
    $$

    Isolating the sum with $k^3$ we get:

    \begin{align*}
    4\: \sum_{k=1}^n k^3 &= n^4 + 4n^3 +6n^2 + 4n +1  -
    2n^3 - 5 n^2 -4n -1 =  n^4 + 2n^3 +  n^2
    \end{align*}

    Then  we have:

    \begin{align*}
    \sum_{k=1}^n k^3 & = \frac{n^4 + 2n^3 +  n^2}{4}
    \end{align*}

<a id="box-exe_sum_cubes_numbers-4"></a>

!!! esercizio "Exercise 4"

    Compute the sum of the cubes of the first $10$, $100$ and $1000$ natural numbers (without zero).

??? soluzione "Solution"

    Using formula \(\eqref{EXCU}\), the sum of cubes of the first 10 natural numbers (without zero) is:

    $$
    \sum_{k=1}^{10} k^3  =  \frac{ 10^4 + 2 \cdot 10^3 + 10^2}{4} = 3025
    $$

    The sum of cubes of the first 100 natural numbers (without zero) is:

    $$
    \sum_{k=1}^{100} k^3  =  \frac{ 100^4 + 2 \cdot 100^3 + 100^2}{4} = 25.502.500
    $$

    The sum of cubes of the first 1000 natural numbers (without zero) is:

    $$
    \sum_{k=1}^{1000} k^3  =  \frac{ 1000^4 + 2 \cdot 1000^3 + 1000^2}{4} = 250.500.250.000
    $$

<a id="box-exe_sum_cubes_square-5"></a>

!!! esercizio "Exercise 5"

    Prove that the sum of the cubes of the first $n$ natural numbers (without zero) equals the square of the sum of the first $n$ natural numbers (without zero):

    $$
    \sum_{k=1}^{n} k^3 = \left(\sum_{k=1}^{n} k \right)^2
    $$

??? soluzione "Solution"

    Using formula \(\eqref{EXCU}\) and the formula $\sum_{k=1}^{n} k = \frac{n\:(n+1)}{2}$, we have:

    $$
    \sum_{k=1}^{n} k^3 = 	\frac{n^4 + 2n^3 +  n^2}{4}  = 	\frac{n^2 \; (n^2 + 2n +  1)}{4}  = \frac{n^2\:(n+1)^2}{4}= \left(\frac{n\:(n+1)}{2}\right)^2= \left(\sum_{k=1}^{n} k \right)^2
    $$

<a id="box-exe_sum_index_shift-6"></a>

!!! esercizio "Exercise 6"

    Using the index translation, rewrite the following sums so that the sum index starts from $1$, and compute them:

    $$
    {\rm a)}~ \sum_{j=3}^{12} (j-2)^2, \qquad {\rm b)}~ \sum_{j=0}^{n-1} (j+1), \qquad {\rm c)}~ \sum_{j=0}^{49} (2\:j+1)
    $$

??? soluzione "Solution"

    - **a)** With the index translation by $m=2$ (setting $i=j-2$, when $j$ goes from $3$ to $12$, $i$ goes from $1$ to $10$) and formula \(\eqref{EXSQ}\):

        $$
        \sum_{j=3}^{12} (j-2)^2 = \sum_{i=1}^{10} i^2 = \frac{2\cdot 10^3 + 3 \cdot 10^2 + 10}{6} = 385
        $$

    - **b)** With the index translation by $m=1$ (setting $i=j+1$):

        $$
        \sum_{j=0}^{n-1} (j+1) = \sum_{i=1}^{n} i = \frac{n^2+n}{2}
        $$

    - **c)** With the index translation by $m=1$ (setting $i=j+1$, so that $2\:j+1 = 2\:i-1$), this is the sum of the first $50$ odd numbers:

        $$
        \sum_{j=0}^{49} (2\:j+1) = \sum_{i=1}^{50} (2\:i-1) = 50^2 = 2500
        $$

<a id="box-exe_sum_linearity-7"></a>

!!! esercizio "Exercise 7"

    Find a closed formula for the sum

    $$
    \sum_{j=1}^{n} \big(3\:j^2 - 2\:j + 5\big)
    $$

    and use it to compute the value for $n=10$.

??? soluzione "Solution"

    Using the union of sums, the product by a constant and the sum with constant term, we have:

    \begin{align*}
    \sum_{j=1}^{n} \big(3\:j^2 - 2\:j + 5\big) &= 3\: \sum_{j=1}^{n} j^2 - 2\: \sum_{j=1}^{n} j + \sum_{j=1}^{n} 5 \\[2ex]
    &= 3 \: \frac{2n^3 + 3n^2 + n}{6} - 2\: \frac{n^2+n}{2} + 5\:n \\[2ex]
    &= n^3 + \frac{3}{2}\: n^2 + \frac{1}{2}\: n - n^2 - n + 5\:n
    = \frac{2n^3 + n^2 + 9n}{2}
    \end{align*}

    For $n=10$ we get:

    $$
    \sum_{j=1}^{10} \big(3\:j^2 - 2\:j + 5\big) = \frac{2000 + 100 + 90}{2} = 1095
    $$

    As a check: $3 \cdot 385 - 2 \cdot 55 + 5 \cdot 10 = 1155 - 110 + 50 = 1095$.

<a id="box-exe_sum_decomposition-8"></a>

!!! esercizio "Exercise 8"

    Using the decomposition property, compute:

    $$
    {\rm a)}~ \sum_{j=11}^{20} j^2, \qquad {\rm b)}~ \sum_{j=n+1}^{2n} j \quad (n \ge 1)
    $$

??? soluzione "Solution"

    - **a)** From the decomposition $\sum_{j=1}^{20} j^2 = \sum_{j=1}^{10} j^2 + \sum_{j=11}^{20} j^2$ and formula \(\eqref{EXSQ}\):

        $$
        \sum_{j=11}^{20} j^2 = \sum_{j=1}^{20} j^2 - \sum_{j=1}^{10} j^2 = \frac{2\cdot 20^3 + 3 \cdot 20^2 + 20}{6} - 385 = 2870 - 385 = 2485
        $$

    - **b)** From the decomposition $\sum_{j=1}^{2n} j = \sum_{j=1}^{n} j + \sum_{j=n+1}^{2n} j$:

        $$
        \sum_{j=n+1}^{2n} j = \frac{(2n)^2 + 2n}{2} - \frac{n^2+n}{2} = \frac{4n^2 + 2n - n^2 - n}{2} = \frac{3n^2+n}{2}
        $$

<a id="box-exe_sum_telescoping-9"></a>

!!! esercizio "Exercise 9"

    - **a)** Prove that for every sequence of real numbers $a_1, a_2, \dots, a_{n+1}$ we have (<strong>telescoping sum</strong>):

        $$
        \sum_{j=1}^{n} \big( a_{j+1} - a_j \big) = a_{n+1} - a_1
        $$

    - **b)** Using a), compute $\displaystyle \sum_{j=1}^{n} \frac{1}{j\:(j+1)}$ and its value for $n=99$.

??? soluzione "Solution"

    - **a)** Using the union of sums, the index translation and the decomposition, we have:

        \begin{align*}
        \sum_{j=1}^{n} \big( a_{j+1} - a_j \big) &= \sum_{j=1}^{n} a_{j+1} - \sum_{j=1}^{n} a_j = \sum_{j=2}^{n+1} a_{j} - \sum_{j=1}^{n} a_j\\[2ex]
        &= \left(\sum_{j=2}^{n} a_{j} + a_{n+1}\right) - \left( a_1 + \sum_{j=2}^{n} a_j \right) = a_{n+1} - a_1
        \end{align*}

    - **b)** Since

        $$
        \frac{1}{j\:(j+1)} = \frac{(j+1) - j}{j\:(j+1)} = \frac{1}{j} - \frac{1}{j+1}
        $$

        we can apply a) with $a_j = -\frac{1}{j}$:

        $$
        \sum_{j=1}^{n} \frac{1}{j\:(j+1)} = \sum_{j=1}^{n} \left( -\frac{1}{j+1} - \Big(-\frac{1}{j}\Big)\right) = -\frac{1}{n+1} + 1 = \frac{n}{n+1}
        $$

        For $n=99$ we get $\frac{99}{100}$.

<a id="box-exe_sum_telescoping_naturals-10"></a>

!!! esercizio "Exercise 10"

    Compute $\displaystyle \sum_{j=1}^{n} \big( (j+1)^2 - j^2 \big)$ in two different ways and deduce again the formula

    $$
    \sum_{j=1}^n j = \frac{n^2+n}{2}
    $$

??? soluzione "Solution"

    First way: it is a telescoping sum (Exercise [Exercise 9](#box-exe_sum_telescoping-9)) with $a_j = j^2$, then:

    $$
    \sum_{j=1}^{n} \big( (j+1)^2 - j^2 \big) = (n+1)^2 - 1 = n^2 + 2\:n
    $$

    Second way: since $(j+1)^2 - j^2 = 2\:j + 1$, we have:

    $$
    \sum_{j=1}^{n} \big( (j+1)^2 - j^2 \big) = \sum_{j=1}^{n} (2\:j+1) = 2 \: \sum_{j=1}^{n} j + n
    $$

    Equating the two expressions:

    $$
    2 \: \sum_{j=1}^{n} j + n = n^2 + 2\:n {\rm ~~~~that~is~~~~} \sum_{j=1}^{n} j = \frac{n^2 + n}{2}
    $$

<a id="box-exe_sum_double-11"></a>

!!! esercizio "Exercise 11"

    A <strong>double sum</strong> $\sum_{i=1}^{n} \sum_{j=1}^{m} a_{ij}$ is the sum for $i$ from $1$ to $n$ of the inner sums $\sum_{j=1}^{m} a_{ij}$. Compute, for every pair of natural numbers $n,m \ge 1$:

    $$
    {\rm a)}~ \sum_{i=1}^{n} \sum_{j=1}^{m} (i+j), \qquad {\rm b)}~ \sum_{i=1}^{n} \sum_{j=1}^{n} i\:j
    $$

    and the value of a) for $n=3$ and $m=4$.

??? soluzione "Solution"

    - **a)** For the inner sum ($i$ is constant with respect to $j$):

        $$
        \sum_{j=1}^{m} (i+j) = \sum_{j=1}^{m} i + \sum_{j=1}^{m} j = m\: i + \frac{m^2+m}{2}
        $$

        then

        \begin{align*}
        \sum_{i=1}^{n} \sum_{j=1}^{m} (i+j) &= \sum_{i=1}^{n} \left( m\: i + \frac{m^2+m}{2}\right) = m \: \frac{n^2+n}{2} + n \: \frac{m^2+m}{2} \\[2ex]
        &= \frac{n\:m\:(n+1) + n\:m\:(m+1)}{2} = \frac{n\:m\:(n+m+2)}{2}
        \end{align*}

        For $n=3$ and $m=4$ we get $\frac{3 \cdot 4 \cdot 9}{2} = 54$.

    - **b)** Using twice the product by a constant:

        $$
        \sum_{i=1}^{n} \sum_{j=1}^{n} i\:j = \sum_{i=1}^{n} \left( i \: \sum_{j=1}^{n} j \right) = \left(\sum_{j=1}^{n} j \right) \: \sum_{i=1}^{n} i = \left( \frac{n^2+n}{2} \right)^2
        $$

<a id="box-exe_sum_double_dependent-12"></a>

!!! esercizio "Exercise 12"

    Compute, for every natural number $n \ge 1$, the following double sums in which the upper index of the inner sum depends on $i$:

    $$
    {\rm a)}~ \sum_{i=1}^{n} \sum_{j=1}^{i} 1, \qquad {\rm b)}~ \sum_{i=1}^{n} \sum_{j=1}^{i} j
    $$

    and the value of b) for $n=10$.

??? soluzione "Solution"

    - **a)** Since $\sum_{j=1}^{i} 1 = i$, we have:

        $$
        \sum_{i=1}^{n} \sum_{j=1}^{i} 1 = \sum_{i=1}^{n} i = \frac{n^2+n}{2}
        $$

    - **b)** Since $\sum_{j=1}^{i} j = \frac{i^2+i}{2}$, using formula \(\eqref{EXSQ}\) we have:

        \begin{align*}
        \sum_{i=1}^{n} \sum_{j=1}^{i} j &= \sum_{i=1}^{n} \frac{i^2+i}{2} = \frac{1}{2} \left( \sum_{i=1}^{n} i^2 + \sum_{i=1}^{n} i \right) = \frac{1}{2} \left( \frac{2n^3 + 3n^2 + n}{6} + \frac{n^2+n}{2} \right) \\[2ex]
        &= \frac{2n^3 + 6n^2 + 4n}{12} = \frac{n\:(n+1)\:(n+2)}{6}
        \end{align*}

        For $n=10$ we get $\frac{10 \cdot 11 \cdot 12}{6} = 220$.
