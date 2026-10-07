---
title: "Inversion of matrices"
---

# Inversion of matrices

<div class="info-capitolo" markdown>

**Vectors and matrices · Chapter 4.3** · lecture notes by Fabio Furini · [:material-file-pdf-box: Chapter PDF](../pdf/vectors-matrices-04-inverse-matrix.pdf)

</div>

## 1. Properties of the inverse matrix

- Recall (see the chapter on matrices) that a square matrix \(\boldsymbol A \in \R^{n\times n}\) is <strong>invertible</strong> if there exists a matrix \(\boldsymbol A^{-1} \in \R^{n\times n}\) such that \(\boldsymbol A\boldsymbol A^{-1} = \boldsymbol A^{-1}\boldsymbol A = \boldsymbol I\). A square matrix which is not invertible is called <strong>singular</strong>.

- In this chapter, \(\boldsymbol A'\) denotes the transpose of \(\boldsymbol A\), as in the chapter on matrices.

<a id="box-propInverseUnique-1"></a>

!!! teorema "Proposition 1: Uniqueness of the inverse"

    Let \(\boldsymbol A \in \R^{n\times n}\) be invertible. If \(\boldsymbol B, \boldsymbol C \in \R^{n\times n}\) are such that \(\boldsymbol A\boldsymbol B = \boldsymbol B\boldsymbol A = \boldsymbol I\) and \(\boldsymbol A\boldsymbol C = \boldsymbol C\boldsymbol A = \boldsymbol I\), then \(\boldsymbol B = \boldsymbol C\).

??? dimostrazione "Proof"

    Using the associativity of the matrix product, we have:

    $$
    \boldsymbol B = \boldsymbol B\boldsymbol I = \boldsymbol B(\boldsymbol A\boldsymbol C) = (\boldsymbol B\boldsymbol A)\boldsymbol C = \boldsymbol I\boldsymbol C = \boldsymbol C.
    $$

    <p class="qed-riga"><span class="qed">□</span></p>

<a id="box-propInverseProperties-2"></a>

!!! teorema "Proposition 2: Properties of the inverse"

    Let \(\boldsymbol A, \boldsymbol B \in \R^{n\times n}\) be invertible matrices. Then:

    1. \(\boldsymbol A^{-1}\) is invertible and \((\boldsymbol A^{-1})^{-1} = \boldsymbol A\);

    2. \(\boldsymbol A\boldsymbol B\) is invertible and \((\boldsymbol A\boldsymbol B)^{-1} = \boldsymbol B^{-1}\boldsymbol A^{-1}\);

    3. \(\boldsymbol A'\) is invertible and \((\boldsymbol A')^{-1} = (\boldsymbol A^{-1})'\);

    4. \(\det(\boldsymbol A) \neq 0\) and \(\det(\boldsymbol A^{-1}) = \dfrac{1}{\det(\boldsymbol A)}\).

??? dimostrazione "Proof"

    By the uniqueness of the inverse, in each case it is enough to exhibit a matrix that multiplied on the left and on the right gives \(\boldsymbol I\).

    1. From \(\boldsymbol A^{-1}\boldsymbol A = \boldsymbol A\boldsymbol A^{-1} = \boldsymbol I\), the matrix \(\boldsymbol A\) is the inverse of \(\boldsymbol A^{-1}\).

    2. Using associativity:

        $$
        (\boldsymbol A\boldsymbol B)(\boldsymbol B^{-1}\boldsymbol A^{-1}) = \boldsymbol A(\boldsymbol B\boldsymbol B^{-1})\boldsymbol A^{-1} = \boldsymbol A\boldsymbol I\boldsymbol A^{-1} = \boldsymbol A\boldsymbol A^{-1} = \boldsymbol I,
        $$

        $$
        (\boldsymbol B^{-1}\boldsymbol A^{-1})(\boldsymbol A\boldsymbol B) = \boldsymbol B^{-1}(\boldsymbol A^{-1}\boldsymbol A)\boldsymbol B = \boldsymbol B^{-1}\boldsymbol I\boldsymbol B = \boldsymbol B^{-1}\boldsymbol B = \boldsymbol I.
        $$

    3. Recall that \((\boldsymbol C\boldsymbol D)' = \boldsymbol D'\boldsymbol C'\) for all \(\boldsymbol C, \boldsymbol D \in \R^{n\times n}\): indeed, the entry \((i,j)\) of \((\boldsymbol C\boldsymbol D)'\) is the entry \((j,i)\) of \(\boldsymbol C\boldsymbol D\), i.e., \(\sum_{k=1}^n c_{jk}d_{ki} = \sum_{k=1}^n d'_{ik}c'_{kj}\), which is the entry \((i,j)\) of \(\boldsymbol D'\boldsymbol C'\). Then, since \(\boldsymbol I' = \boldsymbol I\):

        $$
        \boldsymbol A'(\boldsymbol A^{-1})' = (\boldsymbol A^{-1}\boldsymbol A)' = \boldsymbol I' = \boldsymbol I,
        \qquad
        (\boldsymbol A^{-1})'\boldsymbol A' = (\boldsymbol A\boldsymbol A^{-1})' = \boldsymbol I' = \boldsymbol I.
        $$

    4. From the product rule of determinants:

        $$
        \det(\boldsymbol A)\det(\boldsymbol A^{-1}) = \det(\boldsymbol A\boldsymbol A^{-1}) = \det(\boldsymbol I) = 1.
        $$

        Hence \(\det(\boldsymbol A)\neq 0\) and \(\det(\boldsymbol A^{-1}) = 1/\det(\boldsymbol A)\).

    <p class="qed-riga"><span class="qed">□</span></p>

- Note the reversed order in \((\boldsymbol A\boldsymbol B)^{-1} = \boldsymbol B^{-1}\boldsymbol A^{-1}\): since the matrix product is not commutative, in general \((\boldsymbol A\boldsymbol B)^{-1} \neq \boldsymbol A^{-1}\boldsymbol B^{-1}\).

- Property 4 shows that a matrix with \(\det(\boldsymbol A) = 0\) cannot be invertible, i.e., it is singular.

## 2. Computation of the inverse

### 2.1 Gauss–Jordan method

!!! chiave ""

    <strong>Gauss–Jordan method (idea).</strong> To compute \( \boldsymbol A^{-1} \), we build the augmented matrix

    $$
    \left(\, \boldsymbol A \mid \boldsymbol I \,\right)
    $$

    and we apply <strong>elementary row operations</strong> to transform the left block into the identity matrix. If we obtain

    $$
    \left(\, \boldsymbol I \mid \boldsymbol B \,\right),
    $$

    then \( \boldsymbol B = \boldsymbol A^{-1} \).

<a id="box-ex_inv-gj-2x2-3"></a>

!!! esempio "Example 1: inverse matrix via Gauss–Jordan elimination"

    Let us consider

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & 1\\[0.5ex]
    1 & 1
    \end{pmatrix}.
    $$

    We compute the inverse matrix \(\boldsymbol A^{-1}\) with the method of Gauss–Jordan.

    \begin{align*}
    &\left(
    \begin{array}{cc|cc}
    2 & 1 & 1 & 0\\
    1 & 1 & 0 & 1
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{cc|cc}
    1 & 1 & 0 & 1\\
    2 & 1 & 1 & 0
    \end{array}
    \right)
    \hspace{1em}\text{(} R_1 \leftrightarrow R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{cc|cc}
    1 & 1 & 0 & 1\\
    0 & -1 & 1 & -2
    \end{array}
    \right)
    \hspace{1em}\text{(} R_2 \leftarrow R_2 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{cc|cc}
    1 & 1 & 0 & 1\\
    0 & 1 & -1 & 2
    \end{array}
    \right)
    \hspace{1em}\text{(} R_2 \leftarrow -R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{cc|cc}
    1 & 0 & 1 & -1\\
    0 & 1 & -1 & 2
    \end{array}
    \right)
    \hspace{1em}\text{(} R_1 \leftarrow R_1 - R_2 \text{)}
    \end{align*}

    Since the left block is the identity matrix, we obtain:

    $$
    \boldsymbol A^{-1}=
    \begin{pmatrix}
    1 & -1\\[0.5ex]
    -1 & 2
    \end{pmatrix}.
    $$

    We can verify:

    $$
    \boldsymbol A \boldsymbol A^{-1}
    =
    \begin{pmatrix}
    2 & 1\\[0.5ex]
    1 & 1
    \end{pmatrix}
    \begin{pmatrix}
    1 & -1\\[0.5ex]
    -1 & 2
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & 0\\[0.5ex]
    0 & 1
    \end{pmatrix}
    = \boldsymbol I.
    $$

<a id="box-ex_inv-gj-3x3-4"></a>

!!! esempio "Example 2: inverse matrix via Gauss–Jordan elimination"

    Let us consider

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 0\\[0.5ex]
    0 & 1 & 1\\[0.5ex]
    2 & 0 & 1
    \end{pmatrix}.
    $$

    We compute the inverse matrix \(\boldsymbol A^{-1}\) with the method of Gauss–Jordan.

    \begin{align*}
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & 0 & 1 & 0 & 0 \\
     0 & 1 & 1 & 0 & 1 & 0 \\
     2 & 0 & 1 & 0 & 0 & 1 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2  & 0 & 1  & 0 & 0 \\
     0 & 1  & 1 & 0  & 1 & 0 \\
     0 & -4 & 1 & -2 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & -2 & 1 & -2 & 0 \\
     0 & 1 & 1  & 0 & 1  & 0 \\
     0 & -4 & 1 & -2 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftarrow R_1 - 2R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & -2 & 1  & -2 & 0 \\
     0 & 1 & 1  & 0  & 1  & 0 \\
     0 & 0 & 5  & -2 & 4  & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 + 4R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & -2 & 1 & -2 & 0 \\[1ex]
     0 & 1 & 1  & 0 & 1  & 0 \\[1ex]
     0 & 0 & 1  & -\tfrac{2}{5} & \tfrac{4}{5} & \tfrac{1}{5} \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow \tfrac{1}{5}R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 0 & \tfrac{1}{5}  & -\tfrac{2}{5} & \tfrac{2}{5} \\[1ex]
     0 & 1 & 1 & 0 & 1 & 0 \\[1ex]
     0 & 0 & 1 & -\tfrac{2}{5} & \tfrac{4}{5} & \tfrac{1}{5} \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftarrow R_1 + 2R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 0 & \tfrac{1}{5} & -\tfrac{2}{5} & \tfrac{2}{5} \\[1ex]
     0 & 1 & 0 & \tfrac{2}{5} & \tfrac{1}{5} & -\tfrac{1}{5} \\[1ex]
     0 & 0 & 1 & -\tfrac{2}{5} & \tfrac{4}{5} & \tfrac{1}{5} \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - R_3 \text{)}
    \end{align*}

    Since the left block is the identity matrix, we obtain:

    $$
    \boldsymbol A^{-1}=
    \begin{pmatrix}
    \tfrac{1}{5} & -\tfrac{2}{5} & \tfrac{2}{5}\\[0.8ex]
    \tfrac{2}{5} & \tfrac{1}{5}  & -\tfrac{1}{5}\\[0.8ex]
    -\tfrac{2}{5} & \tfrac{4}{5} & \tfrac{1}{5}
    \end{pmatrix}
    =
    \frac{1}{5}
    \begin{pmatrix}
    1 & -2 & 2\\[0.5ex]
    2 & 1  & -1\\[0.5ex]
    -2 & 4 & 1
    \end{pmatrix}
    .
    $$

<a id="box-ex_inv-gj-3x3-swap-5"></a>

!!! esempio "Example 3: inverse matrix via Gauss–Jordan elimination with a row swap"

    Let us consider

    $$
    \boldsymbol A=
    \begin{pmatrix}
    0 & 1 & 2\\[0.5ex]
    1 & 0 & 3\\[0.5ex]
    4 & -3 & 8
    \end{pmatrix}.
    $$

    We compute the inverse matrix \(\boldsymbol A^{-1}\) with the method of Gauss–Jordan. Since \(a_{11}=0\), we start with a row swap.

    \begin{align*}
    &\left(
    \begin{array}{ccc|ccc}
     0 & 1 & 2 & 1 & 0 & 0 \\
     1 & 0 & 3 & 0 & 1 & 0 \\
     4 & -3 & 8 & 0 & 0 & 1 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 3 & 0 & 1 & 0 \\
     0 & 1 & 2 & 1 & 0 & 0 \\
     4 & -3 & 8 & 0 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftrightarrow R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 3 & 0 & 1 & 0 \\
     0 & 1 & 2 & 1 & 0 & 0 \\
     0 & -3 & -4 & 0 & -4 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - 4R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 3 & 0 & 1 & 0 \\
     0 & 1 & 2 & 1 & 0 & 0 \\
     0 & 0 & 2 & 3 & -4 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 + 3R_2 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 3 & 0 & 1 & 0 \\[1ex]
     0 & 1 & 2 & 1 & 0 & 0 \\[1ex]
     0 & 0 & 1 & \tfrac{3}{2} & -2 & \tfrac{1}{2} \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow \tfrac{1}{2}R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 0 & -\tfrac{9}{2} & 7 & -\tfrac{3}{2} \\[1ex]
     0 & 1 & 2 & 1 & 0 & 0 \\[1ex]
     0 & 0 & 1 & \tfrac{3}{2} & -2 & \tfrac{1}{2} \\
    \end{array}
    \right) \hspace{1em} \text{(} R_1 \leftarrow R_1 - 3R_3 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 0 & 0 & -\tfrac{9}{2} & 7 & -\tfrac{3}{2} \\[1ex]
     0 & 1 & 0 & -2 & 4 & -1 \\[1ex]
     0 & 0 & 1 & \tfrac{3}{2} & -2 & \tfrac{1}{2} \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 2R_3 \text{)}
    \end{align*}

    Since the left block is the identity matrix, we obtain:

    $$
    \boldsymbol A^{-1}=
    \begin{pmatrix}
    -\tfrac{9}{2} & 7 & -\tfrac{3}{2}\\[0.8ex]
    -2 & 4  & -1\\[0.8ex]
    \tfrac{3}{2} & -2 & \tfrac{1}{2}
    \end{pmatrix}
    =
    \frac{1}{2}
    \begin{pmatrix}
    -9 & 14 & -3\\[0.5ex]
    -4 & 8  & -2\\[0.5ex]
    3 & -4 & 1
    \end{pmatrix}.
    $$

<a id="box-obsGJSingular-6"></a>

!!! teorema "Observation 1: Singular matrices and the Gauss–Jordan method"

    Let \(\boldsymbol A \in \R^{n\times n}\). If, while applying elementary row operations to \(\left(\boldsymbol A \mid \boldsymbol I\right)\), a <strong>zero row appears in the left block</strong>, then \(\det(\boldsymbol A) = 0\) and \(\boldsymbol A\) is singular: the method stops and \(\boldsymbol A^{-1}\) does not exist.

??? dimostrazione "Proof"

    The left block is obtained from \(\boldsymbol A\) by elementary row operations. Each of them multiplies the determinant by a nonzero number (\(-1\) for a row swap, \(\lambda\neq 0\) for a row scaling, \(1\) for a row addition). A matrix with a zero row has zero determinant (Laplace expansion along that row), hence \(\det(\boldsymbol A) = 0\). By property 4 of Proposition [Proposition 2](#box-propInverseProperties-2), \(\boldsymbol A\) is not invertible. <span class="qed">□</span>

<a id="box-ex_inv-gj-singular-7"></a>

!!! esempio "Example 4: Gauss–Jordan elimination on a singular matrix"

    Let us consider

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 3\\[0.5ex]
    2 & 5 & 7\\[0.5ex]
    1 & 3 & 4
    \end{pmatrix}.
    $$

    We try to compute \(\boldsymbol A^{-1}\) with the method of Gauss–Jordan.

    \begin{align*}
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & 3 & 1 & 0 & 0 \\
     2 & 5 & 7 & 0 & 1 & 0 \\
     1 & 3 & 4 & 0 & 0 & 1 \\
    \end{array}
    \right) \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & 3 & 1 & 0 & 0 \\
     0 & 1 & 1 & -2 & 1 & 0 \\
     1 & 3 & 4 & 0 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_2 \leftarrow R_2 - 2R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & 3 & 1 & 0 & 0 \\
     0 & 1 & 1 & -2 & 1 & 0 \\
     0 & 1 & 1 & -1 & 0 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - R_1 \text{)} \\[2ex]
    &\left(
    \begin{array}{ccc|ccc}
     1 & 2 & 3 & 1 & 0 & 0 \\
     0 & 1 & 1 & -2 & 1 & 0 \\
     0 & 0 & 0 & 1 & -1 & 1 \\
    \end{array}
    \right) \hspace{1em} \text{(} R_3 \leftarrow R_3 - R_2 \text{)}
    \end{align*}

    The third row of the left block is zero: the left block cannot be transformed into the identity matrix, and the method stops. Hence \(\boldsymbol A\) is singular. Indeed, the third row of \(\boldsymbol A\) is the difference of the second and the first row, and

    $$
    \det(\boldsymbol A) = 1\cdot(5\cdot 4-7\cdot 3) - 2\cdot(2\cdot 4 - 7\cdot 1) + 3\cdot(2\cdot 3 - 5\cdot 1) = -1 - 2 + 3 = 0.
    $$

