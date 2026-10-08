---
title: "Factorization of matrices"
---

# Factorization of matrices

<div class="info-capitolo" markdown>

**Exercises · Vectors and matrices** · chapter [4.4 · Factorization of matrices](../vectors-matrices/05-lu-factorization.md) · with worked solutions · [:material-file-pdf-box: Lecture notes (PDF)](../pdf/lecture-notes-linear-algebra.pdf)

</div>

<a id="box-exe_fac_lu_2x2-1"></a>

!!! esercizio "Exercise 1"

    Compute the LU factorization of \( \boldsymbol A= \begin{pmatrix} 4 & 3\\ 6 & 3 \end{pmatrix} \) and verify that \(\boldsymbol L\boldsymbol U = \boldsymbol A\).

??? soluzione "Solution"

    The first pivot is \(a_{11} = 4\) and the multiplier is \(\ell_{21} = \frac{6}{4} = \frac{3}{2}\):

    \begin{align*}
    &\left(
    \begin{array}{cc}
     4 & 3 \\
     6 & 3 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{cc}
     4 & 3 \\[1ex]
     0 & -\tfrac{3}{2} \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - \tfrac{3}{2}R_1 \text{)}
    \end{align*}

    Hence

    $$
    \boldsymbol L=
    \begin{pmatrix}
    1 & 0\\[0.5ex]
    \tfrac{3}{2} & 1
    \end{pmatrix},
    \qquad
    \boldsymbol U=
    \begin{pmatrix}
    4 & 3\\[0.5ex]
    0 & -\tfrac{3}{2}
    \end{pmatrix},
    \qquad
    \boldsymbol L\boldsymbol U=
    \begin{pmatrix}
    4 & 3\\[0.5ex]
    \tfrac{3}{2}\cdot 4 & \tfrac{3}{2}\cdot 3 - \tfrac{3}{2}
    \end{pmatrix}
    =
    \begin{pmatrix}
    4 & 3\\
    6 & 3
    \end{pmatrix}
    = \boldsymbol A.
    $$

<a id="box-exe_fac_lu_3x3-2"></a>

!!! esercizio "Exercise 2"

    Compute the LU factorization of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 3\\
    2 & 5 & 7\\
    3 & 8 & 13
    \end{pmatrix}
    $$

    and verify that \(\boldsymbol L\boldsymbol U = \boldsymbol A\).

??? soluzione "Solution"

    The multipliers are \(\ell_{21} = \frac{2}{1} = 2\), \(\ell_{31} = \frac{3}{1} = 3\) and, after the first step, \(\ell_{32} = \frac{2}{1} = 2\):

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     1 & 2 & 3 \\
     2 & 5 & 7 \\
     3 & 8 & 13 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 2 & 3 \\
     0 & 1 & 1 \\
     3 & 8 & 13 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 2 & 3 \\
     0 & 1 & 1 \\
     0 & 2 & 4 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 3R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 2 & 3 \\
     0 & 1 & 1 \\
     0 & 0 & 2 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 2R_2 \text{)}
    \end{align*}

    Hence

    $$
    \boldsymbol L=
    \begin{pmatrix}
    1 & 0 & 0\\
    2 & 1 & 0\\
    3 & 2 & 1
    \end{pmatrix},
    \qquad
    \boldsymbol U=
    \begin{pmatrix}
    1 & 2 & 3\\
    0 & 1 & 1\\
    0 & 0 & 2
    \end{pmatrix}.
    $$

    Verification:

    $$
    \boldsymbol L\boldsymbol U=
    \begin{pmatrix}
    1 & 2 & 3\\
    2 & 4+1 & 6+1\\
    3 & 6+2 & 9+2+2
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 2 & 3\\
    2 & 5 & 7\\
    3 & 8 & 13
    \end{pmatrix}
    = \boldsymbol A.
    $$

<a id="box-exe_fac_lu_minors-3"></a>

!!! esercizio "Exercise 3"

    Consider

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & 4 & -2\\
    1 & -1 & 5\\
    -1 & 7 & 1
    \end{pmatrix}.
    $$

    1. Check, using the leading principal minors, that \(\boldsymbol A\) admits an LU factorization without row swaps.

    2. Compute the LU factorization and verify that the pivots are \(u_{kk} = \det(\boldsymbol A_{[k]})/\det(\boldsymbol A_{[k-1]})\).

