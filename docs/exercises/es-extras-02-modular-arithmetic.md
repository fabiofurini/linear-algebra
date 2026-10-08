---
title: "Modular arithmetic"
---

# Modular arithmetic

<div class="info-capitolo" markdown>

**Exercises · Further topics** · chapter [A.2 · Modular arithmetic](../extras/02-modular-arithmetic.md) · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-extras-02-modular-arithmetic.pdf)

</div>

<a id="box-exe_mod_euclid_division-1"></a>

!!! esercizio "Exercise 1"

    Find the quotient $q$ and the remainder $r$ (with $0 \le r < |m|$) of Euclid's division of $n$ by $m$ in the following cases:

    $$
    {\rm a)}~ n=47,~m=5, \qquad {\rm b)}~ n=-47,~m=5, \qquad {\rm c)}~ n=47,~m=-5, \qquad {\rm d)}~ n=-47,~m=-5
    $$

??? soluzione "Solution"

    In each case we look for the integers $q$ and $r$ such that $n = q \; m + r$ and $0 \le r < 5$:

    - **a)** $47 = 9 \cdot 5 + 2$, then $q = 9$ and $r = 2$.

    - **b)** $-47 = (-10) \cdot 5 + 3$, then $q = -10$ and $r = 3$. Note that $-47 = (-9)\cdot 5 - 2$ is not Euclid's division, since $-2 < 0$.

    - **c)** $47 = (-9) \cdot (-5) + 2$, then $q = -9$ and $r = 2$.

    - **d)** $-47 = 10 \cdot (-5) + 3$, then $q = 10$ and $r = 3$.

<a id="box-exe_mod_compute-2"></a>

!!! esercizio "Exercise 2"

    Compute:

    $$
    {\rm a)}~ 100 \text{~mod~} 7, \qquad {\rm b)}~ -100 \text{~mod~} 7, \qquad {\rm c)}~ 2025 \text{~mod~} 9, \qquad {\rm d)}~ 7 \text{~mod~} 12
    $$

??? soluzione "Solution"

    By definition, $n \text{~mod~} m$ is the remainder of Euclid's division of $n$ by $m$:

    - **a)** $100 = 14 \cdot 7 + 2$, then $100 \text{~mod~} 7 = 2$.

    - **b)** $-100 = (-15) \cdot 7 + 5$, then $-100 \text{~mod~} 7 = 5$.

    - **c)** $2025 = 225 \cdot 9 + 0$, then $2025 \text{~mod~} 9 = 0$ ($2025$ is a multiple of $9$).

    - **d)** $7 = 0 \cdot 12 + 7$, then $7 \text{~mod~} 12 = 7$.

<a id="box-exe_mod_congruences-3"></a>

!!! esercizio "Exercise 3"

    Establish whether the following congruences hold, using both the definition (same remainder) and the divisibility of the difference:

    $$
    {\rm a)}~ 38 \equiv 14 \tpmod{6}, \qquad {\rm b)}~ 17 \equiv 4 \tpmod{5}, \qquad {\rm c)}~ 100 \equiv 1 \tpmod{11}
    $$

??? soluzione "Solution"

    - **a)** $38 = 6 \cdot 6 + 2$ and $14 = 2 \cdot 6 + 2$ have the same remainder $2$; equivalently $38 - 14 = 24 = 4 \cdot 6$. The congruence holds.

    - **b)** $17 = 3 \cdot 5 + 2$ and $4 = 0 \cdot 5 + 4$ have different remainders; equivalently $17 - 4 = 13$ is not a multiple of $5$. The congruence does not hold.

    - **c)** $100 = 9 \cdot 11 + 1$ and $1 = 0 \cdot 11 + 1$ have the same remainder $1$; equivalently $100 - 1 = 99 = 9 \cdot 11$. The congruence holds.

<a id="box-exe_mod_equivalence-4"></a>

!!! esercizio "Exercise 4"

    Let $m \ge 1$ be a natural number. Prove that for every pair of integer numbers $n$ and $k$:

    $$
    n \text{~mod~} m = k \text{~mod~} m \Longleftrightarrow {\rm there~exists~an~integer~} q {\rm ~such~that~} n - k = q \cdot m
    $$

??? soluzione "Solution"

    - **($\Rightarrow$)** Let $r = n \text{~mod~} m = k \text{~mod~} m$. By Euclid's division there exist integers $q_1$ and $q_2$ such that $n = q_1 \; m + r$ and $k = q_2 \; m + r$. Subtracting:

        $$
        n - k = (q_1 - q_2) \; m
        $$

        so the claim holds with $q = q_1 - q_2$.

    - **($\Leftarrow$)** Let $n - k = q \; m$ and let $k = q_2 \; m + r$ with $0 \le r < m$ (Euclid's division of $k$ by $m$). Then:

        $$
        n = k + q \; m = (q + q_2) \; m + r {\rm ~~~~with~~~~} 0 \le r < m
        $$

        By the uniqueness in Euclid's division, $r$ is the remainder of the division of $n$ by $m$, that is $n \text{~mod~} m = r = k \text{~mod~} m$.

<a id="box-exe_mod_sum_product-5"></a>

!!! esercizio "Exercise 5"

    Let $m \ge 1$, $n$, $n'$, $k$, $k'$ be natural numbers such that $n \equiv n' \tpmod{m}$ and $k \equiv k' \tpmod{m}$. Prove that:

    $$
    {\rm a)}~ n + k \equiv n' + k' \tpmod{m}, \qquad {\rm b)}~ n \; k \equiv n' \; k' \tpmod{m}
    $$

    Then compute $(123 \cdot 456 + 789) \text{~mod~} 10$ without computing the product.