### 2.2 Inverse via the adjugate matrix

<a id="sec:adjugate"></a>

- Recall (see the chapter on matrices) that, given \(\boldsymbol A \in \R^{n\times n}\), the <strong>cofactor</strong> of the entry \(a_{ij}\) is \(C_{ij} = (-1)^{i+j}\det(\boldsymbol A_{ij})\), where \(\boldsymbol A_{ij}\) is the minor matrix obtained from \(\boldsymbol A\) by deleting row \(i\) and column \(j\).

<a id="box-defAdjugate-8"></a>

!!! definizione "Definition 1: Cofactor matrix and adjugate matrix"

    Let \(\boldsymbol A \in \R^{n\times n}\) with \(n\ge 2\). The <strong>cofactor matrix</strong> of \(\boldsymbol A\) is the matrix \(\boldsymbol C = (C_{ij}) \in \R^{n\times n}\) of the cofactors of \(\boldsymbol A\). The <strong>adjugate matrix</strong> of \(\boldsymbol A\) is the transpose of the cofactor matrix:

    $$
    \mathrm{adj}(\boldsymbol A) = \boldsymbol C', \qquad \text{i.e.,} \qquad \big(\mathrm{adj}(\boldsymbol A)\big)_{ij} = C_{ji}.
    $$