??? soluzione "Solution"

    1. \(\det(\boldsymbol A_{[1]}) = 2\), \(\det(\boldsymbol A_{[2]}) = 2\cdot(-1) - 4\cdot 1 = -6\) and, by Laplace expansion along the first row,

        $$
        \det(\boldsymbol A_{[3]}) = \det(\boldsymbol A) = 2\cdot(-1-35) - 4\cdot(1+5) + (-2)\cdot(7-1) = -72 - 24 - 12 = -108.
        $$

        All the leading principal minors are nonzero, so the LU factorization exists.

    2. The multipliers are \(\ell_{21} = \frac{1}{2}\), \(\ell_{31} = \frac{-1}{2} = -\frac{1}{2}\) and, after the first step, \(\ell_{32} = \frac{9}{-3} = -3\):

        \begin{align*}
        &\left(
        \begin{array}{ccc}
         2 & 4 & -2 \\
         1 & -1 & 5 \\
         -1 & 7 & 1 \\
        \end{array}
        \right) \\[2ex]
        &\left(
        \begin{array}{ccc}
         2 & 4 & -2 \\
         0 & -3 & 6 \\
         -1 & 7 & 1 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - \tfrac{1}{2}R_1 \text{)} \\[2ex]
        &\left(
        \begin{array}{ccc}
         2 & 4 & -2 \\
         0 & -3 & 6 \\
         0 & 9 & 0 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 + \tfrac{1}{2}R_1 \text{)} \\[2ex]
        &\left(
        \begin{array}{ccc}
         2 & 4 & -2 \\
         0 & -3 & 6 \\
         0 & 0 & 18 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 + 3R_2 \text{)}
        \end{align*}

        Hence

        $$
        \boldsymbol L=
        \begin{pmatrix}
        1 & 0 & 0\\[0.5ex]
        \tfrac{1}{2} & 1 & 0\\[0.5ex]
        -\tfrac{1}{2} & -3 & 1
        \end{pmatrix},
        \qquad
        \boldsymbol U=
        \begin{pmatrix}
        2 & 4 & -2\\
        0 & -3 & 6\\
        0 & 0 & 18
        \end{pmatrix}.
        $$

        Indeed \(u_{11} = 2\), \(u_{22} = \frac{-6}{2} = -3\) and \(u_{33} = \frac{-108}{-6} = 18\). Verification:

        $$
        \boldsymbol L\boldsymbol U=
        \begin{pmatrix}
        2 & 4 & -2\\
        1 & 2-3 & -1+6\\
        -1 & -2+9 & 1-18+18
        \end{pmatrix}
        =
        \begin{pmatrix}
        2 & 4 & -2\\
        1 & -1 & 5\\
        -1 & 7 & 1
        \end{pmatrix}
        = \boldsymbol A.
        $$

<a id="box-exe_fac_plu_step2-4"></a>

!!! esercizio "Exercise 4"

    Consider

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 0\\
    2 & 4 & 1\\
    0 & 1 & 1
    \end{pmatrix}.
    $$

    Show that \(\boldsymbol A\) is nonsingular but does not admit an LU factorization without row swaps. Then compute a PLU factorization \(\boldsymbol P\boldsymbol A = \boldsymbol L\boldsymbol U\) and verify it.

??? soluzione "Solution"

    We have \(\det(\boldsymbol A) = 1\cdot(4-1) - 2\cdot(2-0) + 0 = -1 \neq 0\), but \(\det(\boldsymbol A_{[2]}) = 1\cdot 4 - 2\cdot 2 = 0\): the LU factorization without row swaps does not exist.

    Gaussian elimination: \(\ell_{21} = 2\) and \(\ell_{31} = 0\) (the entry \(a_{31}\) is already zero). Then the entry in position \((2,2)\) is zero and we swap rows 2 and 3, swapping also the multipliers (now \(\ell_{21} = 0\), \(\ell_{31} = 2\)):

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     1 & 2 & 0 \\
     2 & 4 & 1 \\
     0 & 1 & 1 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 2 & 0 \\
     0 & 0 & 1 \\
     0 & 1 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 2 & 0 \\
     0 & 1 & 1 \\
     0 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftrightarrow R_3 \text{)}
    \end{align*}

    The entry below the second pivot is already zero, so \(\ell_{32} = 0\). Hence

    $$
    \boldsymbol P=
    \begin{pmatrix}
    1 & 0 & 0\\
    0 & 0 & 1\\
    0 & 1 & 0
    \end{pmatrix},
    \qquad
    \boldsymbol L=
    \begin{pmatrix}
    1 & 0 & 0\\
    0 & 1 & 0\\
    2 & 0 & 1
    \end{pmatrix},
    \qquad
    \boldsymbol U=
    \begin{pmatrix}
    1 & 2 & 0\\
    0 & 1 & 1\\
    0 & 0 & 1
    \end{pmatrix}.
    $$

    Verification:

    $$
    \boldsymbol P\boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 0\\
    0 & 1 & 1\\
    2 & 4 & 1
    \end{pmatrix},
    \qquad
    \boldsymbol L\boldsymbol U=
    \begin{pmatrix}
    1 & 2 & 0\\
    0 & 1 & 1\\
    2 & 4 & 0+1
    \end{pmatrix}
    = \boldsymbol P\boldsymbol A.
    $$

