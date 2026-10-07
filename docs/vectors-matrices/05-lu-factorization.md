---
title: "Factorization of matrices"
---

# Factorization of matrices

<div class="info-capitolo" markdown>

**Vectors and matrices · Chapter 4.4** · lecture notes by Fabio Furini · [:material-file-pdf-box: Chapter PDF](../pdf/vectors-matrices-05-lu-factorization.pdf)

</div>

## 1. LU factorization

- The LU factorization (or LU decomposition) is a fundamental matrix decomposition that expresses a matrix as the product of a lower triangular matrix and an upper triangular matrix.

!!! chiave ""

    Given a square matrix \(\boldsymbol A \in \R^{n \times n}\), a <strong>PLU factorization</strong> of \(\boldsymbol A\) is a decomposition of the form

    $$
    \boldsymbol P \boldsymbol A = \boldsymbol L \boldsymbol U,
    $$

    where:

    - \(\boldsymbol P \in \R^{n \times n}\) is a <strong>permutation matrix</strong> (it accounts for possible row swaps),

    - \(\boldsymbol L \in \R^{n \times n}\) is a <strong>lower triangular matrix</strong> with ones on the diagonal,

    - \(\boldsymbol U \in \R^{n \times n}\) is an <strong>upper triangular matrix</strong>.

- The factorization is computed by Gaussian elimination.

- If no row swaps are needed, then \(\boldsymbol P=\boldsymbol I_n\) and the factorization reduces to the <strong>LU factorization</strong>:

    $$
    \boldsymbol A=\boldsymbol L\boldsymbol U.
    $$

- The PLU/LU factorization is very useful for solving linear systems \(\boldsymbol A\boldsymbol x=\boldsymbol b\) efficiently.

!!! chiave ""

    <strong>Method to compute the PLU (LU with pivoting) factorization.</strong>

    Starting from \(\boldsymbol A\), we perform Gaussian elimination. Whenever a row swap is required, it is recorded in the permutation matrix \(\boldsymbol P\). At the end of the elimination we obtain the upper triangular matrix \(\boldsymbol U\), while \(\boldsymbol L\) stores the elimination multipliers.

    Specifically:

    - Each elimination step \(R_i \leftarrow R_i - \ell_{ij} R_j\) (with \(i>j\)) creates a zero in position \((i,j)\).

    - The multiplier \(\ell_{ij}\) is stored in position \((i,j)\) of \(\boldsymbol L\).

    - The diagonal of \(\boldsymbol L\) is filled with ones.

    - If at step \(j\) rows \(i\) and \(k\) are swapped (\(R_i \leftrightarrow R_k\)), the multipliers already stored in rows \(i\) and \(k\) of \(\boldsymbol L\) (in columns \(1,\dots,j-1\)) are swapped as well, and the same swap is applied to the rows of \(\boldsymbol P\) (which starts as \(\boldsymbol I_n\)).

<a id="box-ex_lu-3x3-1"></a>

!!! esempio "Example 1: LU factorization"

    Let us compute the LU factorization of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & 1 & 1\\
    4 & -6 & 0\\
    -2 & 7 & 2
    \end{pmatrix}.
    $$

    <strong>Step 1:</strong> Eliminate the entries below the first pivot \(a_{11} = 2\).

    We need to eliminate \(a_{21} = 4\). The multiplier is:

    $$
    \ell_{21} = \frac{a_{21}}{a_{11}} = \frac{4}{2} = 2.
    $$

    We perform \(R_2 \leftarrow R_2 - 2R_1\):

    $$
    \begin{pmatrix}
    2 & 1 & 1\\
    0 & -8 & -2\\
    -2 & 7 & 2
    \end{pmatrix}.
    $$

    We need to eliminate \(a_{31} = -2\). The multiplier is:

    $$
    \ell_{31} = \frac{a_{31}}{a_{11}} = \frac{-2}{2} = -1.
    $$

    We perform \(R_3 \leftarrow R_3 - (-1)R_1 = R_3 + R_1\):

    $$
    \begin{pmatrix}
    2 & 1 & 1\\
    0 & -8 & -2\\
    0 & 8 & 3
    \end{pmatrix}.
    $$

    <strong>Step 2:</strong> Eliminate the entries below the second pivot \(-8\).

    We need to eliminate the entry in position \((3,2)\), which is currently 8. The multiplier is:

    $$
    \ell_{32} = \frac{8}{-8} = -1.
    $$

    We perform \(R_3 \leftarrow R_3 - (-1)R_2 = R_3 + R_2\):

    $$
    \boldsymbol U = 
    \begin{pmatrix}
    2 & 1 & 1\\
    0 & -8 & -2\\
    0 & 0 & 1
    \end{pmatrix}.
    $$