<a id="box-theoAdjugate-9"></a>

!!! teorema "Theorem 1: Adjugate formula"

    Let \(\boldsymbol A \in \R^{n\times n}\) with \(n\ge 2\). Then

    $$
    \boldsymbol A\,\mathrm{adj}(\boldsymbol A) = \mathrm{adj}(\boldsymbol A)\,\boldsymbol A = \det(\boldsymbol A)\,\boldsymbol I.
    $$

    Consequently, if \(\det(\boldsymbol A)\neq 0\), then \(\boldsymbol A\) is invertible and

    $$
    \boldsymbol A^{-1} = \frac{1}{\det(\boldsymbol A)}\,\mathrm{adj}(\boldsymbol A).
    $$

??? dimostrazione "Proof"

    The entry \((i,j)\) of \(\boldsymbol A\,\mathrm{adj}(\boldsymbol A)\) is

    $$
    \sum_{k=1}^{n} a_{ik}\,C_{jk}.
    $$

    - If \(i=j\), this is the Laplace expansion of \(\det(\boldsymbol A)\) along row \(i\).

    - If \(i\neq j\), this is the Laplace expansion along row \(j\) of the matrix \(\widetilde{\boldsymbol A}\) obtained from \(\boldsymbol A\) by replacing row \(j\) with row \(i\) (the cofactors \(C_{jk}\) do not depend on row \(j\)). The matrix \(\widetilde{\boldsymbol A}\) has two equal rows: swapping them leaves \(\widetilde{\boldsymbol A}\) unchanged and changes the sign of its determinant, so \(\det(\widetilde{\boldsymbol A}) = -\det(\widetilde{\boldsymbol A})\), i.e., \(\det(\widetilde{\boldsymbol A}) = 0\).

    Hence \(\boldsymbol A\,\mathrm{adj}(\boldsymbol A) = \det(\boldsymbol A)\,\boldsymbol I\). The identity \(\mathrm{adj}(\boldsymbol A)\,\boldsymbol A = \det(\boldsymbol A)\,\boldsymbol I\) is obtained in the same way, using Laplace expansions along columns. If \(\det(\boldsymbol A) \neq 0\), dividing by \(\det(\boldsymbol A)\) shows that \(\frac{1}{\det(\boldsymbol A)}\mathrm{adj}(\boldsymbol A)\) is the inverse of \(\boldsymbol A\). <span class="qed">□</span>

