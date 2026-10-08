---
title: "Inversion of matrices"
---

# Inversion of matrices

<div class="info-capitolo" markdown>

**Exercises · Vectors and matrices** · chapter [4.3 · Inversion of matrices](../vectors-matrices/04-inverse-matrix.md) · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-vectors-matrices-04-inverse-matrix.pdf)

</div>

<a id="box-exe_inv_2x2_formula-1"></a>

!!! esercizio "Exercise 1"

    Using the formula for the inverse of a \(2\times 2\) matrix, compute (if it exists) the inverse of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    3 & 5\\
    1 & 2
    \end{pmatrix},
    \qquad
    \boldsymbol B=
    \begin{pmatrix}
    4 & 2\\
    3 & 4
    \end{pmatrix},
    \qquad
    \boldsymbol C=
    \begin{pmatrix}
    2 & 4\\
    3 & 6
    \end{pmatrix}.
    $$

??? soluzione "Solution"

    Recall that, if \(ad-bc\neq 0\), \(\begin{pmatrix} a & b\\ c & d\end{pmatrix}^{-1} = \frac{1}{ad-bc}\begin{pmatrix} d & -b\\ -c & a\end{pmatrix}\).

    - \(\det(\boldsymbol A) = 3\cdot 2 - 5\cdot 1 = 1\), hence

        $$
        \boldsymbol A^{-1} = \begin{pmatrix} 2 & -5\\ -1 & 3\end{pmatrix}.
        \qquad
        \text{Check: }
        \begin{pmatrix} 3 & 5\\ 1 & 2\end{pmatrix}\begin{pmatrix} 2 & -5\\ -1 & 3\end{pmatrix}
        = \begin{pmatrix} 6-5 & -15+15\\ 2-2 & -5+6\end{pmatrix} = \boldsymbol I.
        $$

    - \(\det(\boldsymbol B) = 4\cdot 4 - 2\cdot 3 = 10\), hence

        $$
        \boldsymbol B^{-1} = \frac{1}{10}\begin{pmatrix} 4 & -2\\ -3 & 4\end{pmatrix}
        = \begin{pmatrix} \tfrac{2}{5} & -\tfrac{1}{5}\\[0.8ex] -\tfrac{3}{10} & \tfrac{2}{5}\end{pmatrix}.
        $$

    - \(\det(\boldsymbol C) = 2\cdot 6 - 4\cdot 3 = 0\): the matrix \(\boldsymbol C\) is singular and \(\boldsymbol C^{-1}\) does not exist (the second row is \(\tfrac{3}{2}\) times the first one).

<a id="box-exe_inv_gauss_jordan_3x3-2"></a>

!!! esercizio "Exercise 2"

    Compute the inverse of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 1 & 0\\
    1 & 2 & 1\\
    0 & 1 & 2
    \end{pmatrix}
    $$

    with the method of Gauss–Jordan, and verify the result.

??? soluzione "Solution"

    We apply elementary row operations to \(\left(\boldsymbol A \mid \boldsymbol I\right)\):

    \begin{align*}
    &\left(
    \begin{array}{ccc|ccc}
     1 & 1 & 0 & 1 & 0 & 0 \\
     1 & 2 & 1 & 0 & 1 & 0 \\
     0 & 1 & 2 & 0 & 0 & 1 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 1 & 0 & 1 & 0 & 0 \\
     0 & 1 & 1 & -1 & 1 & 0 \\
     0 & 1 & 2 & 0 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & -1 & 2 & -1 & 0 \\
     0 & 1 & 1 & -1 & 1 & 0 \\
     0 & 1 & 2 & 0 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftarrow R_1 - R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & -1 & 2 & -1 & 0 \\
     0 & 1 & 1 & -1 & 1 & 0 \\
     0 & 0 & 1 & 1 & -1 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 0 & 3 & -2 & 1 \\
     0 & 1 & 1 & -1 & 1 & 0 \\
     0 & 0 & 1 & 1 & -1 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftarrow R_1 + R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 0 & 3 & -2 & 1 \\
     0 & 1 & 0 & -2 & 2 & -1 \\
     0 & 0 & 1 & 1 & -1 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - R_3 \text{)}
    \end{align*}

    Hence

    $$
    \boldsymbol A^{-1}=
    \begin{pmatrix}
    3 & -2 & 1\\
    -2 & 2 & -1\\
    1 & -1 & 1
    \end{pmatrix}.
    $$

    Check (row by column): \(\boldsymbol A\boldsymbol A^{-1} = \begin{pmatrix} 3-2 & -2+2 & 1-1\\ 3-4+1 & -2+4-1 & 1-2+1\\ -2+2 & 2-2 & -1+2 \end{pmatrix} = \boldsymbol I\).

