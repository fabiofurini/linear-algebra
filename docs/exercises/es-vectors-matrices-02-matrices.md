---
title: "Matrices"
---

# Matrices

<div class="info-capitolo" markdown>

**Exercises · Vectors and matrices** · chapter [4.1 · Matrices](../vectors-matrices/02-matrices.md) · with worked solutions · [:material-file-pdf-box: Lecture notes (PDF)](../pdf/lecture-notes-linear-algebra.pdf)

</div>

<a id="box-exe_matPSDQ1-1"></a>

!!! esercizio "Exercise 1"

    Using the definition, prove that the matrix

    $$
    {\boldsymbol Q}_1=\begin{pmatrix}
    \frac{1}{3} & 0\\[1ex]
    0 & \frac{1}{2} \\
    \end{pmatrix} \in \R^{2 \times 2}
    $$

    is positive semidefinite.

??? soluzione "Solution"

    We have:

    \begin{align*}
    \begin{pmatrix}
    x_1 & x_2
    \end{pmatrix}
    \begin{pmatrix}
    \frac{1}{3} & 0 \\[1ex]
    0 & \frac{1}{2}
    \end{pmatrix}
    \begin{pmatrix}
    x_1 \\[1ex]
    x_2
    \end{pmatrix}
    &= \begin{pmatrix}
    \left(\frac{1}{3} x_1 + 0 \cdot x_2 \right) & \left(0 \cdot x_1 + \frac{1}{2} x_2\right)
    \end{pmatrix}
    \begin{pmatrix}
    x_1 \\[1ex]
    x_2
    \end{pmatrix}\\[2ex]
    &= \left(\frac{1}{3} x_1 \right) x_1 + \left(\frac{1}{2} x_2\right) x_2 \\[2ex]
    &= \frac{1}{3} x_1^2 + \frac{1}{2} x_2^2 \geq 0, ~~~~~~ \forall (x_1, x_2) \in \mathbb{R}^2
    \end{align*}

    Accordingly, the matrix \( {\boldsymbol Q}_1 \) is positive semidefinite.

<a id="box-exe_matPSDQ2-2"></a>

!!! esercizio "Exercise 2"

    Using the definition, prove that the matrix

    $$
    {\boldsymbol Q}_2 = \begin{pmatrix}
    3 & 1 \\[1ex]
    1 & 3
    \end{pmatrix} \in \R^{2 \times 2}
    $$

    is positive semidefinite.

??? soluzione "Solution"

    We have:

    \begin{align*}
    \begin{pmatrix}
    x_1 & x_2
    \end{pmatrix}
    \begin{pmatrix}
    3 & 1 \\[1ex]
    1 & 3
    \end{pmatrix}
    \begin{pmatrix}
    x_1 \\[1ex]
    x_2
    \end{pmatrix}
    &= \begin{pmatrix}
    (3\;x_1 + x_2) & (x_1 + 3\;x_2)
    \end{pmatrix}
    \begin{pmatrix}
    x_1 \\[1ex]
    x_2
    \end{pmatrix}\\[2ex]
    &= (3\;x_1 + x_2)\;x_1 + (x_1 + 3\;x_2)\;x_2 \\[2ex]
    &= 3\;x_1^2 + x_1\;x_2 + x_1\;x_2 + 3\;x_2^2 \\[2ex]
    &= 3\;x_1^2 + 2\;x_1\;x_2 + 3\;x_2^2 \\[2ex]
    &= (x_1 + x_2)^2 + 2\;x_1^2 + 2\;x_2^2 \geq 0, ~~~~~~
    \forall (x_1, x_2) \in \mathbb{R}^2
    \end{align*}

    accordingly the matrix ${\boldsymbol Q}_2$ is positive semidefinite.

<a id="box-exe_matPSDQ3-3"></a>

!!! esercizio "Exercise 3"

    Using the definition, prove that the matrix

    $$
    {\boldsymbol Q}_3 = \begin{pmatrix}
    2 & -1 & 0 \\[1ex]
    -1 & 2 & -1 \\[1ex]
    0 & -1 & 2 \\
    \end{pmatrix} \in \R^{3 \times 3}
    $$

    is positive semidefinite.