??? soluzione "Solution"

    By Exercise [Exercise 4](#box-exe_mod_equivalence-4) there exist integers $a$ and $b$ such that $n = n' + a \; m$ and $k = k' + b \; m$.

    - **a)** $n + k = n' + k' + (a + b) \; m$, then $(n+k) - (n'+k')$ is a multiple of $m$.

    - **b)** $n \; k = (n' + a\:m)\:(k' + b\:m) = n'\:k' + (n'\:b + k'\:a + a\:b\:m) \; m$, then $n\:k - n'\:k'$ is a multiple of $m$.

    Since $123 \equiv 3$, $456 \equiv 6$ and $789 \equiv 9 \tpmod{10}$, we have:

    $$
    123 \cdot 456 + 789 \equiv 3 \cdot 6 + 9 = 27 \equiv 7 \tpmod{10}
    $$

    then $(123 \cdot 456 + 789) \text{~mod~} 10 = 7$. Check: $123 \cdot 456 + 789 = 56088 + 789 = 56877$.

<a id="box-exe_mod_powers-6"></a>

!!! esercizio "Exercise 6"

    Compute:

    $$
    {\rm a)}~ 2^{10} \text{~mod~} 7, \qquad {\rm b)}~ 3^{100} \text{~mod~} 4, \qquad {\rm c)}~ 5^{21} \text{~mod~} 6
    $$

??? soluzione "Solution"

    We use Exercise [Exercise 5](#box-exe_mod_sum_product-5) b) repeatedly: if $n \equiv n' \tpmod{m}$, then $n^p \equiv (n')^p \tpmod{m}$ for every natural number $p \ge 1$.

    - **a)** $2^3 = 8 \equiv 1 \tpmod{7}$, then $2^{10} = (2^3)^3 \cdot 2 \equiv 1^3 \cdot 2 = 2 \tpmod{7}$. Then $2^{10} \text{~mod~} 7 = 2$ (check: $1024 = 146 \cdot 7 + 2$).

    - **b)** $3^2 = 9 \equiv 1 \tpmod{4}$, then $3^{100} = (3^2)^{50} \equiv 1^{50} = 1 \tpmod{4}$. Then $3^{100} \text{~mod~} 4 = 1$.

    - **c)** $5^2 = 25 \equiv 1 \tpmod{6}$, then $5^{21} = (5^2)^{10} \cdot 5 \equiv 1^{10} \cdot 5 = 5 \tpmod{6}$. Then $5^{21} \text{~mod~} 6 = 5$.

<a id="box-exe_mod_squares-7"></a>

!!! esercizio "Exercise 7"

    Prove that for every integer number $n$ we have $n^2 \text{~mod~} 4 \in \{0, 1\}$. Deduce that $2023$ is not the square of an integer number.

??? soluzione "Solution"

    By Euclid's division of $n$ by $2$, every integer $n$ is either even, $n = 2\:t$, or odd, $n = 2\:t+1$, with $t$ integer:

    - if $n = 2\:t$, then $n^2 = 4\:t^2 = 4\:t^2 + 0$, so $n^2 \text{~mod~} 4 = 0$;

    - if $n = 2\:t+1$, then $n^2 = 4\:t^2 + 4\:t + 1 = 4\:(t^2 + t) + 1$, so $n^2 \text{~mod~} 4 = 1$.

    Since $2023 = 505 \cdot 4 + 3$, we have $2023 \text{~mod~} 4 = 3 \notin \{0,1\}$, then $2023$ is not the square of an integer number.

<a id="box-exe_mod_digit_sum-8"></a>

!!! esercizio "Exercise 8"

    Prove that every natural number is congruent modulo $9$ to the sum of its decimal digits. Use this result to compute $123456789 \text{~mod~} 9$ and $20251007 \text{~mod~} 9$.

??? soluzione "Solution"

    A natural number $n$ with decimal digits $c_p, c_{p-1}, \dots, c_1, c_0$ can be written as:

    $$
    n = \sum_{j=0}^{p} c_j \; 10^j
    $$

    Since $10 = 1 \cdot 9 + 1$, we have $10 \equiv 1 \tpmod{9}$ and then (Exercise [Exercise 6](#box-exe_mod_powers-6)) $10^j \equiv 1 \tpmod{9}$ for every $j \ge 1$ (and trivially for $j=0$). Using Exercise [Exercise 5](#box-exe_mod_sum_product-5) for each term of the sum:

    $$
    n = \sum_{j=0}^{p} c_j \; 10^j \equiv \sum_{j=0}^{p} c_j \tpmod{9}
    $$

    - $1+2+3+4+5+6+7+8+9 = 45 = 5 \cdot 9$, then $123456789 \text{~mod~} 9 = 0$.

    - $2+0+2+5+1+0+0+7 = 17 = 1 \cdot 9 + 8$, then $20251007 \text{~mod~} 9 = 8$.