<a id="box-exe_inv_gauss_jordan_swap-3"></a>

!!! esercizio "Exercise 3"

    Compute the inverse of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    0 & 2 & 1\\
    1 & 1 & 0\\
    2 & 3 & 1
    \end{pmatrix}
    $$

    with the method of Gauss–Jordan.

??? soluzione "Solution"

    Since \(a_{11}=0\), we start with a row swap. Later, we swap rows 2 and 3 to get a pivot equal to \(1\) (and avoid fractions):

    \begin{align*}
    &\left(
    \begin{array}{ccc|ccc}
     0 & 2 & 1 & 1 & 0 & 0 \\
     1 & 1 & 0 & 0 & 1 & 0 \\
     2 & 3 & 1 & 0 & 0 & 1 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 1 & 0 & 0 & 1 & 0 \\
     0 & 2 & 1 & 1 & 0 & 0 \\
     2 & 3 & 1 & 0 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftrightarrow R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 1 & 0 & 0 & 1 & 0 \\
     0 & 2 & 1 & 1 & 0 & 0 \\
     0 & 1 & 1 & 0 & -2 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 1 & 0 & 0 & 1 & 0 \\
     0 & 1 & 1 & 0 & -2 & 1 \\
     0 & 2 & 1 & 1 & 0 & 0 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftrightarrow R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & -1 & 0 & 3 & -1 \\
     0 & 1 & 1 & 0 & -2 & 1 \\
     0 & 2 & 1 & 1 & 0 & 0 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftarrow R_1 - R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & -1 & 0 & 3 & -1 \\
     0 & 1 & 1 & 0 & -2 & 1 \\
     0 & 0 & -1 & 1 & 4 & -2 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 2R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & -1 & 0 & 3 & -1 \\
     0 & 1 & 1 & 0 & -2 & 1 \\
     0 & 0 & 1 & -1 & -4 & 2 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow -R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 0 & -1 & -1 & 1 \\
     0 & 1 & 1 & 0 & -2 & 1 \\
     0 & 0 & 1 & -1 & -4 & 2 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftarrow R_1 + R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 0 & -1 & -1 & 1 \\
     0 & 1 & 0 & 1 & 2 & -1 \\
     0 & 0 & 1 & -1 & -4 & 2 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - R_3 \text{)}
    \end{align*}

    Hence

    $$
    \boldsymbol A^{-1}=
    \begin{pmatrix}
    -1 & -1 & 1\\
    1 & 2 & -1\\
    -1 & -4 & 2
    \end{pmatrix}.
    $$

<a id="box-exe_inv_singular-4"></a>

!!! esercizio "Exercise 4"

    Apply the method of Gauss–Jordan to

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & -1\\
    2 & 3 & 1\\
    3 & 5 & 0
    \end{pmatrix}.
    $$

    Is \(\boldsymbol A\) invertible?

??? soluzione "Solution"

    \begin{align*}
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & -1 & 1 & 0 & 0 \\
     2 & 3 & 1 & 0 & 1 & 0 \\
     3 & 5 & 0 & 0 & 0 & 1 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & -1 & 1 & 0 & 0 \\
     0 & -1 & 3 & -2 & 1 & 0 \\
     3 & 5 & 0 & 0 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & -1 & 1 & 0 & 0 \\
     0 & -1 & 3 & -2 & 1 & 0 \\
     0 & -1 & 3 & -3 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 3R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & -1 & 1 & 0 & 0 \\
     0 & -1 & 3 & -2 & 1 & 0 \\
     0 & 0 & 0 & -1 & -1 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - R_2 \text{)}
    \end{align*}

    A zero row appears in the left block: the method stops and \(\boldsymbol A\) is <strong>not invertible</strong>. Indeed, the third row of \(\boldsymbol A\) is the sum of the first two rows, and

    $$
    \det(\boldsymbol A) = 1\cdot(0-5) - 2\cdot(0-3) + (-1)\cdot(10-9) = -5 + 6 - 1 = 0.
    $$