??? soluzione "Solution"

    We have:

    \begin{align*}
    &\begin{pmatrix}
    x_1 & x_2 & x_3
    \end{pmatrix}
    \begin{pmatrix}
    2 & -1 & 0 \\[1ex]
    -1 & 2 & -1 \\[1ex]
    0 & -1 & 2 \\
    \end{pmatrix}
    \begin{pmatrix}
    x_1 \\[1ex]
    x_2 \\[1ex]
    x_3 \\
    \end{pmatrix}\\[2ex]
    &= \begin{pmatrix}
    (2\;x_1-x_2) & (-x_1+2\;x_2-x_3)& (-x_2+2\;x_3)
    \end{pmatrix}
    \begin{pmatrix}
    x_1 \\[1ex]
    x_2 \\[1ex]
    x_3 \\
    \end{pmatrix}\\[2ex]
    &= (2\;x_1-x_2)\;x_1 + (-x_1+2\;x_2-x_3)\; x_2 + (-x_2+2\;x_3)x_3  \\[2ex]
    &= 2\;x_1^2 - x_2\;x_1 - x_1\;x_2+ 2\;x_2^2 - x_3\;x_2 - x_2\;x_3 + 2\;x_3^2\\[2ex]
    &= 2\;x_1^2 - 2\;x_1\;x_2 + 2\;x_2^2 - 2 \;x_2\;x_3 + 2\;x_3^2 \\[2ex]
    &= x_1^2+ x_1^2 - 2\;x_1\;x_2 + x_2^2 + x_2^2 - 2 \;x_2\;x_3 + x_3^2 + x_3^2 \\[2ex]
    &= x_1^2 + (x_1-x_2)^2 + (x_2-x_3)^2 + x_3^2 \ge 0,
    ~~~~~~
    \forall (
    x_1, x_2, x_3 ) \in \R^3
    \end{align*}

    accordingly the matrix ${\boldsymbol Q}_3$ is positive semidefinite.

<a id="box-exe_matSumTranspose-4"></a>

!!! esercizio "Exercise 4"

    Consider the matrices

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & -2 & 3\\
    0 & 4 & -1
    \end{pmatrix},
    \qquad
    \boldsymbol B=
    \begin{pmatrix}
    2 & 1 & 0\\
    -3 & 2 & 5
    \end{pmatrix}
    \in\R^{2\times 3}.
    $$

    Compute \(\boldsymbol A+\boldsymbol B\), \(2\boldsymbol A-\boldsymbol B\), \(\boldsymbol A'\), and verify that \((\boldsymbol A+\boldsymbol B)'=\boldsymbol A'+\boldsymbol B'\).

