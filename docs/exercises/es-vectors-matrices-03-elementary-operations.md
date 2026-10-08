---
title: "Matrix operations"
---

# Matrix operations

<div class="info-capitolo" markdown>

**Exercises · Vectors and matrices** · chapter [4.2 · Matrix operations](../vectors-matrices/03-elementary-operations.md) · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-vectors-matrices-03-elementary-operations.pdf)

</div>

<a id="box-exe_ops_row_operations-1"></a>

!!! esercizio "Exercise 1"

    Consider the matrix

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & -1\\
    3 & 0 & 2\\
    -2 & 1 & 4
    \end{pmatrix}.
    $$

    Apply to \(\boldsymbol A\), one after the other, the elementary row operations \(R_1 \leftrightarrow R_3\), \(R_2 \leftarrow -2R_2\) and \(R_3 \leftarrow R_3 + 2R_1\), and write the matrix obtained after each operation.

??? soluzione "Solution"

    Each operation is applied to the matrix produced by the previous one:

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     1 & 2 & -1 \\
     3 & 0 & 2 \\
     -2 & 1 & 4 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc}
     -2 & 1 & 4 \\
     3 & 0 & 2 \\
     1 & 2 & -1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftrightarrow R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     -2 & 1 & 4 \\
     -6 & 0 & -4 \\
     1 & 2 & -1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow -2R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     -2 & 1 & 4 \\
     -6 & 0 & -4 \\
     -3 & 4 & 7 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 + 2R_1 \text{)}
    \end{align*}

    Note that in the last step \(R_1\) is the <em>current</em> first row \((-2,\,1,\,4)\): \((1,\,2,\,-1) + 2\,(-2,\,1,\,4) = (-3,\,4,\,7)\).

<a id="box-exe_ops_column_operations-2"></a>

!!! esercizio "Exercise 2"

    Consider the matrix

    $$
    \boldsymbol B=
    \begin{pmatrix}
    1 & -1 & 2\\
    0 & 3 & 1
    \end{pmatrix}.
    $$

    Apply to \(\boldsymbol B\), one after the other, the elementary column operations \(C_1 \leftrightarrow C_3\), \(C_2 \leftarrow C_2 + C_1\) and \(C_3 \leftarrow 2C_3\), and write the matrix obtained after each operation.

??? soluzione "Solution"

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     1 & -1 & 2 \\
     0 & 3 & 1 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc}
     2 & -1 & 1 \\
     1 & 3 & 0 \\
    \end{array}
    \right) \hspace{1em} \text{(} C_1 \leftrightarrow C_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     2 & 1 & 1 \\
     1 & 4 & 0 \\
    \end{array}
    \right) \hspace{1em} \text{(} C_2 \leftarrow C_2 + C_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     2 & 1 & 2 \\
     1 & 4 & 0 \\
    \end{array}
    \right) \hspace{1em} \text{(} C_3 \leftarrow 2C_3 \text{)}
    \end{align*}

    In the second step: \(\begin{pmatrix}-1\\3\end{pmatrix} + \begin{pmatrix}2\\1\end{pmatrix} = \begin{pmatrix}1\\4\end{pmatrix}\).

<a id="box-exe_ops_det_effect-3"></a>

!!! esercizio "Exercise 3"

    Let \(\boldsymbol A \in \R^{3\times 3}\) with \(\det(\boldsymbol A) = 5\). Without computing any matrix entry, find the determinant of the matrix obtained from \(\boldsymbol A\) by:

    1. the row swap \(R_1 \leftrightarrow R_2\);

    2. the row scaling \(R_2 \leftarrow -3R_2\);

    3. the row addition \(R_3 \leftarrow R_3 + 7R_1\);

    4. the three operations above, applied one after the other;

    5. the column swap \(C_1 \leftrightarrow C_3\) followed by the column scaling \(C_2 \leftarrow 4C_2\).

    Finally, compute \(\det(2\boldsymbol A)\).

