---
title: "System of linear equations"
---

# System of linear equations

<div class="info-capitolo" markdown>

**Linear systems · Chapter 6** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes (PDF)](../pdf/lecture-notes-linear-algebra.pdf)

</div>

## 1. Existence and uniqueness of solutions

!!! chiave ""

    Consider a system of $m$ linear equations with $n$ variables:

    $$
    {\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol b}
    $$

    where:

    - ${\boldsymbol A} \in \R^{m \times n}$ is the coefficient matrix ($m$ equations, $n$ variables)

    - ${\boldsymbol x} \in \R^{n \times 1}$ is the vector of variables

    - ${\boldsymbol b} \in \R^{m \times 1}$ is the right-hand side vector

    - $({\boldsymbol A} | {\boldsymbol b}) \in \R^{m \times (n+1)}$ is the augmented matrix

    <strong>Rouché–Capelli theorem.</strong> The existence and uniqueness of solutions to the system ${\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol b}$ depend on the rank of the coefficient matrix ${\boldsymbol A}$ and the rank of the augmented matrix $({\boldsymbol A} | {\boldsymbol b})$.

    <strong>Case 1 - No solution (inconsistent system):</strong>

    $$
    \text{rank}({\boldsymbol A}) < \text{rank}({\boldsymbol A} | {\boldsymbol b})
    $$

    The system is inconsistent and has no solution.

    <strong>Case 2 - Unique solution:</strong>

    $$
    \text{rank}({\boldsymbol A}) = \text{rank}({\boldsymbol A} | {\boldsymbol b}) = n
    $$

    The system has a unique solution.

    <strong>Case 3 - Infinite solutions:</strong>

    $$
    \text{rank}({\boldsymbol A}) = \text{rank}({\boldsymbol A} | {\boldsymbol b}) < n
    $$

    The system has infinitely many solutions with $n - \text{rank}({\boldsymbol A})$ degrees of freedom (free variables). If $r=\text{rank}({\boldsymbol A})$, the solutions can be described by means of $n-r$ <strong>free parameters</strong>.

- Since $({\boldsymbol A} | {\boldsymbol b})$ is obtained from ${\boldsymbol A}$ by adding one column, we always have

    $$
    \text{rank}({\boldsymbol A}) \le \text{rank}({\boldsymbol A} | {\boldsymbol b}) \le \text{rank}({\boldsymbol A}) + 1,
    $$

    so the three cases above cover all the possibilities. In particular, the system has at least one solution (it is <strong>consistent</strong>) if and only if $\text{rank}({\boldsymbol A}) = \text{rank}({\boldsymbol A} | {\boldsymbol b})$.

- Since $\text{rank}({\boldsymbol A}) \le \min\{m,n\}$, a unique solution is possible only if $m \ge n$.

- If ${\boldsymbol A} \in \R^{n \times n}$ is square, recall that $\text{rank}({\boldsymbol A})=n$ if and only if $\det({\boldsymbol A}) \neq 0$. Hence, if $\det({\boldsymbol A}) \neq 0$, then also $\text{rank}({\boldsymbol A} | {\boldsymbol b})=n$ and the system has a unique solution, for every right-hand side ${\boldsymbol b}$.

## 2. Gaussian Elimination Method

!!! chiave ""

    The <strong>Gaussian elimination method</strong> is an algorithm for solving systems of linear equations by transforming the augmented matrix $({\boldsymbol A} | {\boldsymbol b})$ into <strong>row echelon form</strong> (upper triangular form) through elementary row operations.

- Given the system of linear equations:

    $$
    {\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol b}
    $$

    we form the <strong>augmented matrix</strong>:

    $$
    ({\boldsymbol A} | {\boldsymbol b})
    $$

- The method consists of two phases:

    <strong>Phase 1 - Forward elimination:</strong> Transform the augmented matrix into upper triangular form using elementary row operations:

    - Swap two rows

    - Multiply a row by a non-zero scalar

    - Add a multiple of one row to another row

    The goal is to create zeros below the diagonal, obtaining:

    $$
    \left(\begin{array}{cccc|c}
    \tilde{a}_{11} & \tilde{a}_{12} & \cdots & \tilde{a}_{1n} & \tilde{b}_1 \\
    0 & \tilde{a}_{22} & \cdots & \tilde{a}_{2n} & \tilde{b}_2 \\
    \vdots & \vdots & \ddots & \vdots & \vdots \\
    0 & 0 & \cdots & \tilde{a}_{nn} & \tilde{b}_n
    \end{array}\right)
    $$

    <strong>Phase 2 - Backward substitution:</strong> Solve the upper triangular system from bottom to top (assuming $\tilde{a}_{ii} \neq 0$ for all $i$):

    \begin{align*}
    x_n &= \frac{\tilde{b}_n}{\tilde{a}_{nn}}\\
    x_{n-1} &= \frac{\tilde{b}_{n-1} - \tilde{a}_{n-1,n} \; x_n}{\tilde{a}_{n-1,n-1}}\\
    &\vdots\\
    x_i &= \frac{\tilde{b}_i - \sum_{j=i+1}^{n} \tilde{a}_{ij} \; x_j}{\tilde{a}_{ii}}
    \end{align*}

!!! chiave ""

    <strong>Elementary row operations:</strong>

    - $R_i \leftrightarrow R_j$ : swap row $i$ with row $j$

    - $R_i \leftarrow k \; R_i$ : multiply row $i$ by scalar $k \neq 0$

    - $R_i \leftarrow R_i + k \; R_j$ : add $k$ times row $j$ to row $i$

    These operations do not change the solution set of the system.

<a id="box-texexpbox1a-1"></a>