??? soluzione "Solution"

    Sum and scalar multiplication are computed entry by entry:

    $$
    \boldsymbol A+\boldsymbol B=
    \begin{pmatrix}
    1+2 & -2+1 & 3+0\\
    0-3 & 4+2 & -1+5
    \end{pmatrix}
    =
    \begin{pmatrix}
    3 & -1 & 3\\
    -3 & 6 & 4
    \end{pmatrix},
    $$

    $$
    2\boldsymbol A-\boldsymbol B=
    \begin{pmatrix}
    2 & -4 & 6\\
    0 & 8 & -2
    \end{pmatrix}
    -
    \begin{pmatrix}
    2 & 1 & 0\\
    -3 & 2 & 5
    \end{pmatrix}
    =
    \begin{pmatrix}
    0 & -5 & 6\\
    3 & 6 & -7
    \end{pmatrix}.
    $$

    The transpose is obtained by interchanging rows and columns (\(\boldsymbol A'\in\R^{3\times 2}\)):

    $$
    \boldsymbol A'=
    \begin{pmatrix}
    1 & 0\\
    -2 & 4\\
    3 & -1
    \end{pmatrix},
    \qquad
    \boldsymbol B'=
    \begin{pmatrix}
    2 & -3\\
    1 & 2\\
    0 & 5
    \end{pmatrix}.
    $$

    Finally,

    $$
    \boldsymbol A'+\boldsymbol B'=
    \begin{pmatrix}
    3 & -3\\
    -1 & 6\\
    3 & 4
    \end{pmatrix}
    =(\boldsymbol A+\boldsymbol B)'.
    $$

<a id="box-exe_matProductDimensions-5"></a>

!!! esercizio "Exercise 5"

    Consider the matrices

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 0 & 2\\
    3 & -1 & 1
    \end{pmatrix}\in\R^{2\times 3},
    \qquad
    \boldsymbol B=
    \begin{pmatrix}
    1 & 0\\
    2 & 1\\
    -1 & 3
    \end{pmatrix}\in\R^{3\times 2},
    \qquad
    \boldsymbol C=
    \begin{pmatrix}
    1 & 2\\
    0 & -1
    \end{pmatrix}\in\R^{2\times 2}.
    $$

    1. Among the products \(\boldsymbol A\boldsymbol B\), \(\boldsymbol B\boldsymbol A\), \(\boldsymbol A\boldsymbol C\), \(\boldsymbol C\boldsymbol A\), \(\boldsymbol B\boldsymbol C\), \(\boldsymbol C\boldsymbol B\), say which ones are defined and give the dimensions of the result.

    2. Compute \(\boldsymbol C\boldsymbol A\), \(\boldsymbol A\boldsymbol B\) and \(\boldsymbol B\boldsymbol C\).

??? soluzione "Solution"

    1. The product of a matrix in \(\R^{m\times n}\) and a matrix in \(\R^{q\times p}\) is defined only if \(n=q\) (number of columns of the first = number of rows of the second), and the result is in \(\R^{m\times p}\). Hence:

        - \(\boldsymbol A\boldsymbol B\): \((2\times 3)(3\times 2)\), defined, result in \(\R^{2\times 2}\);

        - \(\boldsymbol B\boldsymbol A\): \((3\times 2)(2\times 3)\), defined, result in \(\R^{3\times 3}\);

        - \(\boldsymbol A\boldsymbol C\): \((2\times 3)(2\times 2)\), <strong>not</strong> defined (\(3\neq 2\));

        - \(\boldsymbol C\boldsymbol A\): \((2\times 2)(2\times 3)\), defined, result in \(\R^{2\times 3}\);

        - \(\boldsymbol B\boldsymbol C\): \((3\times 2)(2\times 2)\), defined, result in \(\R^{3\times 2}\);

        - \(\boldsymbol C\boldsymbol B\): \((2\times 2)(3\times 2)\), <strong>not</strong> defined (\(2\neq 3\)).

    2. Each entry \((i,k)\) is the scalar product of row \(i\) of the first matrix and column \(k\) of the second one:

        $$
        \boldsymbol C\boldsymbol A=
        \begin{pmatrix}
        1\cdot 1+2\cdot 3 & 1\cdot 0+2\cdot(-1) & 1\cdot 2+2\cdot 1\\
        0\cdot 1+(-1)\cdot 3 & 0\cdot 0+(-1)\cdot(-1) & 0\cdot 2+(-1)\cdot 1
        \end{pmatrix}
        =
        \begin{pmatrix}
        7 & -2 & 4\\
        -3 & 1 & -1
        \end{pmatrix},
        $$

        $$
        \boldsymbol A\boldsymbol B=
        \begin{pmatrix}
        1\cdot 1+0\cdot 2+2\cdot(-1) & 1\cdot 0+0\cdot 1+2\cdot 3\\
        3\cdot 1+(-1)\cdot 2+1\cdot(-1) & 3\cdot 0+(-1)\cdot 1+1\cdot 3
        \end{pmatrix}
        =
        \begin{pmatrix}
        -1 & 6\\
        0 & 2
        \end{pmatrix},
        $$

        $$
        \boldsymbol B\boldsymbol C=
        \begin{pmatrix}
        1\cdot 1+0\cdot 0 & 1\cdot 2+0\cdot(-1)\\
        2\cdot 1+1\cdot 0 & 2\cdot 2+1\cdot(-1)\\
        -1\cdot 1+3\cdot 0 & -1\cdot 2+3\cdot(-1)
        \end{pmatrix}
        =
        \begin{pmatrix}
        1 & 2\\
        2 & 3\\
        -1 & -5
        \end{pmatrix}.
        $$

<a id="box-exe_matNonCommutative-6"></a>

!!! esercizio "Exercise 6"

    1. Let \( \boldsymbol A=\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix} \) and \( \boldsymbol B=\begin{pmatrix}1 & 0\\ 1 & 1\end{pmatrix}. \) Compute \(\boldsymbol A\boldsymbol B\) and \(\boldsymbol B\boldsymbol A\). Is the product commutative?

    2. Let \( \boldsymbol A=\begin{pmatrix}1 & 1\\ 1 & 1\end{pmatrix} \) and \( \boldsymbol B=\begin{pmatrix}1 & -1\\ -1 & 1\end{pmatrix}. \) Compute \(\boldsymbol A\boldsymbol B\). What do you observe?

??? soluzione "Solution"

    1.

        $$
        \boldsymbol A\boldsymbol B=
        \begin{pmatrix}
        1\cdot 1+1\cdot 1 & 1\cdot 0+1\cdot 1\\
        0\cdot 1+1\cdot 1 & 0\cdot 0+1\cdot 1
        \end{pmatrix}
        =
        \begin{pmatrix}
        2 & 1\\
        1 & 1
        \end{pmatrix},
        \qquad
        \boldsymbol B\boldsymbol A=
        \begin{pmatrix}
        1\cdot 1+0\cdot 0 & 1\cdot 1+0\cdot 1\\
        1\cdot 1+1\cdot 0 & 1\cdot 1+1\cdot 1
        \end{pmatrix}
        =
        \begin{pmatrix}
        1 & 1\\
        1 & 2
        \end{pmatrix}.
        $$

        Since \(\boldsymbol A\boldsymbol B\neq\boldsymbol B\boldsymbol A\), the product is not commutative (even for square matrices of the same size).

    2.

        $$
        \boldsymbol A\boldsymbol B=
        \begin{pmatrix}
        1\cdot 1+1\cdot(-1) & 1\cdot(-1)+1\cdot 1\\
        1\cdot 1+1\cdot(-1) & 1\cdot(-1)+1\cdot 1
        \end{pmatrix}
        =
        \begin{pmatrix}
        0 & 0\\
        0 & 0
        \end{pmatrix}.
        $$

        The product of two non-zero matrices can be the zero matrix: unlike real numbers, \(\boldsymbol A\boldsymbol B=\boldsymbol 0\) does <strong>not</strong> imply \(\boldsymbol A=\boldsymbol 0\) or \(\boldsymbol B=\boldsymbol 0\).

<a id="box-exe_matSpecial-7"></a>

!!! esercizio "Exercise 7"

    1. For each of the following matrices, say whether it is square, diagonal, symmetric, upper triangular, lower triangular:

        $$
        \boldsymbol M_1=\begin{pmatrix}1 & 2\\ 2 & 3\end{pmatrix},
        \quad
        \boldsymbol M_2=\begin{pmatrix}4 & 0 & 0\\ 0 & -1 & 0\\ 0 & 0 & 2\end{pmatrix},
        \quad
        \boldsymbol M_3=\begin{pmatrix}1 & 0 & 0\\ 5 & 2 & 0\\ -1 & 3 & 4\end{pmatrix},
        \quad
        \boldsymbol M_4=\begin{pmatrix}1 & 2 & 3\\ 4 & 5 & 6\end{pmatrix}.
        $$

    2. Compute the product of the upper triangular matrices \( \boldsymbol U_1=\begin{pmatrix}1 & 2\\ 0 & 3\end{pmatrix} \) and \( \boldsymbol U_2=\begin{pmatrix}2 & -1\\ 0 & 4\end{pmatrix}. \) What kind of matrix do you obtain?

    3. Let \( \boldsymbol D=\begin{pmatrix}2 & 0\\ 0 & 3\end{pmatrix} \) and \( \boldsymbol A=\begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}. \) Compute \(\boldsymbol D\boldsymbol A\) and \(\boldsymbol A\boldsymbol D\) and describe the effect of the diagonal matrix.

