---
title: "Products"
---

# Products

<div class="info-capitolo" markdown>

**Exercises · Sums and products** · chapter [2 · Products](../sums-products/02-products.md) · with worked solutions · [:material-file-pdf-box: Lecture notes (PDF)](../pdf/lecture-notes-linear-algebra.pdf)

</div>

<a id="box-exe_prod_factorials-1"></a>

!!! esercizio "Exercise 1"

    Compute:

    $$
    {\rm a)}~ 5!, \qquad {\rm b)}~ \frac{7!}{5!}, \qquad {\rm c)}~ \frac{10!}{7!}, \qquad {\rm d)}~ \frac{10!}{7!\;3!}
    $$

??? soluzione "Solution"

    - **a)** $5! = \prod_{j=1}^{5} j = 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 = 120$.

    - **b)** Using the formula $\frac{n!}{(n-k)!} = \prod_{j=1}^{k} (n-j+1)$ with $n=7$ and $k=2$: $\frac{7!}{5!} = 7 \cdot 6 = 42$.

    - **c)** With $n=10$ and $k=3$: $\frac{10!}{7!} = 10 \cdot 9 \cdot 8 = 720$.

    - **d)** From c): $\frac{10!}{7!\;3!} = \frac{720}{3!} = \frac{720}{6} = 120$.

<a id="box-exe_prod_even-2"></a>

!!! esercizio "Exercise 2"

    Prove that for every natural number $n \ge 1$ the product of the first $n$ positive even numbers is:

    $$
    \prod_{j=1}^{n} 2\:j = 2^n \; n!
    $$

    and compute its value for $n=5$.

??? soluzione "Solution"

    Using the product by a constant (with $c=2$ and $a_j = j$) we have:

    $$
    \prod_{j=1}^{n} 2\:j = 2^n \; \prod_{j=1}^{n} j = 2^n \; n!
    $$

    For $n=5$: $\prod_{j=1}^{5} 2\:j = 2 \cdot 4 \cdot 6 \cdot 8 \cdot 10 = 2^5 \cdot 5! = 32 \cdot 120 = 3840$.

<a id="box-exe_prod_odd-3"></a>

!!! esercizio "Exercise 3"

    Prove that for every natural number $n \ge 1$ the product of the first $n$ odd numbers is:

    $$
    \prod_{j=1}^{n} (2\:j-1) = \frac{(2n)!}{2^n \; n!}
    $$

    and compute its value for $n=4$.

??? soluzione "Solution"

    The factors of $(2n)! = \prod_{j=1}^{2n} j$ are the $n$ even numbers $2, 4, \dots, 2n$ and the $n$ odd numbers $1, 3, \dots, 2n-1$. Rearranging the factors and using Exercise [Exercise 2](#box-exe_prod_even-2), we have:

    $$
    (2n)! = \prod_{j=1}^{n} 2\:j \; \prod_{j=1}^{n} (2\:j-1) = 2^n \; n! \; \prod_{j=1}^{n} (2\:j-1)
    $$

    and then

    $$
    \prod_{j=1}^{n} (2\:j-1) = \frac{(2n)!}{2^n \; n!}
    $$

    For $n=4$: $1 \cdot 3 \cdot 5 \cdot 7 = 105$ and indeed $\frac{8!}{2^4 \cdot 4!} = \frac{40320}{16 \cdot 24} = \frac{40320}{384} = 105$.

<a id="box-exe_prod_telescoping-4"></a>

!!! esercizio "Exercise 4"

    - **a)** Prove that for every sequence of non-zero real numbers $a_1, a_2, \dots, a_{n+1}$ we have (<strong>telescoping product</strong>):

        $$
        \prod_{j=1}^{n} \frac{a_{j+1}}{a_j} = \frac{a_{n+1}}{a_1}
        $$

    - **b)** Using a), compute $\displaystyle \prod_{j=1}^{n} \frac{j+1}{j}$.

??? soluzione "Solution"

    - **a)** Using the product of products, the index translation and the decomposition, we have:

        \begin{align*}
        \prod_{j=1}^{n} \frac{a_{j+1}}{a_j} &= \frac{\prod_{j=1}^{n} a_{j+1}}{\prod_{j=1}^{n} a_j} = \frac{\prod_{j=2}^{n+1} a_{j}}{\prod_{j=1}^{n} a_j}
        = \frac{ \left(\prod_{j=2}^{n} a_{j}\right) \; a_{n+1}}{a_1 \; \prod_{j=2}^{n} a_j} = \frac{a_{n+1}}{a_1}
        \end{align*}

    - **b)** Applying a) with $a_j = j$:

        $$
        \prod_{j=1}^{n} \frac{j+1}{j} = \frac{n+1}{1} = n+1
        $$

<a id="box-exe_prod_one_minus-5"></a>

!!! esercizio "Exercise 5"

    Prove that for every natural number $n \ge 2$ we have:

    $$
    \prod_{j=2}^{n} \left( 1 - \frac{1}{j^2} \right) = \frac{n+1}{2\:n}
    $$

    and compute its value for $n=10$.

