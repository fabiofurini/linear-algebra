---
title: "Modular arithmetic"
---

# Modular arithmetic

<div class="info-capitolo" markdown>

**Further topics · Chapter A.2** · lecture notes by Fabio Furini · [:material-file-pdf-box: Chapter PDF](../pdf/extras-02-modular-arithmetic.pdf)

</div>

## 1. Euclid's division

<a id="box-lem_euclid-division-1"></a>

!!! teorema "Lemma 1: Euclid's division (or division with remainder)"

    For every pair of integer numbers $n$ and $m$, with $m \neq 0$, there exist unique integer numbers $q$ and $r$ such that

    \begin{equation}
    \label{DIVISION}
    n = q \; m  + r ~~~~~\text{and}~~~~~ 0 \le r <  |m|
    \end{equation}

- The value $n$ is called the <strong>dividend</strong>, the value $m$ is called the <strong>divisor</strong>, the value $q$ is called the <strong>quotient</strong> and the value $r$ is called the <strong>remainder</strong>.

- The standard convention is that the remainder is non negative but there are other conventions where the remainder $r$ can be negative.

??? dimostrazione "Proof"

    - To prove <em>existence</em>, we consider the set

        $$
        S = \big\{~~ n - k m:~~ k \in \mathbb{Z} ~~\text{and}~~ n - k m \geq 0 ~~\big\}
        $$

        The set \( S \) is nonempty, since for \( k = -|n|\, m \) we have \( n - k m = n + |n|\, m^2 \geq n + |n| \geq 0 \). Since \( S \) is a nonempty subset of the nonnegative integers, the well-ordering principle guarantees that there exists a smallest element \( r \in S \), meaning there exists some integer \( q \) such that

        $$
        r = n - q m, \quad \text{with } r \geq 0
        $$

        By construction, we must have \( r < |m| \), since if \( r \geq |m| \), then we could write

        $$
        r' = r - |m| = n - \Big(q+\frac{|m|}{m}\Big)\,m \geq 0
        $$

        which would imply \( r' \in S \), contradicting the minimality of \( r \).

    - To prove <em>uniqueness</em>, suppose there exist two pairs \( (q_1, r_1) \) and \( (q_2, r_2) \) such that

        $$
        n = q_1 m + r_1 = q_2 m + r_2
        $$

        with \( 0 \leq r_1, r_2 < |m| \). Subtracting the two equations, we have

        $$
        (q_1 - q_2) m = r_2 - r_1
        $$

        Since \( |r_2 - r_1| < |m| \) and \( m \) divides \( r_2 - r_1 \) (which equals the left-hand side), the only possibility is \( r_1 = r_2 \), which implies \( q_1 = q_2 \), ensuring uniqueness.

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-def_multiple-2"></a>

!!! definizione "Definition 1: multiple"

    An integer number \( n  \) is a <strong>multiple</strong> of an integer number \( m \) if there exists an integer number \( q  \) such that

    \begin{equation}
    n = q \cdot m
    \end{equation}

<a id="box-def_factor-3"></a>

!!! definizione "Definition 2: factor"

    An integer number \( m  \) is a <strong>factor</strong> of an integer number \( n \) if there exists an integer number \( q  \) such that

    \begin{equation}
    n = q \cdot m
    \end{equation}

- An integer number ${n}$ is <strong>divisible</strong> by an integer number ${m}$ if ${m}$ is a factor of ${n}$.

## 2. Modulo and modulo congruence

!!! chiave ""

    Given two integer numbers $n$ and $m$, with $m \neq 0$, $n$ <strong>modulo</strong> $m$ (abbreviated in ${n} \text{~mod~} {m}$) is the <strong>remainder</strong> $r$ of the Euclidean division (or division with remainder) of $n$ by $m$, where $n$ is the <strong>dividend</strong> and $m$ is the <strong>divisor</strong>.

- It follows from the definition that:

    $$
    0 \le {n} \text{~mod~} {m}  < |m|  \qquad \forall n,m \in \Z,~m \neq 0
    $$

!!! chiave ""

    Two natural numbers $n$ and $k$ are <strong>congruent</strong> modulo a natural number $m \ge 1$ if

    $$
    {n} \text{~mod~} {m} = {k} \text{~mod~} {m}
    $$

    and we write

    \begin{equation*}
    {n} \equiv {k} \tpmod{ {m}}
    \end{equation*}

- The parentheses mean that (mod m) applies to the entire equation, not just to the right-hand side (here, $k$).

- Equivalently, we have ${n} \equiv {k} \tpmod{ {m}}$

    1. if ${n}$ and ${k}$ have the same remainder when divided by ${m}$.

    2. if ${m}$ is a divisor of $|n - k|$, i.e., if there exists a natural number \( q  \) such that \(|n - k| = q \cdot m \) or equivalently if there exists an integer number \( q  \) such that \(n - k = q \cdot m \)

<a id="box-ex_congruence-mod-5-4"></a>

!!! esempio "Example 1: congruence modulo $5$"

    For example, $23$ and $13$ are congruent modulo $5$ and we have $23 \equiv 13 \tpmod{5}$