<a id="box-ex_lu-3x3-cont-2"></a>

!!! esempio "Example 2: LU factorization (continued)"

    <strong>Step 3:</strong> Build the matrix \(\boldsymbol L\).

    The matrix \(\boldsymbol L\) has ones on the diagonal and the multipliers below the diagonal:

    $$
    \boldsymbol L = 
    \begin{pmatrix}
    1 & 0 & 0\\
    \ell_{21} & 1 & 0\\
    \ell_{31} & \ell_{32} & 1
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0 & 0\\
    2 & 1 & 0\\
    -1 & -1 & 1
    \end{pmatrix}.
    $$

    <strong>Verification:</strong> We check that \(\boldsymbol L \boldsymbol U = \boldsymbol A\):

    \begin{align*}
    \boldsymbol L \boldsymbol U 
    &= 
    \begin{pmatrix}
    1 & 0 & 0\\
    2 & 1 & 0\\
    -1 & -1 & 1
    \end{pmatrix}
    \begin{pmatrix}
    2 & 1 & 1\\
    0 & -8 & -2\\
    0 & 0 & 1
    \end{pmatrix}\\[2ex]
    &=
    \begin{pmatrix}
    2 & 1 & 1\\
    4 & 2-8 & 2-2\\
    -2 & -1+8 & -1+2+1
    \end{pmatrix}\\[2ex]
    &=
    \begin{pmatrix}
    2 & 1 & 1\\
    4 & -6 & 0\\
    -2 & 7 & 2
    \end{pmatrix}
    = \boldsymbol A.
    \end{align*}

- Given \(\boldsymbol A \in \R^{n\times n}\) and \(k\in\{1,\dots,n\}\), we denote by \(\boldsymbol A_{[k]}\) the <strong>leading principal submatrix</strong> of order \(k\), i.e., the \(k\times k\) matrix formed by the first \(k\) rows and the first \(k\) columns of \(\boldsymbol A\). Its determinant \(\det(\boldsymbol A_{[k]})\) is called the <strong>leading principal minor</strong> of order \(k\). Note that \(\boldsymbol A_{[n]} = \boldsymbol A\).

<a id="box-obsLUExistence-3"></a>

!!! teorema "Observation 1: Existence of the LU factorization without row swaps"

    Let \(\boldsymbol A \in \R^{n\times n}\) be a nonsingular matrix. Then \(\boldsymbol A\) admits a factorization

    $$
    \boldsymbol A = \boldsymbol L\boldsymbol U,
    $$

    with \(\boldsymbol L\) lower triangular with ones on the diagonal and \(\boldsymbol U\) upper triangular, if and only if all its leading principal minors are nonzero:

    $$
    \det(\boldsymbol A_{[k]}) \neq 0, \qquad \forall k \in \{1,\dots,n\}.
    $$

    In this case, Gaussian elimination never requires a row swap and the pivots are

    $$
    u_{11} = \det(\boldsymbol A_{[1]}), \qquad u_{kk} = \frac{\det(\boldsymbol A_{[k]})}{\det(\boldsymbol A_{[k-1]})}, \quad k\in\{2,\dots,n\}.
    $$

??? dimostrazione "Proof"

    (\(\Leftarrow\)) We perform Gaussian elimination without row swaps. A row addition \(R_i \leftarrow R_i - \ell_{ij}R_j\) with \(j<i\) does not change any leading principal minor: if \(k \ge i\), it acts on \(\boldsymbol A_{[k]}\) as a row addition; if \(k < i\), it does not modify \(\boldsymbol A_{[k]}\). Suppose that the first \(k-1\) steps have been performed. Then the leading principal submatrix of order \(k\) of the current matrix is upper triangular with diagonal entries \(u_{11},\dots,u_{kk}\), hence

    $$
    \det(\boldsymbol A_{[k]}) = u_{11}\,u_{22}\cdots u_{kk}.
    $$

    Since \(\det(\boldsymbol A_{[k]})\neq 0\), the pivot \(u_{kk} = \det(\boldsymbol A_{[k]})/\det(\boldsymbol A_{[k-1]})\) is nonzero and step \(k\) can be performed without a row swap.

    (\(\Rightarrow\)) If \(\boldsymbol A = \boldsymbol L\boldsymbol U\), since \(\boldsymbol L\) is lower triangular and \(\boldsymbol U\) is upper triangular, the first \(k\) rows and columns of the product only involve the first \(k\) rows and columns of the factors: \(\boldsymbol A_{[k]} = \boldsymbol L_{[k]}\boldsymbol U_{[k]}\). Hence \(\det(\boldsymbol A_{[k]}) = 1\cdot u_{11}\cdots u_{kk}\). Since \(\det(\boldsymbol A) = u_{11}\cdots u_{nn} \neq 0\), all \(u_{ii}\) are nonzero, and so are all the leading principal minors. <span class="qed">□</span>

