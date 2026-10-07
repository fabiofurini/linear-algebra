---
title: "Vectors"
---

# Vectors

<div class="info-capitolo" markdown>

**Vectors and matrices · Chapter 3** · lecture notes by Fabio Furini · [:material-file-pdf-box: Chapter PDF](../pdf/vectors-matrices-01-vectors.pdf)

</div>

## 1. Definition and transpose

<a id="box-defVector-1"></a>

!!! definizione "Definition 1: Vector"

    A <strong>vector</strong> is a column of real numbers with \(n\) rows.

Given a vector \(\boldsymbol{a}\in\R^{n}\), we write:

$$
\boldsymbol{a}=
\begin{pmatrix}
[\boldsymbol a]_{1}\\
[\boldsymbol a]_{2}\\
\vdots \\
[\boldsymbol a]_{n}
\end{pmatrix}
\qquad 
\text{or, for brevity,}
\qquad
\boldsymbol{a}=
\begin{pmatrix}
a_{1}\\
a_{2}\\
\vdots \\
a_{n}
\end{pmatrix}.
$$

- The integer \(n\) is the <strong>dimension</strong> of the vector (the number of rows).

- The quantity \([\boldsymbol a]_i\) (or \(a_i\)) denotes the <strong>\(i\)-th entry</strong> (or <strong>\(i\)-th component</strong>) of \(\boldsymbol{a}\), for \(i\in\{1,2,\dots,n\}\).

<a id="box-exVector-2"></a>

!!! esempio "Example 1: Vector"

    The vector

    $$
    \boldsymbol a = 
    \begin{pmatrix}
    2 \\
    -5 \\
    3 \\
    1
    \end{pmatrix}
    \in \R^{4}
    $$

    is a column vector with \(n=4\) rows, where \(a_1 = 2\), \(a_2 = -5\), \(a_3 = 3\), and \(a_4 = 1\).

<a id="box-defTransposeVector-3"></a>

