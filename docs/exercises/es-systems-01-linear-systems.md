---
title: "Systems of linear equations"
---

# Systems of linear equations

<div class="info-capitolo" markdown>

**Exercises · Linear systems** · chapter [6 · System of linear equations](../systems/01-linear-systems.md) · with worked solutions · [:material-file-pdf-box: Lecture notes (PDF)](../pdf/lecture-notes-linear-algebra.pdf)

</div>

<a id="box-exe_sys_gauss_unique-1"></a>

!!! esercizio "Exercise 1"

    Solve with Gaussian elimination the system

    $$
    \left\{ \begin{array}{ll}
      1 \; x_1 + 1 \; x_2 + 1 \; x_3  & = 6\\[2ex]
      2 \; x_1 + 3 \; x_2 + 1 \; x_3  & = 11\\[2ex]
      1 \; x_1 - 1 \; x_2 + 2 \; x_3  & = 5
    \end{array} \right.
    $$

??? soluzione "Solution"

    $$
    ({\boldsymbol A} | {\boldsymbol b}) =
    \left(\begin{array}{ccc|c}
    1 & 1 & 1 & 6 \\
    2 & 3 & 1 & 11 \\
    1 & -1 & 2 & 5
    \end{array}\right)
    $$

    $R_2 \leftarrow R_2 - 2 \; R_1$ and $R_3 \leftarrow R_3 - R_1$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 1 & 1 & 6 \\
    0 & 1 & -1 & -1 \\
    0 & -2 & 1 & -1
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 + 2 \; R_2$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 1 & 1 & 6 \\
    0 & 1 & -1 & -1 \\
    0 & 0 & -1 & -3
    \end{array}\right)
    $$

    Backward substitution:

    $$
    -x_3 = -3 ~\Longrightarrow~ x_3 = 3,
    \qquad
    x_2 = -1 + x_3 = 2,
    \qquad
    x_1 = 6 - x_2 - x_3 = 1.
    $$

    Hence ${\boldsymbol x} = (1, 2, 3)'$. Verification: $2 + 6 + 3 = 11$ and $1 - 2 + 6 = 5$ $\checkmark$

<a id="box-exe_sys_gauss_swap-2"></a>