<a id="box-exe_inv_parametric_3x3-5"></a>

!!! esercizio "Exercise 5"

    Consider, for \(k\in\R\), the matrix

    $$
    \boldsymbol A(k)=
    \begin{pmatrix}
    1 & 1 & 1\\
    1 & k & 1\\
    1 & 1 & k^2
    \end{pmatrix}.
    $$

    1. For which values of \(k\) is \(\boldsymbol A(k)\) invertible?

    2. Compute \(\boldsymbol A(0)^{-1}\) with the method of Gauss–Jordan.

??? soluzione "Solution"

    1. We compute \(\det(\boldsymbol A(k))\) by Gaussian elimination (row additions only):

        \begin{align*}
        &\left(
        \begin{array}{ccc}
         1 & 1 & 1 \\
         1 & k & 1 \\
         1 & 1 & k^2 \\
        \end{array}
        \right) \\[2ex]
        &\left(
        \begin{array}{ccc}
         1 & 1 & 1 \\
         0 & k-1 & 0 \\
         1 & 1 & k^2 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - R_1 \text{)} \\[2ex]
        &\left(
        \begin{array}{ccc}
         1 & 1 & 1 \\
         0 & k-1 & 0 \\
         0 & 0 & k^2-1 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - R_1 \text{)}
        \end{align*}

        The last matrix is upper triangular, hence

        $$
        \det(\boldsymbol A(k)) = 1\cdot(k-1)\cdot(k^2-1) = (k-1)^2(k+1).
        $$

        Therefore \(\boldsymbol A(k)\) is invertible if and only if \(k\neq 1\) and \(k\neq -1\).

    2. For \(k=0\) we have \(\det(\boldsymbol A(0)) = 1\), and:

        \begin{align*}
        &\left(
        \begin{array}{ccc|ccc}
         1 & 1 & 1 & 1 & 0 & 0 \\
         1 & 0 & 1 & 0 & 1 & 0 \\
         1 & 1 & 0 & 0 & 0 & 1 \\
        \end{array}
        \right) \\[2ex]
        &\left(
        \begin{array}{ccc|ccc}
         1 & 1 & 1 & 1 & 0 & 0 \\
         0 & -1 & 0 & -1 & 1 & 0 \\
         1 & 1 & 0 & 0 & 0 & 1 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - R_1 \text{)} \\[2ex]
        &\left(
        \begin{array}{ccc|ccc}
         1 & 1 & 1 & 1 & 0 & 0 \\
         0 & -1 & 0 & -1 & 1 & 0 \\
         0 & 0 & -1 & -1 & 0 & 1 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - R_1 \text{)} \\[2ex]
        &\left(
        \begin{array}{ccc|ccc}
         1 & 1 & 1 & 1 & 0 & 0 \\
         0 & 1 & 0 & 1 & -1 & 0 \\
         0 & 0 & -1 & -1 & 0 & 1 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_2 \leftarrow -R_2 \text{)} \\[2ex]
        &\left(
        \begin{array}{ccc|ccc}
         1 & 1 & 1 & 1 & 0 & 0 \\
         0 & 1 & 0 & 1 & -1 & 0 \\
         0 & 0 & 1 & 1 & 0 & -1 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_3 \leftarrow -R_3 \text{)} \\[2ex]
        &\left(
        \begin{array}{ccc|ccc}
         1 & 0 & 1 & 0 & 1 & 0 \\
         0 & 1 & 0 & 1 & -1 & 0 \\
         0 & 0 & 1 & 1 & 0 & -1 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_1 \leftarrow R_1 - R_2 \text{)} \\[2ex]
        &\left(
        \begin{array}{ccc|ccc}
         1 & 0 & 0 & -1 & 1 & 1 \\
         0 & 1 & 0 & 1 & -1 & 0 \\
         0 & 0 & 1 & 1 & 0 & -1 \\
        \end{array}
        \right) \hspace{1em} \text{(} R_1 \leftarrow R_1 - R_3 \text{)}
        \end{align*}

        Hence

        $$
        \boldsymbol A(0)^{-1}=
        \begin{pmatrix}
        -1 & 1 & 1\\
        1 & -1 & 0\\
        1 & 0 & -1
        \end{pmatrix}.
        $$

