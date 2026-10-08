---
title: "Absolute value"
---

# Absolute value

<div class="info-capitolo" markdown>

**Exercises · Further topics** · chapter [A.1 · Absolute value](../extras/01-absolute-value.md) · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-extras-01-absolute-value.pdf)

</div>

<a id="box-exe_abs_compute-1"></a>

!!! esercizio "Exercise 1"

    Using the definition of absolute value, compute:

    $$
    {\rm a)}~ |-3| + |2-7| - |-4| \; \left|\frac{1}{2}\right|, \qquad {\rm b)}~ |3 - \pi|, \qquad {\rm c)}~ \left| \frac{1}{3} - \frac{1}{2}\right|
    $$

??? soluzione "Solution"

    - **a)** Since $-3<0$, $2-7=-5<0$, $-4<0$ and $\frac{1}{2} \ge 0$:

        $$
        |-3| + |2-7| - |-4| \; \left|\frac{1}{2}\right| = 3 + 5 - 4 \cdot \frac{1}{2} = 6
        $$

    - **b)** Since $\pi > 3$, we have $3 - \pi < 0$ and then $|3-\pi| = -(3-\pi) = \pi - 3$.

    - **c)** Since $\frac{1}{3} - \frac{1}{2} = -\frac{1}{6} < 0$, we have $\left| \frac{1}{3} - \frac{1}{2}\right| = \frac{1}{6}$.

<a id="box-exe_abs_basic_properties-2"></a>

!!! esercizio "Exercise 2"

    Prove that for every real number $b$ we have:

    $$
    {\rm a)}~ |b| \ge 0 {\rm ~~and~~} |b| = 0 \Longleftrightarrow b = 0, \qquad {\rm b)}~ -|b| \le b \le |b|, \qquad {\rm c)}~ |b|^2 = b^2
    $$

??? soluzione "Solution"

    We distinguish the two cases of the definition of absolute value.

    - If $b \ge 0$, then $|b| = b \ge 0$; moreover $|b|=0$ if and only if $b=0$; we have $-|b| = -b \le 0 \le b = |b|$; finally $|b|^2 = b^2$.

    - If $b < 0$, then $|b| = -b > 0$ (in particular $|b| \neq 0$); we have $-|b| = b < 0 < -b = |b|$; finally $|b|^2 = (-b)^2 = b^2$.

    In both cases a), b) and c) hold.

<a id="box-exe_abs_inequalities-3"></a>

!!! esercizio "Exercise 3"

    Find all real numbers $x$ such that:

    $$
    {\rm a)}~ |x-2| < 3, \qquad {\rm b)}~ |2\:x+1| \le 5, \qquad {\rm c)}~ |x - 4| \ge 1
    $$

??? soluzione "Solution"

    - **a)** From $|a| < \varepsilon \Longleftrightarrow -\varepsilon < a < \varepsilon$ with $a = x-2$ and $\varepsilon = 3$:

        $$
        -3 < x - 2 < 3 \Longleftrightarrow -1 < x < 5
        $$

    - **b)** From $|a| \le \varepsilon \Longleftrightarrow -\varepsilon \le a \le \varepsilon$ with $a = 2\:x+1$ and $\varepsilon = 5$:

        $$
        -5 \le 2\:x + 1 \le 5 \Longleftrightarrow -6 \le 2\:x \le 4 \Longleftrightarrow -3 \le x \le 2
        $$

    - **c)** The inequality $|x-4| \ge 1$ is false exactly when $|x - 4| < 1$, that is when $-1 < x-4 < 1$, i.e., $3 < x < 5$. Then the solutions are:

        $$
        x \le 3 {\rm ~~~or~~~} x \ge 5
        $$

<a id="box-exe_abs_equation_two-4"></a>

!!! esercizio "Exercise 4"

    Find all real numbers $x$ such that $|x-1| = |x+3|$.

