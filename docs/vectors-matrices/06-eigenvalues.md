---
title: "Eigenvalues and eigenvectors"
---

# Eigenvalues and eigenvectors

<div class="info-capitolo" markdown>

**Vectors and matrices · Chapter 4.5** · lecture notes by Fabio Furini · [:material-file-pdf-box: Chapter PDF](../pdf/vectors-matrices-06-eigenvalues.pdf)

</div>

## 1. Eigenvalues

<a id="box-defEigen-1"></a>

!!! definizione "Definition 1: eigenvalue and eigenvector"

    Let \( \boldsymbol Q \in \R^{n\times n} \) be a square matrix. A scalar \( \lambda \in \R \) is called an <strong>eigenvalue</strong> of \( \boldsymbol Q \) if there exists a nonzero vector \( \boldsymbol v \in \R^{n} \setminus \{\boldsymbol 0\} \) such that

    $$
    \boldsymbol Q\,\boldsymbol v = \lambda\,\boldsymbol v.
    $$

    In this case, \( \boldsymbol v \) is called an <strong>eigenvector</strong> associated with \( \lambda \).

- Eigenvalues are solutions of the <strong>characteristic equation</strong>

    $$
    \det(\boldsymbol Q - \lambda \boldsymbol I)=0.
    $$

- If \( \boldsymbol Q \) is symmetric, then all its eigenvalues are real.

- The function \( p(\lambda)=\det(\boldsymbol Q-\lambda\boldsymbol I) \) is a polynomial of degree \( n \) in \( \lambda \), called the <strong>characteristic polynomial</strong> of \( \boldsymbol Q \).

- If \( \lambda \) is an eigenvalue, the eigenvectors associated with \( \lambda \) are the nonzero solutions \( \boldsymbol v \) of the homogeneous system

    $$
    (\boldsymbol Q-\lambda\boldsymbol I)\,\boldsymbol v=\boldsymbol 0 .
    $$

- If \( \boldsymbol v \) is an eigenvector associated with \( \lambda \), then also \( \alpha\,\boldsymbol v \) is an eigenvector associated with \( \lambda \), for every \( \alpha\in\R\setminus\{0\} \). Eigenvectors are therefore never unique: we just give one of them (“for example”).

!!! chiave ""

    A square symmetric matrix \( \boldsymbol Q \in \R^{n \times n} \) is 

    - positive semidefinite if and only if all its eigenvalues are non-negative.

    - positive definite if and only if all its eigenvalues are strictly positive.

    - negative semidefinite if and only if all its eigenvalues are non-positive.

    - negative definite if and only if all its eigenvalues are strictly negative.

- Recall that (semi)definiteness has been defined in the chapter on matrices through the sign of \( \boldsymbol x' \boldsymbol Q \, \boldsymbol x \): for instance, \( \boldsymbol Q \) is positive semidefinite if \( \boldsymbol x' \boldsymbol Q \, \boldsymbol x \ge 0 \) for all \( \boldsymbol x \in \R^n \). The box above gives an equivalent characterization in terms of eigenvalues.

