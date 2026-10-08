---
title: "Matrices"
---

# Matrices

<div class="info-capitolo" markdown>

**Vectors and matrices · Chapter 4.1** · lecture notes by Fabio Furini · [:material-file-pdf-box: Lecture notes (PDF)](../pdf/lecture-notes-linear-algebra.pdf) · [:material-presentation: Slides (PDF)](../pdf/slides-04-1-matrices.pdf)

</div>

## 1. Definition and transpose

<a id="box-defMatrix-1"></a>

!!! definizione "Definition 1: Matrix"

    A <strong>matrix</strong> is a rectangular table of real numbers with \(m\) rows and \(n\) columns.

Given a matrix \(\boldsymbol{A}\in\R^{m\times n}\), we write:

$$
\boldsymbol{A}=
\begin{pmatrix}
[\boldsymbol A]_{1,1} & [\boldsymbol A]_{1,2} & \cdots  & [\boldsymbol A]_{1,n}\\
[\boldsymbol A]_{2,1} & [\boldsymbol A]_{2,2} & \cdots  & [\boldsymbol A]_{2,n}\\
\vdots & \vdots & \ddots  & \vdots \\
[\boldsymbol A]_{m,1} & [\boldsymbol A]_{m,2} & \cdots  & [\boldsymbol A]_{m,n}
\end{pmatrix}
\qquad 
\text{or, for brevity,}
\qquad
\boldsymbol{A}=
\begin{pmatrix}
a_{11} & a_{12} & \cdots  & a_{1n}\\
a_{21} & a_{22} & \cdots  & a_{2n}\\
\vdots & \vdots & \ddots  & \vdots \\
a_{m1} & a_{m2} & \cdots  & a_{mn}
\end{pmatrix}.
$$

- The integers \(m\) and \(n\) are the <strong>dimensions</strong> of the matrix: \(m\) is the number of rows and \(n\) is the number of columns.

- The quantity \([\boldsymbol A]_{i,j}\) (or \(a_{ij}\)) denotes the <strong>entry</strong> of \(\boldsymbol{A}\) in row \(i\) and column \(j\), for \(i\in\{1,2,\dots,m\}\) and \(j\in\{1,2,\dots,n\}\).

<a id="box-exMatrix-2"></a>

!!! esempio "Example 1: Matrix"

    The matrix

    $$
    \boldsymbol A = 
    \begin{pmatrix}
    1 & 2 & 3 \\
    4 & 5 & 6
    \end{pmatrix}
    \in \R^{2 \times 3}
    $$

    is a matrix with \(m=2\) rows and \(n=3\) columns, where \(a_{11} = 1\), \(a_{12} = 2\), \(a_{13} = 3\), \(a_{21} = 4\), \(a_{22} = 5\), and \(a_{23} = 6\).

<a id="box-defTransposeMatrix-3"></a>

