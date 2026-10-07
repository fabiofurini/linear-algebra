---
title: "Vectors"
---

# Vectors

<div class="info-capitolo" markdown>

**Exercises · Vectors and matrices** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-vectors-matrices-01-vectors.pdf)

</div>

<a id="box-exe_vecSumScalar-1"></a>

!!! esercizio "Exercise 1"

    Consider the vectors

    $$
    \boldsymbol p=\begin{pmatrix}2\\-1\\3\end{pmatrix},
    \qquad
    \boldsymbol w=\begin{pmatrix}-1\\4\\0\end{pmatrix}\in\R^{3}.
    $$

    Compute \(\boldsymbol p+\boldsymbol w\), \(3\boldsymbol p\) and \(2\boldsymbol p-\boldsymbol w\), and verify that \(\boldsymbol p+\boldsymbol w=\boldsymbol w+\boldsymbol p\).

??? soluzione "Solution"

    Sum and scalar multiplication are computed entry by entry:

    $$
    \boldsymbol p+\boldsymbol w=
    \begin{pmatrix}2+(-1)\\-1+4\\3+0\end{pmatrix}
    =
    \begin{pmatrix}1\\3\\3\end{pmatrix},
    \qquad
    3\boldsymbol p=
    \begin{pmatrix}3\cdot 2\\3\cdot(-1)\\3\cdot 3\end{pmatrix}
    =
    \begin{pmatrix}6\\-3\\9\end{pmatrix}.
    $$

    For the last vector, \(2\boldsymbol p-\boldsymbol w=2\boldsymbol p+(-1)\boldsymbol w\):

    $$
    2\boldsymbol p-\boldsymbol w=
    \begin{pmatrix}4\\-2\\6\end{pmatrix}
    -
    \begin{pmatrix}-1\\4\\0\end{pmatrix}
    =
    \begin{pmatrix}4+1\\-2-4\\6-0\end{pmatrix}
    =
    \begin{pmatrix}5\\-6\\6\end{pmatrix}.
    $$

    Finally, \( \boldsymbol w+\boldsymbol p= \begin{pmatrix}-1+2 & 4-1 & 0+3\end{pmatrix}' = \begin{pmatrix}1 & 3 & 3\end{pmatrix}' =\boldsymbol p+\boldsymbol w, \) as stated by the commutative property of the sum.

<a id="box-exe_vecTranspose-2"></a>