<a id="box-exe_inv_parametric_2x2-6"></a>

!!! esercizio "Exercise 6"

    Consider, for \(k\in\R\), the matrix \( \boldsymbol A(k)= \begin{pmatrix} k & 1\\ 4 & k \end{pmatrix}. \) For which values of \(k\) is \(\boldsymbol A(k)\) invertible? For these values, write \(\boldsymbol A(k)^{-1}\), and compute \(\boldsymbol A(3)^{-1}\).

??? soluzione "Solution"

    We have \(\det(\boldsymbol A(k)) = k^2 - 4 = (k-2)(k+2)\), so \(\boldsymbol A(k)\) is invertible if and only if \(k\neq 2\) and \(k\neq -2\). In this case

    $$
    \boldsymbol A(k)^{-1} = \frac{1}{k^2-4}
    \begin{pmatrix}
    k & -1\\
    -4 & k
    \end{pmatrix}.
    $$

    For \(k=3\): \(\det(\boldsymbol A(3)) = 5\) and

    $$
    \boldsymbol A(3)^{-1} = \frac{1}{5}
    \begin{pmatrix}
    3 & -1\\
    -4 & 3
    \end{pmatrix}.
    $$

<a id="box-exe_inv_adjugate_3x3-7"></a>

!!! esercizio "Exercise 7"

    Compute the inverse of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & 0 & 1\\
    1 & 1 & 0\\
    0 & 3 & 1
    \end{pmatrix}
    $$

    with the adjugate (cofactor) formula \(\boldsymbol A^{-1} = \frac{1}{\det(\boldsymbol A)}\,\mathrm{adj}(\boldsymbol A)\).

??? soluzione "Solution"

    Laplace expansion along the first row: \(\det(\boldsymbol A) = 2\cdot(1-0) - 0 + 1\cdot(3-0) = 5\neq 0\). The cofactors \(C_{ij} = (-1)^{i+j}\det(\boldsymbol A_{ij})\) are:

    \begin{align*}
    C_{11} &= +\det\begin{pmatrix} 1 & 0\\ 3 & 1\end{pmatrix} = 1, &
    C_{12} &= -\det\begin{pmatrix} 1 & 0\\ 0 & 1\end{pmatrix} = -1, &
    C_{13} &= +\det\begin{pmatrix} 1 & 1\\ 0 & 3\end{pmatrix} = 3,\\[1ex]
    C_{21} &= -\det\begin{pmatrix} 0 & 1\\ 3 & 1\end{pmatrix} = 3, &
    C_{22} &= +\det\begin{pmatrix} 2 & 1\\ 0 & 1\end{pmatrix} = 2, &
    C_{23} &= -\det\begin{pmatrix} 2 & 0\\ 0 & 3\end{pmatrix} = -6,\\[1ex]
    C_{31} &= +\det\begin{pmatrix} 0 & 1\\ 1 & 0\end{pmatrix} = -1, &
    C_{32} &= -\det\begin{pmatrix} 2 & 1\\ 1 & 0\end{pmatrix} = 1, &
    C_{33} &= +\det\begin{pmatrix} 2 & 0\\ 1 & 1\end{pmatrix} = 2.
    \end{align*}

    The adjugate matrix is the transpose of the cofactor matrix:

    $$
    \mathrm{adj}(\boldsymbol A) =
    \begin{pmatrix}
    1 & -1 & 3\\
    3 & 2 & -6\\
    -1 & 1 & 2
    \end{pmatrix}'
    =
    \begin{pmatrix}
    1 & 3 & -1\\
    -1 & 2 & 1\\
    3 & -6 & 2
    \end{pmatrix},
    \qquad
    \boldsymbol A^{-1} = \frac{1}{5}
    \begin{pmatrix}
    1 & 3 & -1\\
    -1 & 2 & 1\\
    3 & -6 & 2
    \end{pmatrix}.
    $$