- For the matrix of Example [Example 1](#box-ex_lu-3x3-1), we have \(\det(\boldsymbol A_{[1]}) = 2\), \(\det(\boldsymbol A_{[2]}) = 2\cdot(-6) - 1\cdot 4 = -16\) and \(\det(\boldsymbol A_{[3]}) = \det(\boldsymbol A) = -16\), which give the pivots \(u_{11} = 2\), \(u_{22} = -16/2 = -8\) and \(u_{33} = -16/(-16) = 1\).

- If some leading principal minor is zero, a row swap is needed and we must compute a PLU factorization (with \(\boldsymbol P\neq\boldsymbol I\)). This happens in the next examples.

<a id="box-ex_plu-2x2-4"></a>

!!! esempio "Example 3: PLU factorization with row permutation"

    Consider the matrix

    $$
    \boldsymbol A=
    \begin{pmatrix}
    0 & 1\\
    1 & 1
    \end{pmatrix}.
    $$

    Since \(a_{11} = 0\), we cannot use it as a pivot. We need to swap rows 1 and 2.

    Let

    $$
    \boldsymbol P=
    \begin{pmatrix}
    0 & 1\\
    1 & 0
    \end{pmatrix}
    $$

    be the permutation matrix that swaps rows 1 and 2.

    Then:

    $$
    \boldsymbol{PA}=
    \begin{pmatrix}
    0 & 1\\
    1 & 0
    \end{pmatrix}
    \begin{pmatrix}
    0 & 1\\
    1 & 1
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 1\\
    0 & 1
    \end{pmatrix}.
    $$

    Now \(\boldsymbol{PA}\) already has an upper triangular form (no elimination needed below the diagonal), so:

    $$
    \boldsymbol L=
    \begin{pmatrix}
    1 & 0\\
    0 & 1
    \end{pmatrix}
    = \boldsymbol I,
    \qquad
    \boldsymbol U=
    \begin{pmatrix}
    1 & 1\\
    0 & 1
    \end{pmatrix}.
    $$

    Therefore, the PLU factorization is:

    $$
    \boldsymbol{PA} = \boldsymbol L \boldsymbol U,
    $$

    where \(\boldsymbol P = \begin{pmatrix}0 & 1\\1 & 0\end{pmatrix}\), \(\boldsymbol L = \boldsymbol I\), and \(\boldsymbol U = \begin{pmatrix}1 & 1\\0 & 1\end{pmatrix}\).

<a id="box-ex_plu-3x3-5"></a>

!!! esempio "Example 4: PLU factorization with a row swap during the elimination"

    Let us compute the PLU factorization of

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & 1 & 1\\
    4 & 2 & 3\\
    -2 & 3 & 1
    \end{pmatrix}.
    $$

    Note that \(\det(\boldsymbol A_{[2]}) = 2\cdot 2 - 1\cdot 4 = 0\): a row swap will be needed.

    <strong>Step 1:</strong> Eliminate the entries below the first pivot \(a_{11} = 2\). The multipliers are \(\ell_{21} = \frac{4}{2} = 2\) and \(\ell_{31} = \frac{-2}{2} = -1\):

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     2 & 1 & 1 \\
     0 & 0 & 1 \\
     -2 & 3 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc}
     2 & 1 & 1 \\
     0 & 0 & 1 \\
     0 & 4 & 2 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 + R_1 \text{)}
    \end{align*}

    <strong>Step 2:</strong> The entry in position \((2,2)\) is \(0\) and cannot be used as a pivot. We swap rows 2 and 3:

    \begin{align*}
    &\left(
    \begin{array}{ccc}
     2 & 1 & 1 \\
     0 & 4 & 2 \\
     0 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftrightarrow R_3 \text{)}
    \end{align*}

    The multipliers already computed for rows 2 and 3 are swapped as well: now \(\ell_{21} = -1\) and \(\ell_{31} = 2\). The entry below the new pivot \(4\) is already zero, so \(\ell_{32} = 0\), and the elimination is complete:

    $$
    \boldsymbol U=
    \begin{pmatrix}
    2 & 1 & 1\\
    0 & 4 & 2\\
    0 & 0 & 1
    \end{pmatrix}.
    $$

    <strong>Step 3:</strong> Build \(\boldsymbol P\) and \(\boldsymbol L\). The matrix \(\boldsymbol P\) is obtained from \(\boldsymbol I_3\) by swapping rows 2 and 3, and \(\boldsymbol L\) contains the (swapped) multipliers:

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
    -1 & 1 & 0\\
    2 & 0 & 1
    \end{pmatrix}.
    $$

    <strong>Verification:</strong> We check that \(\boldsymbol P\boldsymbol A = \boldsymbol L\boldsymbol U\):

    $$
    \boldsymbol P\boldsymbol A=
    \begin{pmatrix}
    1 & 0 & 0\\
    0 & 0 & 1\\
    0 & 1 & 0
    \end{pmatrix}
    \begin{pmatrix}
    2 & 1 & 1\\
    4 & 2 & 3\\
    -2 & 3 & 1
    \end{pmatrix}
    =
    \begin{pmatrix}
    2 & 1 & 1\\
    -2 & 3 & 1\\
    4 & 2 & 3
    \end{pmatrix},
    $$

    \begin{align*}
    \boldsymbol L\boldsymbol U
    &=
    \begin{pmatrix}
    1 & 0 & 0\\
    -1 & 1 & 0\\
    2 & 0 & 1
    \end{pmatrix}
    \begin{pmatrix}
    2 & 1 & 1\\
    0 & 4 & 2\\
    0 & 0 & 1
    \end{pmatrix}
    =
    \begin{pmatrix}
    2 & 1 & 1\\
    -2 & -1+4 & -1+2\\
    4 & 2 & 2+1
    \end{pmatrix}
    =
    \begin{pmatrix}
    2 & 1 & 1\\
    -2 & 3 & 1\\
    4 & 2 & 3
    \end{pmatrix}
    = \boldsymbol P\boldsymbol A.
    \end{align*}