!!! esercizio "Exercise 2"

    Consider the vector \( \boldsymbol a=\begin{pmatrix}1 & -2 & 0 & 5\end{pmatrix}'. \)

    1. Write \(\boldsymbol a\) as a column vector and give its dimension.

    2. Write \(\boldsymbol a'\) and \((\boldsymbol a')'\).

    3. Compute \(\boldsymbol a'\boldsymbol a\).

??? soluzione "Solution"

    1. The vector is the transpose of a row vector with \(4\) entries, hence

        $$
        \boldsymbol a=\begin{pmatrix}1\\-2\\0\\5\end{pmatrix}\in\R^{4},
        $$

        and its dimension is \(n=4\).

    2. Transposing a column vector gives a row vector, and transposing twice gives back the original vector:

        $$
        \boldsymbol a'=\begin{pmatrix}1 & -2 & 0 & 5\end{pmatrix}\in\R^{1\times 4},
        \qquad
        (\boldsymbol a')'=\boldsymbol a=\begin{pmatrix}1\\-2\\0\\5\end{pmatrix}.
        $$

    3. By definition of scalar product,

        $$
        \boldsymbol a'\boldsymbol a=1\cdot 1+(-2)\cdot(-2)+0\cdot 0+5\cdot 5=1+4+0+25=30.
        $$

        As expected, \(\boldsymbol a'\boldsymbol a\ge 0\), and \(\boldsymbol a'\boldsymbol a\neq 0\) since \(\boldsymbol a\neq\boldsymbol 0\).

<a id="box-exe_vecScalarProduct-3"></a>

!!! esercizio "Exercise 3"

    Consider the vectors

    $$
    \boldsymbol p=\begin{pmatrix}1\\2\\-3\end{pmatrix},
    \qquad
    \boldsymbol w=\begin{pmatrix}4\\-1\\2\end{pmatrix},
    \qquad
    \boldsymbol u=\begin{pmatrix}0\\3\\1\end{pmatrix}\in\R^{3}.
    $$

    1. Compute \(\boldsymbol p'\boldsymbol w\) and \(\boldsymbol w'\boldsymbol p\).

    2. Compute \(\boldsymbol p'(\boldsymbol w+\boldsymbol u)\) and verify that it is equal to \(\boldsymbol p'\boldsymbol w+\boldsymbol p'\boldsymbol u\).

    3. Compute \((2\boldsymbol p)'\boldsymbol w\) and compare it with \(2\,(\boldsymbol p'\boldsymbol w)\).

??? soluzione "Solution"

    1.

        $$
        \boldsymbol p'\boldsymbol w=1\cdot 4+2\cdot(-1)+(-3)\cdot 2=4-2-6=-4,
        \qquad
        \boldsymbol w'\boldsymbol p=4\cdot 1+(-1)\cdot 2+2\cdot(-3)=-4.
        $$

        The two values coincide (symmetry of the scalar product).

    2. We have \(\boldsymbol w+\boldsymbol u=\begin{pmatrix}4 & 2 & 3\end{pmatrix}'\), hence

        $$
        \boldsymbol p'(\boldsymbol w+\boldsymbol u)=1\cdot 4+2\cdot 2+(-3)\cdot 3=4+4-9=-1.
        $$

        On the other hand, \( \boldsymbol p'\boldsymbol u=1\cdot 0+2\cdot 3+(-3)\cdot 1=3 \), so \(\boldsymbol p'\boldsymbol w+\boldsymbol p'\boldsymbol u=-4+3=-1\), as expected.

    3. We have \(2\boldsymbol p=\begin{pmatrix}2 & 4 & -6\end{pmatrix}'\), hence

        $$
        (2\boldsymbol p)'\boldsymbol w=2\cdot 4+4\cdot(-1)+(-6)\cdot 2=8-4-12=-8=2\cdot(-4)=2\,(\boldsymbol p'\boldsymbol w).
        $$

<a id="box-exe_vecOrthogonal-4"></a>

!!! esercizio "Exercise 4"

    Two vectors \(\boldsymbol p,\boldsymbol w\in\R^{n}\) are called <strong>orthogonal</strong> if their scalar product is zero, i.e., \(\boldsymbol p'\boldsymbol w=0\).

    1. Verify that \(\begin{pmatrix}1 & 2 & 2\end{pmatrix}'\) and \(\begin{pmatrix}2 & -2 & 1\end{pmatrix}'\) are orthogonal.

    2. Find the value of \(\alpha\in\R\) such that \( \boldsymbol p=\begin{pmatrix}1 & \alpha & 2\end{pmatrix}' \) and \( \boldsymbol w=\begin{pmatrix}3 & -1 & \alpha\end{pmatrix}' \) are orthogonal.

??? soluzione "Solution"

    1. \( \begin{pmatrix}1 & 2 & 2\end{pmatrix}\begin{pmatrix}2\\-2\\1\end{pmatrix}=1\cdot 2+2\cdot(-2)+2\cdot 1=2-4+2=0, \) hence the two vectors are orthogonal.

    2. We compute the scalar product as a function of \(\alpha\):

        $$
        \boldsymbol p'\boldsymbol w=1\cdot 3+\alpha\cdot(-1)+2\cdot\alpha=3+\alpha.
        $$

        Imposing \(\boldsymbol p'\boldsymbol w=0\) we get \(3+\alpha=0\), i.e., \(\alpha=-3\). Check: with \(\alpha=-3\), \(\boldsymbol p=\begin{pmatrix}1 & -3 & 2\end{pmatrix}'\), \(\boldsymbol w=\begin{pmatrix}3 & -1 & -3\end{pmatrix}'\) and \(\boldsymbol p'\boldsymbol w=3+3-6=0\).

<a id="box-exe_vecLinCombCompute-5"></a>

!!! esercizio "Exercise 5"

    Consider the vectors \( \boldsymbol v_1=\begin{pmatrix}1 & 0 & 2\end{pmatrix}' \) and \( \boldsymbol v_2=\begin{pmatrix}-1 & 3 & 1\end{pmatrix}'. \) Compute the linear combinations \(3\boldsymbol v_1-2\boldsymbol v_2\) and \(-\boldsymbol v_1+\boldsymbol v_2\).

??? soluzione "Solution"

    $$
    3\boldsymbol v_1-2\boldsymbol v_2
    =
    \begin{pmatrix}3\\0\\6\end{pmatrix}
    +
    \begin{pmatrix}2\\-6\\-2\end{pmatrix}
    =
    \begin{pmatrix}5\\-6\\4\end{pmatrix},
    \qquad
    -\boldsymbol v_1+\boldsymbol v_2
    =
    \begin{pmatrix}-1\\0\\-2\end{pmatrix}
    +
    \begin{pmatrix}-1\\3\\1\end{pmatrix}
    =
    \begin{pmatrix}-2\\3\\-1\end{pmatrix}.
    $$

<a id="box-exe_vecIsLinComb-6"></a>

!!! esercizio "Exercise 6"

    Consider the vectors \( \boldsymbol v_1=\begin{pmatrix}1 & 1 & 0\end{pmatrix}' \) and \( \boldsymbol v_2=\begin{pmatrix}0 & 1 & 2\end{pmatrix}'. \) Determine whether the following vectors are linear combinations of \(\boldsymbol v_1\) and \(\boldsymbol v_2\) and, if so, find the coefficients:

    $$
    \boldsymbol w=\begin{pmatrix}2\\5\\6\end{pmatrix},
    \qquad
    \boldsymbol u=\begin{pmatrix}1\\2\\3\end{pmatrix}.
    $$

??? soluzione "Solution"

    We look for \(\lambda_1,\lambda_2\in\R\) such that \(\lambda_1\boldsymbol v_1+\lambda_2\boldsymbol v_2\) equals the given vector. Since \( \lambda_1\boldsymbol v_1+\lambda_2\boldsymbol v_2=\begin{pmatrix}\lambda_1 & \lambda_1+\lambda_2 & 2\lambda_2\end{pmatrix}', \) we compare the entries.

    - For \(\boldsymbol w\):

        $$
        \begin{cases}
        \lambda_1=2\\
        \lambda_1+\lambda_2=5\\
        2\lambda_2=6
        \end{cases}
        $$

        The first equation gives \(\lambda_1=2\), the second one \(\lambda_2=3\), and the third one is satisfied (\(2\cdot 3=6\)). Hence \(\boldsymbol w=2\boldsymbol v_1+3\boldsymbol v_2\).

    - For \(\boldsymbol u\):

        $$
        \begin{cases}
        \lambda_1=1\\
        \lambda_1+\lambda_2=2\\
        2\lambda_2=3
        \end{cases}
        $$

        The first two equations give \(\lambda_1=1\) and \(\lambda_2=1\), but then \(2\lambda_2=2\neq 3\). The system has no solution, hence \(\boldsymbol u\) is <strong>not</strong> a linear combination of \(\boldsymbol v_1\) and \(\boldsymbol v_2\).

<a id="box-exe_vecIndepR2-7"></a>

!!! esercizio "Exercise 7"

    Determine whether the following pairs of vectors of \(\R^2\) are linearly independent:

    $$
    \text{(a)}\quad \begin{pmatrix}2\\1\end{pmatrix},\ \begin{pmatrix}4\\2\end{pmatrix};
    \qquad\qquad
    \text{(b)}\quad \begin{pmatrix}2\\1\end{pmatrix},\ \begin{pmatrix}1\\3\end{pmatrix}.
    $$

??? soluzione "Solution"

    - **(a)** The second vector is twice the first one: \(\begin{pmatrix}4 & 2\end{pmatrix}'=2\begin{pmatrix}2 & 1\end{pmatrix}'\). Hence, with \(\lambda_1=2\) and \(\lambda_2=-1\),

        $$
        2\begin{pmatrix}2\\1\end{pmatrix}-1\begin{pmatrix}4\\2\end{pmatrix}=\begin{pmatrix}0\\0\end{pmatrix},
        $$

        a linear combination equal to \(\boldsymbol 0\) with coefficients not all zero: the vectors are linearly <strong>dependent</strong>.

    - **(b)** The condition \(\lambda_1\begin{pmatrix}2 & 1\end{pmatrix}'+\lambda_2\begin{pmatrix}1 & 3\end{pmatrix}'=\boldsymbol 0\) reads

        $$
        \begin{cases}
        2\lambda_1+\lambda_2=0\\
        \lambda_1+3\lambda_2=0
        \end{cases}
        $$

        From the second equation \(\lambda_1=-3\lambda_2\); substituting in the first one, \(-6\lambda_2+\lambda_2=-5\lambda_2=0\), hence \(\lambda_2=0\) and \(\lambda_1=0\). The vectors are linearly <strong>independent</strong>.

<a id="box-exe_vecIndepR3-8"></a>

!!! esercizio "Exercise 8"

    Determine whether the following sets of vectors of \(\R^3\) are linearly independent. If they are dependent, find a linear combination equal to \(\boldsymbol 0\) with coefficients not all zero.

    1. \(\boldsymbol v_1=\begin{pmatrix}1 & 2 & 1\end{pmatrix}'\), \(\boldsymbol v_2=\begin{pmatrix}0 & 1 & 1\end{pmatrix}'\), \(\boldsymbol v_3=\begin{pmatrix}1 & 3 & 2\end{pmatrix}'\).

    2. \(\boldsymbol w_1=\begin{pmatrix}1 & 0 & 0\end{pmatrix}'\), \(\boldsymbol w_2=\begin{pmatrix}1 & 1 & 0\end{pmatrix}'\), \(\boldsymbol w_3=\begin{pmatrix}1 & 1 & 1\end{pmatrix}'\).

??? soluzione "Solution"

    1. The condition \(\lambda_1\boldsymbol v_1+\lambda_2\boldsymbol v_2+\lambda_3\boldsymbol v_3=\boldsymbol 0\) reads

        $$
        \begin{cases}
        \lambda_1+\lambda_3=0\\
        2\lambda_1+\lambda_2+3\lambda_3=0\\
        \lambda_1+\lambda_2+2\lambda_3=0
        \end{cases}
        $$

        From the first equation \(\lambda_1=-\lambda_3\). Substituting in the second one: \(-2\lambda_3+\lambda_2+3\lambda_3=0\), i.e., \(\lambda_2=-\lambda_3\). The third equation becomes \(-\lambda_3-\lambda_3+2\lambda_3=0\), which holds for every \(\lambda_3\). Choosing \(\lambda_3=1\) we get \(\lambda_1=\lambda_2=-1\):

        $$
        -\boldsymbol v_1-\boldsymbol v_2+\boldsymbol v_3
        =
        \begin{pmatrix}-1-0+1\\-2-1+3\\-1-1+2\end{pmatrix}
        =
        \begin{pmatrix}0\\0\\0\end{pmatrix}.
        $$

        The vectors are linearly <strong>dependent</strong> (indeed \(\boldsymbol v_3=\boldsymbol v_1+\boldsymbol v_2\)).

    2. The condition \(\lambda_1\boldsymbol w_1+\lambda_2\boldsymbol w_2+\lambda_3\boldsymbol w_3=\boldsymbol 0\) reads

        $$
        \begin{cases}
        \lambda_1+\lambda_2+\lambda_3=0\\
        \lambda_2+\lambda_3=0\\
        \lambda_3=0
        \end{cases}
        $$

        Solving from the last equation upwards: \(\lambda_3=0\), then \(\lambda_2=0\), then \(\lambda_1=0\). The vectors are linearly <strong>independent</strong>.

<a id="box-exe_vecDependentNoComputation-9"></a>

!!! esercizio "Exercise 9"

    Without solving any system, explain why the following sets of vectors are linearly dependent, and exhibit a linear combination equal to \(\boldsymbol 0\) with coefficients not all zero.

    1. \(\begin{pmatrix}1 & 0 & 0\end{pmatrix}'\), \(\begin{pmatrix}0 & 1 & 0\end{pmatrix}'\), \(\begin{pmatrix}0 & 0 & 1\end{pmatrix}'\), \(\begin{pmatrix}1 & 2 & 3\end{pmatrix}'\in\R^{3}\).

    2. \(\begin{pmatrix}1 & 2\end{pmatrix}'\), \(\begin{pmatrix}0 & 0\end{pmatrix}'\in\R^{2}\).

    3. \(\begin{pmatrix}1 & 2\end{pmatrix}'\), \(\begin{pmatrix}-1 & -2\end{pmatrix}'\in\R^{2}\).

??? soluzione "Solution"

    1. These are \(4>3\) vectors of \(\R^3\), hence they are linearly dependent. Explicitly, the first three vectors are the canonical basis \(\boldsymbol e_1,\boldsymbol e_2,\boldsymbol e_3\) and \(\begin{pmatrix}1 & 2 & 3\end{pmatrix}'=1\boldsymbol e_1+2\boldsymbol e_2+3\boldsymbol e_3\), so

        $$
        1\boldsymbol e_1+2\boldsymbol e_2+3\boldsymbol e_3-1\begin{pmatrix}1\\2\\3\end{pmatrix}=\boldsymbol 0.
        $$

    2. The set contains the zero vector, hence it is linearly dependent: \( 0\begin{pmatrix}1 & 2\end{pmatrix}'+1\begin{pmatrix}0 & 0\end{pmatrix}'=\boldsymbol 0. \)

    3. The second vector is a linear combination of the first one, \(\begin{pmatrix}-1 & -2\end{pmatrix}'=-1\begin{pmatrix}1 & 2\end{pmatrix}'\), hence \( 1\begin{pmatrix}1 & 2\end{pmatrix}'+1\begin{pmatrix}-1 & -2\end{pmatrix}'=\boldsymbol 0. \)

<a id="box-exe_vecBasisCoordinates-10"></a>

!!! esercizio "Exercise 10"

    Consider the vectors

    $$
    \boldsymbol b_1=\begin{pmatrix}1\\1\\0\end{pmatrix},
    \qquad
    \boldsymbol b_2=\begin{pmatrix}0\\1\\1\end{pmatrix},
    \qquad
    \boldsymbol b_3=\begin{pmatrix}1\\0\\1\end{pmatrix}\in\R^{3}.
    $$

    1. Prove that \(\boldsymbol b_1,\boldsymbol b_2,\boldsymbol b_3\) form a basis of \(\R^3\).

    2. Find the coordinates of \(\boldsymbol x=\begin{pmatrix}4 & 3 & 5\end{pmatrix}'\) with respect to this basis and with respect to the canonical basis.

??? soluzione "Solution"

    1. We must show that the vectors are linearly independent and that their span is \(\R^3\). Given \(\boldsymbol y=\begin{pmatrix}a & b & c\end{pmatrix}'\in\R^3\), the equation \(\lambda_1\boldsymbol b_1+\lambda_2\boldsymbol b_2+\lambda_3\boldsymbol b_3=\boldsymbol y\) reads

        $$
        \begin{cases}
        \lambda_1+\lambda_3=a\\
        \lambda_1+\lambda_2=b\\
        \lambda_2+\lambda_3=c
        \end{cases}
        $$

        Summing the three equations: \(2(\lambda_1+\lambda_2+\lambda_3)=a+b+c\), i.e., \(\lambda_1+\lambda_2+\lambda_3=s\) with \(s=\frac{a+b+c}{2}\). Subtracting from this each equation we get the <em>unique</em> solution

        $$
        \lambda_1=s-c,\qquad \lambda_2=s-a,\qquad \lambda_3=s-b.
        $$

        - Since a solution exists for every \(\boldsymbol y\), the span is \(\R^3\).

        - For \(\boldsymbol y=\boldsymbol 0\) (\(a=b=c=0\)) we get \(s=0\) and \(\lambda_1=\lambda_2=\lambda_3=0\): the vectors are linearly independent.

        Hence \(\boldsymbol b_1,\boldsymbol b_2,\boldsymbol b_3\) form a basis of \(\R^3\).

    2. For \(\boldsymbol x\) we have \(a=4\), \(b=3\), \(c=5\), so \(s=\frac{4+3+5}{2}=6\) and \(\lambda_1=6-5=1\), \(\lambda_2=6-4=2\), \(\lambda_3=6-3=3\). Check:

        $$
        1\begin{pmatrix}1\\1\\0\end{pmatrix}+2\begin{pmatrix}0\\1\\1\end{pmatrix}+3\begin{pmatrix}1\\0\\1\end{pmatrix}
        =
        \begin{pmatrix}1+0+3\\1+2+0\\0+2+3\end{pmatrix}
        =
        \begin{pmatrix}4\\3\\5\end{pmatrix}.
        $$

        With respect to the canonical basis the coordinates are simply the entries of \(\boldsymbol x\): \(\boldsymbol x=4\boldsymbol e_1+3\boldsymbol e_2+5\boldsymbol e_3\).