<a id="box-exe_fac_plu_step1-5"></a>

!!! esercizio "Exercise 5"

    Compute a PLU factorization of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    0 & 1 & 1\\
    2 & 1 & 3\\
    4 & 5 & 4
    \end{pmatrix},
    $$

    verify that \(\boldsymbol P\boldsymbol A = \boldsymbol L\boldsymbol U\), and compute \(\det(\boldsymbol A)\) from \(\boldsymbol U\).

??? soluzione "Solution"

    Since \(a_{11} = 0\), we swap rows 1 and 2 (no multiplier has been computed yet). Then \(\ell_{21} = \frac{0}{2} = 0\), \(\ell_{31} = \frac{4}{2} = 2\) and, after the first step, \(\ell_{32} = \frac{3}{1} = 3\):

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     0 & 1 & 1 \\
     2 & 1 & 3 \\
     4 & 5 & 4 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc}
     2 & 1 & 3 \\
     0 & 1 & 1 \\
     4 & 5 & 4 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftrightarrow R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     2 & 1 & 3 \\
     0 & 1 & 1 \\
     0 & 3 & -2 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     2 & 1 & 3 \\
     0 & 1 & 1 \\
     0 & 0 & -5 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 3R_2 \text{)}
    \end{align*}

    Hence

    $$
    \boldsymbol P=
    \begin{pmatrix}
    0 & 1 & 0\\
    1 & 0 & 0\\
    0 & 0 & 1
    \end{pmatrix},
    \qquad
    \boldsymbol L=
    \begin{pmatrix}
    1 & 0 & 0\\
    0 & 1 & 0\\
    2 & 3 & 1
    \end{pmatrix},
    \qquad
    \boldsymbol U=
    \begin{pmatrix}
    2 & 1 & 3\\
    0 & 1 & 1\\
    0 & 0 & -5
    \end{pmatrix}.
    $$

    Verification:

    $$
    \boldsymbol P\boldsymbol A=
    \begin{pmatrix}
    2 & 1 & 3\\
    0 & 1 & 1\\
    4 & 5 & 4
    \end{pmatrix},
    \qquad
    \boldsymbol L\boldsymbol U=
    \begin{pmatrix}
    2 & 1 & 3\\
    0 & 1 & 1\\
    4 & 2+3 & 6+3-5
    \end{pmatrix}
    = \boldsymbol P\boldsymbol A.
    $$

    One row swap was used (\(s=1\)), hence \(\det(\boldsymbol A) = -(2\cdot 1\cdot(-5)) = 10\).

<a id="box-exe_fac_det_from_u-6"></a>

!!! esercizio "Exercise 6"

    Compute the LU factorization of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    3 & 1 & 2\\
    6 & 3 & 4\\
    3 & 1 & 5
    \end{pmatrix}
    $$

    and use it to compute \(\det(\boldsymbol A)\) and \(\det(\boldsymbol A^{-1})\).

??? soluzione "Solution"

    The multipliers are \(\ell_{21} = \frac{6}{3} = 2\) and \(\ell_{31} = \frac{3}{3} = 1\):

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     3 & 1 & 2 \\
     6 & 3 & 4 \\
     3 & 1 & 5 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc}
     3 & 1 & 2 \\
     0 & 1 & 0 \\
     3 & 1 & 5 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     3 & 1 & 2 \\
     0 & 1 & 0 \\
     0 & 0 & 3 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - R_1 \text{)}
    \end{align*}

    The entry in position \((3,2)\) is already zero, so \(\ell_{32} = 0\) and

    $$
    \boldsymbol L=
    \begin{pmatrix}
    1 & 0 & 0\\
    2 & 1 & 0\\
    1 & 0 & 1
    \end{pmatrix},
    \qquad
    \boldsymbol U=
    \begin{pmatrix}
    3 & 1 & 2\\
    0 & 1 & 0\\
    0 & 0 & 3
    \end{pmatrix}.
    $$

    No row swaps were used, hence

    $$
    \det(\boldsymbol A) = \det(\boldsymbol L)\det(\boldsymbol U) = 1\cdot(3\cdot 1\cdot 3) = 9,
    \qquad
    \det(\boldsymbol A^{-1}) = \frac{1}{9}.
    $$