!!! esercizio "Exercise 2"

    Solve with Gaussian elimination the system

    $$
    \left\{ \begin{array}{ll}
      \phantom{1 \; x_1 +{}} 2 \; x_2 + 1 \; x_3  & = -1\\[2ex]
      1 \; x_1 - 1 \; x_2 + 2 \; x_3  & = 5\\[2ex]
      2 \; x_1 + 1 \; x_2 + 1 \; x_3  & = 4
    \end{array} \right.
    $$

??? soluzione "Solution"

    $$
    ({\boldsymbol A} | {\boldsymbol b}) =
    \left(\begin{array}{ccc|c}
    0 & 2 & 1 & -1 \\
    1 & -1 & 2 & 5 \\
    2 & 1 & 1 & 4
    \end{array}\right)
    $$

    The entry in position $(1,1)$ is zero. $R_1 \leftrightarrow R_2$:

    $$
    \left(\begin{array}{ccc|c}
    1 & -1 & 2 & 5 \\
    0 & 2 & 1 & -1 \\
    2 & 1 & 1 & 4
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 - 2 \; R_1$:

    $$
    \left(\begin{array}{ccc|c}
    1 & -1 & 2 & 5 \\
    0 & 2 & 1 & -1 \\
    0 & 3 & -3 & -6
    \end{array}\right)
    $$

    $R_3 \leftarrow \frac{1}{3} \; R_3$, then $R_2 \leftrightarrow R_3$ (to avoid fractions):

    $$
    \left(\begin{array}{ccc|c}
    1 & -1 & 2 & 5 \\
    0 & 1 & -1 & -2 \\
    0 & 2 & 1 & -1
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 - 2 \; R_2$:

    $$
    \left(\begin{array}{ccc|c}
    1 & -1 & 2 & 5 \\
    0 & 1 & -1 & -2 \\
    0 & 0 & 3 & 3
    \end{array}\right)
    $$

    Backward substitution:

    $$
    x_3 = 1,
    \qquad
    x_2 = -2 + x_3 = -1,
    \qquad
    x_1 = 5 + x_2 - 2 \; x_3 = 5 - 1 - 2 = 2.
    $$

    Hence ${\boldsymbol x} = (2, -1, 1)'$. Verification: $-2 + 1 = -1$, $2 + 1 + 2 = 5$, $4 - 1 + 1 = 4$ $\checkmark$

<a id="box-exe_sys_infinite_one-3"></a>

!!! esercizio "Exercise 3"

    Solve with Gaussian elimination the system below and write its solutions in the parametric form ${\boldsymbol x} = {\boldsymbol x}_0 + t \; {\boldsymbol v}$:

    $$
    \left\{ \begin{array}{ll}
      1 \; x_1 - 1 \; x_2 + 2 \; x_3  & = 1\\[2ex]
      2 \; x_1 - 1 \; x_2 + 5 \; x_3  & = 4\\[2ex]
      1 \; x_1 \phantom{{}- 1 \; x_2} + 3 \; x_3  & = 3
    \end{array} \right.
    $$

??? soluzione "Solution"

    $$
    ({\boldsymbol A} | {\boldsymbol b}) =
    \left(\begin{array}{ccc|c}
    1 & -1 & 2 & 1 \\
    2 & -1 & 5 & 4 \\
    1 & 0 & 3 & 3
    \end{array}\right)
    $$

    $R_2 \leftarrow R_2 - 2 \; R_1$ and $R_3 \leftarrow R_3 - R_1$:

    $$
    \left(\begin{array}{ccc|c}
    1 & -1 & 2 & 1 \\
    0 & 1 & 1 & 2 \\
    0 & 1 & 1 & 2
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 - R_2$:

    $$
    \left(\begin{array}{ccc|c}
    1 & -1 & 2 & 1 \\
    0 & 1 & 1 & 2 \\
    0 & 0 & 0 & 0
    \end{array}\right)
    $$

    $\text{rank}({\boldsymbol A}) = \text{rank}({\boldsymbol A} | {\boldsymbol b}) = 2 < 3$: infinitely many solutions with $3 - 2 = 1$ free parameter. Setting $x_3 = t$:

    $$
    x_2 = 2 - t,
    \qquad
    x_1 = 1 + x_2 - 2 \; x_3 = 1 + 2 - t - 2t = 3 - 3t,
    $$

    $$
    {\boldsymbol x} =
    \begin{pmatrix}
    3 - 3t \\
    2 - t \\
    t
    \end{pmatrix}
    =
    \begin{pmatrix}
    3 \\
    2 \\
    0
    \end{pmatrix}
    + t
    \begin{pmatrix}
    -3 \\
    -1 \\
    1
    \end{pmatrix},
    \qquad t \in \R.
    $$

<a id="box-exe_sys_infinite_two-4"></a>

!!! esercizio "Exercise 4"

    Solve the system of $2$ equations in $4$ variables

    $$
    \left\{ \begin{array}{ll}
      1 \; x_1 + 2 \; x_2 - 1 \; x_3 + 1 \; x_4  & = 2\\[2ex]
      2 \; x_1 + 4 \; x_2 - 1 \; x_3 + 3 \; x_4  & = 5
    \end{array} \right.
    $$

??? soluzione "Solution"

    $$
    ({\boldsymbol A} | {\boldsymbol b}) =
    \left(\begin{array}{cccc|c}
    1 & 2 & -1 & 1 & 2 \\
    2 & 4 & -1 & 3 & 5
    \end{array}\right)
    \qquad
    R_2 \leftarrow R_2 - 2 \; R_1:
    \qquad
    \left(\begin{array}{cccc|c}
    1 & 2 & -1 & 1 & 2 \\
    0 & 0 & 1 & 1 & 1
    \end{array}\right)
    $$

    $\text{rank}({\boldsymbol A}) = \text{rank}({\boldsymbol A} | {\boldsymbol b}) = 2 < 4$: infinitely many solutions with $4 - 2 = 2$ free parameters. The pivots are in the columns of $x_1$ and $x_3$, so $x_2 = s$ and $x_4 = t$ are free:

    $$
    x_3 = 1 - x_4 = 1 - t,
    \qquad
    x_1 = 2 - 2 \; x_2 + x_3 - x_4 = 2 - 2s + 1 - t - t = 3 - 2s - 2t,
    $$

    $$
    {\boldsymbol x} =
    \begin{pmatrix}
    3 \\
    0 \\
    1 \\
    0
    \end{pmatrix}
    + s
    \begin{pmatrix}
    -2 \\
    1 \\
    0 \\
    0
    \end{pmatrix}
    + t
    \begin{pmatrix}
    -2 \\
    0 \\
    -1 \\
    1
    \end{pmatrix},
    \qquad s, t \in \R.
    $$

<a id="box-exe_sys_inconsistent-5"></a>

!!! esercizio "Exercise 5"

    Show that the following system has no solution:

    $$
    \left\{ \begin{array}{ll}
      1 \; x_1 + 2 \; x_2 + 1 \; x_3  & = 1\\[2ex]
      2 \; x_1 + 3 \; x_2 + 1 \; x_3  & = 2\\[2ex]
      3 \; x_1 + 5 \; x_2 + 2 \; x_3  & = 4
    \end{array} \right.
    $$

??? soluzione "Solution"

    $$
    ({\boldsymbol A} | {\boldsymbol b}) =
    \left(\begin{array}{ccc|c}
    1 & 2 & 1 & 1 \\
    2 & 3 & 1 & 2 \\
    3 & 5 & 2 & 4
    \end{array}\right)
    $$

    $R_2 \leftarrow R_2 - 2 \; R_1$ and $R_3 \leftarrow R_3 - 3 \; R_1$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 2 & 1 & 1 \\
    0 & -1 & -1 & 0 \\
    0 & -1 & -1 & 1
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 - R_2$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 2 & 1 & 1 \\
    0 & -1 & -1 & 0 \\
    0 & 0 & 0 & 1
    \end{array}\right)
    $$

    The last row reads $0 = 1$: $\text{rank}({\boldsymbol A}) = 2 < 3 = \text{rank}({\boldsymbol A} | {\boldsymbol b})$, hence by the Rouché–Capelli theorem the system has <strong>no solution</strong>. (Note that the third row of ${\boldsymbol A}$ is the sum of the first two, while $4 \neq 1 + 2$.)

<a id="box-exe_sys_rouche_capelli-6"></a>

!!! esercizio "Exercise 6"

    The following augmented matrices are already in row echelon form. Using the Rouché–Capelli theorem, say whether each system has a unique solution, infinitely many solutions or no solution (variables $x_1, x_2, x_3$). Then solve the systems which have solutions.

    $$
    {\rm a)}~
    \left(\begin{array}{ccc|c}
    1 & 2 & 3 & 1 \\
    0 & 1 & 4 & 2 \\
    0 & 0 & 5 & 3
    \end{array}\right)
    \qquad
    {\rm b)}~
    \left(\begin{array}{ccc|c}
    1 & 2 & 3 & 1 \\
    0 & 0 & 1 & 2 \\
    0 & 0 & 0 & 0
    \end{array}\right)
    \qquad
    {\rm c)}~
    \left(\begin{array}{ccc|c}
    1 & 2 & 3 & 1 \\
    0 & 1 & 1 & 2 \\
    0 & 0 & 0 & 4
    \end{array}\right)
    $$

??? soluzione "Solution"

    - **a)** $\text{rank}({\boldsymbol A}) = \text{rank}({\boldsymbol A} | {\boldsymbol b}) = 3 = n$: <strong>unique solution</strong>. $x_3 = \frac{3}{5}$, $x_2 = 2 - 4 \; x_3 = -\frac{2}{5}$, $x_1 = 1 - 2 \; x_2 - 3 \; x_3 = 1 + \frac{4}{5} - \frac{9}{5} = 0$. Hence ${\boldsymbol x} = \left(0, -\frac{2}{5}, \frac{3}{5}\right)'$.

    - **b)** $\text{rank}({\boldsymbol A}) = \text{rank}({\boldsymbol A} | {\boldsymbol b}) = 2 < 3$: <strong>infinitely many solutions</strong> with $1$ free parameter. The pivots are in the columns of $x_1$ and $x_3$, so $x_2 = t$ is free: $x_3 = 2$, $x_1 = 1 - 2t - 3 \cdot 2 = -5 - 2t$, i.e., ${\boldsymbol x} = (-5, 0, 2)' + t \; (-2, 1, 0)'$, $t \in \R$.

    - **c)** $\text{rank}({\boldsymbol A}) = 2 < 3 = \text{rank}({\boldsymbol A} | {\boldsymbol b})$ (the last row reads $0 = 4$): <strong>no solution</strong>.