- Without swapping the multipliers in Step 2 we would get the wrong matrix \(\widetilde{\boldsymbol L}\) with \(\tilde\ell_{21}=2\) and \(\tilde\ell_{31}=-1\), and \(\widetilde{\boldsymbol L}\boldsymbol U \neq \boldsymbol P\boldsymbol A\) (its second row would be \((4,\,6,\,4)\)).

## 2. Determinant from the PLU factorization

<a id="box-obsDetPLU-6"></a>

!!! teorema "Observation 2: Determinant from the PLU factorization"

    Let \(\boldsymbol P\boldsymbol A = \boldsymbol L\boldsymbol U\) be a PLU factorization of \(\boldsymbol A\in\R^{n\times n}\), where \(\boldsymbol P\) is obtained from \(\boldsymbol I_n\) with \(s\) row swaps. Then

    $$
    \det(\boldsymbol A) = (-1)^{s}\prod_{i=1}^{n} u_{ii} = \pm \prod_{i=1}^{n} u_{ii}.
    $$

    In particular, \(\boldsymbol A\) is invertible if and only if all the diagonal entries of \(\boldsymbol U\) are nonzero.

??? dimostrazione "Proof"

    Each row swap changes the sign of the determinant, so \(\det(\boldsymbol P) = (-1)^{s}\det(\boldsymbol I_n) = (-1)^s\). The matrices \(\boldsymbol L\) and \(\boldsymbol U\) are triangular, so \(\det(\boldsymbol L) = 1\) and \(\det(\boldsymbol U) = \prod_{i=1}^n u_{ii}\). From \(\det(\boldsymbol P\boldsymbol A) = \det(\boldsymbol L\boldsymbol U)\) and the product rule of determinants,

    $$
    (-1)^s \det(\boldsymbol A) = \prod_{i=1}^{n} u_{ii},
    $$

    and we multiply both sides by \((-1)^s\). <span class="qed">□</span>

<a id="box-ex_det-plu-7"></a>

!!! esempio "Example 5: Determinant from the PLU factorization"

    - Example [Example 1](#box-ex_lu-3x3-1): no row swaps (\(s=0\)), so \(\det(\boldsymbol A) = 2\cdot(-8)\cdot 1 = -16\).

    - Example [Example 3](#box-ex_plu-2x2-4): one row swap (\(s=1\)), so \(\det(\boldsymbol A) = -(1\cdot 1) = -1\). Indeed, \(\det(\boldsymbol A) = 0\cdot 1 - 1\cdot 1 = -1\).

    - Example [Example 4](#box-ex_plu-3x3-5): one row swap (\(s=1\)), so \(\det(\boldsymbol A) = -(2\cdot 4\cdot 1) = -8\). Indeed, by Laplace expansion along the first row, \(\det(\boldsymbol A) = 2\cdot(2-9) - 1\cdot(4+6) + 1\cdot(12+4) = -14 - 10 + 16 = -8\).