!!! definizione "Definition 2: Transpose of a matrix"

    Given a matrix \(\boldsymbol A \in \R^{m \times n}\), the <strong>transpose</strong> of \(\boldsymbol A\), denoted by \(\boldsymbol A'\), is the \(n \times m\) matrix obtained by interchanging rows and columns:

    \begin{equation}
    \boldsymbol A'=
    \begin{pmatrix}
    a_{11} & a_{21} & \cdots  & a_{m1}\\
    a_{12} & a_{22} & \cdots  & a_{m2}\\
    \vdots & \vdots & \ddots  & \vdots \\
    a_{1n} & a_{2n} & \cdots  & a_{mn}
    \end{pmatrix}
    \in \R^{n \times m}.
    \end{equation}

- The entry in position \((i,j)\) of the transpose matrix \(\boldsymbol A'\) is:

    $$
    a'_{ij} = a_{ji}, \quad \forall i \in \{1,2,\dots,n\},\; \forall j \in \{1,2,\dots,m\}.
    $$

<a id="box-exTransposeMatrix-4"></a>

!!! esempio "Example 2: Transpose of a matrix"

    Given the matrix

    $$
    \boldsymbol A = 
    \begin{pmatrix}
    1 & 2 & 3 \\
    4 & 5 & 6
    \end{pmatrix}
    \in \R^{2 \times 3},
    $$

    its transpose is

    $$
    \boldsymbol A' = 
    \begin{pmatrix}
    1 & 4 \\
    2 & 5 \\
    3 & 6
    \end{pmatrix}
    \in \R^{3 \times 2}.
    $$

### 1.1 Rows and columns

- The \(i\)-th row of a matrix \(\boldsymbol{A}\) is denoted by

    $$
    R_i(\boldsymbol{A})
    \qquad \text{or} \qquad
    \boldsymbol{A}_i
    $$

- The \(j\)-th column of a matrix \(\boldsymbol{A}\) is denoted by

    $$
    C_j(\boldsymbol{A})
    \qquad \text{or} \qquad
    \boldsymbol{A}_j
    $$

- In both cases, we can simply use $R_i$ or $C_j$ when the matrix is clear from the context.

### 1.2 Minor matrices

- Let \(\boldsymbol A\in\R^{n\times m}\) be a matrix and let \(i\in\{1,2,\dots,n\}\), \(j\in\{1,2,\dots,m\}\). We denote by \(\boldsymbol A_{ij}\) the \((n-1)\times(m-1)\) matrix obtained from \(\boldsymbol A\) by deleting row \(i\) and column \(j\). The matrix \(\boldsymbol A_{ij}\) is called the <strong>minor matrix</strong> associated with the entry \(a_{ij}\).

<a id="box-exMinorMatrix-5"></a>

!!! esempio "Example 3: Minor matrix"

    Let

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & -2 & 0 & 5\\
    3 & 4 & 7 & -1\\
    2 & 0 & -3 & 6\\
    -4 & 1 & 2 & 8
    \end{pmatrix}\in\R^{4\times 4}.
    $$

    For \(i=2\) and \(j=3\), the minor matrix \(\boldsymbol A_{23}\in\R^{3\times 3}\) is obtained by deleting row \(2\) and column \(3\):

    $$
    \boldsymbol A_{23}=
    \begin{pmatrix}
    1 & -2 & 5\\
    2 & 0 & 6\\
    -4 & 1 & 8
    \end{pmatrix}.
    $$

## 2. Sum of matrices and scalar multiplication

!!! chiave ""

    Given two matrices

    $$
    \underbrace{
    \begin{pmatrix}
    a_{11} & a_{12} & \cdots & a_{1n}\\
    a_{21} & a_{22} & \cdots & a_{2n}\\
    \vdots & \vdots & \ddots & \vdots\\
    a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{pmatrix}
    }_{\boldsymbol A}\in\R^{m\times n}
    \quad \text{and} \quad
    \underbrace{
    \begin{pmatrix}
    b_{11} & b_{12} & \cdots & b_{1n}\\
    b_{21} & b_{22} & \cdots & b_{2n}\\
    \vdots & \vdots & \ddots & \vdots\\
    b_{m1} & b_{m2} & \cdots & b_{mn}
    \end{pmatrix}
    }_{\boldsymbol B}\in\R^{m\times n}
    $$

    their sum is the matrix

    \begin{equation}
    {\boldsymbol A} + {\boldsymbol B} =
    \begin{pmatrix}
    a_{11}+b_{11} & a_{12}+b_{12} & \cdots & a_{1n}+b_{1n}\\
    a_{21}+b_{21} & a_{22}+b_{22} & \cdots & a_{2n}+b_{2n}\\
    \vdots & \vdots & \ddots & \vdots\\
    a_{m1}+b_{m1} & a_{m2}+b_{m2} & \cdots & a_{mn}+b_{mn}
    \end{pmatrix}
    \end{equation}

!!! chiave ""

    Given a scalar \(\lambda\in\R\) and a matrix

    $$
    \underbrace{
    \begin{pmatrix}
    a_{11} & a_{12} & \cdots & a_{1n}\\
    a_{21} & a_{22} & \cdots & a_{2n}\\
    \vdots & \vdots & \ddots & \vdots\\
    a_{m1} & a_{m2} & \cdots & a_{mn}
    \end{pmatrix}
    }_{\boldsymbol A}\in\R^{m\times n}
    $$

    the <strong>scalar multiplication</strong> of \(\boldsymbol A\) by \(\lambda\) is the matrix

    \begin{equation}
    \lambda \boldsymbol A =
    \begin{pmatrix}
    \lambda a_{11} & \lambda a_{12} & \cdots & \lambda a_{1n}\\
    \lambda a_{21} & \lambda a_{22} & \cdots & \lambda a_{2n}\\
    \vdots & \vdots & \ddots & \vdots\\
    \lambda a_{m1} & \lambda a_{m2} & \cdots & \lambda a_{mn}
    \end{pmatrix}
    \end{equation}

<a id="box-exSumScalarMatrix-6"></a>

!!! esempio "Example 4: Sum of matrices and scalar multiplication"

    Consider the matrices

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & -2\\
    3 & 0
    \end{pmatrix},
    \qquad
    \boldsymbol B=
    \begin{pmatrix}
    4 & 5\\
    -1 & 2
    \end{pmatrix}
    \in \R^{2\times 2}.
    $$

    Then

    $$
    \boldsymbol A+\boldsymbol B=
    \begin{pmatrix}
    1+4 & -2+5\\
    3+(-1) & 0+2
    \end{pmatrix}
    =
    \begin{pmatrix}
    5 & 3\\
    2 & 2
    \end{pmatrix},
    $$

    and, for \(\lambda=-2\),

    $$
    \lambda \boldsymbol A
    =
    -2\begin{pmatrix}
    1 & -2\\
    3 & 0
    \end{pmatrix}
    =
    \begin{pmatrix}
    -2 & 4\\
    -6 & 0
    \end{pmatrix}.
    $$

### 2.1 Properties

!!! chiave ""

    The main properties of matrix sum and scalar multiplication are:

    \begin{equation}
    \boldsymbol A+\boldsymbol B=\boldsymbol B+\boldsymbol A,
    \quad \forall \boldsymbol A,\boldsymbol B\in\R^{m\times n}
    \label{mat_sum_1}
    \end{equation}

    \begin{equation}
    (\boldsymbol A+\boldsymbol B)+\boldsymbol C=\boldsymbol A+(\boldsymbol B+\boldsymbol C),
    \quad \forall \boldsymbol A,\boldsymbol B,\boldsymbol C\in\R^{m\times n}
    \label{mat_sum_2}
    \end{equation}

    \begin{equation}
    \boldsymbol A+\boldsymbol 0=\boldsymbol A,
    \quad \forall \boldsymbol A\in\R^{m\times n}
    \label{mat_sum_3}
    \end{equation}

    \begin{equation}
    \boldsymbol A+(-\boldsymbol A)=\boldsymbol 0,
    \quad \forall \boldsymbol A\in\R^{m\times n}
    \label{mat_sum_4}
    \end{equation}

    \begin{equation}
    \lambda(\boldsymbol A+\boldsymbol B)=\lambda\boldsymbol A+\lambda\boldsymbol B,
    \quad \forall \lambda\in\R,\; \forall \boldsymbol A,\boldsymbol B\in\R^{m\times n}
    \label{mat_scal_1}
    \end{equation}

    \begin{equation}
    (\lambda+\mu)\boldsymbol A=\lambda\boldsymbol A+\mu\boldsymbol A,
    \quad \forall \lambda,\mu\in\R,\; \forall \boldsymbol A\in\R^{m\times n}
    \label{mat_scal_2}
    \end{equation}

    \begin{equation}
    \lambda(\mu\boldsymbol A)=(\lambda\mu)\boldsymbol A,
    \quad \forall \lambda,\mu\in\R,\; \forall \boldsymbol A\in\R^{m\times n}
    \label{mat_scal_3}
    \end{equation}

    \begin{equation}
    1\cdot \boldsymbol A=\boldsymbol A
    \quad \text{and} \quad
    0\cdot \boldsymbol A=\boldsymbol 0,
    \quad \forall \boldsymbol A\in\R^{m\times n}.
    \label{mat_scal_4}
    \end{equation}

## 3. Matrix product

!!! chiave ""

    Given two matrices

    $$
    \underbrace{
    \begin{pmatrix}
    a_{11} & a_{12} & \cdots  & a_{1n}\\
    a_{21} & a_{22} & \cdots  & a_{2n}\\
    \vdots & \vdots & \ddots  & \vdots \\
    a_{m1} & a_{m2} & \cdots  & a_{mn}
    \end{pmatrix}
    }_{\boldsymbol A} \in \R^{m \times n}
    \quad \text{and} \quad 
    \underbrace{
    \begin{pmatrix}
    b_{11} & b_{12} & \cdots  & b_{1p}\\
    b_{21} & b_{22} & \cdots  & b_{2p}\\
    \vdots & \vdots & \ddots  & \vdots \\
    b_{n1} & b_{n2} & \cdots  & b_{np}
    \end{pmatrix}
    }_{\boldsymbol B} \in \R^{n \times p}
    $$

    their multiplication is the matrix

    \begin{equation}
    {\boldsymbol A} {\boldsymbol B} =
    \begin{pmatrix}
    \sum_{j=1}^{n} a_{1j} b_{j1} & \sum_{j=1}^{n} a_{1j} b_{j2} & \cdots  & \sum_{j=1}^{n} a_{1j} b_{jp}\\[2ex]
    \sum_{j=1}^{n} a_{2j} b_{j1} & \sum_{j=1}^{n} a_{2j} b_{j2} & \cdots  & \sum_{j=1}^{n} a_{2j} b_{jp}\\[2ex]
    \vdots & \vdots & \ddots  & \vdots \\[1ex]
    \sum_{j=1}^{n} a_{mj} b_{j1} & \sum_{j=1}^{n} a_{mj} b_{j2} & \cdots  & \sum_{j=1}^{n} a_{mj} b_{jp}
    \end{pmatrix}
     \in \R^{m \times p}
    \end{equation}

    where the entry in position \((i,k)\), i.e., \([\boldsymbol A\boldsymbol B]_{ik}=\sum_{j=1}^{n} a_{ij}b_{jk}\), is the scalar product of the \(i\)-th row of \(\boldsymbol A\) and the \(k\)-th column of \(\boldsymbol B\).

<a id="box-exMatrixProduct2x2-7"></a>

!!! esempio "Example 5: Matrix product"

    Consider the matrices

    $$
    \boldsymbol A = 
    \begin{pmatrix}
    1 & 2 \\
    3 & 4
    \end{pmatrix}
    \in \R^{2 \times 2}
    \qquad \text{and} \qquad
    \boldsymbol B = 
    \begin{pmatrix}
    5 & 6 \\
    7 & 8
    \end{pmatrix}
    \in \R^{2 \times 2}
    $$

    The product \(\boldsymbol A \boldsymbol B\) is:

    \begin{align*}
    \boldsymbol A \boldsymbol B 
    &= \begin{pmatrix}
    1 & 2 \\
    3 & 4
    \end{pmatrix}
    \begin{pmatrix}
    5 & 6 \\
    7 & 8
    \end{pmatrix}\\
    &= \begin{pmatrix}
    1\cdot 5 + 2\cdot 7 & 1\cdot 6 + 2\cdot 8 \\
    3\cdot 5 + 4\cdot 7 & 3\cdot 6 + 4\cdot 8
    \end{pmatrix}\\
    &= \begin{pmatrix}
    19 & 22 \\
    43 & 50
    \end{pmatrix}
    \end{align*}

    The product \(\boldsymbol B  \boldsymbol A\) is:

    \begin{align*}
    \boldsymbol B \boldsymbol A 
    &= \begin{pmatrix}
    5 & 6 \\
    7 & 8
    \end{pmatrix}
    \begin{pmatrix}
    1 & 2 \\
    3 & 4
    \end{pmatrix}\\
    &= \begin{pmatrix}
    5\cdot 1 + 6\cdot 3 & 5\cdot 2 + 6\cdot 4 \\
    7\cdot 1 + 8\cdot 3 & 7\cdot 2 + 8\cdot 4
    \end{pmatrix}\\
    &= \begin{pmatrix}
    23 & 34 \\
    31 & 46
    \end{pmatrix}
    \end{align*}

<a id="box-exMatrixProduct2x3-8"></a>

!!! esempio "Example 6: Matrix product"

    Consider the matrices

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & -1\\
    0 & 3 & 4
    \end{pmatrix}
    \in \R^{2\times 3}
    \qquad \text{and} \qquad
    \boldsymbol B=
    \begin{pmatrix}
    2 & 1\\
    -1 & 0\\
    3 & 5
    \end{pmatrix}
    \in \R^{3\times 2}
    $$

    The product \(\boldsymbol A\boldsymbol B\) is:

    \begin{align*}
    \boldsymbol A\boldsymbol B
    &=
    \begin{pmatrix}
    1 & 2 & -1\\
    0 & 3 & 4
    \end{pmatrix}
    \begin{pmatrix}
    2 & 1\\
    -1 & 0\\
    3 & 5
    \end{pmatrix}\\
    &=
    \begin{pmatrix}
    1\cdot 2 + 2\cdot(-1) + (-1)\cdot 3 & 1\cdot 1 + 2\cdot 0 + (-1)\cdot 5\\
    0\cdot 2 + 3\cdot(-1) + 4\cdot 3 & 0\cdot 1 + 3\cdot 0 + 4\cdot 5
    \end{pmatrix}\\
    &=
    \begin{pmatrix}
    -3 & -4\\
    9 & 20
    \end{pmatrix}
    \end{align*}

    The product \(\boldsymbol B  \boldsymbol A\) is:

    \begin{align*}
    \boldsymbol B\boldsymbol A
    &=
    \begin{pmatrix}
    2 & 1\\
    -1 & 0\\
    3 & 5
    \end{pmatrix}
    \begin{pmatrix}
    1 & 2 & -1\\
    0 & 3 & 4
    \end{pmatrix}\\
    &=
    \begin{pmatrix}
    2\cdot 1 + 1\cdot 0 & 2\cdot 2 + 1\cdot 3 & 2\cdot (-1) + 1\cdot 4\\
    -1\cdot 1 + 0\cdot 0 & -1\cdot 2 + 0\cdot 3 & -1\cdot (-1) + 0\cdot 4\\
    3\cdot 1 + 5\cdot 0 & 3\cdot 2 + 5\cdot 3 & 3\cdot (-1) + 5\cdot 4
    \end{pmatrix}\\
    &=
    \begin{pmatrix}
    2 & 7 & 2\\
    -1 & -2 & 1\\
    3 & 21 & 17
    \end{pmatrix}
    \end{align*}

    In particular, \(\boldsymbol A\boldsymbol B \neq \boldsymbol B\boldsymbol A\).

### 3.1 Properties

!!! chiave ""

    The main properties of the matrix product (when dimensions are compatible) are:

    \begin{equation}
    (\boldsymbol A \boldsymbol B)\boldsymbol C = \boldsymbol A(\boldsymbol B \boldsymbol C),
    \quad \forall \boldsymbol A\in\R^{m\times n},\; \boldsymbol B\in\R^{n\times p},\; \boldsymbol C\in\R^{p\times q}
    \label{mat_prod_1}
    \end{equation}

    \begin{equation}
    \boldsymbol A(\boldsymbol B+\boldsymbol C)=\boldsymbol A\boldsymbol B+\boldsymbol A\boldsymbol C,
    \quad \forall \boldsymbol A\in\R^{m\times n},\; \boldsymbol B,\boldsymbol C\in\R^{n\times p}
    \label{mat_prod_2}
    \end{equation}

    \begin{equation}
    (\boldsymbol A+\boldsymbol B)\boldsymbol C=\boldsymbol A\boldsymbol C+\boldsymbol B\boldsymbol C,
    \quad \forall \boldsymbol A,\boldsymbol B\in\R^{m\times n},\; \boldsymbol C\in\R^{n\times p}
    \label{mat_prod_3}
    \end{equation}

    \begin{equation}
    \lambda(\boldsymbol A\boldsymbol B) = (\lambda \boldsymbol A)\boldsymbol B = \boldsymbol A(\lambda \boldsymbol B),
    \quad \forall \lambda\in\R,\; \forall \boldsymbol A\in\R^{m\times n},\; \boldsymbol B\in\R^{n\times p}
    \label{mat_prod_4}
    \end{equation}

    \begin{equation}
    \boldsymbol I_m \boldsymbol A=\boldsymbol A
    \quad \text{and} \quad
    \boldsymbol A \boldsymbol I_n=\boldsymbol A,
    \quad \forall \boldsymbol A\in\R^{m\times n}
    \label{mat_prod_5}
    \end{equation}

    In general, the matrix product is <strong>not commutative</strong>:

    \begin{equation}
    \boldsymbol A\boldsymbol B \neq \boldsymbol B\boldsymbol A
    \quad \text{in general}.
    \label{mat_prod_6}
    \end{equation}

!!! interattivo "Try it in the lab"

    the same computation step by step: change the matrix and watch the steps change.

<div class="la-tool" data-tool="prodotto" data-matrix="1,2,0;-1,3,1" data-b="2,1;0,-1;4,3"></div>

## 4. Special matrices

<a id="box-defSquareMatrix-9"></a>

!!! definizione "Definition 3: Square matrix"

    A matrix \(\boldsymbol A\in\R^{m\times n}\) is called a <strong>square matrix</strong> if it has the same number of rows and columns (\(m=n\)). In this case, \(\boldsymbol A\in\R^{n\times n}\) and it has the form:

    \begin{equation}
    \boldsymbol A=
    \begin{pmatrix}
    a_{11} & a_{12} & \cdots & a_{1n}\\
    a_{21} & a_{22} & \cdots & a_{2n}\\
    \vdots & \vdots & \ddots & \vdots\\
    a_{n1} & a_{n2} & \cdots & a_{nn}
    \end{pmatrix}.
    \end{equation}

<a id="box-exSquareMatrix-10"></a>

!!! esempio "Example 7: Square matrix"

    An example of a square matrix of size \(3\) is:

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & -1 & 0\\
    4 & 3 & 5\\
    1 & 0 & 7
    \end{pmatrix}
    \in\R^{3\times 3}.
    $$

<a id="box-defIdentityMatrix-11"></a>

!!! definizione "Definition 4: Identity matrix"

    A square matrix \(\boldsymbol I_n\in\R^{n\times n}\) is called the <strong>identity matrix</strong> if it has ones on the main diagonal and zeros elsewhere. It has the form:

    \begin{equation}
    \boldsymbol I_n=
    \begin{pmatrix}
    1 & 0 & \cdots & 0\\
    0 & 1 & \cdots & 0\\
    \vdots & \vdots & \ddots & \vdots\\
    0 & 0 & \cdots & 1
    \end{pmatrix}.
    \end{equation}

- Equivalently, the identity matrix satisfies

    $$
    [\boldsymbol I_n]_{ij}=
    \begin{cases}
    1, & \text{if } i=j,\\
    0, & \text{if } i\neq j,
    \end{cases}
    \qquad \forall i,j\in\{1,2,\dots,n\}.
    $$

<a id="box-exIdentityMatrix-12"></a>

!!! esempio "Example 8: Identity matrix"

    The identity matrix of size \(3\) is:

    $$
    \boldsymbol I_3=
    \begin{pmatrix}
    1 & 0 & 0\\
    0 & 1 & 0\\
    0 & 0 & 1
    \end{pmatrix}
    \in\R^{3\times 3}.
    $$

- For any matrix \(\boldsymbol A \in \R^{m \times n}\), we have:

    $$
    \boldsymbol I_m \boldsymbol A = \boldsymbol A
    \qquad \text{and} \qquad
    \boldsymbol A \boldsymbol I_n = \boldsymbol A.
    $$

<a id="box-defDiagonalMatrix-13"></a>

!!! definizione "Definition 5: Diagonal matrix"

    A square matrix \(\boldsymbol D\in\R^{n\times n}\) is called <strong>diagonal</strong> if all its off-diagonal entries are zero. It has the form:

    \begin{equation}
    \boldsymbol D=
    \begin{pmatrix}
    d_{11} & 0      & \cdots & 0\\
    0      & d_{22} & \cdots & 0\\
    \vdots & \vdots & \ddots & \vdots\\
    0      & 0      & \cdots & d_{nn}
    \end{pmatrix}.
    \end{equation}

- Equivalently, a diagonal matrix satisfies

    $$
    d_{ij}=0,\qquad \forall i,j\in\{1,2,\dots,n\}\ \text{with}\ i\neq j.
    $$

<a id="box-exDiagonalMatrix-14"></a>

!!! esempio "Example 9: Diagonal matrix"

    The matrix

    $$
    \boldsymbol D=
    \begin{pmatrix}
    2 & 0 & 0\\
    0 & -1 & 0\\
    0 & 0 & 5
    \end{pmatrix}
    \in\R^{3\times 3}
    $$

    is diagonal.

<a id="box-defSymmetricMatrix-15"></a>

!!! definizione "Definition 6: Symmetric matrix"

    A square matrix \(\boldsymbol Q\in\R^{n\times n}\) is called <strong>symmetric</strong> if it has the same entries with respect to the main diagonal (i.e., the entry in position \((i,j)\) equals the entry in position \((j,i)\)). It has the form:

    \begin{equation}
    \boldsymbol Q=
    \begin{pmatrix}
    q_{11} & q_{12} & \cdots & q_{1n}\\
    q_{12} & q_{22} & \cdots & q_{2n}\\
    \vdots & \vdots & \ddots & \vdots\\
    q_{1n} & q_{2n} & \cdots & q_{nn}
    \end{pmatrix}.
    \end{equation}

- Equivalently, a symmetric matrix satisfies

    $$
    q_{ij}=q_{ji},\qquad \forall i,j\in\{1,2,\dots,n\}.
    $$

- In matrix form, symmetry can be written as

    $$
    \boldsymbol Q'=\boldsymbol Q.
    $$

<a id="box-defUpperTriangularMatrix-16"></a>

!!! definizione "Definition 7: Upper triangular matrix"

    A square matrix \(\boldsymbol U\in\R^{n\times n}\) is called <strong>upper triangular</strong> if all its entries below the main diagonal are zero. It has the form:

    \begin{equation}
    \boldsymbol U=
    \begin{pmatrix}
    u_{11} & u_{12} & \cdots & u_{1n}\\
    0      & u_{22} & \cdots & u_{2n}\\
    \vdots & \vdots & \ddots & \vdots\\
    0      & 0      & \cdots & u_{nn}
    \end{pmatrix}.
    \end{equation}

- Equivalently, an upper triangular matrix satisfies

    $$
    u_{ij}=0,\qquad \forall i,j\in\{1,2,\dots,n\}\ \text{with}\ i>j.
    $$

<a id="box-exUpperTriangular-17"></a>

!!! esempio "Example 10: Upper triangular matrix"

    The matrix

    $$
    \boldsymbol U=
    \begin{pmatrix}
    1 & 2 & -3\\
    0 & 4 & 5\\
    0 & 0 & -2
    \end{pmatrix}
    \in\R^{3\times 3}
    $$

    is upper triangular.

<a id="box-defLowerTriangularMatrix-18"></a>

!!! definizione "Definition 8: Lower triangular matrix"

    A square matrix \(\boldsymbol L\in\R^{n\times n}\) is called <strong>lower triangular</strong> if all its entries above the main diagonal are zero. It has the form:

    \begin{equation}
    \boldsymbol L=
    \begin{pmatrix}
    \ell_{11} & 0        & \cdots & 0\\
    \ell_{21} & \ell_{22}& \cdots & 0\\
    \vdots    & \vdots   & \ddots & \vdots\\
    \ell_{n1} & \ell_{n2}& \cdots & \ell_{nn}
    \end{pmatrix}.
    \end{equation}

- Equivalently, a lower triangular matrix satisfies

    $$
    \ell_{ij}=0,\qquad \forall i,j\in\{1,2,\dots,n\}\ \text{with}\ i<j.
    $$

<a id="box-exLowerTriangular-19"></a>

!!! esempio "Example 11: Lower triangular matrix"

    The matrix

    $$
    \boldsymbol L=
    \begin{pmatrix}
    3 & 0 & 0\\
    -1 & 2 & 0\\
    4 & 5 & 1
    \end{pmatrix}
    \in\R^{3\times 3}
    $$

    is lower triangular.

### 4.1 Permutation matrices

- Permutation matrices are square matrices obtained by permuting the rows (or equivalently, the columns) of the identity matrix. They encode permutations of indices and implement row/column reorderings through matrix multiplication.

!!! chiave ""

    Given an ordering (permutation) \(\pi\) of \(\{1,\dots,n\}\), we denote by \(\boldsymbol P_{\pi}\) the <strong>permutation matrix</strong> obtained from \(\boldsymbol I_n\) by reordering its rows according to \(\pi\), i.e., placing row \(\pi(1)\) first, then row \(\pi(2)\), \(\dots\), and finally row \(\pi(n)\).

    - <strong>Row reordering by left multiplication.</strong> Given \(\boldsymbol A \in \R^{m \times n}\) and \(\boldsymbol P_{\pi} \in \R^{m \times m}\), the matrix

        $$
        \boldsymbol P_{\pi}\boldsymbol A
        $$

        consists of the rows of \(\boldsymbol A\) reordered according to the permutation \(\pi\) (row \(\pi(1)\) becomes the first row, row \(\pi(2)\) becomes the second row, etc.).

    - <strong>Column reordering by right multiplication.</strong> Given \(\boldsymbol A \in \R^{m \times n}\) and \(\boldsymbol P_{\pi} \in \R^{n \times n}\), the matrix

        $$
        \boldsymbol A\boldsymbol P_{\pi}'
        $$

        (note the transpose: \(\boldsymbol P_{\pi}'\) is obtained from \(\boldsymbol I_n\) by reordering its <em>columns</em> according to \(\pi\)) consists of the columns of \(\boldsymbol A\) reordered according to the permutation \(\pi\) (column \(\pi(1)\) becomes the first column, column \(\pi(2)\) becomes the second column, etc.).

<a id="box-exRowPermutation-20"></a>

!!! esempio "Example 12: Row reordering via permutation matrix"

    Consider the matrix

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2\\
    3 & 4\\
    5 & 6
    \end{pmatrix}
    \in \R^{3 \times 2}.
    $$

    Given the desired row ordering \(\pi=(3,1,2)\) (i.e., row \(3\) first, then row \(1\), then row \(2\)), we use the permutation matrix \(\boldsymbol P_{\pi}\) obtained from \(\boldsymbol I_3\) by reordering its rows as \((3,1,2)\):

    $$
    \boldsymbol P_{\pi}=
    \begin{pmatrix}
    0 & 0 & 1\\
    1 & 0 & 0\\
    0 & 1 & 0
    \end{pmatrix}
    \in \R^{3 \times 3}.
    $$

    Then:

    $$
    \boldsymbol P_{\pi}\boldsymbol A
    =
    \begin{pmatrix}
    0 & 0 & 1\\
    1 & 0 & 0\\
    0 & 1 & 0
    \end{pmatrix}
    \begin{pmatrix}
    1 & 2\\
    3 & 4\\
    5 & 6
    \end{pmatrix}
    =
    \begin{pmatrix}
    5 & 6\\
    1 & 2\\
    3 & 4
    \end{pmatrix}.
    $$

    The rows of \(\boldsymbol A\) have been reordered according to \(\pi=(3,1,2)\).

<a id="box-exColumnPermutation-21"></a>

!!! esempio "Example 13: Column reordering via permutation matrix"

    Consider the matrix

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 3\\
    4 & 5 & 6
    \end{pmatrix}
    \in \R^{2 \times 3}.
    $$

    Given the desired column ordering \(\pi=(2,3,1)\) (i.e., column \(2\) first, then column \(3\), then column \(1\)), we use the permutation matrix \(\boldsymbol P_{\pi}\) obtained from \(\boldsymbol I_3\) by reordering its rows as \((2,3,1)\), and its transpose:

    $$
    \boldsymbol P_{\pi}=
    \begin{pmatrix}
    0 & 1 & 0\\
    0 & 0 & 1\\
    1 & 0 & 0
    \end{pmatrix},
    \qquad
    \boldsymbol P_{\pi}'=
    \begin{pmatrix}
    0 & 0 & 1\\
    1 & 0 & 0\\
    0 & 1 & 0
    \end{pmatrix}
    \in \R^{3 \times 3}.
    $$

    Then:

    $$
    \boldsymbol A\boldsymbol P_{\pi}'
    =
    \begin{pmatrix}
    1 & 2 & 3\\
    4 & 5 & 6
    \end{pmatrix}
    \begin{pmatrix}
    0 & 0 & 1\\
    1 & 0 & 0\\
    0 & 1 & 0
    \end{pmatrix}
    =
    \begin{pmatrix}
    2 & 3 & 1\\
    5 & 6 & 4
    \end{pmatrix}.
    $$

    The columns of \(\boldsymbol A\) have been reordered according to \(\pi=(2,3,1)\).

### 4.2 Inverse matrices

<a id="box-defInvertible-22"></a>

!!! definizione "Definition 9: inverse matrix"

    A square matrix \( \boldsymbol A \in \R^{n\times n} \) is <strong>invertible</strong> if there exists a matrix \( \boldsymbol A^{-1} \in \R^{n\times n} \) such that

    $$
    \boldsymbol A\,\boldsymbol A^{-1} = \boldsymbol I
    \qquad \text{and} \qquad
    \boldsymbol A^{-1}\boldsymbol A = \boldsymbol I.
    $$

    Such a matrix \( \boldsymbol A^{-1} \) is called the <strong>inverse</strong> of \( \boldsymbol A \).

- If it exists, the inverse matrix \( \boldsymbol A^{-1} \) is unique.

### 4.3 Semidefinite matrices

<a id="box-defPSD-23"></a>

!!! definizione "Definition 10: semidefinite matrices"

    A square <strong>symmetric</strong> matrix \( \boldsymbol Q \in \R^{n \times n} \) is 

    - <strong>positive semidefinite</strong> if

        $$
        \boldsymbol x' \boldsymbol Q \, \boldsymbol x \ge 0, \qquad \forall \boldsymbol x \in \R^n
        $$

    - <strong>positive definite</strong> if

        $$
        \boldsymbol x' \boldsymbol Q \, \boldsymbol x > 0, \qquad \forall \boldsymbol x \in \R^n \setminus \{\boldsymbol 0\}
        $$

    - <strong>negative semidefinite</strong> if

        $$
        \boldsymbol x' \boldsymbol Q \, \boldsymbol x \le 0, \qquad \forall \boldsymbol x \in \R^n
        $$

    - <strong>negative definite</strong> if

        $$
        \boldsymbol x' \boldsymbol Q \, \boldsymbol x < 0, \qquad \forall \boldsymbol x \in \R^n \setminus \{\boldsymbol 0\}
        $$

<a id="box-exPSD-24"></a>

!!! esempio "Example 14: positive semidefinite matrix"

    - The identity matrix

        $$
        \boldsymbol I=
        \begin{pmatrix}
        1 & 0\\[1ex]
        0 & 1 \\
        \end{pmatrix}
        $$

        is positive semidefinite since:

        $$
        \begin{pmatrix} 
        x_1 & x_2 
        \end{pmatrix} 
        \begin{pmatrix}
        1 & 0\\[1ex]
        0 & 1 \\
        \end{pmatrix}
        \begin{pmatrix}
        x_1 \\[1ex]
        x_2 \\
        \end{pmatrix}
        = x_1^2 + x_2^2 \ge 0, 
        \qquad
        \forall \begin{pmatrix}x_1\\x_2\end{pmatrix} \in \R^2.
        $$

    - The matrix

        $$
        \begin{pmatrix}
        2 & -1 \\[1ex]
        -1 & 2
        \end{pmatrix}
        $$

        is positive semidefinite since:

        \begin{align*}
        \begin{pmatrix} 
        x_1 & x_2
        \end{pmatrix} 
        \begin{pmatrix}
        2 & -1 \\[1ex]
        -1 & 2
        \end{pmatrix}
        \begin{pmatrix}
        x_1 \\[1ex]
        x_2
        \end{pmatrix}
        &= 2x_1^2 - 2x_1x_2 + 2x_2^2 \\[1ex]
        &= x_1^2 + (x_1 - x_2)^2 + x_2^2 \ge 0,
        \qquad
        \forall \begin{pmatrix}x_1\\x_2\end{pmatrix} \in \R^2.
        \end{align*}

## 5. Determinant

!!! chiave ""

    - <strong>Determinant of a \(1\times 1\) matrix.</strong> Let

        $$
        \boldsymbol A=
        \begin{pmatrix}
        a 
        \end{pmatrix}\in\R^{1\times 1}.
        $$

        Then

        \begin{equation}
        \det(\boldsymbol A)=a.
        \end{equation}

    - <strong>Determinant of a \(2\times 2\) matrix.</strong> Let

        $$
        \boldsymbol A=
        \begin{pmatrix}
        a & b\\
        c & d
        \end{pmatrix}\in\R^{2\times 2}.
        $$

        Then

        \begin{equation}
        \det(\boldsymbol A)=ad-bc.
        \end{equation}

    - <strong>Determinant of a \(3\times 3\) matrix (Sarrus rule).</strong> Let

        $$
        \boldsymbol A=
        \begin{pmatrix}
        a & b & c\\
        d & e & f\\
        g & h & i
        \end{pmatrix}\in\R^{3\times 3}.
        $$

        Then

        \begin{equation}
        \det(\boldsymbol A)
        = aei + bfg + cdh \;-\; ceg - bdi - afh.
        \end{equation}

<a id="box-exDet2x2-25"></a>

!!! esempio "Example 15: determinant of a \(2\times2\) matrix"

    Let

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & -1\\
    3 & 4
    \end{pmatrix}.
    $$

    Then

    $$
    \det(\boldsymbol A)=2\cdot 4-(-1)\cdot 3=8+3=11.
    $$

<a id="box-exDet3x3Sarrus-26"></a>

!!! esempio "Example 16: determinant of a \(3\times3\) matrix"

    Let

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2 & 0\\
    3 & 1 & 4\\
    2 & -1 & 1
    \end{pmatrix}.
    $$

    Using Sarrus:

    $$
    \det(\boldsymbol A)
    = 1\cdot 1\cdot 1 + 2\cdot 4\cdot 2 + 0\cdot 3\cdot (-1)
    - 0\cdot 1\cdot 2 - 2\cdot 3\cdot 1 - 1\cdot 4\cdot (-1).
    $$

    Hence

    $$
    \det(\boldsymbol A)=1+16+0-0-6+4=15.
    $$

### 5.1 Laplace expansion

!!! chiave ""

    Let \(\boldsymbol A\in\R^{n\times n}\) be a square matrix. The determinant \(\det(\boldsymbol A)\) can be computed recursively by <strong>Laplace expansion</strong> along any row or column.

    For any row \(i\in\{1,2,\dots,n\}\), we have:

    \begin{equation}
    \det(\boldsymbol A)=\sum_{j=1}^{n} a_{ij}\,C_{ij}
    \end{equation}

    For any column \(j\in\{1,2,\dots,n\}\), we have:

    \begin{equation}
    \det(\boldsymbol A)=\sum_{i=1}^{n} a_{ij}\,C_{ij}
    \end{equation}

    Where \(C_{ij}\) is the <strong>cofactor</strong> of the entry \(a_{ij}\), defined by

    \begin{equation}
    C_{ij}=(-1)^{i+j}\,\det(\boldsymbol A_{ij})
    \end{equation}

    where \(\boldsymbol A_{ij}\) is the minor matrix obtained from \(\boldsymbol A\) by deleting row \(i\) and column \(j\).

<a id="box-exLaplace3x3-27"></a>

!!! esempio "Example 17: Determinant via Laplace expansion"

    Let

    $$
    \boldsymbol A=
    \begin{pmatrix}
    -2 & 2 & -3\\
    -1 & 1 & 3\\
    2 & 0 & -1
    \end{pmatrix}.
    $$

    We expand along the second column (it contains a zero):

    $$
    \det(\boldsymbol A)
    =
    2\,C_{12}+1\,C_{22}+0\cdot C_{32}.
    $$

    Compute the cofactors:

    $$
    C_{12}=(-1)^{1+2}\det
    \begin{pmatrix}
    -1 & 3\\
    2 & -1
    \end{pmatrix}
    =
    -\,\bigl((-1)(-1)-2\cdot 3\bigr)
    =
    -\,\bigl(1-6\bigr)=5,
    $$

    $$
    C_{22}=(-1)^{2+2}\det
    \begin{pmatrix}
    -2 & -3\\
    2 & -1
    \end{pmatrix}
    =
    \bigl((-2)(-1)-2(-3)\bigr)
    =
    2+6=8.
    $$

    Therefore,

    $$
    \det(\boldsymbol A)=2\cdot 5+1\cdot 8=18.
    $$

### 5.2 Determinant of triangular and diagonal matrices

- For triangular matrices (upper or lower), the determinant has a particularly simple form: it is the product of the diagonal entries.

!!! chiave ""

    If \(\boldsymbol U \in \R^{n \times n}\) is an <strong>upper triangular matrix</strong>, then

    \begin{equation}
    \det(\boldsymbol U) = \prod_{i=1}^{n} u_{ii}.
    \end{equation}

!!! chiave ""

    If \(\boldsymbol L \in \R^{n \times n}\) is a <strong>lower triangular matrix</strong>, then

    \begin{equation}
    \det(\boldsymbol L) = \prod_{i=1}^{n} \ell_{ii}.
    \end{equation}

- In particular, for a <strong>diagonal matrix</strong> \(\boldsymbol D  \in \R^{n \times n}\):

    $$
    \det(\boldsymbol D)  = \prod_{i=1}^{n} d_{ii}.
    $$

- For the <strong>identity matrix</strong> \(\boldsymbol I_n\):

    $$
    \det(\boldsymbol I_n) = 1.
    $$

<a id="box-exDetUpperTriangular-28"></a>

!!! esempio "Example 18: Determinant of an upper triangular matrix"

    Let

    $$
    \boldsymbol U=
    \begin{pmatrix}
    2 & 3 & -1\\
    0 & -4 & 5\\
    0 & 0 & 3
    \end{pmatrix}.
    $$

    Then

    $$
    \det(\boldsymbol U) = 2 \cdot (-4) \cdot 3 = -24.
    $$

<a id="box-exDetLowerTriangular-29"></a>

!!! esempio "Example 19: Determinant of a lower triangular matrix"

    Let

    $$
    \boldsymbol L=
    \begin{pmatrix}
    1 & 0 & 0\\
    2 & 3 & 0\\
    -1 & 4 & -2
    \end{pmatrix}.
    $$

    Then

    $$
    \det(\boldsymbol L) = 1 \cdot 3 \cdot (-2) = -6.
    $$

<a id="box-exDetDiagonal-30"></a>

!!! esempio "Example 20: Determinant of a diagonal matrix"

    Let

    $$
    \boldsymbol D=
    \begin{pmatrix}
    5 & 0 & 0\\
    0 & -2 & 0\\
    0 & 0 & 3
    \end{pmatrix}.
    $$

    Then

    $$
    \det(\boldsymbol D) = 5 \cdot (-2) \cdot 3 = -30.
    $$

### 5.3 Properties of determinants

- The determinant satisfies several important algebraic properties that make its computation and application more efficient.

!!! chiave ""

    Let \(\boldsymbol A, \boldsymbol B \in \R^{n \times n}\) be square matrices and \(\lambda \in \R\) be a scalar. Then:

    \begin{equation}
    \det(\boldsymbol A \boldsymbol B) = \det(\boldsymbol A) \cdot \det(\boldsymbol B)
    \label{det_prod}
    \end{equation}

    \begin{equation}
    \det(\boldsymbol A') = \det(\boldsymbol A)
    \label{det_transpose}
    \end{equation}

    \begin{equation}
    \det(\lambda \boldsymbol A) = \lambda^n \det(\boldsymbol A)
    \label{det_scalar}
    \end{equation}

    \begin{equation}
    \det(\boldsymbol A^{-1}) = \frac{1}{\det(\boldsymbol A)}, \quad \text{if } \boldsymbol A \text{ is invertible}
    \label{det_inverse}
    \end{equation}

    \begin{equation}
    \det(\boldsymbol I_n) = 1
    \label{det_identity}
    \end{equation}

- From properties \(\eqref{det_prod}\) and \(\eqref{det_identity}\), if \(\boldsymbol A\) is invertible:

    $$
    \det(\boldsymbol A) \cdot \det(\boldsymbol A^{-1}) = \det(\boldsymbol A \boldsymbol A^{-1}) = \det(\boldsymbol I_n) = 1,
    $$

    which gives property \(\eqref{det_inverse}\).

- Property \(\eqref{det_scalar}\) shows that scalar multiplication affects the determinant by the \(n\)-th power of the scalar (not linearly).

- Property \(\eqref{det_transpose}\) implies that row operations and column operations have symmetric effects on the determinant.

<a id="box-exDetProduct-31"></a>

!!! esempio "Example 21: Determinant of a product"

    Let

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & 1\\
    0 & 3
    \end{pmatrix},
    \qquad
    \boldsymbol B=
    \begin{pmatrix}
    1 & -1\\
    4 & 2
    \end{pmatrix}.
    $$

    We have:

    $$
    \det(\boldsymbol A) = 2 \cdot 3 - 1 \cdot 0 = 6,
    \qquad
    \det(\boldsymbol B) = 1 \cdot 2 - (-1) \cdot 4 = 6.
    $$

    The product is:

    $$
    \boldsymbol A \boldsymbol B
    =
    \begin{pmatrix}
    2 & 1\\
    0 & 3
    \end{pmatrix}
    \begin{pmatrix}
    1 & -1\\
    4 & 2
    \end{pmatrix}
    =
    \begin{pmatrix}
    6 & 0\\
    12 & 6
    \end{pmatrix}.
    $$

    Then:

    $$
    \det(\boldsymbol A \boldsymbol B) = 6 \cdot 6 - 0 \cdot 12 = 36 = \det(\boldsymbol A) \cdot \det(\boldsymbol B).
    $$

<a id="box-exDetTranspose-32"></a>

!!! esempio "Example 22: Determinant of a transpose"

    Let

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2\\
    3 & 4
    \end{pmatrix},
    \qquad
    \boldsymbol A'=
    \begin{pmatrix}
    1 & 3\\
    2 & 4
    \end{pmatrix}.
    $$

    We have:

    $$
    \det(\boldsymbol A) = 1 \cdot 4 - 2 \cdot 3 = -2,
    \qquad
    \det(\boldsymbol A') = 1 \cdot 4 - 3 \cdot 2 = -2.
    $$

    Therefore, \(\det(\boldsymbol A') = \det(\boldsymbol A)\).

<a id="box-exDetScalar-33"></a>

!!! esempio "Example 23: Determinant of a scalar multiple"

    Let

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 2\\
    3 & 4
    \end{pmatrix}
    \in \R^{2 \times 2},
    \qquad
    \lambda = 2.
    $$

    Then:

    $$
    \lambda \boldsymbol A
    =
    \begin{pmatrix}
    2 & 4\\
    6 & 8
    \end{pmatrix}.
    $$

    We have:

    $$
    \det(\boldsymbol A) = 1 \cdot 4 - 2 \cdot 3 = -2,
    \qquad
    \det(\lambda \boldsymbol A) = 2 \cdot 8 - 4 \cdot 6 = -8.
    $$

    Since \(n=2\), we verify:

    $$
    \det(\lambda \boldsymbol A) = -8 = 2^2 \cdot (-2) = \lambda^2 \det(\boldsymbol A).
    $$

<a id="box-exDetInverse-34"></a>

!!! esempio "Example 24: Determinant of an inverse"

    Let

    $$
    \boldsymbol A=
    \begin{pmatrix}
    2 & 1\\
    1 & 1
    \end{pmatrix}.
    $$

    We have:

    $$
    \det(\boldsymbol A) = 2 \cdot 1 - 1 \cdot 1 = 1.
    $$

    The inverse matrix is:

    $$
    \boldsymbol A^{-1}=
    \begin{pmatrix}
    1 & -1\\
    -1 & 2
    \end{pmatrix}.
    $$

    Then:

    $$
    \det(\boldsymbol A^{-1}) = 1 \cdot 2 - (-1) \cdot (-1) = 1 = \frac{1}{\det(\boldsymbol A)}.
    $$

!!! chiave ""

    A matrix \( \boldsymbol A \) is invertible if and only if \( \det(\boldsymbol A)\neq 0 \).

!!! interattivo "Try it in the lab"

    the same computation step by step: change the matrix and watch the steps change.

<div class="la-tool" data-tool="det" data-matrix="1,2,0;3,1,4;2,-1,1"></div>

## 6. Rank

<a id="box-defRank-35"></a>

!!! definizione "Definition 11: rank of a matrix"

    Let \( \boldsymbol A \in \R^{m\times n} \). The <strong>rank</strong> of \( \boldsymbol A \), denoted by \( \mathrm{rank}(\boldsymbol A) \), is the maximum number of linearly independent columns of \( \boldsymbol A \).

- The columns of \(\boldsymbol A\) are vectors of \(\R^{m}\), and linear independence is meant in the sense of the definition given in the chapter on vectors: \(\boldsymbol v_1,\dots,\boldsymbol v_k\) are linearly independent if \(\lambda_1\boldsymbol v_1+\dots+\lambda_k\boldsymbol v_k=\boldsymbol 0\) implies \(\lambda_1=\dots=\lambda_k=0\).

- Equivalently, \( \mathrm{rank}(\boldsymbol A) \) is the maximum number of linearly independent rows of \( \boldsymbol A \).

- We always have

    $$
    \mathrm{rank}(\boldsymbol A)\le \min\{m,n\}.
    $$

- If \( \boldsymbol A \in \R^{n\times n} \) is square, then

    $$
    \mathrm{rank}(\boldsymbol A)=n
    \quad \Longleftrightarrow \quad
    \det(\boldsymbol A)\neq 0.
    $$

<a id="box-exRank2x3-36"></a>

!!! esempio "Example 25: rank of a matrix"

    Let

    $$
    \boldsymbol B=
    \begin{pmatrix}
    1 & 2 & 3\\
    2 & 4 & 6
    \end{pmatrix}\in\R^{2\times 3}.
    $$

    The second row is a multiple of the first one:

    $$
    \begin{pmatrix}2 & 4 & 6\end{pmatrix}
    =2\begin{pmatrix}1 & 2 & 3\end{pmatrix}.
    $$

    Hence the two rows are linearly dependent, so there is only one linearly independent row. Therefore,

    $$
    \mathrm{rank}(\boldsymbol B)=1.
    $$

<a id="box-exRank3x3-37"></a>

!!! esempio "Example 26: rank of a \(3\times 3\) matrix"

    Let

    $$
    \boldsymbol A=
    \begin{pmatrix}
    1 & 0 & 1\\
    2 & 1 & 3\\
    0 & 1 & 1
    \end{pmatrix}\in\R^{3\times 3}.
    $$

    The third column is the sum of the first two:

    $$
    C_3(\boldsymbol A)=
    \begin{pmatrix}1\\3\\1\end{pmatrix}
    =
    \begin{pmatrix}1\\2\\0\end{pmatrix}
    +
    \begin{pmatrix}0\\1\\1\end{pmatrix}
    =C_1(\boldsymbol A)+C_2(\boldsymbol A),
    $$

    hence the three columns are linearly dependent and \(\mathrm{rank}(\boldsymbol A)\le 2\). On the other hand, the first two columns are linearly independent: \(\lambda_1 C_1(\boldsymbol A)+\lambda_2 C_2(\boldsymbol A)=\boldsymbol 0\) gives \(\lambda_1=0\) (first entry) and \(\lambda_2=0\) (third entry). Therefore,

    $$
    \mathrm{rank}(\boldsymbol A)=2.
    $$

    Consistently, expanding along the first row, \(\det(\boldsymbol A)=1\cdot(1\cdot 1-3\cdot 1)-0+1\cdot(2\cdot 1-1\cdot 0)=-2+2=0\).

!!! interattivo "Try it in the lab"

    the same computation step by step: change the matrix and watch the steps change.

<div class="la-tool" data-tool="rango" data-matrix="1,2,3;2,4,6"></div>

## Exercises and lab

- :material-pencil-box-multiple: **Exercises** · [the exercise sheet of this chapter: 12 exercises with worked solutions](../exercises/es-vectors-matrices-02-matrices.md)
- :material-calculator-variant: **Lab** · [Matrix product](../lab/product.md) — Row by column, one entry at a time.
- :material-calculator-variant: **Lab** · [Determinant](../lab/determinant.md) — Laplace expansion along the row or column you choose, or the Sarrus rule
- :material-calculator-variant: **Lab** · [Rank](../lab/rank.md) — The rank as the number of pivots of the row echelon form.