!!! definizione "Definition 2: Transpose of a vector"

    Given a column vector \(\boldsymbol a \in \R^{n}\), the <strong>transpose</strong> of \(\boldsymbol a\), denoted by \(\boldsymbol a'\), is the row vector:

    \begin{equation}
    \boldsymbol a' = 
    \begin{pmatrix}
    a_1 & a_2 & \dots & a_n
    \end{pmatrix}
    \in \R^{1 \times n}.
    \end{equation}

<a id="box-exTransposeVector-4"></a>

!!! esempio "Example 2: Transpose of a vector"

    Given the column vector

    $$
    \boldsymbol a = 
    \begin{pmatrix}
    2 \\
    -5 \\
    3 \\
    1
    \end{pmatrix}
    \in \R^{4},
    $$

    its transpose is the row vector

    $$
    \boldsymbol a' = 
    \begin{pmatrix}
    2 & -5 & 3 & 1
    \end{pmatrix}
    \in \R^{1 \times 4}.
    $$

## 2. Sum of vectors and scalar multiplication

!!! chiave ""

    Given two column vectors

    $$
    \underbrace{
    \begin{pmatrix}
    p_1 \\
    p_2 \\
    \vdots \\
    p_n
    \end{pmatrix}
    }_{\boldsymbol p} \in \R^{n}
    \quad \text{and} \quad 
    \underbrace{
    \begin{pmatrix}
    w_1 \\
    w_2 \\
    \vdots \\
    w_n
    \end{pmatrix}
    }_{\boldsymbol w} \in \R^{n}
    $$

    their <strong>sum</strong> is the vector

    \begin{equation}
    \boldsymbol p + \boldsymbol w
    =
    \begin{pmatrix}
    p_1+w_1\\
    p_2+w_2\\
    \vdots\\
    p_n+w_n
    \end{pmatrix}
    \in \R^{n}
    \label{vecSUM}
    \end{equation}

!!! chiave ""

    Given a scalar \(\lambda\in\R\) and a column vector

    $$
    \underbrace{
    \begin{pmatrix}
    p_1 \\
    p_2 \\
    \vdots \\
    p_n
    \end{pmatrix}
    }_{\boldsymbol p} \in \R^{n}
    $$

    the <strong>scalar multiplication</strong> of \(\boldsymbol p\) by \(\lambda\) is the vector

    \begin{equation}
    \lambda \boldsymbol p
    =
    \begin{pmatrix}
    \lambda p_1\\
    \lambda p_2\\
    \vdots\\
    \lambda p_n
    \end{pmatrix}
    \in \R^{n}
    \label{vecScalPROD}
    \end{equation}

<a id="box-exSumScalarVector-5"></a>

!!! esempio "Example 3: Sum of vectors and scalar multiplication"

    Consider the following two vectors and a scalar:

    $$
    \boldsymbol p=\begin{pmatrix}1\\4\end{pmatrix}\in\R^2,
    \qquad
    \boldsymbol w=\begin{pmatrix}4\\1\end{pmatrix}\in\R^2,
    \qquad
    \lambda=2.
    $$

    Then:

    $$
    \boldsymbol p+\boldsymbol w
    =
    \begin{pmatrix}
    1+4\\
    4+1
    \end{pmatrix}
    =
    \begin{pmatrix}
    5\\
    5
    \end{pmatrix},
    \qquad
    \lambda \boldsymbol p
    =
    2\begin{pmatrix}1\\4\end{pmatrix}
    =
    \begin{pmatrix}
    2\\
    8
    \end{pmatrix}.
    $$

### 2.1 Properties

!!! chiave ""

    The properties of vector addition and scalar multiplication are:

    \begin{equation}
    \boldsymbol p + \boldsymbol w = \boldsymbol w + \boldsymbol p,
    \quad \forall \boldsymbol p, \boldsymbol w \in \R^{n}
    \label{vecsum_1}
    \end{equation}

    \begin{equation}
    (\boldsymbol p + \boldsymbol w) + \boldsymbol u = \boldsymbol p + (\boldsymbol w + \boldsymbol u),
    \quad \forall \boldsymbol p, \boldsymbol w, \boldsymbol u \in \R^{n}
    \label{vecsum_2}
    \end{equation}

    \begin{equation}
    \lambda (\boldsymbol p + \boldsymbol w) = \lambda \boldsymbol p + \lambda \boldsymbol w,
    \quad \forall \lambda \in \R,\; \boldsymbol p, \boldsymbol w \in \R^{n}
    \label{vecsum_3}
    \end{equation}

    \begin{equation}
    (\lambda+\mu)\boldsymbol p = \lambda \boldsymbol p + \mu \boldsymbol p,
    \quad \forall \lambda,\mu \in \R,\; \boldsymbol p \in \R^{n}
    \label{vecsum_4}
    \end{equation}

    \begin{equation}
    \lambda(\mu \boldsymbol p) = (\lambda\mu)\boldsymbol p,
    \quad \forall \lambda,\mu \in \R,\; \boldsymbol p \in \R^{n}
    \label{vecsum_5}
    \end{equation}

    \begin{equation}
    1\cdot \boldsymbol p = \boldsymbol p,
    \quad \forall \boldsymbol p \in \R^{n}.
    \label{vecsum_6}
    \end{equation}

## 3. Scalar product

!!! chiave ""

    Given two column vectors

    $$
    \underbrace{
    \begin{pmatrix}
    p_1 \\
    p_2 \\
    \vdots \\
    p_n
    \end{pmatrix}
    }_{\boldsymbol p} \in \R^{n}
    \quad \text{and} \quad 
    \underbrace{
    \begin{pmatrix}
    w_1 \\
    w_2 \\
    \vdots \\
    w_n
    \end{pmatrix}
    }_{\boldsymbol w} \in \R^{n}
    $$

    the expression

    \begin{equation}
    \boldsymbol p' \, \boldsymbol w = \sum_{j=1}^n p_j w_j
    \end{equation}

    is called the <strong>scalar product</strong> of \( \boldsymbol p \) and \( \boldsymbol w \).

<a id="box-exScalarProduct-6"></a>

!!! esempio "Example 4: Scalar product"

    Consider the two vectors \(\begin{pmatrix} 1 \\ 4 \end{pmatrix}\in\R^2\) and \(\begin{pmatrix} 4 \\ 1 \end{pmatrix}\in\R^2\). Their scalar product is:

    $$
    \begin{pmatrix} 1 & 4 \end{pmatrix}\,\begin{pmatrix} 4 \\ 1 \end{pmatrix}
    = 1 \cdot 4 + 4 \cdot 1 = 4 + 4 = 8.
    $$

### 3.1 Properties

!!! chiave ""

    The properties of the scalar product are:

    \begin{equation}
    \boldsymbol p' \, \boldsymbol w = \boldsymbol w' \, \boldsymbol p, 
    \quad \forall \boldsymbol p, \boldsymbol w \in \R^{n}
    \label{scalar_1}
    \end{equation}

    \begin{equation}
    \boldsymbol p' \, (\boldsymbol w + \boldsymbol u) = \boldsymbol p' \, \boldsymbol w + \boldsymbol p' \, \boldsymbol u, 
    \quad \forall \boldsymbol p, \boldsymbol w, \boldsymbol u \in \R^{n}
    \label{scalar_2}
    \end{equation}

    \begin{equation}
    \lambda \, (\boldsymbol p' \, \boldsymbol w) = (\lambda \, \boldsymbol p)' \, \boldsymbol w, 
    \quad \forall \lambda \in \R,\; \boldsymbol p, \boldsymbol w \in \R^{n}
    \label{scalar_3}
    \end{equation}

    From the definition we have:

    \begin{equation}
    \boldsymbol p' \, \boldsymbol p \ge 0, 
    \quad \forall \boldsymbol p \in \R^{n} 
    \quad \text{and} \quad 
    \boldsymbol p' \, \boldsymbol p = 0 \Longleftrightarrow \boldsymbol p = \boldsymbol 0
    \label{scalar_4_bis}
    \end{equation}

## 4. Linear combinations and linear independence

<a id="box-defLinearCombination-7"></a>

!!! definizione "Definition 3: Linear combination"

    Given \(k\) vectors \(\boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k\in\R^{n}\) and \(k\) scalars \(\lambda_1,\lambda_2,\dots,\lambda_k\in\R\), the vector

    \begin{equation}
    \lambda_1\boldsymbol v_1+\lambda_2\boldsymbol v_2+\dots+\lambda_k\boldsymbol v_k=\sum_{i=1}^{k}\lambda_i\boldsymbol v_i\in\R^{n}
    \label{vecLinComb}
    \end{equation}

    is called a <strong>linear combination</strong> of \(\boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k\) with <strong>coefficients</strong> \(\lambda_1,\lambda_2,\dots,\lambda_k\).

- We denote by \(\boldsymbol 0\in\R^{n}\) the <strong>zero vector</strong>, i.e., the vector whose entries are all equal to \(0\).

- Choosing \(\lambda_1=\lambda_2=\dots=\lambda_k=0\) we always obtain \(\boldsymbol 0\): this is called the <strong>trivial</strong> linear combination.

<a id="box-exLinearCombination-8"></a>

!!! esempio "Example 5: Linear combination"

    Consider the vectors

    $$
    \boldsymbol v_1=\begin{pmatrix}1\\2\\0\end{pmatrix},
    \qquad
    \boldsymbol v_2=\begin{pmatrix}0\\1\\-1\end{pmatrix}\in\R^{3},
    $$

    and the coefficients \(\lambda_1=2\) and \(\lambda_2=-3\). The corresponding linear combination is

    $$
    2\boldsymbol v_1-3\boldsymbol v_2
    =
    \begin{pmatrix}2\\4\\0\end{pmatrix}
    +
    \begin{pmatrix}0\\-3\\3\end{pmatrix}
    =
    \begin{pmatrix}2\\1\\3\end{pmatrix}.
    $$

<a id="box-defLinIndependence-9"></a>

!!! definizione "Definition 4: Linearly independent vectors"

    The vectors \(\boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k\in\R^{n}\) are <strong>linearly independent</strong> if the only linear combination equal to the zero vector is the trivial one, i.e.,

    \begin{equation}
    \lambda_1\boldsymbol v_1+\lambda_2\boldsymbol v_2+\dots+\lambda_k\boldsymbol v_k=\boldsymbol 0
    \quad\Longrightarrow\quad
    \lambda_1=\lambda_2=\dots=\lambda_k=0.
    \label{vecLinIndep}
    \end{equation}

    Otherwise, i.e., if there exist coefficients \(\lambda_1,\lambda_2,\dots,\lambda_k\), <strong>not all zero</strong>, such that \(\lambda_1\boldsymbol v_1+\lambda_2\boldsymbol v_2+\dots+\lambda_k\boldsymbol v_k=\boldsymbol 0\), the vectors are <strong>linearly dependent</strong>.

<a id="box-exLinIndepR2-10"></a>

!!! esempio "Example 6: Linearly independent vectors in \(\R^2\)"

    Consider the vectors \( \boldsymbol v_1=\begin{pmatrix}1\\2\end{pmatrix} \) and \( \boldsymbol v_2=\begin{pmatrix}3\\1\end{pmatrix}\in\R^{2}. \) The condition \(\lambda_1\boldsymbol v_1+\lambda_2\boldsymbol v_2=\boldsymbol 0\) reads

    $$
    \begin{cases}
    \lambda_1+3\lambda_2=0\\
    2\lambda_1+\lambda_2=0
    \end{cases}
    $$

    From the first equation \(\lambda_1=-3\lambda_2\); substituting in the second one we get \(-6\lambda_2+\lambda_2=-5\lambda_2=0\), hence \(\lambda_2=0\) and \(\lambda_1=0\). Therefore, \(\boldsymbol v_1\) and \(\boldsymbol v_2\) are linearly independent.

<a id="box-exLinDepR2-11"></a>

!!! esempio "Example 7: Linearly dependent vectors in \(\R^2\)"

    Consider the vectors

    $$
    \boldsymbol v_1=\begin{pmatrix}1\\2\end{pmatrix},
    \qquad
    \boldsymbol v_2=\begin{pmatrix}3\\1\end{pmatrix},
    \qquad
    \boldsymbol v_3=\begin{pmatrix}4\\3\end{pmatrix}\in\R^{2}.
    $$

    With the coefficients \(\lambda_1=1\), \(\lambda_2=1\), \(\lambda_3=-1\) (not all zero) we get

    $$
    \boldsymbol v_1+\boldsymbol v_2-\boldsymbol v_3
    =
    \begin{pmatrix}1+3-4\\2+1-3\end{pmatrix}
    =
    \begin{pmatrix}0\\0\end{pmatrix}.
    $$

    Therefore, \(\boldsymbol v_1\), \(\boldsymbol v_2\) and \(\boldsymbol v_3\) are linearly dependent.

<a id="box-exLinIndepR3-12"></a>

!!! esempio "Example 8: Linearly independent vectors in \(\R^3\)"

    Consider the vectors

    $$
    \boldsymbol v_1=\begin{pmatrix}1\\0\\1\end{pmatrix},
    \qquad
    \boldsymbol v_2=\begin{pmatrix}0\\1\\1\end{pmatrix},
    \qquad
    \boldsymbol v_3=\begin{pmatrix}1\\1\\0\end{pmatrix}\in\R^{3}.
    $$

    The condition \(\lambda_1\boldsymbol v_1+\lambda_2\boldsymbol v_2+\lambda_3\boldsymbol v_3=\boldsymbol 0\) reads

    $$
    \begin{cases}
    \lambda_1+\lambda_3=0\\
    \lambda_2+\lambda_3=0\\
    \lambda_1+\lambda_2=0
    \end{cases}
    $$

    From the first two equations \(\lambda_1=-\lambda_3\) and \(\lambda_2=-\lambda_3\); substituting in the third one we get \(-2\lambda_3=0\). Hence \(\lambda_1=\lambda_2=\lambda_3=0\), and the three vectors are linearly independent.

<a id="box-exLinDepR3-13"></a>

!!! esempio "Example 9: Linearly dependent vectors in \(\R^3\)"

    Consider the vectors

    $$
    \boldsymbol v_1=\begin{pmatrix}1\\2\\3\end{pmatrix},
    \qquad
    \boldsymbol v_2=\begin{pmatrix}4\\5\\6\end{pmatrix},
    \qquad
    \boldsymbol v_3=\begin{pmatrix}7\\8\\9\end{pmatrix}\in\R^{3}.
    $$

    With the coefficients \(\lambda_1=1\), \(\lambda_2=-2\), \(\lambda_3=1\) we get

    $$
    \boldsymbol v_1-2\boldsymbol v_2+\boldsymbol v_3
    =
    \begin{pmatrix}1-8+7\\2-10+8\\3-12+9\end{pmatrix}
    =
    \begin{pmatrix}0\\0\\0\end{pmatrix}.
    $$

    Therefore, the three vectors are linearly dependent. Equivalently, \(\boldsymbol v_3=2\boldsymbol v_2-\boldsymbol v_1\) is a linear combination of \(\boldsymbol v_1\) and \(\boldsymbol v_2\).

<a id="box-obsZeroDependent-14"></a>

!!! teorema "Observation 1: Sets containing the zero vector"

    Any set of vectors \(\boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k\in\R^{n}\) containing the zero vector \(\boldsymbol 0\) is linearly dependent.

??? dimostrazione "Proof"

    Assume, without loss of generality, that \(\boldsymbol v_1=\boldsymbol 0\). Choosing \(\lambda_1=1\) and \(\lambda_2=\dots=\lambda_k=0\) we get \(1\cdot\boldsymbol 0+0\cdot\boldsymbol v_2+\dots+0\cdot\boldsymbol v_k=\boldsymbol 0\), which is a linear combination equal to \(\boldsymbol 0\) with coefficients not all zero. <span class="qed">□</span>

<a id="box-obsDependentCombination-15"></a>

!!! teorema "Observation 2: Characterization of linear dependence"

    Let \(k\ge 2\). The vectors \(\boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k\in\R^{n}\) are linearly dependent if and only if at least one of them is a linear combination of the others.

??? dimostrazione "Proof"

    (\(\Rightarrow\)) If the vectors are linearly dependent, there exist coefficients, not all zero, such that \(\sum_{i=1}^{k}\lambda_i\boldsymbol v_i=\boldsymbol 0\). Let \(j\) be an index with \(\lambda_j\neq 0\). Then

    $$
    \boldsymbol v_j=\sum_{i\neq j}\left(-\frac{\lambda_i}{\lambda_j}\right)\boldsymbol v_i,
    $$

    i.e., \(\boldsymbol v_j\) is a linear combination of the others.

    (\(\Leftarrow\)) If \(\boldsymbol v_j=\sum_{i\neq j}\mu_i\boldsymbol v_i\) for some scalars \(\mu_i\), then \(\sum_{i\neq j}\mu_i\boldsymbol v_i+(-1)\,\boldsymbol v_j=\boldsymbol 0\), which is a linear combination equal to \(\boldsymbol 0\) whose coefficient of \(\boldsymbol v_j\) is \(-1\neq 0\). <span class="qed">□</span>

<a id="box-obsMoreThanN-16"></a>

!!! teorema "Observation 3: More than \(n\) vectors of \(\R^n\)"

    Any \(k>n\) vectors of \(\R^{n}\) are linearly dependent.

- We state this result without proof. For instance, any three vectors of \(\R^2\) are linearly dependent (see Example [Example 7](#box-exLinDepR2-11)).

### 4.1 Span and basis

<a id="box-defSpan-17"></a>

!!! definizione "Definition 5: Span"

    The <strong>span</strong> of the vectors \(\boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k\in\R^{n}\) is the set of all their linear combinations:

    \begin{equation}
    \mathrm{span}(\boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k)
    =
    \Bigl\{\lambda_1\boldsymbol v_1+\lambda_2\boldsymbol v_2+\dots+\lambda_k\boldsymbol v_k \;:\; \lambda_1,\lambda_2,\dots,\lambda_k\in\R\Bigr\}.
    \label{vecSpan}
    \end{equation}

<a id="box-defBasis-18"></a>

!!! definizione "Definition 6: Basis of \(\R^n\)"

    The vectors \(\boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k\in\R^{n}\) form a <strong>basis</strong> of \(\R^{n}\) if

    - they are linearly independent, and

    - \(\mathrm{span}(\boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k)=\R^{n}\), i.e., every vector of \(\R^{n}\) is a linear combination of them.

<a id="box-obsUniqueCoordinates-19"></a>

!!! teorema "Observation 4: Coordinates with respect to a basis"

    If \(\boldsymbol v_1,\boldsymbol v_2,\dots,\boldsymbol v_k\) form a basis of \(\R^{n}\), then every vector \(\boldsymbol x\in\R^{n}\) can be written in a <strong>unique</strong> way as \(\boldsymbol x=\lambda_1\boldsymbol v_1+\lambda_2\boldsymbol v_2+\dots+\lambda_k\boldsymbol v_k\). The coefficients \(\lambda_1,\lambda_2,\dots,\lambda_k\) are called the <strong>coordinates</strong> of \(\boldsymbol x\) with respect to the basis.

??? dimostrazione "Proof"

    Such coefficients exist because the span of the basis is \(\R^{n}\). If \(\boldsymbol x=\sum_{i=1}^{k}\lambda_i\boldsymbol v_i=\sum_{i=1}^{k}\mu_i\boldsymbol v_i\), subtracting the two expressions we get \(\sum_{i=1}^{k}(\lambda_i-\mu_i)\boldsymbol v_i=\boldsymbol 0\). Since the vectors are linearly independent, \(\lambda_i-\mu_i=0\) for all \(i\in\{1,2,\dots,k\}\). <span class="qed">□</span>

<a id="box-defCanonicalBasis-20"></a>

!!! definizione "Definition 7: Canonical basis"

    For \(i\in\{1,2,\dots,n\}\), we denote by \(\boldsymbol e_i\in\R^{n}\) the vector whose \(i\)-th entry is equal to \(1\) and all other entries are equal to \(0\):

    $$
    \boldsymbol e_1=\begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix},
    \qquad
    \boldsymbol e_2=\begin{pmatrix}0\\1\\\vdots\\0\end{pmatrix},
    \qquad
    \dots,
    \qquad
    \boldsymbol e_n=\begin{pmatrix}0\\0\\\vdots\\1\end{pmatrix}.
    $$

    The vectors \(\boldsymbol e_1,\boldsymbol e_2,\dots,\boldsymbol e_n\) form the <strong>canonical basis</strong> of \(\R^{n}\).

<a id="box-obsCanonicalBasis-21"></a>

!!! teorema "Observation 5: The canonical basis is a basis"

    The vectors \(\boldsymbol e_1,\boldsymbol e_2,\dots,\boldsymbol e_n\) form a basis of \(\R^{n}\), and every \(\boldsymbol x\in\R^{n}\) satisfies

    \begin{equation}
    \boldsymbol x=x_1\boldsymbol e_1+x_2\boldsymbol e_2+\dots+x_n\boldsymbol e_n.
    \label{vecCanonical}
    \end{equation}

??? dimostrazione "Proof"

    For any scalars \(\lambda_1,\dots,\lambda_n\) we have \(\lambda_1\boldsymbol e_1+\dots+\lambda_n\boldsymbol e_n=\begin{pmatrix}\lambda_1 & \lambda_2 & \dots & \lambda_n\end{pmatrix}'\). This vector is equal to \(\boldsymbol 0\) only if \(\lambda_1=\dots=\lambda_n=0\), hence the vectors are linearly independent; choosing \(\lambda_i=x_i\) we obtain \(\eqref{vecCanonical}\), hence their span is \(\R^{n}\). <span class="qed">□</span>

- It can be shown that every basis of \(\R^{n}\) consists of exactly \(n\) vectors.

<a id="box-exCanonicalBasis-22"></a>

!!! esempio "Example 10: Canonical basis of \(\R^3\)"

    The vector \(\boldsymbol x=\begin{pmatrix}2 & -5 & 3\end{pmatrix}'\in\R^{3}\) can be written as

    $$
    \boldsymbol x
    =
    2\begin{pmatrix}1\\0\\0\end{pmatrix}
    -5\begin{pmatrix}0\\1\\0\end{pmatrix}
    +3\begin{pmatrix}0\\0\\1\end{pmatrix}
    =
    2\boldsymbol e_1-5\boldsymbol e_2+3\boldsymbol e_3.
    $$

<a id="box-exCoordinatesR2-23"></a>

!!! esempio "Example 11: Coordinates with respect to a basis of \(\R^2\)"

    Consider the vectors \( \boldsymbol v_1=\begin{pmatrix}1\\1\end{pmatrix} \) and \( \boldsymbol v_2=\begin{pmatrix}1\\-1\end{pmatrix}. \)

    - They are linearly independent: \(\lambda_1+\lambda_2=0\) and \(\lambda_1-\lambda_2=0\) give \(\lambda_1=\lambda_2=0\).

    - Their span is \(\R^{2}\): for every \(\begin{pmatrix}a & b\end{pmatrix}'\in\R^{2}\),

        $$
        \begin{pmatrix}a\\b\end{pmatrix}
        =
        \frac{a+b}{2}\begin{pmatrix}1\\1\end{pmatrix}
        +
        \frac{a-b}{2}\begin{pmatrix}1\\-1\end{pmatrix}.
        $$

    Hence \(\boldsymbol v_1,\boldsymbol v_2\) form a basis of \(\R^2\). For instance, the coordinates of \(\boldsymbol x=\begin{pmatrix}3 & 1\end{pmatrix}'\) are \(\lambda_1=\frac{3+1}{2}=2\) and \(\lambda_2=\frac{3-1}{2}=1\):

    $$
    \begin{pmatrix}3\\1\end{pmatrix}
    =
    2\begin{pmatrix}1\\1\end{pmatrix}
    +
    1\begin{pmatrix}1\\-1\end{pmatrix}.
    $$