- One direction is easy to see: if \( \boldsymbol Q\boldsymbol v=\lambda\boldsymbol v \) with \( \boldsymbol v\neq\boldsymbol 0 \), then

    $$
    \boldsymbol v' \boldsymbol Q \, \boldsymbol v=\lambda\,\boldsymbol v'\boldsymbol v=\lambda\sum_{i=1}^n v_i^2,
    \qquad \text{with} \quad \sum_{i=1}^n v_i^2>0,
    $$

    so \( \boldsymbol v' \boldsymbol Q \, \boldsymbol v \) and \( \lambda \) have the same sign. For example, if \( \boldsymbol Q \) is positive semidefinite, then every eigenvalue satisfies \( \lambda\ge 0 \).

- A symmetric matrix which is neither positive semidefinite nor negative semidefinite is called <strong>indefinite</strong>: equivalently, it has at least one strictly positive and at least one strictly negative eigenvalue.

<a id="box-texexpbox1-2"></a>

!!! esempio "Example 1: eigenvalues and eigenvectors"

    Let us consider the matrix

    $$
    \boldsymbol Q=
    \begin{pmatrix}
    2 & -1\\[0.5ex]
    -1 & 2
    \end{pmatrix}.
    $$

    The characteristic equation is:

    $$
    \det(\boldsymbol Q-\lambda \boldsymbol I)
    =
    \det\begin{pmatrix}
    2-\lambda & -1\\[0.5ex]
    -1 & 2-\lambda
    \end{pmatrix}
    =
    (2-\lambda)^2-1
    =
    \lambda^2-4\lambda+3.
    $$

    Hence

    $$
    \det(\boldsymbol Q-\lambda \boldsymbol I)=0
    \Longleftrightarrow
    (\lambda-1)(\lambda-3)=0,
    $$

    and therefore the eigenvalues are:

    $$
    \lambda_1=1,
    \qquad
    \lambda_2=3.
    $$

    An eigenvector associated with \(\lambda_1=1\) can be found by solving

    $$
    (\boldsymbol Q-\boldsymbol I)\boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    \begin{pmatrix}
    1 & -1\\[0.5ex]
    -1 & 1
    \end{pmatrix}
    \boldsymbol v=\boldsymbol 0,
    $$

    which gives (for example)

    $$
    \boldsymbol v_1=
    \begin{pmatrix}
    1\\[0.5ex]
    1
    \end{pmatrix}.
    $$

    Similarly, an eigenvector associated with \(\lambda_2=3\) satisfies

    $$
    (\boldsymbol Q-3\boldsymbol I)\boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    \begin{pmatrix}
    -1 & -1\\[0.5ex]
    -1 & -1
    \end{pmatrix}
    \boldsymbol v=\boldsymbol 0,
    $$

    which gives (for example)

    $$
    \boldsymbol v_2=
    \begin{pmatrix}
    1\\[0.5ex]
    -1
    \end{pmatrix}.
    $$

    Therefore,

    $$
    \boldsymbol Q\,\boldsymbol v_1 = 1\,\boldsymbol v_1,
    \qquad
    \boldsymbol Q\,\boldsymbol v_2 = 3\,\boldsymbol v_2.
    $$

    We can verify it directly:

    $$
    \boldsymbol Q\,\boldsymbol v_1
    =
    \begin{pmatrix}
    2 & -1\\[0.5ex]
    -1 & 2
    \end{pmatrix}
    \begin{pmatrix}
    1\\[0.5ex]
    1
    \end{pmatrix}
    =
    \begin{pmatrix}
    1\\[0.5ex]
    1
    \end{pmatrix}
    = 1\,\boldsymbol v_1,
    \qquad
    \boldsymbol Q\,\boldsymbol v_2
    =
    \begin{pmatrix}
    2 & -1\\[0.5ex]
    -1 & 2
    \end{pmatrix}
    \begin{pmatrix}
    1\\[0.5ex]
    -1
    \end{pmatrix}
    =
    \begin{pmatrix}
    3\\[0.5ex]
    -3
    \end{pmatrix}
    = 3\,\boldsymbol v_2.
    $$

    Since \( \boldsymbol Q \) is symmetric and both eigenvalues are strictly positive, the matrix \( \boldsymbol Q \) is <strong>positive definite</strong>.

## 2. Properties of eigenvalues

### 2.1 Triangular and diagonal matrices

<a id="box-obsTriangularEigen-3"></a>

!!! teorema "Observation 1: eigenvalues of triangular and diagonal matrices"

    Let \( \boldsymbol Q \in \R^{n\times n} \) be an upper triangular, a lower triangular or a diagonal matrix. Then the eigenvalues of \( \boldsymbol Q \) are its diagonal entries \( q_{11}, q_{22}, \dots, q_{nn} \).

??? dimostrazione "Proof"

    If \( \boldsymbol Q \) is triangular (or diagonal), then also \( \boldsymbol Q-\lambda\boldsymbol I \) is triangular (or diagonal), with diagonal entries \( q_{11}-\lambda, \dots, q_{nn}-\lambda \). Recall that the determinant of a triangular matrix is the product of its diagonal entries. Hence

    $$
    \det(\boldsymbol Q-\lambda\boldsymbol I)=\prod_{i=1}^{n}(q_{ii}-\lambda),
    $$

    which is equal to zero if and only if \( \lambda=q_{ii} \) for some \( i\in\{1,2,\dots,n\} \). <span class="qed">□</span>

<a id="box-texexpboxTriangEigen-4"></a>

!!! esempio "Example 2: eigenvalues of a triangular matrix"

    Let us consider the upper triangular matrix

    $$
    \boldsymbol U=
    \begin{pmatrix}
    2 & 1 & 3\\[0.5ex]
    0 & -1 & 4\\[0.5ex]
    0 & 0 & 5
    \end{pmatrix}.
    $$

    The characteristic equation is

    $$
    \det(\boldsymbol U-\lambda\boldsymbol I)
    =
    \det\begin{pmatrix}
    2-\lambda & 1 & 3\\[0.5ex]
    0 & -1-\lambda & 4\\[0.5ex]
    0 & 0 & 5-\lambda
    \end{pmatrix}
    =
    (2-\lambda)(-1-\lambda)(5-\lambda)=0,
    $$

    and therefore the eigenvalues are the diagonal entries:

    $$
    \lambda_1=2,
    \qquad
    \lambda_2=-1,
    \qquad
    \lambda_3=5.
    $$

### 2.2 Trace, determinant and eigenvalues

<a id="box-defTrace-5"></a>

!!! definizione "Definition 2: trace of a matrix"

    Let \( \boldsymbol Q \in \R^{n\times n} \) be a square matrix. The <strong>trace</strong> of \( \boldsymbol Q \) is the sum of its diagonal entries:

    $$
    \operatorname{tr}(\boldsymbol Q)=\sum_{i=1}^{n} q_{ii}=q_{11}+q_{22}+\dots+q_{nn}.
    $$

- The characteristic polynomial \( p(\lambda)=\det(\boldsymbol Q-\lambda\boldsymbol I) \) has degree \( n \). Over the complex numbers, a polynomial of degree \( n \) has exactly \( n \) roots \( \lambda_1,\lambda_2,\dots,\lambda_n \in \C \), provided that each root is counted as many times as its <strong>multiplicity</strong> (the number of times the factor \( (\lambda_i-\lambda) \) appears in the factorization). Hence

    $$
    p(\lambda)=(\lambda_1-\lambda)\,(\lambda_2-\lambda)\cdots(\lambda_n-\lambda).
    $$

- The real roots are the eigenvalues of Definition [Definition 1](#box-defEigen-1). The roots which are not real are called <strong>complex eigenvalues</strong> of \( \boldsymbol Q \) (their eigenvectors have complex entries). If \( \boldsymbol Q \) is symmetric, all the roots are real.

<a id="box-obsDetTrace-6"></a>

!!! teorema "Observation 2: determinant, trace and eigenvalues"

    Let \( \boldsymbol Q \in \R^{n\times n} \) and let \( \lambda_1,\lambda_2,\dots,\lambda_n \in \C \) be the roots of its characteristic polynomial, each repeated according to its multiplicity. Then

    $$
    \det(\boldsymbol Q)=\prod_{i=1}^{n}\lambda_i,
    \qquad\qquad
    \operatorname{tr}(\boldsymbol Q)=\sum_{i=1}^{n}\lambda_i.
    $$

??? dimostrazione "Proof (Idea of the proof)"

    Setting \( \lambda=0 \) in \( p(\lambda)=(\lambda_1-\lambda)\cdots(\lambda_n-\lambda) \) gives \( \det(\boldsymbol Q)=p(0)=\lambda_1\,\lambda_2\cdots\lambda_n \). For the trace, we compare the coefficients of \( \lambda^{n-1} \): in the product \( (\lambda_1-\lambda)\cdots(\lambda_n-\lambda) \) this coefficient is \( (-1)^{n-1}\sum_{i=1}^n\lambda_i \), while in \( \det(\boldsymbol Q-\lambda\boldsymbol I) \) the power \( \lambda^{n-1} \) only comes from the product of the diagonal entries \( (q_{11}-\lambda)\cdots(q_{nn}-\lambda) \), and its coefficient is \( (-1)^{n-1}\sum_{i=1}^n q_{ii} \). <span class="qed">□</span>

<a id="box-texexpboxTraceDet-7"></a>

!!! esempio "Example 3: trace and determinant"

    - For the matrix of Example [Example 1](#box-texexpbox1-2) we have \( \lambda_1=1 \) and \( \lambda_2=3 \), and indeed

        $$
        \operatorname{tr}\begin{pmatrix}
        2 & -1\\[0.5ex]
        -1 & 2
        \end{pmatrix}
        =2+2=4=1+3,
        \qquad
        \det\begin{pmatrix}
        2 & -1\\[0.5ex]
        -1 & 2
        \end{pmatrix}
        =4-1=3=1\cdot 3.
        $$

    - Multiplicities must be taken into account. The diagonal matrix

        $$
        \boldsymbol D=
        \begin{pmatrix}
        4 & 0 & 0\\[0.5ex]
        0 & -3 & 0\\[0.5ex]
        0 & 0 & 4
        \end{pmatrix}
        $$

        has characteristic polynomial \( (4-\lambda)^2(-3-\lambda) \): the eigenvalue \( 4 \) has multiplicity \( 2 \) and the eigenvalue \( -3 \) has multiplicity \( 1 \). Hence \( \lambda_1=\lambda_2=4 \), \( \lambda_3=-3 \), and

        $$
        \operatorname{tr}(\boldsymbol D)=4+4-3=5,
        \qquad
        \det(\boldsymbol D)=4\cdot 4\cdot(-3)=-48.
        $$

    - Complex roots must be taken into account. For the (non symmetric) matrix

        $$
        \boldsymbol R=
        \begin{pmatrix}
        0 & -1\\[0.5ex]
        1 & 0
        \end{pmatrix}
        \quad\text{we have}\quad
        \det(\boldsymbol R-\lambda\boldsymbol I)=\lambda^2+1,
        $$

        which has no real roots: \( \boldsymbol R \) has no (real) eigenvalues. Its complex eigenvalues are \( \lambda_1=i \) and \( \lambda_2=-i \), and indeed

        $$
        \operatorname{tr}(\boldsymbol R)=0=i+(-i),
        \qquad
        \det(\boldsymbol R)=1=i\cdot(-i).
        $$

### 2.3 Eigenvectors of distinct eigenvalues

- Recall that the vectors \( \boldsymbol v_1,\dots,\boldsymbol v_k \) are linearly independent if \( \alpha_1\boldsymbol v_1+\dots+\alpha_k\boldsymbol v_k=\boldsymbol 0 \) implies \( \alpha_1=\dots=\alpha_k=0 \).

<a id="box-obsEigenIndep-8"></a>

!!! teorema "Observation 3: eigenvectors of distinct eigenvalues"

    Let \( \lambda_1,\lambda_2,\dots,\lambda_k \) be <strong>distinct</strong> eigenvalues of \( \boldsymbol Q \in \R^{n\times n} \) and let \( \boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k \) be associated eigenvectors (\( \boldsymbol Q\boldsymbol v_i=\lambda_i\boldsymbol v_i \)). Then \( \boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k \) are linearly independent.

- In particular, if \( \boldsymbol Q \in \R^{n\times n} \) has \( n \) distinct real eigenvalues, then one eigenvector for each eigenvalue gives \( n \) linearly independent vectors of \( \R^n \).

- In Example [Example 1](#box-texexpbox1-2), the eigenvectors \( \boldsymbol v_1=(1,1)' \) and \( \boldsymbol v_2=(1,-1)' \) are linearly independent, since neither of them is a multiple of the other.

## 3. A complete example with a $3\times 3$ matrix

<a id="box-texexpboxEigen3x3-9"></a>

!!! esempio "Example 4: eigenvalues and eigenvectors of a \(3\times 3\) matrix"

    Let us consider the symmetric matrix

    $$
    \boldsymbol Q=
    \begin{pmatrix}
    2 & 1 & 0\\[0.5ex]
    1 & 3 & 1\\[0.5ex]
    0 & 1 & 2
    \end{pmatrix}.
    $$

    <strong>Characteristic polynomial.</strong> Expanding along the first row (Laplace expansion):

    \begin{align*}
    \det(\boldsymbol Q-\lambda \boldsymbol I)
    &=
    \det\begin{pmatrix}
    2-\lambda & 1 & 0\\[0.5ex]
    1 & 3-\lambda & 1\\[0.5ex]
    0 & 1 & 2-\lambda
    \end{pmatrix}\\[1ex]
    &=
    (2-\lambda)\big[(3-\lambda)(2-\lambda)-1\big]
    -1\cdot\big[1\cdot(2-\lambda)-1\cdot 0\big]\\[1ex]
    &=
    (2-\lambda)\big[(3-\lambda)(2-\lambda)-2\big]
    =
    (2-\lambda)\,(\lambda^2-5\lambda+4)\\[1ex]
    &=
    (2-\lambda)(\lambda-1)(\lambda-4).
    \end{align*}

    Therefore the eigenvalues are

    $$
    \lambda_1=1,
    \qquad
    \lambda_2=2,
    \qquad
    \lambda_3=4.
    $$

    <strong>Eigenvector for \( \lambda_1=1 \).</strong> We solve

    $$
    (\boldsymbol Q-\boldsymbol I)\boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    \begin{pmatrix}
    1 & 1 & 0\\[0.5ex]
    1 & 2 & 1\\[0.5ex]
    0 & 1 & 1
    \end{pmatrix}
    \boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    \left\{
    \begin{array}{l}
    v_1+v_2=0\\[0.5ex]
    v_1+2v_2+v_3=0\\[0.5ex]
    v_2+v_3=0
    \end{array}
    \right.
    $$

    From the first and the third equation, \( v_1=-v_2 \) and \( v_3=-v_2 \) (the second equation is then satisfied). Choosing \( v_2=-1 \):

    $$
    \boldsymbol v_1=
    \begin{pmatrix}
    1\\[0.5ex]
    -1\\[0.5ex]
    1
    \end{pmatrix}.
    $$

    <strong>Eigenvector for \( \lambda_2=2 \).</strong> We solve

    $$
    (\boldsymbol Q-2\boldsymbol I)\boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    \begin{pmatrix}
    0 & 1 & 0\\[0.5ex]
    1 & 1 & 1\\[0.5ex]
    0 & 1 & 0
    \end{pmatrix}
    \boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    \left\{
    \begin{array}{l}
    v_2=0\\[0.5ex]
    v_1+v_2+v_3=0
    \end{array}
    \right.
    $$

    hence \( v_2=0 \), \( v_3=-v_1 \) and, for example,

    $$
    \boldsymbol v_2=
    \begin{pmatrix}
    1\\[0.5ex]
    0\\[0.5ex]
    -1
    \end{pmatrix}.
    $$

    <strong>Eigenvector for \( \lambda_3=4 \).</strong> We solve

    $$
    (\boldsymbol Q-4\boldsymbol I)\boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    \begin{pmatrix}
    -2 & 1 & 0\\[0.5ex]
    1 & -1 & 1\\[0.5ex]
    0 & 1 & -2
    \end{pmatrix}
    \boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    \left\{
    \begin{array}{l}
    -2v_1+v_2=0\\[0.5ex]
    v_1-v_2+v_3=0\\[0.5ex]
    v_2-2v_3=0
    \end{array}
    \right.
    $$

    From the first and the third equation, \( v_2=2v_1 \) and \( v_3=v_2/2=v_1 \) (the second equation is then satisfied: \( v_1-2v_1+v_1=0 \)). Choosing \( v_1=1 \):

    $$
    \boldsymbol v_3=
    \begin{pmatrix}
    1\\[0.5ex]
    2\\[0.5ex]
    1
    \end{pmatrix}.
    $$

    <strong>Checks.</strong> By Observation [Observation 2](#box-obsDetTrace-6),

    $$
    \operatorname{tr}(\boldsymbol Q)=2+3+2=7=1+2+4,
    \qquad
    \det(\boldsymbol Q)=2\cdot(6-1)-1\cdot(2-0)=8=1\cdot 2\cdot 4.
    $$

    Since the three eigenvalues are distinct, by Observation [Observation 3](#box-obsEigenIndep-8) the eigenvectors \( \boldsymbol v_1,\boldsymbol v_2,\boldsymbol v_3 \) are linearly independent. Finally, \( \boldsymbol Q \) is symmetric with strictly positive eigenvalues, hence it is <strong>positive definite</strong>.

## 4. Sylvester's criterion

- Computing all the eigenvalues of a matrix can be difficult. For symmetric matrices, definiteness and semidefiniteness can also be checked by computing determinants of suitable square submatrices.

<a id="box-defPrincipalMinors-10"></a>

!!! definizione "Definition 3: principal minors"

    Let \( \boldsymbol Q \in \R^{n\times n} \).

    - A <strong>principal minor</strong> of order \( k \) of \( \boldsymbol Q \) is the determinant of the \( k\times k \) submatrix obtained from \( \boldsymbol Q \) by keeping the rows and the columns with the <strong>same</strong> indices \( i_1<i_2<\dots<i_k \) (equivalently, by deleting the same \( n-k \) rows and columns).

    - The <strong>leading principal minor</strong> of order \( k \) is the principal minor obtained by keeping the first \( k \) rows and columns:

        $$
        \Delta_k=\det
        \begin{pmatrix}
        q_{11} & \cdots & q_{1k}\\
        \vdots & \ddots & \vdots\\
        q_{k1} & \cdots & q_{kk}
        \end{pmatrix},
        \qquad k=1,2,\dots,n.
        $$

- A matrix \( \boldsymbol Q\in\R^{n\times n} \) has exactly \( n \) leading principal minors \( \Delta_1=q_{11},\ \Delta_2,\ \dots,\ \Delta_n=\det(\boldsymbol Q) \).

- For \( n=3 \), the principal minors are: of order 1, \( q_{11},q_{22},q_{33} \); of order 2, the determinants of the submatrices with indices \( \{1,2\} \), \( \{1,3\} \), \( \{2,3\} \); of order 3, \( \det(\boldsymbol Q) \).

<a id="box-theoSylvester-11"></a>

!!! teorema "Theorem 1: Sylvester's criterion"

    Let \( \boldsymbol Q \in \R^{n\times n} \) be a <strong>symmetric</strong> matrix with leading principal minors \( \Delta_1,\Delta_2,\dots,\Delta_n \). Then

    - \( \boldsymbol Q \) is <strong>positive definite</strong> if and only if

        $$
        \Delta_k>0, \qquad \forall k\in\{1,2,\dots,n\};
        $$

    - \( \boldsymbol Q \) is <strong>negative definite</strong> if and only if the leading principal minors alternate in sign starting with a negative one:

        $$
        \Delta_1<0,\quad \Delta_2>0,\quad \Delta_3<0,\quad \dots
        \qquad\text{i.e.}\qquad
        (-1)^k\,\Delta_k>0, \qquad \forall k\in\{1,2,\dots,n\}.
        $$

<a id="box-obsSylvesterSemi-12"></a>

!!! teorema "Observation 4: semidefinite matrices and principal minors"

    Let \( \boldsymbol Q \in \R^{n\times n} \) be a symmetric matrix. Then

    - \( \boldsymbol Q \) is <strong>positive semidefinite</strong> if and only if <strong>all</strong> its principal minors (not only the leading ones) are \( \ge 0 \);

    - \( \boldsymbol Q \) is <strong>negative semidefinite</strong> if and only if every principal minor of order \( k \) has the sign of \( (-1)^k \) or is zero, i.e., \( (-1)^k\,(\text{principal minor of order } k) \ge 0 \), for all \( k \).

    For semidefiniteness it is <strong>not</strong> enough to check \( \Delta_k\ge 0 \) for the leading principal minors only.

<a id="box-texexpboxSylPD-13"></a>

!!! esempio "Example 5: a positive definite matrix"

    For the matrix of Example [Example 4](#box-texexpboxEigen3x3-9)

    $$
    \boldsymbol Q=
    \begin{pmatrix}
    2 & 1 & 0\\[0.5ex]
    1 & 3 & 1\\[0.5ex]
    0 & 1 & 2
    \end{pmatrix}
    $$

    the leading principal minors are

    $$
    \Delta_1=2>0,
    \qquad
    \Delta_2=\det\begin{pmatrix}
    2 & 1\\[0.5ex]
    1 & 3
    \end{pmatrix}=6-1=5>0,
    \qquad
    \Delta_3=\det(\boldsymbol Q)=8>0.
    $$

    By Sylvester's criterion, \( \boldsymbol Q \) is positive definite, in agreement with its eigenvalues \( 1,2,4 \).

<a id="box-texexpboxSylInd-14"></a>

!!! esempio "Example 6: an indefinite matrix"

    Let us consider

    $$
    \boldsymbol Q=
    \begin{pmatrix}
    1 & 2\\[0.5ex]
    2 & 1
    \end{pmatrix}.
    $$

    We have \( \Delta_1=1>0 \) and \( \Delta_2=1-4=-3<0 \). Hence:

    - \( \boldsymbol Q \) is not positive definite (\( \Delta_2<0 \)) and not negative definite (\( \Delta_1>0 \));

    - \( \boldsymbol Q \) is not positive semidefinite (the principal minor \( \Delta_2 \) of order 2 is negative) and not negative semidefinite (\( (-1)^2\Delta_2<0 \)).

    Therefore \( \boldsymbol Q \) is <strong>indefinite</strong>. Indeed, recalling the definition via \( \boldsymbol x' \boldsymbol Q \, \boldsymbol x \):

    $$
    \boldsymbol x=\begin{pmatrix}1\\0\end{pmatrix}:\ \ \boldsymbol x' \boldsymbol Q \, \boldsymbol x=1>0,
    \qquad
    \boldsymbol x=\begin{pmatrix}1\\-1\end{pmatrix}:\ \ \boldsymbol x' \boldsymbol Q \, \boldsymbol x=1-4+1=-2<0.
    $$

    The eigenvalues are the roots of \( (1-\lambda)^2-4=(\lambda-3)(\lambda+1) \), i.e., \( 3 \) and \( -1 \): one positive and one negative.

<a id="box-texexpboxSylPSD-15"></a>

!!! esempio "Example 7: a singular positive semidefinite matrix"

    Let us consider

    $$
    \boldsymbol Q=
    \begin{pmatrix}
    1 & 1 & 0\\[0.5ex]
    1 & 2 & 1\\[0.5ex]
    0 & 1 & 1
    \end{pmatrix}.
    $$

    The leading principal minors are \( \Delta_1=1 \), \( \Delta_2=2-1=1 \) and \( \Delta_3=\det(\boldsymbol Q)=1\cdot(2-1)-1\cdot(1-0)=0 \). Since \( \Delta_3=0 \), \( \boldsymbol Q \) is <strong>not</strong> positive definite.

    To decide whether it is positive semidefinite we check <strong>all</strong> principal minors:

    - order 1: \( q_{11}=1,\ q_{22}=2,\ q_{33}=1 \);

    - order 2: \( \det\begin{pmatrix}1 & 1\\ 1 & 2\end{pmatrix}=1,\ \ \det\begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}=1,\ \ \det\begin{pmatrix}2 & 1\\ 1 & 1\end{pmatrix}=1 \);

    - order 3: \( \det(\boldsymbol Q)=0 \).

    All principal minors are \( \ge 0 \), hence \( \boldsymbol Q \) is <strong>positive semidefinite</strong>. Indeed

    $$
    \boldsymbol x' \boldsymbol Q \, \boldsymbol x = x_1^2+2x_1x_2+2x_2^2+2x_2x_3+x_3^2=(x_1+x_2)^2+(x_2+x_3)^2\ge 0,
    $$

    and the eigenvalues are \( 0,1,3 \) (\( \boldsymbol v=(1,-1,1)' \) satisfies \( \boldsymbol Q\boldsymbol v=\boldsymbol 0=0\,\boldsymbol v \)).

<a id="box-texexpboxSylCounter-16"></a>

!!! esempio "Example 8: leading principal minors are not enough for semidefiniteness"

    Let us consider

    $$
    \boldsymbol Q=
    \begin{pmatrix}
    0 & 0\\[0.5ex]
    0 & -1
    \end{pmatrix}.
    $$

    The leading principal minors are \( \Delta_1=0\ge 0 \) and \( \Delta_2=0\ge 0 \). However \( \boldsymbol Q \) is <strong>not</strong> positive semidefinite: for

    $$
    \boldsymbol x=\begin{pmatrix}0\\1\end{pmatrix}
    \qquad\text{we have}\qquad
    \boldsymbol x' \boldsymbol Q \, \boldsymbol x=-1<0.
    $$

    The principal minor \( q_{22}=-1 \) (which is not a leading one) detects this. In fact, the eigenvalues are \( 0 \) and \( -1 \), and \( \boldsymbol Q \) is negative semidefinite.