??? soluzione "Solution"

    1. - \(\boldsymbol M_1\): square and symmetric (\(m_{12}=m_{21}=2\)); it is neither diagonal nor triangular.

        - \(\boldsymbol M_2\): square and diagonal; hence it is also symmetric, upper triangular and lower triangular.

        - \(\boldsymbol M_3\): square and lower triangular (all entries above the main diagonal are zero); it is not symmetric (e.g., \(m_{21}=5\neq 0=m_{12}\)).

        - \(\boldsymbol M_4\in\R^{2\times 3}\): not square, hence none of the other properties applies.

    2.

        $$
        \boldsymbol U_1\boldsymbol U_2=
        \begin{pmatrix}
        1\cdot 2+2\cdot 0 & 1\cdot(-1)+2\cdot 4\\
        0\cdot 2+3\cdot 0 & 0\cdot(-1)+3\cdot 4
        \end{pmatrix}
        =
        \begin{pmatrix}
        2 & 7\\
        0 & 12
        \end{pmatrix},
        $$

        which is again upper triangular, with diagonal entries \(1\cdot 2=2\) and \(3\cdot 4=12\).

    3.

        $$
        \boldsymbol D\boldsymbol A=
        \begin{pmatrix}
        2\cdot 1 & 2\cdot 2\\
        3\cdot 3 & 3\cdot 4
        \end{pmatrix}
        =
        \begin{pmatrix}
        2 & 4\\
        9 & 12
        \end{pmatrix},
        \qquad
        \boldsymbol A\boldsymbol D=
        \begin{pmatrix}
        1\cdot 2 & 2\cdot 3\\
        3\cdot 2 & 4\cdot 3
        \end{pmatrix}
        =
        \begin{pmatrix}
        2 & 6\\
        6 & 12
        \end{pmatrix}.
        $$

        Left multiplication by \(\boldsymbol D\) multiplies the \(i\)-th <strong>row</strong> of \(\boldsymbol A\) by \(d_{ii}\); right multiplication multiplies the \(j\)-th <strong>column</strong> of \(\boldsymbol A\) by \(d_{jj}\).