??? soluzione "Solution"

    We use the effect of the elementary operations on the determinant: a swap changes the sign, a scaling by \(\lambda\) multiplies it by \(\lambda\), an addition does not change it.

    1. \(\det = -\det(\boldsymbol A) = -5\).

    2. \(\det = -3\det(\boldsymbol A) = -15\).

    3. \(\det = \det(\boldsymbol A) = 5\).

    4. \(\det = (-1)\cdot(-3)\cdot 1\cdot\det(\boldsymbol A) = 15\).

    5. \(\det = (-1)\cdot 4\cdot\det(\boldsymbol A) = -20\) (column operations act as row operations).

    Finally, \(2\boldsymbol A\) is obtained by scaling each of the \(3\) rows by \(2\), so

    $$
    \det(2\boldsymbol A) = 2^3\det(\boldsymbol A) = 8\cdot 5 = 40.
    $$

    For instance, all these values can be checked on \(\boldsymbol A = \begin{pmatrix}1 & 2 & 0\\ 0 & 1 & 1\\ 2 & 0 & 1\end{pmatrix}\), which has \(\det(\boldsymbol A) = 5\).

<a id="box-exe_ops_det_zero_row-4"></a>

!!! esercizio "Exercise 4"

    Using elementary row operations (and no expansion formula), show that the following matrices have determinant equal to zero:

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 3\\
    4 & 5 & 6\\
    2 & 4 & 6
    \end{pmatrix},
    \qquad
    \boldsymbol B=
    \begin{pmatrix}
    1 & 2 & 3\\
    4 & 5 & 6\\
    7 & 8 & 9
    \end{pmatrix}.
    $$

??? soluzione "Solution"

    Row additions do not change the determinant, and a matrix with a zero row has determinant zero (Laplace expansion along that row).

    For \(\boldsymbol A\), the third row is twice the first one:

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     1 & 2 & 3 \\
     4 & 5 & 6 \\
     2 & 4 & 6 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 2 & 3 \\
     4 & 5 & 6 \\
     0 & 0 & 0 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 2R_1 \text{)}
    \end{align*}

    Hence \(\det(\boldsymbol A) = 0\).

    For \(\boldsymbol B\):

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     1 & 2 & 3 \\
     4 & 5 & 6 \\
     7 & 8 & 9 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 2 & 3 \\
     0 & -3 & -6 \\
     7 & 8 & 9 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 4R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 2 & 3 \\
     0 & -3 & -6 \\
     0 & -6 & -12 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 7R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 2 & 3 \\
     0 & -3 & -6 \\
     0 & 0 & 0 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 2R_2 \text{)}
    \end{align*}

    Hence \(\det(\boldsymbol B) = 0\).

<a id="box-exe_ops_echelon_recognize-5"></a>

!!! esercizio "Exercise 5"

    Which of the following matrices are in row echelon form? Justify your answer.

    $$
    \boldsymbol M_1=
    \begin{pmatrix}
    1 & 2 & 0\\
    0 & 0 & 3\\
    0 & 0 & 0
    \end{pmatrix},
    \quad
    \boldsymbol M_2=
    \begin{pmatrix}
    0 & 1 & 2\\
    1 & 0 & 0\\
    0 & 0 & 1
    \end{pmatrix},
    \quad
    \boldsymbol M_3=
    \begin{pmatrix}
    2 & 1 & 4 & 1\\
    0 & 0 & 0 & 0\\
    0 & 0 & 1 & 5
    \end{pmatrix},
    \quad
    \boldsymbol M_4=
    \begin{pmatrix}
    3 & 0 & 1\\
    0 & 2 & 0\\
    0 & 0 & 0
    \end{pmatrix}.
    $$

??? soluzione "Solution"

    - \(\boldsymbol M_1\): <strong>yes</strong>. The pivots are in columns 1 and 3 (strictly moving to the right) and the zero row is at the bottom.

    - \(\boldsymbol M_2\): <strong>no</strong>. The pivot of row 2 is in column 1, which is to the left of the pivot of row 1 (column 2).

    - \(\boldsymbol M_3\): <strong>no</strong>. The zero row (row 2) is above a nonzero row (row 3).

    - \(\boldsymbol M_4\): <strong>yes</strong>. The pivots are in columns 1 and 2 and the zero row is at the bottom.