<a id="box-exe_fac_parametric-7"></a>

!!! esercizio "Exercise 7"

    Consider, for \(k\in\R\), the matrix

    $$
    \boldsymbol A(k)=
    \begin{pmatrix}
    1 & 1 & 0\\
    1 & k & 1\\
    0 & 1 & 1
    \end{pmatrix}.
    $$

    1. For which values of \(k\) is \(\boldsymbol A(k)\) nonsingular and admits an LU factorization without row swaps? Compute it.

    2. For \(k = 1\), compute a PLU factorization.

??? soluzione "Solution"

    1. The leading principal minors are

        $$
        \det(\boldsymbol A_{[1]}) = 1,
        \quad
        \det(\boldsymbol A_{[2]}) = k - 1,
        \quad
        \det(\boldsymbol A_{[3]}) = 1\cdot(k-1) - 1\cdot(1-0) + 0 = k-2.
        $$

        They are all nonzero if and only if \(k\neq 1\) and \(k\neq 2\). For these values, \(\ell_{21} = 1\), \(\ell_{31} = 0\) and \(\ell_{32} = \frac{1}{k-1}\):

        \begin{align*}
        &\left(
        \begin{array}{ccc}
         1 & 1 & 0 \\
         0 & k-1 & 1 \\
         0 & 1 & 1 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - R_1 \text{)} \\[2ex]
        &\left(
        \begin{array}{ccc}
         1 & 1 & 0 \\
         0 & k-1 & 1 \\
         0 & 0 & \tfrac{k-2}{k-1} \\
        \end{array}
        \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - \tfrac{1}{k-1}R_2 \text{)}
        \end{align*}

        since \(1 - \frac{1}{k-1} = \frac{k-2}{k-1}\). Hence

        $$
        \boldsymbol L=
        \begin{pmatrix}
        1 & 0 & 0\\[0.5ex]
        1 & 1 & 0\\[0.5ex]
        0 & \tfrac{1}{k-1} & 1
        \end{pmatrix},
        \qquad
        \boldsymbol U=
        \begin{pmatrix}
        1 & 1 & 0\\[0.5ex]
        0 & k-1 & 1\\[0.5ex]
        0 & 0 & \tfrac{k-2}{k-1}
        \end{pmatrix},
        $$

        and indeed \(u_{11}u_{22}u_{33} = k-2 = \det(\boldsymbol A(k))\). For \(k=2\) the matrix is singular.

    2. For \(k=1\) we have \(\det(\boldsymbol A(1)) = -1 \neq 0\) but \(\det(\boldsymbol A_{[2]}) = 0\). After \(R_2 \leftarrow R_2 - R_1\) (\(\ell_{21} = 1\), \(\ell_{31} = 0\)) the entry in position \((2,2)\) is zero, so we swap rows 2 and 3 together with their multipliers (now \(\ell_{21} = 0\), \(\ell_{31} = 1\)):

        \begin{align*}
        &\left(
        \begin{array}{ccc}
         1 & 1 & 0 \\
         1 & 1 & 1 \\
         0 & 1 & 1 \\
        \end{array}
        \right) \\[2ex]
        &\left(
        \begin{array}{ccc}
         1 & 1 & 0 \\
         0 & 0 & 1 \\
         0 & 1 & 1 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - R_1 \text{)} \\[2ex]
        &\left(
        \begin{array}{ccc}
         1 & 1 & 0 \\
         0 & 1 & 1 \\
         0 & 0 & 1 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_2 \leftrightarrow R_3 \text{)}
        \end{align*}

        Then \(\ell_{32} = 0\) and

        $$
        \boldsymbol P=
        \begin{pmatrix}
        1 & 0 & 0\\
        0 & 0 & 1\\
        0 & 1 & 0
        \end{pmatrix},
        \quad
        \boldsymbol L=
        \begin{pmatrix}
        1 & 0 & 0\\
        0 & 1 & 0\\
        1 & 0 & 1
        \end{pmatrix},
        \quad
        \boldsymbol U=
        \begin{pmatrix}
        1 & 1 & 0\\
        0 & 1 & 1\\
        0 & 0 & 1
        \end{pmatrix},
        $$

        and

        $$
        \boldsymbol P\boldsymbol A(1) = \boldsymbol L\boldsymbol U =
        \begin{pmatrix}
        1 & 1 & 0\\
        0 & 1 & 1\\
        1 & 1 & 1
        \end{pmatrix}.
        $$