??? soluzione "Solution"

    Two real numbers have the same absolute value if and only if they are equal or opposite. Then:

    - $x - 1 = x + 3$ gives $-1 = 3$, which is impossible;

    - $x - 1 = -(x+3)$ gives $2\:x = -2$, that is $x = -1$.

    The only solution is $x=-1$. Check: $|-1-1| = 2 = |-1+3|$.

<a id="box-exe_abs_equation_sum-5"></a>

!!! esercizio "Exercise 5"

    Find all real numbers $x$ such that $|x| + |x-2| = 4$.

??? soluzione "Solution"

    The signs of $x$ and $x-2$ change at $x=0$ and $x=2$, so we distinguish three cases:

    - $x < 0$: $|x| = -x$ and $|x-2| = 2-x$, then $-2\:x + 2 = 4$, i.e., $x = -1$, which satisfies $x<0$;

    - $0 \le x < 2$: $|x| = x$ and $|x-2| = 2-x$, then $x + 2 - x = 2 = 4$, which is impossible;

    - $x \ge 2$: $|x| = x$ and $|x-2| = x-2$, then $2\:x - 2 = 4$, i.e., $x = 3$, which satisfies $x \ge 2$.

    The solutions are $x=-1$ and $x=3$.

<a id="box-exe_abs_triangle_equality-6"></a>

!!! esercizio "Exercise 6"

    Prove that for every pair of real numbers $b$ and $c$:

    $$
    |b+c| = |b| + |c| \Longleftrightarrow b\:c \ge 0
    $$

??? soluzione "Solution"

    Both $|b+c|$ and $|b|+|c|$ are non-negative, and two non-negative numbers are equal if and only if their squares are equal. Using Exercise [Exercise 2](#box-exe_abs_basic_properties-2) c) and $|b\:c| = |b|\:|c|$, we have:

    $$
    |b+c|^2 = (b+c)^2 = b^2 + 2\:b\:c + c^2, \qquad \big(|b| + |c|\big)^2 = b^2 + 2\:|b\:c| + c^2
    $$

    Then $|b+c| = |b| + |c|$ if and only if $b\:c = |b\:c|$, that is (by definition of absolute value) if and only if $b\:c \ge 0$.

<a id="box-exe_abs_triangle_check-7"></a>

!!! esercizio "Exercise 7"

    Verify the triangle inequality $|b+c| \le |b| + |c|$ and the reverse triangle inequality $\big|\,|b| - |c|\,\big| \le |b - c|$ for $b = 5$ and $c = -3$.

??? soluzione "Solution"

    We have $|b| = 5$ and $|c| = 3$.

    - Triangle inequality: $|b+c| = |5-3| = 2 \le 8 = |b| + |c|$.

    - Reverse triangle inequality: $\big|\,|b| - |c|\,\big| = |5 - 3| = 2 \le 8 = |5-(-3)| = |b-c|$.

    The triangle inequality holds with the strict inequality, in agreement with Exercise [Exercise 6](#box-exe_abs_triangle_equality-6), since $b\:c = -15 < 0$.

<a id="box-exe_abs_bound-8"></a>

!!! esercizio "Exercise 8"

    Let $x$ be a real number such that $|x - 3| \le 1$. Prove that:

    $$
    {\rm a)}~ |x| \le 4, \qquad {\rm b)}~ |x^2 - 9| \le 7
    $$

    and show that the bound in b) cannot be improved.

??? soluzione "Solution"

    - **a)** From the form $|g| \le |g-h| + |h|$ of the triangle inequality, with $g = x$ and $h = 3$:

        $$
        |x| \le |x-3| + |3| \le 1 + 3 = 4
        $$

    - **b)** We have $x^2 - 9 = (x-3)\:(x+3)$ and then $|x^2 - 9| = |x-3| \; |x+3|$. From the triangle inequality:

        $$
        |x+3| = |(x-3) + 6| \le |x-3| + 6 \le 7
        $$

        and therefore $|x^2-9| = |x-3|\; |x+3| \le 1 \cdot 7 = 7$.

    The bound cannot be improved: for $x=4$ (which satisfies $|4-3| = 1$) we have $|16 - 9| = 7$.