!!! esempio "Example 1: Solving a system using Gaussian elimination - Part 1"

    Consider the system of linear equations:

    $$
    \left\{ \begin{array}{ll}
      2 \; x_1 + 1 \; x_2 + 1 \; x_3  & = 4\\[2ex]
      4 \; x_1 + 3 \; x_2 + 3 \; x_3  & = 10\\[2ex]
      8 \; x_1 + 7 \; x_2 + 9 \; x_3  & = 24
    \end{array} \right.
    $$

    <strong>Augmented matrix:</strong>

    $$
    ({\boldsymbol A} | {\boldsymbol b}) = 
    \left(\begin{array}{ccc|c}
    2 & 1 & 1 & 4 \\
    4 & 3 & 3 & 10 \\
    8 & 7 & 9 & 24
    \end{array}\right)
    $$

    <strong>Step 1:</strong> Eliminate $x_1$ from rows 2 and 3

    $R_2 \leftarrow R_2 - 2 \; R_1$ (subtract $2$ times row 1 from row 2):

    $$
    \left(\begin{array}{ccc|c}
    2 & 1 & 1 & 4 \\
    0 & 1 & 1 & 2 \\
    8 & 7 & 9 & 24
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 - 4 \; R_1$ (subtract $4$ times row 1 from row 3):

    $$
    \left(\begin{array}{ccc|c}
    2 & 1 & 1 & 4 \\
    0 & 1 & 1 & 2 \\
    0 & 3 & 5 & 8
    \end{array}\right)
    $$

    <strong>Step 2:</strong> Eliminate $x_2$ from row 3

    $R_3 \leftarrow R_3 - 3 \; R_2$ (subtract $3$ times row 2 from row 3):

    $$
    \left(\begin{array}{ccc|c}
    2 & 1 & 1 & 4 \\
    0 & 1 & 1 & 2 \\
    0 & 0 & 2 & 2
    \end{array}\right)
    $$

    <strong>Upper triangular form achieved!</strong> The corresponding system is:

    $$
    \left\{ \begin{array}{ll}
      2 \; x_1 + 1 \; x_2 + 1 \; x_3  & = 4\\[2ex]
      1 \; x_2 + 1 \; x_3  & = 2\\[2ex]
      2 \; x_3  & = 2
    \end{array} \right.
    $$

<a id="box-texexpbox1c-2"></a>

!!! esempio "Example 2: Solving a system using Gaussian elimination - Part 2"

    <strong>Backward substitution:</strong>

    From the third equation:

    $$
    2 \; x_3 = 2 ~~\Longrightarrow~~ x_3 = 1
    $$

    From the second equation:

    $$
    x_2 + x_3 = 2 ~~\Longrightarrow~~ x_2 = 2 - x_3 = 2 - 1 = 1
    $$

    From the first equation:

    $$
    2 \; x_1 + x_2 + x_3 = 4 ~~\Longrightarrow~~ 2 \; x_1 = 4 - x_2 - x_3 = 4 - 1 - 1 = 2 ~~\Longrightarrow~~ x_1 = 1
    $$

    <strong>Solution:</strong>

    $$
    {\boldsymbol x} = 
    \begin{pmatrix}
    x_1 \\
    x_2 \\
    x_3
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 \\
    1 \\
    1
    \end{pmatrix}
    $$

    <strong>Verification:</strong>

    $$
    {\boldsymbol A} \; {\boldsymbol x} = 
    \begin{pmatrix}
    2 & 1 & 1 \\
    4 & 3 & 3 \\
    8 & 7 & 9
    \end{pmatrix}
    \begin{pmatrix}
    1 \\
    1 \\
    1
    \end{pmatrix}
    =
    \begin{pmatrix}
    2+1+1 \\
    4+3+3 \\
    8+7+9
    \end{pmatrix}
    =
    \begin{pmatrix}
    4 \\
    10 \\
    24
    \end{pmatrix}
    = {\boldsymbol b} \quad \checkmark
    $$

## 3. Gaussian elimination and the Rouché–Capelli theorem

- Gaussian elimination can be applied to any system ${\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol b}$, with ${\boldsymbol A} \in \R^{m \times n}$. In general, forward elimination transforms $({\boldsymbol A} | {\boldsymbol b})$ into <strong>row echelon form</strong>: in each nonzero row, the first nonzero entry (called <strong>pivot</strong>) is strictly to the right of the pivot of the row above, and the rows of zeros (if any) are at the bottom.

- Elementary row operations do not change the solution set of the system, and they do not change the rank of ${\boldsymbol A}$ nor the rank of $({\boldsymbol A} | {\boldsymbol b})$.

- The rank of a matrix in row echelon form is equal to the number of its nonzero rows. Therefore, at the end of forward elimination we can read $\text{rank}({\boldsymbol A})$ and $\text{rank}({\boldsymbol A} | {\boldsymbol b})$ and apply the Rouché–Capelli theorem:

    - a row of the form $\left(\begin{array}{ccc|c} 0 & \cdots & 0 & c \end{array}\right)$ with $c \neq 0$ corresponds to the impossible equation $0=c$: then $\text{rank}({\boldsymbol A}) < \text{rank}({\boldsymbol A} | {\boldsymbol b})$ and the system has no solution;

    - otherwise, the variables whose columns contain a pivot are computed by backward substitution, and the remaining $n-r$ variables are the <strong>free parameters</strong>.

!!! chiave ""

    When the system has infinitely many solutions with one free parameter $t \in \R$, the solutions can be written in <strong>parametric form</strong>

    $$
    {\boldsymbol x} = {\boldsymbol x}_0 + t \; {\boldsymbol v}, \qquad t \in \R,
    $$

    where ${\boldsymbol x}_0$ is a particular solution (obtained for $t=0$) and ${\boldsymbol v}$ is a nonzero vector such that ${\boldsymbol A} \; {\boldsymbol v} = {\boldsymbol 0}$.

<a id="box-texexpboxRCunique-3"></a>

!!! esempio "Example 3: Rouché–Capelli: unique solution"

    Consider the system of linear equations:

    $$
    \left\{ \begin{array}{ll}
      \phantom{2 \; x_1 +{}} 1 \; x_2 + 1 \; x_3  & = 1\\[2ex]
      1 \; x_1 + 1 \; x_2 + 1 \; x_3  & = 2\\[2ex]
      2 \; x_1 + 1 \; x_2 + 3 \; x_3  & = 1
    \end{array} \right.
    \qquad
    ({\boldsymbol A} | {\boldsymbol b}) =
    \left(\begin{array}{ccc|c}
    0 & 1 & 1 & 1 \\
    1 & 1 & 1 & 2 \\
    2 & 1 & 3 & 1
    \end{array}\right)
    $$

    The entry in position $(1,1)$ is zero, so we first swap rows 1 and 2.

    $R_1 \leftrightarrow R_2$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 1 & 1 & 2 \\
    0 & 1 & 1 & 1 \\
    2 & 1 & 3 & 1
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 - 2 \; R_1$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 1 & 1 & 2 \\
    0 & 1 & 1 & 1 \\
    0 & -1 & 1 & -3
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 + R_2$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 1 & 1 & 2 \\
    0 & 1 & 1 & 1 \\
    0 & 0 & 2 & -2
    \end{array}\right)
    $$

    There are $3$ nonzero rows both in ${\boldsymbol A}$ and in $({\boldsymbol A} | {\boldsymbol b})$: $\text{rank}({\boldsymbol A}) = \text{rank}({\boldsymbol A} | {\boldsymbol b}) = 3 = n$, hence the solution is unique. By backward substitution:

    $$
    2 \; x_3 = -2 ~~\Longrightarrow~~ x_3 = -1,
    \qquad
    x_2 = 1 - x_3 = 2,
    \qquad
    x_1 = 2 - x_2 - x_3 = 2 - 2 + 1 = 1,
    $$

    that is,

    $$
    {\boldsymbol x} =
    \begin{pmatrix}
    1 \\
    2 \\
    -1
    \end{pmatrix}.
    $$

<a id="box-texexpboxRCinfinite-4"></a>

!!! esempio "Example 4: Rouché–Capelli: infinitely many solutions"

    Consider the system of linear equations:

    $$
    \left\{ \begin{array}{ll}
      1 \; x_1 + 2 \; x_2 - 1 \; x_3  & = 1\\[2ex]
      2 \; x_1 + 5 \; x_2 + 1 \; x_3  & = 4\\[2ex]
      3 \; x_1 + 7 \; x_2 \phantom{{}+ 1 \; x_3}  & = 5
    \end{array} \right.
    \qquad
    ({\boldsymbol A} | {\boldsymbol b}) =
    \left(\begin{array}{ccc|c}
    1 & 2 & -1 & 1 \\
    2 & 5 & 1 & 4 \\
    3 & 7 & 0 & 5
    \end{array}\right)
    $$

    $R_2 \leftarrow R_2 - 2 \; R_1$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 2 & -1 & 1 \\
    0 & 1 & 3 & 2 \\
    3 & 7 & 0 & 5
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 - 3 \; R_1$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 2 & -1 & 1 \\
    0 & 1 & 3 & 2 \\
    0 & 1 & 3 & 2
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 - R_2$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 2 & -1 & 1 \\
    0 & 1 & 3 & 2 \\
    0 & 0 & 0 & 0
    \end{array}\right)
    $$

    There are $2$ nonzero rows both in ${\boldsymbol A}$ and in $({\boldsymbol A} | {\boldsymbol b})$: $\text{rank}({\boldsymbol A}) = \text{rank}({\boldsymbol A} | {\boldsymbol b}) = 2 < 3 = n$, hence there are infinitely many solutions with $n - r = 3 - 2 = 1$ free parameter. The pivots are in the columns of $x_1$ and $x_2$, so $x_3$ is free: we set $x_3 = t$, $t \in \R$. By backward substitution:

    $$
    x_2 = 2 - 3 \; x_3 = 2 - 3t,
    \qquad
    x_1 = 1 - 2 \; x_2 + x_3 = 1 - 4 + 6t + t = -3 + 7t.
    $$

    In parametric form:

    $$
    {\boldsymbol x} =
    \begin{pmatrix}
    -3 + 7t \\
    2 - 3t \\
    t
    \end{pmatrix}
    =
    \underbrace{\begin{pmatrix}
    -3 \\
    2 \\
    0
    \end{pmatrix}}_{{\boldsymbol x}_0}
    + t
    \underbrace{\begin{pmatrix}
    7 \\
    -3 \\
    1
    \end{pmatrix}}_{{\boldsymbol v}},
    \qquad t \in \R.
    $$

    <strong>Verification:</strong> ${\boldsymbol A} \; {\boldsymbol x}_0 = (-3+4, \; -6+10, \; -9+14)' = (1, 4, 5)' = {\boldsymbol b}$ and ${\boldsymbol A} \; {\boldsymbol v} = (7-6-1, \; 14-15+1, \; 21-21)' = {\boldsymbol 0}$, hence ${\boldsymbol A}({\boldsymbol x}_0 + t \; {\boldsymbol v}) = {\boldsymbol b}$ for every $t \in \R$ $\checkmark$

<a id="box-texexpboxRCnone-5"></a>

!!! esempio "Example 5: Rouché–Capelli: no solution"

    We change only the last right-hand side of the previous system:

    $$
    \left\{ \begin{array}{ll}
      1 \; x_1 + 2 \; x_2 - 1 \; x_3  & = 1\\[2ex]
      2 \; x_1 + 5 \; x_2 + 1 \; x_3  & = 4\\[2ex]
      3 \; x_1 + 7 \; x_2 \phantom{{}+ 1 \; x_3}  & = 6
    \end{array} \right.
    \qquad
    ({\boldsymbol A} | {\boldsymbol b}) =
    \left(\begin{array}{ccc|c}
    1 & 2 & -1 & 1 \\
    2 & 5 & 1 & 4 \\
    3 & 7 & 0 & 6
    \end{array}\right)
    $$

    With the same row operations $R_2 \leftarrow R_2 - 2 \; R_1$, $R_3 \leftarrow R_3 - 3 \; R_1$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 2 & -1 & 1 \\
    0 & 1 & 3 & 2 \\
    0 & 1 & 3 & 3
    \end{array}\right)
    $$

    $R_3 \leftarrow R_3 - R_2$:

    $$
    \left(\begin{array}{ccc|c}
    1 & 2 & -1 & 1 \\
    0 & 1 & 3 & 2 \\
    0 & 0 & 0 & 1
    \end{array}\right)
    $$

    The last row corresponds to the equation $0 \; x_1 + 0 \; x_2 + 0 \; x_3 = 1$, which is impossible. Indeed ${\boldsymbol A}$ has $2$ nonzero rows while $({\boldsymbol A} | {\boldsymbol b})$ has $3$:

    $$
    \text{rank}({\boldsymbol A}) = 2 < 3 = \text{rank}({\boldsymbol A} | {\boldsymbol b}),
    $$

    hence the system is inconsistent and has <strong>no solution</strong>.

!!! interattivo "Try it in the lab"

    the same computation step by step: change the matrix and watch the steps change.

<div class="la-tool" data-tool="sistema" data-matrix="1,1,1;2,-1,1;1,2,-1" data-b="6,3,2"></div>

## 4. Homogeneous systems

<a id="box-defHomogeneous-6"></a>

!!! definizione "Definition 1: homogeneous system"

    A system of linear equations ${\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol b}$ with ${\boldsymbol A} \in \R^{m \times n}$ is called <strong>homogeneous</strong> if ${\boldsymbol b} = {\boldsymbol 0}$, i.e., if it has the form

    $$
    {\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol 0}.
    $$

<a id="box-obsHomogeneous-7"></a>

!!! teorema "Observation 1: solutions of a homogeneous system"

    Let ${\boldsymbol A} \in \R^{m \times n}$. Then:

    - the homogeneous system ${\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol 0}$ always has the solution ${\boldsymbol x} = {\boldsymbol 0}$, called the <strong>trivial solution</strong>;

    - it has nontrivial solutions (${\boldsymbol x} \neq {\boldsymbol 0}$) if and only if $\text{rank}({\boldsymbol A}) < n$; in this case it has infinitely many solutions, with $n - \text{rank}({\boldsymbol A})$ free parameters;

    - if ${\boldsymbol A} \in \R^{n \times n}$ is square, it has nontrivial solutions if and only if $\det({\boldsymbol A}) = 0$.

??? dimostrazione "Proof"

    Adding a column of zeros does not change the rank, hence $\text{rank}({\boldsymbol A} | {\boldsymbol 0}) = \text{rank}({\boldsymbol A})$ and the system is always consistent (as shown by ${\boldsymbol x} = {\boldsymbol 0}$). By the Rouché–Capelli theorem, the solution ${\boldsymbol x} = {\boldsymbol 0}$ is the unique one if and only if $\text{rank}({\boldsymbol A}) = n$; otherwise there are infinitely many solutions with $n - \text{rank}({\boldsymbol A})$ free parameters. For a square matrix, $\text{rank}({\boldsymbol A}) < n$ if and only if $\det({\boldsymbol A}) = 0$. <span class="qed">□</span>

- In particular, if $m < n$ (fewer equations than variables), then $\text{rank}({\boldsymbol A}) \le m < n$ and the homogeneous system always has nontrivial solutions.

- If ${\boldsymbol x}_0$ is a solution of ${\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol b}$ and ${\boldsymbol v}$ is a solution of ${\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol 0}$, then ${\boldsymbol A}({\boldsymbol x}_0 + {\boldsymbol v}) = {\boldsymbol b} + {\boldsymbol 0} = {\boldsymbol b}$. This explains the parametric form ${\boldsymbol x} = {\boldsymbol x}_0 + t \; {\boldsymbol v}$ of Example [Example 4](#box-texexpboxRCinfinite-4).

<a id="box-texexpboxHomogeneous-8"></a>

!!! esempio "Example 6: a homogeneous system"

    Consider the homogeneous system with the coefficient matrix of Example [Example 4](#box-texexpboxRCinfinite-4):

    $$
    \left\{ \begin{array}{ll}
      1 \; x_1 + 2 \; x_2 - 1 \; x_3  & = 0\\[2ex]
      2 \; x_1 + 5 \; x_2 + 1 \; x_3  & = 0\\[2ex]
      3 \; x_1 + 7 \; x_2 \phantom{{}+ 1 \; x_3}  & = 0
    \end{array} \right.
    $$

    By the Sarrus rule,

    $$
    \det({\boldsymbol A}) = 1 \cdot 5 \cdot 0 + 2 \cdot 1 \cdot 3 + (-1) \cdot 2 \cdot 7 - (-1) \cdot 5 \cdot 3 - 2 \cdot 2 \cdot 0 - 1 \cdot 1 \cdot 7 = 0 + 6 - 14 + 15 - 0 - 7 = 0,
    $$

    so there are nontrivial solutions. With the same row operations as in Example [Example 4](#box-texexpboxRCinfinite-4) (the last column stays equal to zero):

    $$
    \left(\begin{array}{ccc|c}
    1 & 2 & -1 & 0 \\
    0 & 1 & 3 & 0 \\
    0 & 0 & 0 & 0
    \end{array}\right)
    $$

    Setting $x_3 = t$: $x_2 = -3t$ and $x_1 = -2 \; x_2 + x_3 = 6t + t = 7t$. Hence the solutions are

    $$
    {\boldsymbol x} = t
    \begin{pmatrix}
    7 \\
    -3 \\
    1
    \end{pmatrix},
    \qquad t \in \R,
    $$

    and the trivial solution is obtained for $t = 0$.

## 5. LU Factorization Method

!!! chiave ""

    The <strong>LU factorization</strong> (or <strong>LU decomposition</strong>) is a method for solving systems of linear equations by decomposing the coefficient matrix ${\boldsymbol A}$ into the product of two triangular matrices:

    $$
    {\boldsymbol A} = {\boldsymbol L} \; {\boldsymbol U}
    $$

    where ${\boldsymbol L}$ is a <strong>lower triangular matrix</strong> (with 1's on the diagonal) and ${\boldsymbol U}$ is an <strong>upper triangular matrix</strong>.

- Given the system of linear equations:

    $$
    {\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol b}
    $$

    if we have the LU factorization ${\boldsymbol A} = {\boldsymbol L} \; {\boldsymbol U}$, we can substitute:

    $$
    {\boldsymbol L} \; {\boldsymbol U} \; {\boldsymbol x} = {\boldsymbol b}
    $$

- We introduce the <strong>auxiliary variable</strong> ${\boldsymbol y}$ defined as:

    $$
    {\boldsymbol y} \;:=\; {\boldsymbol U} \; {\boldsymbol x}
    $$

    so that ${\boldsymbol L} \; {\boldsymbol U} \; {\boldsymbol x} = {\boldsymbol b}$ becomes ${\boldsymbol L} \; {\boldsymbol y} = {\boldsymbol b}$.

    <strong>Why does this work?</strong>  We are splitting the original system ${\boldsymbol A}\,{\boldsymbol x}={\boldsymbol b}$ into two simpler triangular systems:

    1. Find ${\boldsymbol y}$ such that ${\boldsymbol L}\,{\boldsymbol y} = {\boldsymbol b}$.

    2. Find ${\boldsymbol x}$ such that ${\boldsymbol U}\,{\boldsymbol x} = {\boldsymbol y}$.

    If both steps succeed, then ${\boldsymbol A}\,{\boldsymbol x} = {\boldsymbol L}\,{\boldsymbol U}\,{\boldsymbol x} = {\boldsymbol L}\,{\boldsymbol y} = {\boldsymbol b}$, so ${\boldsymbol x}$ is indeed a solution of the original system. Since both ${\boldsymbol L}$ and ${\boldsymbol U}$ are triangular, each of the two systems can be solved in $O(n^2)$ operations by simple substitution.

- We then solve the system in two steps:

    <strong>Step 1 - Forward substitution:</strong> Solve ${\boldsymbol L} \; {\boldsymbol y} = {\boldsymbol b}$ for ${\boldsymbol y}$

    Since ${\boldsymbol L}$ is lower triangular, we can solve this system easily from top to bottom:

    \begin{align*}
    y_1 &= b_1\\
    y_2 &= b_2 - \ell_{21} \; y_1\\
    y_3 &= b_3 - \ell_{31} \; y_1 - \ell_{32} \; y_2\\
    &\vdots\\
    y_i &= b_i - \sum_{j=1}^{i-1} \ell_{ij} \; y_j
    \end{align*}

    <strong>Step 2 - Backward substitution:</strong> Solve ${\boldsymbol U} \; {\boldsymbol x} = {\boldsymbol y}$ for ${\boldsymbol x}$

    Since ${\boldsymbol U}$ is upper triangular, we can solve this system easily from bottom to top:

    \begin{align*}
    x_n &= \frac{y_n}{u_{nn}}\\
    x_{n-1} &= \frac{y_{n-1} - u_{n-1,n} \; x_n}{u_{n-1,n-1}}\\
    &\vdots\\
    x_i &= \frac{y_i - \sum_{j=i+1}^{n} u_{ij} \; x_j}{u_{ii}}
    \end{align*}

!!! chiave ""

    <strong>Advantages of LU factorization:</strong>

    - Once the factorization ${\boldsymbol A} = {\boldsymbol L} \; {\boldsymbol U}$ is computed, we can solve the system for different right-hand sides ${\boldsymbol b}$ efficiently

    - Both forward and backward substitution require only $O(n^2)$ operations

    - The factorization itself requires $O(n^3)$ operations, but it needs to be done only once

<a id="box-texexpbox2a-9"></a>

!!! esempio "Example 7: Solving a system using LU factorization - Part 1"

    Consider the system of linear equations:

    $$
    \left\{ \begin{array}{ll}
      2 \; x_1 + 1 \; x_2 + 1 \; x_3  & = 4\\[2ex]
      4 \; x_1 + 3 \; x_2 + 3 \; x_3  & = 10\\[2ex]
      8 \; x_1 + 7 \; x_2 + 9 \; x_3  & = 24
    \end{array} \right.
    $$

    In matrix form: ${\boldsymbol A} \; {\boldsymbol x} = {\boldsymbol b}$ where

    $$
    {\boldsymbol A} = 
    \begin{pmatrix}
    2 & 1 & 1 \\
    4 & 3 & 3 \\
    8 & 7 & 9
    \end{pmatrix}
    \qquad
    {\boldsymbol b} = 
    \begin{pmatrix}
    4 \\
    10 \\
    24
    \end{pmatrix}
    $$

    <strong>Given</strong> the LU factorization of ${\boldsymbol A}$:

    $$
    {\boldsymbol L} = 
    \begin{pmatrix}
    1 & 0 & 0 \\
    2 & 1 & 0 \\
    4 & 3 & 1
    \end{pmatrix}
    \qquad
    {\boldsymbol U} = 
    \begin{pmatrix}
    2 & 1 & 1 \\
    0 & 1 & 1 \\
    0 & 0 & 2
    \end{pmatrix}
    $$

    <strong>Verification:</strong>

    $$
    {\boldsymbol L} \; {\boldsymbol U} = 
    \begin{pmatrix}
    1 & 0 & 0 \\
    2 & 1 & 0 \\
    4 & 3 & 1
    \end{pmatrix}
    \begin{pmatrix}
    2 & 1 & 1 \\
    0 & 1 & 1 \\
    0 & 0 & 2
    \end{pmatrix}
    =
    \begin{pmatrix}
    2 & 1 & 1 \\
    4 & 3 & 3 \\
    8 & 7 & 9
    \end{pmatrix}
    = {\boldsymbol A} \quad \checkmark
    $$

<a id="box-texexpbox2b-10"></a>

!!! esempio "Example 8: Solving a system using LU factorization - Part 2"

    <strong>Step 1 - Forward substitution:</strong> Solve ${\boldsymbol L} \; {\boldsymbol y} = {\boldsymbol b}$

    $$
    \begin{pmatrix}
    1 & 0 & 0 \\
    2 & 1 & 0 \\
    4 & 3 & 1
    \end{pmatrix}
    \begin{pmatrix}
    y_1 \\
    y_2 \\
    y_3
    \end{pmatrix}
    =
    \begin{pmatrix}
    4 \\
    10 \\
    24
    \end{pmatrix}
    $$

    From the first equation:

    $$
    y_1 = 4
    $$

    From the second equation:

    $$
    2 \; y_1 + y_2 = 10 ~~\Longrightarrow~~ y_2 = 10 - 2 \cdot 4 = 10 - 8 = 2
    $$

    From the third equation:

    $$
    4 \; y_1 + 3 \; y_2 + y_3 = 24 ~~\Longrightarrow~~ y_3 = 24 - 4 \cdot 4 - 3 \cdot 2 = 24 - 16 - 6 = 2
    $$

    Thus:

    $$
    {\boldsymbol y} = 
    \begin{pmatrix}
    4 \\
    2 \\
    2
    \end{pmatrix}
    $$

    <strong>Step 2 - Backward substitution:</strong> Solve ${\boldsymbol U} \; {\boldsymbol x} = {\boldsymbol y}$

    $$
    \begin{pmatrix}
    2 & 1 & 1 \\
    0 & 1 & 1 \\
    0 & 0 & 2
    \end{pmatrix}
    \begin{pmatrix}
    x_1 \\
    x_2 \\
    x_3
    \end{pmatrix}
    =
    \begin{pmatrix}
    4 \\
    2 \\
    2
    \end{pmatrix}
    $$

    From the third equation:

    $$
    2 \; x_3 = 2 ~~\Longrightarrow~~ x_3 = 1
    $$

    From the second equation:

    $$
    x_2 + x_3 = 2 ~~\Longrightarrow~~ x_2 = 2 - 1 = 1
    $$

    From the first equation:

    $$
    2 \; x_1 + x_2 + x_3 = 4 ~~\Longrightarrow~~ 2 \; x_1 = 4 - 1 - 1 = 2 ~~\Longrightarrow~~ x_1 = 1
    $$

    <strong>Solution:</strong>

    $$
    {\boldsymbol x} = 
    \begin{pmatrix}
    x_1 \\
    x_2 \\
    x_3
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 \\
    1 \\
    1
    \end{pmatrix}
    $$

    <strong>Verification:</strong>

    $$
    {\boldsymbol A} \; {\boldsymbol x} = 
    \begin{pmatrix}
    2 & 1 & 1 \\
    4 & 3 & 3 \\
    8 & 7 & 9
    \end{pmatrix}
    \begin{pmatrix}
    1 \\
    1 \\
    1
    \end{pmatrix}
    =
    \begin{pmatrix}
    2+1+1 \\
    4+3+3 \\
    8+7+9
    \end{pmatrix}
    =
    \begin{pmatrix}
    4 \\
    10 \\
    24
    \end{pmatrix}
    = {\boldsymbol b} \quad \checkmark
    $$

## 6. Cramer's rule

!!! chiave ""

    Cramer's rule is an explicit formula for the solution of a system of $m$ linear equations with $m$ variables (valid whenever the system has a unique solution).

- Given a column vector ${\boldsymbol  b} \in \R^{m \times 1}$ of $m$ rows, a matrix ${\boldsymbol  A } \in \R^{m \times m}$ of $m$ rows and $m$ columns and a column vector ${\boldsymbol  x} \in \R^{m \times 1}$ of $m$ rows containing the $m$ variables:

    $$
    {\boldsymbol  A}=
    \begin{pmatrix}
    a_{11} & a_{12} & \dots & a_{1m}\\
    a_{21} & a_{22} & \dots & a_{2m}\\
    \vdots  & \vdots  & \dots & \vdots \\
    a_{m1} & a_{m2} & \dots & a_{mm}\\
    \end{pmatrix}
    \qquad
    {\boldsymbol  b}=
    \begin{pmatrix}
    b_{1} \\
    b_{2} \\
    \vdots  \\
    b_{m} \\
    \end{pmatrix}
    \qquad
    {\boldsymbol  x}=
    \begin{pmatrix}
    x_{1} \\
    x_{2} \\
    \vdots  \\
    x_{m} \\
    \end{pmatrix}
    $$

    if $\det({\boldsymbol  A}) \neq 0$, the solution ${\tilde{\boldsymbol  x}}$ of the system of $m$ linear equations:

    $$
    {\boldsymbol  A} \; {\boldsymbol  x}= {\boldsymbol  b}
    $$

    is given by the formula:

    \begin{equation}
    \label{CCCC}
    \tilde{x}_j = \frac{\det({\boldsymbol  A}_j) }{\det({\boldsymbol  A})},~~~~~ \forall j \in \{1,2,\dots,m\}
    \end{equation}

    where ${\boldsymbol  A}_j$ is the matrix formed by replacing the $j$-th column of ${\boldsymbol  A}$ by the column vector ${\boldsymbol  b}$.

### 6.1 Systems of two equations and two variables

!!! chiave ""

    With $m=2$, we have:

    $$
    {\boldsymbol  A}=
    \begin{pmatrix}
    a_{11} & a_{12} \\[1ex]
    a_{21} & a_{22} 
    \end{pmatrix}
    \qquad
    {\boldsymbol  b}=
    \begin{pmatrix}
    b_{1} \\[1ex]
    b_{2} 
    \end{pmatrix}
    \qquad
    {\boldsymbol  A}_1=
    \begin{pmatrix}
    b_{1} & a_{12} \\[1ex]
    b_{2} & a_{22} 
    \end{pmatrix}
    \qquad
    {\boldsymbol  A}_2=
    \begin{pmatrix}
    a_{11} & b_{1} \\[1ex]
    a_{21} & b_{2} 
    \end{pmatrix}
    $$

    and

    \begin{align*}
    \det({\boldsymbol  A})   &= a_{11} \; a_{22} - a_{12} \; a_{21}\\[1ex]
    \det({\boldsymbol  A}_1) &= b_1 \; a_{22}-a_{12}\;b_2\\[1ex]
    \det({\boldsymbol  A}_2) &= a_{11}\;b_2  - b_{1} \; a_{21}
    \end{align*}

    If $\det({\boldsymbol  A}) \neq 0$, we then have:

    $$
    \left\{ \begin{array}{ll}
      a_{11} \; {x}_1 + a_{12} \; {x}_2  & = b_1\\[2ex]
      a_{21} \; {x}_1 + a_{22} \; {x}_2  & = b_2
    \end{array} \right.
    ~~~\Longrightarrow~~~
    (\tilde{x}_1, \tilde{x}_2) = \left(~~{\frac{\det({\boldsymbol  A}_1)}{\det({\boldsymbol  A})},~~ \frac{\det({\boldsymbol  A}_2)}{\det({\boldsymbol  A})}} ~~\right)
    $$

<a id="box-texexpbox1-11"></a>

!!! esempio "Example 9: solution of a system of two equations and two variables"

    - Given

        $$
        {\boldsymbol  A}=
        \begin{pmatrix}
        -1 & 1 \\[1ex]
        8 & 2 
        \end{pmatrix}
        \qquad
        {\boldsymbol  b}=
        \begin{pmatrix}
        2 \\[1ex]
        19 
        \end{pmatrix}
        $$

        we have

        $$
        {\boldsymbol  A_1}=
        \begin{pmatrix}
        2 & 1 \\[1ex]
        19 & 2 
        \end{pmatrix}
        ~~~
        {\boldsymbol  A_2}=
        \begin{pmatrix}
        -1 & 2 \\[1ex]
        8 & 19 
        \end{pmatrix}
        $$

        and

        \begin{align*}
        \det({\boldsymbol  A})   &= (-1) \cdot 2  - 1 \cdot 8 =-10\\[1ex]
        \det({\boldsymbol  A}_1) &= 2 \cdot 2  - 1 \cdot 19 = -15\\[1ex]
        \det({\boldsymbol  A}_2) &= (-1) \cdot 19  - 2 \cdot 8  = -35
        \end{align*}

        Since $\det({\boldsymbol  A}) \neq 0$, we then have:

        \begin{equation*}
        \begin{cases}
                    \begin{array}{rrrrrrrrrrrrr}											
        -x_1 & + & x_2 & = &2\\[2ex]
        8\;x_1 & + & 2\;x_2 & = &19
                    \end{array}
                \end{cases}
                ~~\Longrightarrow~~
        (\tilde{x}_1, \tilde{x}_2) 
         = \left(\frac{-15}{-10}, \frac{-35}{-10}\right) = \left(\frac{3}{2}, \frac{7}{2}\right)
        \end{equation*}

    - Given

        $$
        {\boldsymbol  A}=
        \begin{pmatrix}
        -1 & -1 \\[1ex]
        1 & -1 
        \end{pmatrix}
        \qquad
        {\boldsymbol  b}=
        \begin{pmatrix}
        -2 \\[1ex]
        0 
        \end{pmatrix}
        $$

        we have

        $$
        {\boldsymbol  A_1}=
        \begin{pmatrix}
        -2 & -1 \\[1ex]
        0 & -1 
        \end{pmatrix}
        ~~~
        {\boldsymbol  A_2}=
        \begin{pmatrix}
        -1 & -2 \\[1ex]
        1 & 0 
        \end{pmatrix}
        $$

        and

        \begin{align*}
        \det({\boldsymbol  A})   &= (-1) \cdot (-1)   - (-1) \cdot 1 =2\\[1ex]
        \det({\boldsymbol  A}_1) &= (-2) \cdot (-1)  - (-1) \cdot 0 = 2\\[1ex]
        \det({\boldsymbol  A}_2) &= (-1) \cdot 0  - (-2) \cdot 1  = 2
        \end{align*}

        Since $\det({\boldsymbol  A}) \neq 0$, we then have:

        \begin{equation*}
        \begin{cases}
                    \begin{array}{rrrrrrrrrrrrr}											
        -x_1 & - & x_2 & = &-2\\[2ex]
        x_1 & - & x_2 & = &0
                    \end{array}
                \end{cases}
                ~~\Longrightarrow~~
        (\tilde{x}_1, \tilde{x}_2) 
         = \left(\frac{2}{2}, \frac{2}{2}\right) = \left(1, 1\right)
        \end{equation*}

### 6.2 Systems of three equations and three variables

!!! chiave ""

    With $m=3$, we have:

    $$
    {\boldsymbol  A}=
    \begin{pmatrix}
    a_{11} & a_{12} & a_{13} \\[1ex]
    a_{21} & a_{22} & a_{23} \\[1ex]
    a_{31} & a_{32} & a_{33}
    \end{pmatrix}
    \qquad
    {\boldsymbol  b}=
    \begin{pmatrix}
    b_{1} \\[1ex]
    b_{2} \\[1ex]
    b_{3}
    \end{pmatrix}
    $$

    $$
    {\boldsymbol  A}_1=
    \begin{pmatrix}
    b_{1} & a_{12} & a_{13} \\[1ex]
    b_{2} & a_{22} & a_{23} \\[1ex]
    b_{3} & a_{32} & a_{33}
    \end{pmatrix}
    \qquad
    {\boldsymbol  A}_2=
    \begin{pmatrix}
    a_{11} & b_{1} & a_{13} \\[1ex]
    a_{21} & b_{2} & a_{23} \\[1ex]
    a_{31} & b_{3} & a_{33}
    \end{pmatrix}
    \qquad
    {\boldsymbol  A}_3=
    \begin{pmatrix}
    a_{11} & a_{12} & b_{1} \\[1ex]
    a_{21} & a_{22} & b_{2} \\[1ex]
    a_{31} & a_{32} & b_{3}
    \end{pmatrix}
    $$

    and (Sarrus rule)

    \begin{align*}
    \det({\boldsymbol  A})   &= a_{11} a_{22} a_{33} + a_{12} a_{23} a_{31} + a_{13} a_{21} a_{32} -  a_{13} a_{22} a_{31} - a_{12} a_{21} a_{33} - a_{11} a_{23} a_{32}\\[1ex]
    \det({\boldsymbol  A}_1)   &= b_1 a_{22} a_{33} + a_{12} a_{23} b_3 + a_{13} b_2 a_{32} -  a_{13} a_{22} b_3 - a_{12} b_2 a_{33} - b_1 a_{23} a_{32}\\[1ex]
    \det({\boldsymbol  A}_2)   &= a_{11} b_2 a_{33} + b_1 a_{23} a_{31} + a_{13} a_{21} b_3 -  a_{13} b_2 a_{31} - b_1 a_{21} a_{33} - a_{11} a_{23} b_3\\[1ex]
    \det({\boldsymbol  A}_3)   &= a_{11} a_{22} b_3 + a_{12} b_2 a_{31} + b_1 a_{21} a_{32} -  b_1 a_{22} a_{31} - a_{12} a_{21} b_3 - a_{11} b_2 a_{32}
    \end{align*}

    If $\det({\boldsymbol  A}) \neq 0$, we then have:

    $$
    (\tilde{x}_1, \tilde{x}_2, \tilde{x}_3) = \left(~~{\frac{\det({\boldsymbol  A}_1)}{\det({\boldsymbol  A})},~~ \frac{\det({\boldsymbol  A}_2)}{\det({\boldsymbol  A})},~~ \frac{\det({\boldsymbol  A}_3)}{\det({\boldsymbol  A})}} ~~\right)
    $$

<a id="box-texexpboxCramer3-12"></a>

!!! esempio "Example 10: solution of a system of three equations and three variables"

    We solve with Cramer's rule the system of Example [Example 1](#box-texexpbox1a-1):

    $$
    {\boldsymbol  A}=
    \begin{pmatrix}
    2 & 1 & 1 \\
    4 & 3 & 3 \\
    8 & 7 & 9
    \end{pmatrix}
    \qquad
    {\boldsymbol  b}=
    \begin{pmatrix}
    4 \\
    10 \\
    24
    \end{pmatrix}
    $$

    We have

    $$
    {\boldsymbol  A}_1=
    \begin{pmatrix}
    4 & 1 & 1 \\
    10 & 3 & 3 \\
    24 & 7 & 9
    \end{pmatrix}
    \qquad
    {\boldsymbol  A}_2=
    \begin{pmatrix}
    2 & 4 & 1 \\
    4 & 10 & 3 \\
    8 & 24 & 9
    \end{pmatrix}
    \qquad
    {\boldsymbol  A}_3=
    \begin{pmatrix}
    2 & 1 & 4 \\
    4 & 3 & 10 \\
    8 & 7 & 24
    \end{pmatrix}
    $$

    and

    \begin{align*}
    \det({\boldsymbol  A})   &= 54 + 24 + 28 - 24 - 36 - 42 = 4\\[1ex]
    \det({\boldsymbol  A}_1) &= 108 + 72 + 70 - 72 - 90 - 84 = 4\\[1ex]
    \det({\boldsymbol  A}_2) &= 180 + 96 + 96 - 80 - 144 - 144 = 4\\[1ex]
    \det({\boldsymbol  A}_3) &= 144 + 80 + 112 - 96 - 96 - 140 = 4
    \end{align*}

    Since $\det({\boldsymbol  A}) \neq 0$, we then have:

    $$
    (\tilde{x}_1, \tilde{x}_2, \tilde{x}_3) = \left(\frac{4}{4}, \frac{4}{4}, \frac{4}{4}\right) = (1, 1, 1),
    $$

    which is the solution found with Gaussian elimination.

### 6.3 Computational cost

- Cramer's rule gives an explicit formula, which is very useful for small systems ($m=2$ or $m=3$) and for theoretical purposes. However, it is <strong>not</strong> a practical method for large systems.

- To apply Cramer's rule we need $m+1$ determinants of order $m$: $\det({\boldsymbol A})$, $\det({\boldsymbol A}_1)$, $\dots$, $\det({\boldsymbol A}_m)$. If each determinant is computed with the Laplace expansion, the number of arithmetic operations grows roughly like $m!$ for each determinant.

- Gaussian elimination, instead, solves the system with a number of operations which grows roughly like $m^3$ (about $\frac{2}{3} m^3$ operations).

- For example, with $m=10$ we have $10! = 3\,628\,800$, while $\frac{2}{3} \cdot 10^3 \approx 667$; with $m=20$, $20!$ is larger than $2 \cdot 10^{18}$, while $\frac{2}{3}\cdot 20^3 \approx 5\,333$.

- Even if the determinants are computed in a more efficient way (for instance with Gaussian elimination itself), Cramer's rule still needs $m+1$ of them, and it remains more expensive than solving the system directly with Gaussian elimination.

!!! interattivo "Try it in the lab"

    the same computation step by step: change the matrix and watch the steps change.

<div class="la-tool" data-tool="sistema" data-matrix="-1,1;8,2" data-b="2,19"></div>

## Exercises and lab

- :material-pencil-box-multiple: **Exercises** · [the exercise sheet of this chapter: 11 exercises with worked solutions](../exercises/es-systems-01-linear-systems.md)
- :material-calculator-variant: **Lab** · [Linear systems](../lab/systems.md) — Gauss and back substitution, Rouché–Capelli, Cramer, or the LU factorization.
- :material-calculator-variant: **Lab** · [Rank](../lab/rank.md) — the rank of \(\boldsymbol A\) and of the augmented matrix \((\boldsymbol A\mid\boldsymbol b)\) for Rouché–Capelli