<a id="box-exe_sys_parametric-7"></a>

!!! esercizio "Exercise 7"

    Discuss, as $k \in \R$ varies, the number of solutions of the system

    $$
    \left\{ \begin{array}{ll}
      1 \; x_1 + 1 \; x_2 + k \; x_3  & = 1\\[2ex]
      1 \; x_1 + k \; x_2 + 1 \; x_3  & = 1\\[2ex]
      k \; x_1 + 1 \; x_2 + 1 \; x_3  & = 1
    \end{array} \right.
    $$

    and solve it whenever it has solutions.

??? soluzione "Solution"

    $$
    ({\boldsymbol A} | {\boldsymbol b}) =
    \left(\begin{array}{ccc|c}
    1 & 1 & k & 1 \\
    1 & k & 1 & 1 \\
    k & 1 & 1 & 1
    \end{array}\right)
    $$

    $R_2 \leftarrow R_2 - R_1$ and $R_3 \leftarrow R_3 - k \; R_1$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 1 & k & 1 \\
    0 & k-1 & 1-k & 0 \\
    0 & 1-k & 1-k^2 & 1-k
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 + R_2$ (note that $(1-k) + (1-k^2) = (1-k)(2+k)$):

    $$
    \left(\begin{array}{ccc|c}
    1 & 1 & k & 1 \\
    0 & k-1 & 1-k & 0 \\
    0 & 0 & (1-k)(2+k) & 1-k
    \end{array}\right)
    $$

    - <strong>Case $k \neq 1$ and $k \neq -2$</strong>: three pivots, $\text{rank}({\boldsymbol A}) = \text{rank}({\boldsymbol A} | {\boldsymbol b}) = 3$, <strong>unique solution</strong>. Dividing by $1-k \neq 0$: $(2+k) \; x_3 = 1$, i.e., $x_3 = \frac{1}{k+2}$; the second row gives $(k-1)(x_2 - x_3) = 0$, i.e., $x_2 = x_3 = \frac{1}{k+2}$; finally $x_1 = 1 - x_2 - k \; x_3 = 1 - \frac{1+k}{k+2} = \frac{1}{k+2}$. Hence

        $$
        {\boldsymbol x} = \frac{1}{k+2} \; (1, 1, 1)'.
        $$

    - <strong>Case $k = 1$</strong>: the second and third rows become zero rows. $\text{rank}({\boldsymbol A}) = \text{rank}({\boldsymbol A} | {\boldsymbol b}) = 1 < 3$: <strong>infinitely many solutions</strong> with $2$ free parameters. The system reduces to $x_1 + x_2 + x_3 = 1$; with $x_2 = s$, $x_3 = t$: ${\boldsymbol x} = (1 - s - t, \; s, \; t)'$, $s, t \in \R$.

    - <strong>Case $k = -2$</strong>: the last row becomes $\left(\begin{array}{ccc|c} 0 & 0 & 0 & 3 \end{array}\right)$, i.e., $0 = 3$. $\text{rank}({\boldsymbol A}) = 2 < 3 = \text{rank}({\boldsymbol A} | {\boldsymbol b})$: <strong>no solution</strong>.

    (Consistently, $\det({\boldsymbol A}) = -(k-1)^2 (k+2)$ vanishes exactly for $k = 1$ and $k = -2$.)

<a id="box-exe_sys_homogeneous-8"></a>

!!! esercizio "Exercise 8"

    Find the values of $k \in \R$ for which the homogeneous system

    $$
    \left\{ \begin{array}{ll}
      1 \; x_1 + 2 \; x_2 + 1 \; x_3  & = 0\\[2ex]
      2 \; x_1 + k \; x_2 + 3 \; x_3  & = 0\\[2ex]
      1 \; x_1 + 1 \; x_2 + 2 \; x_3  & = 0
    \end{array} \right.
    $$

    has nontrivial solutions, and compute them.

??? soluzione "Solution"

    The matrix ${\boldsymbol A}$ is square, so there are nontrivial solutions if and only if $\det({\boldsymbol A}) = 0$. By the Sarrus rule:

    $$
    \det({\boldsymbol A}) = 2k + 6 + 2 - k - 8 - 3 = k - 3,
    $$

    hence nontrivial solutions exist if and only if $k = 3$ (for $k \neq 3$ the only solution is ${\boldsymbol x} = {\boldsymbol 0}$).

    For $k = 3$, $R_2 \leftarrow R_2 - 2 \; R_1$ and $R_3 \leftarrow R_3 - R_1$, then $R_3 \leftarrow R_3 - R_2$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 2 & 1 & 0 \\
    2 & 3 & 3 & 0 \\
    1 & 1 & 2 & 0
    \end{array}\right)
    \rightarrow
    \left(\begin{array}{ccc|c}
    1 & 2 & 1 & 0 \\
    0 & -1 & 1 & 0 \\
    0 & -1 & 1 & 0
    \end{array}\right)
    \rightarrow
    \left(\begin{array}{ccc|c}
    1 & 2 & 1 & 0 \\
    0 & -1 & 1 & 0 \\
    0 & 0 & 0 & 0
    \end{array}\right)
    $$

    Setting $x_3 = t$: $x_2 = x_3 = t$ and $x_1 = -2 \; x_2 - x_3 = -3t$. Hence

    $$
    {\boldsymbol x} = t \; (-3, 1, 1)', \qquad t \in \R.
    $$

<a id="box-exe_sys_cramer_2x2-9"></a>

!!! esercizio "Exercise 9"

    Solve with Cramer's rule the system

    $$
    \left\{ \begin{array}{ll}
      3 \; x_1 + 2 \; x_2  & = 7\\[2ex]
      1 \; x_1 - 1 \; x_2  & = -1
    \end{array} \right.
    $$

??? soluzione "Solution"

    $$
    {\boldsymbol  A}=
    \begin{pmatrix}
    3 & 2 \\[1ex]
    1 & -1
    \end{pmatrix}
    \qquad
    {\boldsymbol  A}_1=
    \begin{pmatrix}
    7 & 2 \\[1ex]
    -1 & -1
    \end{pmatrix}
    \qquad
    {\boldsymbol  A}_2=
    \begin{pmatrix}
    3 & 7 \\[1ex]
    1 & -1
    \end{pmatrix}
    $$

    \begin{align*}
    \det({\boldsymbol  A})   &= 3 \cdot (-1) - 2 \cdot 1 = -5\\[1ex]
    \det({\boldsymbol  A}_1) &= 7 \cdot (-1) - 2 \cdot (-1) = -5\\[1ex]
    \det({\boldsymbol  A}_2) &= 3 \cdot (-1) - 7 \cdot 1 = -10
    \end{align*}

    Since $\det({\boldsymbol A}) \neq 0$:

    $$
    (\tilde{x}_1, \tilde{x}_2) = \left(\frac{-5}{-5}, \frac{-10}{-5}\right) = (1, 2).
    $$

    Verification: $3 + 4 = 7$ and $1 - 2 = -1$ $\checkmark$

<a id="box-exe_sys_cramer_3x3-10"></a>

!!! esercizio "Exercise 10"

    Solve with Cramer's rule the system

    $$
    \left\{ \begin{array}{ll}
      1 \; x_1 + 1 \; x_2 + 1 \; x_3  & = 6\\[2ex]
      1 \; x_1 - 1 \; x_2 + 2 \; x_3  & = 5\\[2ex]
      2 \; x_1 + 1 \; x_2 - 1 \; x_3  & = 1
    \end{array} \right.
    $$

??? soluzione "Solution"

    $$
    {\boldsymbol  A}=
    \begin{pmatrix}
    1 & 1 & 1 \\
    1 & -1 & 2 \\
    2 & 1 & -1
    \end{pmatrix}
    \qquad
    {\boldsymbol  A}_1=
    \begin{pmatrix}
    6 & 1 & 1 \\
    5 & -1 & 2 \\
    1 & 1 & -1
    \end{pmatrix}
    $$

    $$
    {\boldsymbol  A}_2=
    \begin{pmatrix}
    1 & 6 & 1 \\
    1 & 5 & 2 \\
    2 & 1 & -1
    \end{pmatrix}
    \qquad
    {\boldsymbol  A}_3=
    \begin{pmatrix}
    1 & 1 & 6 \\
    1 & -1 & 5 \\
    2 & 1 & 1
    \end{pmatrix}
    $$

    By the Sarrus rule:

    \begin{align*}
    \det({\boldsymbol  A})   &= 1 + 4 + 1 - (-2) - (-1) - 2 = 7\\[1ex]
    \det({\boldsymbol  A}_1) &= 6 + 2 + 5 - (-1) - (-5) - 12 = 7\\[1ex]
    \det({\boldsymbol  A}_2) &= -5 + 24 + 1 - 10 - (-6) - 2 = 14\\[1ex]
    \det({\boldsymbol  A}_3) &= -1 + 10 + 6 - (-12) - 1 - 5 = 21
    \end{align*}

    Since $\det({\boldsymbol A}) \neq 0$:

    $$
    (\tilde{x}_1, \tilde{x}_2, \tilde{x}_3) = \left(\frac{7}{7}, \frac{14}{7}, \frac{21}{7}\right) = (1, 2, 3).
    $$

    Verification: $1 + 2 + 3 = 6$, $1 - 2 + 6 = 5$, $2 + 2 - 3 = 1$ $\checkmark$

<a id="box-exe_sys_lu-11"></a>

!!! esercizio "Exercise 11"

    Given the LU factorization ${\boldsymbol A} = {\boldsymbol L} \; {\boldsymbol U}$ with

    $$
    {\boldsymbol L} =
    \begin{pmatrix}
    1 & 0 & 0 \\
    3 & 1 & 0 \\
    -1 & 2 & 1
    \end{pmatrix}
    \qquad
    {\boldsymbol U} =
    \begin{pmatrix}
    2 & 1 & -1 \\
    0 & 1 & 2 \\
    0 & 0 & 3
    \end{pmatrix},
    $$

    solve the system ${\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol b}$ with ${\boldsymbol b} = (-1, 0, 13)'$.

??? soluzione "Solution"

    <strong>Step 1 - Forward substitution:</strong> solve ${\boldsymbol L} \; {\boldsymbol y} = {\boldsymbol b}$:

    $$
    y_1 = -1,
    \qquad
    y_2 = 0 - 3 \; y_1 = 3,
    \qquad
    y_3 = 13 - (-1) \; y_1 - 2 \; y_2 = 13 - 1 - 6 = 6.
    $$

    <strong>Step 2 - Backward substitution:</strong> solve ${\boldsymbol U} \; {\boldsymbol x} = {\boldsymbol y}$ with ${\boldsymbol y} = (-1, 3, 6)'$:

    $$
    3 \; x_3 = 6 ~\Longrightarrow~ x_3 = 2,
    \qquad
    x_2 = 3 - 2 \; x_3 = -1,
    $$

    $$
    2 \; x_1 = -1 - x_2 + x_3 = -1 + 1 + 2 = 2 ~\Longrightarrow~ x_1 = 1.
    $$

    Hence ${\boldsymbol x} = (1, -1, 2)'$.

    <strong>Verification:</strong>

    $$
    {\boldsymbol A} = {\boldsymbol L} \; {\boldsymbol U} =
    \begin{pmatrix}
    2 & 1 & -1 \\
    6 & 4 & -1 \\
    -2 & 1 & 8
    \end{pmatrix},
    \qquad
    {\boldsymbol A} \; {\boldsymbol x} =
    \begin{pmatrix}
    2 - 1 - 2 \\
    6 - 4 - 2 \\
    -2 - 1 + 16
    \end{pmatrix}
    =
    \begin{pmatrix}
    -1 \\
    0 \\
    13
    \end{pmatrix}
    = {\boldsymbol b} \quad \checkmark
    $$