??? soluzione "Solution"

    Since

    $$
    1 - \frac{1}{j^2} = \frac{j^2-1}{j^2} = \frac{(j-1)\:(j+1)}{j^2} = \frac{j-1}{j} \; \frac{j+1}{j}
    $$

    from the product of products we have:

    $$
    \prod_{j=2}^{n} \left( 1 - \frac{1}{j^2} \right) = \prod_{j=2}^{n} \frac{j-1}{j} \; \prod_{j=2}^{n} \frac{j+1}{j}
    $$

    Both products are telescoping (Exercise [Exercise 4](#box-exe_prod_telescoping-4), with the index starting from $2$): with $a_j = \frac{1}{j}$ we have $\frac{a_{j}}{a_{j-1}} = \frac{j-1}{j}$, and with $a_j = j$ we have $\frac{a_{j+1}}{a_j} = \frac{j+1}{j}$. Then:

    $$
    \prod_{j=2}^{n} \frac{j-1}{j} = \frac{1}{2} \cdot \frac{2}{3} \cdots \frac{n-1}{n} = \frac{1}{n}, \qquad \prod_{j=2}^{n} \frac{j+1}{j} = \frac{3}{2} \cdot \frac{4}{3} \cdots \frac{n+1}{n} = \frac{n+1}{2}
    $$

    and therefore

    $$
    \prod_{j=2}^{n} \left( 1 - \frac{1}{j^2} \right) = \frac{1}{n} \; \frac{n+1}{2} = \frac{n+1}{2\:n}
    $$

    For $n=10$ we get $\frac{11}{20}$.

<a id="box-exe_prod_index_shift-6"></a>

!!! esercizio "Exercise 6"

    Using the index translation and the index reflection, prove that:

    $$
    {\rm a)}~ \prod_{j=3}^{n} (j-2) = (n-2)! \quad (n \ge 3), \qquad {\rm b)}~ \prod_{j=0}^{n-1} (n-j) = n! \quad (n \ge 1)
    $$

    and compute the product in a) for $n=8$.

??? soluzione "Solution"

    - **a)** With the index translation by $m=2$ (setting $i = j-2$, when $j$ goes from $3$ to $n$, $i$ goes from $1$ to $n-2$):

        $$
        \prod_{j=3}^{n} (j-2) = \prod_{i=1}^{n-2} i = (n-2)!
        $$

        For $n=8$: $\prod_{j=3}^{8} (j-2) = 6! = 720$.

    - **b)** With the index reflection (with $a_j = j$, so that $a_{n-j} = n-j$):

        $$
        \prod_{j=0}^{n-1} (n-j) = \prod_{j=0}^{n-1} a_{n-j} = \prod_{j=1}^{n} a_j = \prod_{j=1}^{n} j = n!
        $$

<a id="box-exe_prod_powers-7"></a>

!!! esercizio "Exercise 7"

    Prove that for every natural number $n \ge 1$ we have:

    $$
    \prod_{j=1}^{n} 2^j = 2^{\frac{n^2+n}{2}}
    $$

    and compute its value for $n=4$.

??? soluzione "Solution"

    Since the product of powers with the same base is the power with the sum of the exponents ($2^a \; 2^b = 2^{a+b}$), we have:

    $$
    \prod_{j=1}^{n} 2^j = 2^1 \; 2^2 \; {\rm \dots} \; 2^n = 2^{1+2+{\rm \dots}+n} = 2^{\sum_{j=1}^{n} j} = 2^{\frac{n^2+n}{2}}
    $$

    For $n=4$: $2^1 \cdot 2^2 \cdot 2^3 \cdot 2^4 = 2^{10} = 1024$.

<a id="box-exe_prod_bounds-8"></a>

!!! esercizio "Exercise 8"

    Prove that for every natural number $n \ge 1$ we have:

    $$
    2^{n-1} \le n! \le n^n
    $$

??? soluzione "Solution"

    We use the fact that if $0 \le a_j \le b_j$ for every $j \in \{1, \dots, n\}$, then $\prod_{j=1}^{n} a_j \le \prod_{j=1}^{n} b_j$ (the inequalities between non-negative numbers can be multiplied member to member).

    - Upper bound: since $j \le n$ for every $j \in \{1,\dots,n\}$, using the product with constant term we have:

        $$
        n! = \prod_{j=1}^{n} j \le \prod_{j=1}^{n} n = n^n
        $$

    - Lower bound: for $n=1$ we have $2^0 = 1 = 1!$. For $n \ge 2$, using the decomposition and since $j \ge 2$ for every $j \in \{2,\dots,n\}$, we have:

        $$
        n! = 1 \cdot \prod_{j=2}^{n} j \ge \prod_{j=2}^{n} 2 = 2^{n-1}
        $$

<a id="box-exe_prod_factorial_simplify-9"></a>

!!! esercizio "Exercise 9"

    Prove that $(n+1)! = (n+1)\; n!$ for every natural number $n \ge 0$, and use it to simplify, for $n \ge 1$, the expression

    $$
    \frac{(n+1)! - n!}{(n-1)!}
    $$

    Then compute its value for $n=6$.

??? soluzione "Solution"

    For $n=0$ we have $1! = 1 = 1 \cdot 0!$. For $n \ge 1$, from the decomposition:

    $$
    (n+1)! = \prod_{j=1}^{n+1} j = \left(\prod_{j=1}^{n} j\right) \; (n+1) = (n+1) \; n!
    $$

    Then, using it twice ($n! = n \; (n-1)!$ holds for $n \ge 1$):

    $$
    \frac{(n+1)! - n!}{(n-1)!} = \frac{(n+1)\; n! - n!}{(n-1)!} = \frac{n \; n!}{(n-1)!} = \frac{n \; n \; (n-1)!}{(n-1)!} = n^2
    $$

    For $n=6$: $\frac{7! - 6!}{5!} = \frac{5040 - 720}{120} = \frac{4320}{120} = 36 = 6^2$.