<a id="box-exe_matPermutation-8"></a>

!!! esercizio "Exercise 8"

    Let

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 3\\
    4 & 5 & 6\\
    7 & 8 & 9
    \end{pmatrix}
    $$

    and let \(\pi=(2,3,1)\).

    1. Write the permutation matrix \(\boldsymbol P_{\pi}\) and compute \(\boldsymbol P_{\pi}\boldsymbol A\).

    2. Compute \(\boldsymbol A\boldsymbol P_{\pi}'\) and check that the columns of \(\boldsymbol A\) are reordered according to \(\pi\).

    3. Verify that \(\boldsymbol P_{\pi}\boldsymbol P_{\pi}'=\boldsymbol I_3\).

??? soluzione "Solution"

    1. \(\boldsymbol P_{\pi}\) is obtained from \(\boldsymbol I_3\) by placing row \(2\) first, then row \(3\), then row \(1\):

        $$
        \boldsymbol P_{\pi}=
        \begin{pmatrix}
        0 & 1 & 0\\
        0 & 0 & 1\\
        1 & 0 & 0
        \end{pmatrix},
        \qquad
        \boldsymbol P_{\pi}\boldsymbol A=
        \begin{pmatrix}
        4 & 5 & 6\\
        7 & 8 & 9\\
        1 & 2 & 3
        \end{pmatrix}.
        $$

        The rows of \(\boldsymbol A\) appear in the order \(2,3,1\).

    2.

        $$
        \boldsymbol A\boldsymbol P_{\pi}'=
        \begin{pmatrix}
        1 & 2 & 3\\
        4 & 5 & 6\\
        7 & 8 & 9
        \end{pmatrix}
        \begin{pmatrix}
        0 & 0 & 1\\
        1 & 0 & 0\\
        0 & 1 & 0
        \end{pmatrix}
        =
        \begin{pmatrix}
        2 & 3 & 1\\
        5 & 6 & 4\\
        8 & 9 & 7
        \end{pmatrix}.
        $$

        The columns of \(\boldsymbol A\) appear in the order \(2,3,1\).

    3.

        $$
        \boldsymbol P_{\pi}\boldsymbol P_{\pi}'=
        \begin{pmatrix}
        0 & 1 & 0\\
        0 & 0 & 1\\
        1 & 0 & 0
        \end{pmatrix}
        \begin{pmatrix}
        0 & 0 & 1\\
        1 & 0 & 0\\
        0 & 1 & 0
        \end{pmatrix}
        =
        \begin{pmatrix}
        1 & 0 & 0\\
        0 & 1 & 0\\
        0 & 0 & 1
        \end{pmatrix}
        =\boldsymbol I_3.
        $$

        Hence \(\boldsymbol P_{\pi}\) is invertible and \(\boldsymbol P_{\pi}^{-1}=\boldsymbol P_{\pi}'\) (one checks in the same way that \(\boldsymbol P_{\pi}'\boldsymbol P_{\pi}=\boldsymbol I_3\)).

<a id="box-exe_matLaplace3x3-9"></a>

!!! esercizio "Exercise 9"

    Compute the determinant of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & 0 & 1\\
    3 & 0 & -2\\
    1 & 4 & 5
    \end{pmatrix}
    $$

    using the Laplace expansion along the most convenient row or column, and check the result with the Sarrus rule.

??? soluzione "Solution"

    The second column contains two zeros, so we expand along it: only the entry \(a_{32}=4\) contributes,

    $$
    \det(\boldsymbol A)=0\cdot C_{12}+0\cdot C_{22}+4\cdot C_{32}.
    $$

    The cofactor is

    $$
    C_{32}=(-1)^{3+2}\det
    \begin{pmatrix}
    2 & 1\\
    3 & -2
    \end{pmatrix}
    =
    -\bigl(2\cdot(-2)-1\cdot 3\bigr)
    =
    -(-4-3)=7.
    $$

    Therefore \(\det(\boldsymbol A)=4\cdot 7=28\).

    Check with Sarrus (\(a=2,b=0,c=1,d=3,e=0,f=-2,g=1,h=4,i=5\)):

    $$
    \det(\boldsymbol A)=2\cdot 0\cdot 5+0\cdot(-2)\cdot 1+1\cdot 3\cdot 4-1\cdot 0\cdot 1-0\cdot 3\cdot 5-2\cdot(-2)\cdot 4
    =0+0+12-0-0+16=28.
    $$

<a id="box-exe_matLaplace4x4-10"></a>

!!! esercizio "Exercise 10"

    Compute the determinant of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 0 & 3\\
    0 & 0 & 2 & 0\\
    4 & 1 & 0 & 2\\
    1 & 0 & 1 & 3
    \end{pmatrix}
    \in\R^{4\times 4}
    $$

    choosing the row or column that minimizes the number of computations.

??? soluzione "Solution"

    The second row has only one non-zero entry, \(a_{23}=2\). Expanding along the second row:

    $$
    \det(\boldsymbol A)=a_{23}\,C_{23}=2\cdot(-1)^{2+3}\det(\boldsymbol A_{23})=-2\det(\boldsymbol A_{23}),
    $$

    where \(\boldsymbol A_{23}\) is obtained by deleting row \(2\) and column \(3\):

    $$
    \boldsymbol A_{23}=
    \begin{pmatrix}
    1 & 2 & 3\\
    4 & 1 & 2\\
    1 & 0 & 3
    \end{pmatrix}.
    $$

    We expand \(\det(\boldsymbol A_{23})\) along its third row, which contains a zero:

    \begin{align*}
    \det(\boldsymbol A_{23})
    &=
    1\cdot(-1)^{3+1}\det\begin{pmatrix}2 & 3\\ 1 & 2\end{pmatrix}
    +0
    +3\cdot(-1)^{3+3}\det\begin{pmatrix}1 & 2\\ 4 & 1\end{pmatrix}\\
    &=1\cdot(4-3)+3\cdot(1-8)=1-21=-20.
    \end{align*}

    Therefore

    $$
    \det(\boldsymbol A)=-2\cdot(-20)=40.
    $$

<a id="box-exe_matDetProperties-11"></a>

!!! esercizio "Exercise 11"

    Consider the matrices

    $$
    \boldsymbol U=
    \begin{pmatrix}
    2 & 5 & -1\\
    0 & -3 & 4\\
    0 & 0 & 1
    \end{pmatrix},
    \qquad
    \boldsymbol L=
    \begin{pmatrix}
    1 & 0 & 0\\
    7 & 2 & 0\\
    -3 & 4 & 5
    \end{pmatrix}.
    $$

    1. Compute \(\det(\boldsymbol U)\) and \(\det(\boldsymbol L)\).

    2. Without computing any product, find \(\det(\boldsymbol U\boldsymbol L)\), \(\det(\boldsymbol U')\), \(\det(3\boldsymbol U)\) and \(\det(\boldsymbol U^{-1})\). Why does \(\boldsymbol U^{-1}\) exist?

    3. Verify that \( \begin{pmatrix}2 & -1\\ -5 & 3\end{pmatrix} \) is the inverse of \( \boldsymbol A=\begin{pmatrix}3 & 1\\ 5 & 2\end{pmatrix} \), and check that \(\det(\boldsymbol A^{-1})=1/\det(\boldsymbol A)\).

??? soluzione "Solution"

    1. Both matrices are triangular, so their determinant is the product of the diagonal entries:

        $$
        \det(\boldsymbol U)=2\cdot(-3)\cdot 1=-6,
        \qquad
        \det(\boldsymbol L)=1\cdot 2\cdot 5=10.
        $$

    2. Using the properties of determinants (with \(n=3\)):

        $$
        \det(\boldsymbol U\boldsymbol L)=\det(\boldsymbol U)\det(\boldsymbol L)=-6\cdot 10=-60,
        \qquad
        \det(\boldsymbol U')=\det(\boldsymbol U)=-6,
        $$

        $$
        \det(3\boldsymbol U)=3^3\det(\boldsymbol U)=27\cdot(-6)=-162.
        $$

        Since \(\det(\boldsymbol U)=-6\neq 0\), the matrix \(\boldsymbol U\) is invertible, and \( \det(\boldsymbol U^{-1})=\frac{1}{\det(\boldsymbol U)}=-\frac{1}{6}. \)

    3.

        $$
        \begin{pmatrix}3 & 1\\ 5 & 2\end{pmatrix}
        \begin{pmatrix}2 & -1\\ -5 & 3\end{pmatrix}
        =
        \begin{pmatrix}6-5 & -3+3\\ 10-10 & -5+6\end{pmatrix}
        =\boldsymbol I_2,
        $$

        $$
        \begin{pmatrix}2 & -1\\ -5 & 3\end{pmatrix}
        \begin{pmatrix}3 & 1\\ 5 & 2\end{pmatrix}
        =
        \begin{pmatrix}6-5 & 2-2\\ -15+15 & -5+6\end{pmatrix}
        =\boldsymbol I_2.
        $$

        Hence it is the inverse of \(\boldsymbol A\). Moreover \(\det(\boldsymbol A)=3\cdot 2-1\cdot 5=1\) and \(\det(\boldsymbol A^{-1})=2\cdot 3-(-1)\cdot(-5)=1=\frac{1}{1}\).

<a id="box-exe_matRank-12"></a>

!!! esercizio "Exercise 12"

    Compute the rank of the following matrices:

    $$
    \boldsymbol A_1=\begin{pmatrix}1 & 2\\ 3 & 6\end{pmatrix},
    \qquad
    \boldsymbol A_2=\begin{pmatrix}1 & 2 & 3\\ 0 & 1 & 1\\ 1 & 3 & 4\end{pmatrix},
    \qquad
    \boldsymbol A_3=\begin{pmatrix}1 & 0 & 2\\ 0 & 1 & 1\\ 1 & 1 & 0\end{pmatrix}.
    $$

??? soluzione "Solution"

    - \(\boldsymbol A_1\): the second column is twice the first one, \(\begin{pmatrix}2 & 6\end{pmatrix}'=2\begin{pmatrix}1 & 3\end{pmatrix}'\), so the two columns are linearly dependent; the first column is non-zero, hence it is linearly independent by itself. Therefore \(\mathrm{rank}(\boldsymbol A_1)=1\) (consistently, \(\det(\boldsymbol A_1)=6-6=0\)).

    - \(\boldsymbol A_2\): the third column is the sum of the first two, \(\begin{pmatrix}3 & 1 & 4\end{pmatrix}'=\begin{pmatrix}1 & 0 & 1\end{pmatrix}'+\begin{pmatrix}2 & 1 & 3\end{pmatrix}'\), so the three columns are linearly dependent and \(\mathrm{rank}(\boldsymbol A_2)\le 2\). The first two columns are linearly independent: \(\lambda_1\begin{pmatrix}1 & 0 & 1\end{pmatrix}'+\lambda_2\begin{pmatrix}2 & 1 & 3\end{pmatrix}'=\boldsymbol 0\) gives \(\lambda_2=0\) (second entry) and then \(\lambda_1=0\) (first entry). Hence \(\mathrm{rank}(\boldsymbol A_2)=2\). Consistently, expanding along the first row, \(\det(\boldsymbol A_2)=1\cdot(4-3)-2\cdot(0-1)+3\cdot(0-1)=1+2-3=0\).

    - \(\boldsymbol A_3\): expanding along the first row,

        $$
        \det(\boldsymbol A_3)=1\cdot(1\cdot 0-1\cdot 1)-0\cdot(0\cdot 0-1\cdot 1)+2\cdot(0\cdot 1-1\cdot 1)=-1-0-2=-3\neq 0.
        $$

        Since \(\boldsymbol A_3\) is square and \(\det(\boldsymbol A_3)\neq 0\), we have \(\mathrm{rank}(\boldsymbol A_3)=3\).