<a id="box-exe_ops_echelon_rectangular-6"></a>

!!! esercizio "Exercise 6"

    Reduce the following matrix to row echelon form with Gaussian elimination and indicate the pivots:

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 1 & 3\\
    2 & 4 & 3 & 7\\
    1 & 2 & 2 & 4
    \end{pmatrix}.
    $$

??? soluzione "Solution"

    The first pivot is \(a_{11} = 1\); we eliminate the entries below it, then we look for the next pivot:

    \begin{align*}
    &\left(
    \begin{array}{cccc}
     1 & 2 & 1 & 3 \\
     2 & 4 & 3 & 7 \\
     1 & 2 & 2 & 4 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{cccc}
     1 & 2 & 1 & 3 \\
     0 & 0 & 1 & 1 \\
     1 & 2 & 2 & 4 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{cccc}
     1 & 2 & 1 & 3 \\
     0 & 0 & 1 & 1 \\
     0 & 0 & 1 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{cccc}
     1 & 2 & 1 & 3 \\
     0 & 0 & 1 & 1 \\
     0 & 0 & 0 & 0 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - R_2 \text{)}
    \end{align*}

    After the first step, the second column has no nonzero entry in rows 2 and 3, so we move to the third column: the second pivot is the entry \(1\) in position \((2,3)\). The last matrix is in row echelon form, with pivots \(1\) (position \((1,1)\)) and \(1\) (position \((2,3)\)), and one zero row.

<a id="box-exe_ops_gauss_upper-7"></a>

!!! esercizio "Exercise 7"

    Reduce the matrix

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & 1 & 1\\
    4 & 3 & 3\\
    8 & 7 & 9
    \end{pmatrix}
    $$

    to upper triangular form with Gaussian elimination, and use the result to compute \(\det(\boldsymbol A)\).

??? soluzione "Solution"

    The multipliers are \(\frac{4}{2} = 2\) and \(\frac{8}{2} = 4\) for the first column, and \(\frac{3}{1} = 3\) for the second column:

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     2 & 1 & 1 \\
     4 & 3 & 3 \\
     8 & 7 & 9 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc}
     2 & 1 & 1 \\
     0 & 1 & 1 \\
     8 & 7 & 9 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     2 & 1 & 1 \\
     0 & 1 & 1 \\
     0 & 3 & 5 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 4R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     2 & 1 & 1 \\
     0 & 1 & 1 \\
     0 & 0 & 2 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 3R_2 \text{)}
    \end{align*}

    Only row additions were used (\(s=0\) row swaps), hence

    $$
    \det(\boldsymbol A) = 2\cdot 1\cdot 2 = 4.
    $$

<a id="box-exe_ops_det_gauss_swap-8"></a>

!!! esercizio "Exercise 8"

    Compute the determinant of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    0 & 2 & 4\\
    1 & 1 & 2\\
    3 & 1 & 1
    \end{pmatrix}
    $$

    by Gaussian elimination. Check the result with the Laplace expansion along the first row.

??? soluzione "Solution"

    Since \(a_{11} = 0\), we start with a row swap:

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     0 & 2 & 4 \\
     1 & 1 & 2 \\
     3 & 1 & 1 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 1 & 2 \\
     0 & 2 & 4 \\
     3 & 1 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftrightarrow R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 1 & 2 \\
     0 & 2 & 4 \\
     0 & -2 & -5 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 3R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     1 & 1 & 2 \\
     0 & 2 & 4 \\
     0 & 0 & -1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 + R_2 \text{)}
    \end{align*}

    We used \(s=1\) row swap, hence

    $$
    \det(\boldsymbol A) = (-1)^1\cdot 1\cdot 2\cdot(-1) = 2.
    $$

    Check: \(\det(\boldsymbol A) = 0\cdot(1-2) - 2\cdot(1-6) + 4\cdot(1-3) = 10 - 8 = 2\).