<a id="box-exe_inv_properties_product-8"></a>

!!! esercizio "Exercise 8"

    Let \( \boldsymbol A= \begin{pmatrix} 2 & 1\\ 1 & 1 \end{pmatrix} \) and \( \boldsymbol B= \begin{pmatrix} 1 & 2\\ 0 & 3 \end{pmatrix}. \)

    1. Compute \(\boldsymbol A^{-1}\), \(\boldsymbol B^{-1}\) and then \((\boldsymbol A\boldsymbol B)^{-1}\) using the properties of the inverse. Check the result by inverting \(\boldsymbol A\boldsymbol B\) directly.

    2. Show that \(\boldsymbol A^{-1}\boldsymbol B^{-1} \neq (\boldsymbol A\boldsymbol B)^{-1}\).

    3. Compute \((\boldsymbol B')^{-1}\) and \(\det\big((\boldsymbol A\boldsymbol B)^{-1}\big)\).

??? soluzione "Solution"

    1. \(\det(\boldsymbol A) = 1\) and \(\det(\boldsymbol B) = 3\), hence

        $$
        \boldsymbol A^{-1} = \begin{pmatrix} 1 & -1\\ -1 & 2\end{pmatrix},
        \qquad
        \boldsymbol B^{-1} = \frac{1}{3}\begin{pmatrix} 3 & -2\\ 0 & 1\end{pmatrix},
        $$

        $$
        (\boldsymbol A\boldsymbol B)^{-1} = \boldsymbol B^{-1}\boldsymbol A^{-1}
        = \frac{1}{3}\begin{pmatrix} 3 & -2\\ 0 & 1\end{pmatrix}\begin{pmatrix} 1 & -1\\ -1 & 2\end{pmatrix}
        = \frac{1}{3}\begin{pmatrix} 5 & -7\\ -1 & 2\end{pmatrix}.
        $$

        Check: \(\boldsymbol A\boldsymbol B = \begin{pmatrix} 2 & 7\\ 1 & 5\end{pmatrix}\), \(\det(\boldsymbol A\boldsymbol B) = 10-7 = 3\), and the \(2\times 2\) formula gives \((\boldsymbol A\boldsymbol B)^{-1} = \frac{1}{3}\begin{pmatrix} 5 & -7\\ -1 & 2\end{pmatrix}\).

    2. \(\boldsymbol A^{-1}\boldsymbol B^{-1} = \frac{1}{3}\begin{pmatrix} 1 & -1\\ -1 & 2\end{pmatrix}\begin{pmatrix} 3 & -2\\ 0 & 1\end{pmatrix} = \frac{1}{3}\begin{pmatrix} 3 & -3\\ -3 & 4\end{pmatrix} \neq (\boldsymbol A\boldsymbol B)^{-1}\).

    3. \((\boldsymbol B')^{-1} = (\boldsymbol B^{-1})' = \frac{1}{3}\begin{pmatrix} 3 & 0\\ -2 & 1\end{pmatrix}\) (check with the \(2\times 2\) formula applied to \(\boldsymbol B' = \begin{pmatrix} 1 & 0\\ 2 & 3\end{pmatrix}\)). Moreover

        $$
        \det\big((\boldsymbol A\boldsymbol B)^{-1}\big) = \frac{1}{\det(\boldsymbol A\boldsymbol B)} = \frac{1}{\det(\boldsymbol A)\det(\boldsymbol B)} = \frac{1}{3}.
        $$

<a id="box-exe_inv_properties_proofs-9"></a>

!!! esercizio "Exercise 9"

    1. Let \(\boldsymbol A\in\R^{n\times n}\) be invertible and \(\lambda\in\R\), \(\lambda\neq 0\). Show that \(\lambda\boldsymbol A\) is invertible and \((\lambda\boldsymbol A)^{-1} = \frac{1}{\lambda}\boldsymbol A^{-1}\).

    2. Let \(\boldsymbol A\in\R^{n\times n}\) satisfy \(\boldsymbol A^2 - 3\boldsymbol A + \boldsymbol I = \boldsymbol 0\). Show that \(\boldsymbol A\) is invertible and \(\boldsymbol A^{-1} = 3\boldsymbol I - \boldsymbol A\). Check this on \(\boldsymbol A = \begin{pmatrix} 2 & 1\\ 1 & 1\end{pmatrix}\).

??? soluzione "Solution"

    1. Using the properties of the product by a scalar:

        $$
        (\lambda\boldsymbol A)\Big(\tfrac{1}{\lambda}\boldsymbol A^{-1}\Big) = \lambda\cdot\tfrac{1}{\lambda}\,\boldsymbol A\boldsymbol A^{-1} = \boldsymbol I,
        \qquad
        \Big(\tfrac{1}{\lambda}\boldsymbol A^{-1}\Big)(\lambda\boldsymbol A) = \tfrac{1}{\lambda}\cdot\lambda\,\boldsymbol A^{-1}\boldsymbol A = \boldsymbol I.
        $$

    2. From \(\boldsymbol A^2 - 3\boldsymbol A + \boldsymbol I = \boldsymbol 0\) we get \(3\boldsymbol A - \boldsymbol A^2 = \boldsymbol I\), i.e.,

        $$
        \boldsymbol A(3\boldsymbol I - \boldsymbol A) = \boldsymbol I
        \quad\text{and}\quad
        (3\boldsymbol I - \boldsymbol A)\boldsymbol A = \boldsymbol I.
        $$

        Hence \(\boldsymbol A^{-1} = 3\boldsymbol I - \boldsymbol A\). For \(\boldsymbol A = \begin{pmatrix} 2 & 1\\ 1 & 1\end{pmatrix}\):

        $$
        \boldsymbol A^2 = \begin{pmatrix} 5 & 3\\ 3 & 2\end{pmatrix},
        \qquad
        \boldsymbol A^2 - 3\boldsymbol A + \boldsymbol I = \begin{pmatrix} 5-6+1 & 3-3\\ 3-3 & 2-3+1\end{pmatrix} = \boldsymbol 0,
        $$

        and \(3\boldsymbol I - \boldsymbol A = \begin{pmatrix} 1 & -1\\ -1 & 2\end{pmatrix}\), which is indeed \(\boldsymbol A^{-1}\).

<a id="box-exe_inv_upper_triangular-10"></a>

!!! esercizio "Exercise 10"

    Compute the inverse of the upper triangular matrix

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 3\\
    0 & 1 & 4\\
    0 & 0 & 1
    \end{pmatrix}
    $$

    with the method of Gauss–Jordan. What kind of matrix is \(\boldsymbol A^{-1}\)?

??? soluzione "Solution"

    The left block is already upper triangular with ones on the diagonal: we only need to eliminate the entries above the pivots, starting from the last column.

    \begin{align*}
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & 3 & 1 & 0 & 0 \\
     0 & 1 & 4 & 0 & 1 & 0 \\
     0 & 0 & 1 & 0 & 0 & 1 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & 0 & 1 & 0 & -3 \\
     0 & 1 & 4 & 0 & 1 & 0 \\
     0 & 0 & 1 & 0 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftarrow R_1 - 3R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & 0 & 1 & 0 & -3 \\
     0 & 1 & 0 & 0 & 1 & -4 \\
     0 & 0 & 1 & 0 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 4R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 0 & 1 & -2 & 5 \\
     0 & 1 & 0 & 0 & 1 & -4 \\
     0 & 0 & 1 & 0 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftarrow R_1 - 2R_2 \text{)}
    \end{align*}

    Hence

    $$
    \boldsymbol A^{-1}=
    \begin{pmatrix}
    1 & -2 & 5\\
    0 & 1 & -4\\
    0 & 0 & 1
    \end{pmatrix},
    $$

    which is again upper triangular with ones on the diagonal.