<a id="box-obsInvDet-10"></a>

!!! teorema "Observation 2: Invertibility and determinant"

    A square matrix \(\boldsymbol A \in \R^{n\times n}\) is invertible if and only if \(\det(\boldsymbol A) \neq 0\).

??? dimostrazione "Proof"

    If \(\boldsymbol A\) is invertible, then \(\det(\boldsymbol A)\neq 0\) by property 4 of Proposition [Proposition 2](#box-propInverseProperties-2). Conversely, if \(\det(\boldsymbol A)\neq 0\), then \(\boldsymbol A\) is invertible by Theorem [Theorem 1](#box-theoAdjugate-9) (for \(n=1\), \(\boldsymbol A = (a)\) with \(a\neq 0\) and \(\boldsymbol A^{-1} = (1/a)\)). <span class="qed">□</span>

<a id="box-obsInverse2x2-11"></a>

!!! teorema "Observation 3: Inverse of a \(2\times 2\) matrix"

    Let

    $$
    \boldsymbol A=
    \begin{pmatrix}
    a & b\\
    c & d
    \end{pmatrix}
    \in \R^{2\times 2}
    \quad \text{with} \quad
    \det(\boldsymbol A) = ad - bc \neq 0.
    $$

    Then

    $$
    \boldsymbol A^{-1} = \frac{1}{ad-bc}
    \begin{pmatrix}
    d & -b\\
    -c & a
    \end{pmatrix}.
    $$

??? dimostrazione "Proof"

    The minor matrices of \(\boldsymbol A\) are \(1\times 1\), so the cofactors are \(C_{11} = d\), \(C_{12} = -c\), \(C_{21} = -b\), \(C_{22} = a\). Hence

    $$
    \boldsymbol C =
    \begin{pmatrix}
    d & -c\\
    -b & a
    \end{pmatrix},
    \qquad
    \mathrm{adj}(\boldsymbol A) = \boldsymbol C' =
    \begin{pmatrix}
    d & -b\\
    -c & a
    \end{pmatrix},
    $$

    and the formula follows from Theorem [Theorem 1](#box-theoAdjugate-9). <span class="qed">□</span>

!!! chiave ""

    <strong>Inverse of a \(2\times 2\) matrix (rule).</strong> Swap the two diagonal entries, change the sign of the two off-diagonal entries, and divide by the determinant.

<a id="box-ex_inv-2x2-formula-12"></a>

!!! esempio "Example 5: inverse of a \(2\times 2\) matrix with the formula"

    Let us consider again

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & 1\\[0.5ex]
    1 & 1
    \end{pmatrix}.
    $$

    We have \(\det(\boldsymbol A) = 2\cdot 1 - 1\cdot 1 = 1 \neq 0\), hence

    $$
    \boldsymbol A^{-1} = \frac{1}{1}
    \begin{pmatrix}
    1 & -1\\[0.5ex]
    -1 & 2
    \end{pmatrix}
    =
    \begin{pmatrix}
    1 & -1\\[0.5ex]
    -1 & 2
    \end{pmatrix},
    $$

    which is the matrix obtained with the method of Gauss–Jordan in Example [Example 1](#box-ex_inv-gj-2x2-3).

<a id="box-ex_inv-3x3-adjugate-13"></a>

!!! esempio "Example 6: inverse of a \(3\times 3\) matrix with the adjugate formula"

    Let us consider again

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 0\\[0.5ex]
    0 & 1 & 1\\[0.5ex]
    2 & 0 & 1
    \end{pmatrix}.
    $$

    By Laplace expansion along the first row:

    $$
    \det(\boldsymbol A) = 1\cdot(1\cdot 1 - 1\cdot 0) - 2\cdot(0\cdot 1 - 1\cdot 2) + 0 = 1 + 4 = 5 \neq 0.
    $$

    The cofactors are:

    \begin{align*}
    C_{11} &= +\det\begin{pmatrix} 1 & 1\\ 0 & 1\end{pmatrix} = 1, &
    C_{12} &= -\det\begin{pmatrix} 0 & 1\\ 2 & 1\end{pmatrix} = 2, &
    C_{13} &= +\det\begin{pmatrix} 0 & 1\\ 2 & 0\end{pmatrix} = -2,\\[1ex]
    C_{21} &= -\det\begin{pmatrix} 2 & 0\\ 0 & 1\end{pmatrix} = -2, &
    C_{22} &= +\det\begin{pmatrix} 1 & 0\\ 2 & 1\end{pmatrix} = 1, &
    C_{23} &= -\det\begin{pmatrix} 1 & 2\\ 2 & 0\end{pmatrix} = 4,\\[1ex]
    C_{31} &= +\det\begin{pmatrix} 2 & 0\\ 1 & 1\end{pmatrix} = 2, &
    C_{32} &= -\det\begin{pmatrix} 1 & 0\\ 0 & 1\end{pmatrix} = -1, &
    C_{33} &= +\det\begin{pmatrix} 1 & 2\\ 0 & 1\end{pmatrix} = 1.
    \end{align*}

    Hence

    $$
    \boldsymbol C =
    \begin{pmatrix}
    1 & 2 & -2\\
    -2 & 1 & 4\\
    2 & -1 & 1
    \end{pmatrix},
    \qquad
    \mathrm{adj}(\boldsymbol A) = \boldsymbol C' =
    \begin{pmatrix}
    1 & -2 & 2\\
    2 & 1 & -1\\
    -2 & 4 & 1
    \end{pmatrix},
    $$

    and

    $$
    \boldsymbol A^{-1} = \frac{1}{5}
    \begin{pmatrix}
    1 & -2 & 2\\
    2 & 1 & -1\\
    -2 & 4 & 1
    \end{pmatrix},
    $$

    which is the matrix obtained with the method of Gauss–Jordan in Example [Example 2](#box-ex_inv-gj-3x3-4).

- For \(n=2\) (and often for \(n=3\)) the adjugate formula is convenient for computations by hand. For larger matrices, the method of Gauss–Jordan requires far fewer operations.

!!! interattivo "Try it in the lab"

    the same computation step by step: change the matrix and watch the steps change.

<div class="la-tool" data-tool="inversa" data-matrix="2,1;1,1"></div>