<a id="box-exe_ops_det_gauss_4x4-9"></a>

!!! esercizio "Exercise 9"

    Compute the determinant of the \(4\times 4\) matrix

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 0 & 1\\
    2 & 5 & 1 & 2\\
    1 & 3 & 2 & 0\\
    0 & 1 & 1 & 3
    \end{pmatrix}
    $$

    by Gaussian elimination.

??? soluzione "Solution"

    \begin{align*}
    &\left(
    \begin{array}{cccc}
     1 & 2 & 0 & 1 \\
     2 & 5 & 1 & 2 \\
     1 & 3 & 2 & 0 \\
     0 & 1 & 1 & 3 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{cccc}
     1 & 2 & 0 & 1 \\
     0 & 1 & 1 & 0 \\
     1 & 3 & 2 & 0 \\
     0 & 1 & 1 & 3 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{cccc}
     1 & 2 & 0 & 1 \\
     0 & 1 & 1 & 0 \\
     0 & 1 & 2 & -1 \\
     0 & 1 & 1 & 3 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{cccc}
     1 & 2 & 0 & 1 \\
     0 & 1 & 1 & 0 \\
     0 & 0 & 1 & -1 \\
     0 & 1 & 1 & 3 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{cccc}
     1 & 2 & 0 & 1 \\
     0 & 1 & 1 & 0 \\
     0 & 0 & 1 & -1 \\
     0 & 0 & 0 & 3 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_4 \leftarrow R_4 - R_2 \text{)}
    \end{align*}

    The matrix is upper triangular and only row additions were used, hence

    $$
    \det(\boldsymbol A) = 1\cdot 1\cdot 1\cdot 3 = 3.
    $$

    (With the Laplace expansion we would need to compute four \(3\times 3\) determinants.)

<a id="box-exe_ops_partial_pivoting-10"></a>

!!! esercizio "Exercise 10"

    Reduce the matrix

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 3 & 1\\
    2 & 1 & 3\\
    4 & 4 & 2
    \end{pmatrix}
    $$

    to upper triangular form using Gaussian elimination with <strong>partial pivoting</strong>. Then compute \(\det(\boldsymbol A)\) and check that all the multipliers have absolute value at most \(1\).

??? soluzione "Solution"

    <strong>Step 1:</strong> in the first column \(|1| < |2| < |4|\): the pivot is \(4\), in row 3. <strong>Step 2:</strong> after the elimination, in the second column (rows 2 and 3) we have \(|-1| < |2|\): the pivot is \(2\), in row 3.

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     1 & 3 & 1 \\
     2 & 1 & 3 \\
     4 & 4 & 2 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc}
     4 & 4 & 2 \\
     2 & 1 & 3 \\
     1 & 3 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftrightarrow R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     4 & 4 & 2 \\
     0 & -1 & 2 \\
     1 & 3 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - \tfrac{1}{2}R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     4 & 4 & 2 \\[1ex]
     0 & -1 & 2 \\[1ex]
     0 & 2 & \tfrac{1}{2} \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - \tfrac{1}{4}R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     4 & 4 & 2 \\[1ex]
     0 & 2 & \tfrac{1}{2} \\[1ex]
     0 & -1 & 2 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftrightarrow R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     4 & 4 & 2 \\[1ex]
     0 & 2 & \tfrac{1}{2} \\[1ex]
     0 & 0 & \tfrac{9}{4} \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 + \tfrac{1}{2}R_2 \text{)}
    \end{align*}

    The multipliers are \(\frac{2}{4} = \frac{1}{2}\), \(\frac{1}{4}\) and \(\frac{-1}{2} = -\frac{1}{2}\): all have absolute value at most \(1\), because each pivot is the entry of largest absolute value in its column (on or below the diagonal).

    We used \(s = 2\) row swaps, hence

    $$
    \det(\boldsymbol A) = (-1)^2\cdot 4\cdot 2\cdot\frac{9}{4} = 18.
    $$
