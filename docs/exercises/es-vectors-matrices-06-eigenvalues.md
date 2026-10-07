---
title: "Eigenvalues and eigenvectors"
---

# Eigenvalues and eigenvectors

<div class="info-capitolo" markdown>

**Exercises · Vectors and matrices** · with worked solutions · [:material-file-pdf-box: PDF](../pdf/es-vectors-matrices-06-eigenvalues.pdf)

</div>

<a id="box-exe_eig_2x2_nonsym-1"></a>

!!! esercizio "Exercise 1"

    Compute the eigenvalues of the matrix

    $$
    \boldsymbol A=
    \begin{pmatrix}
    4 & 1\\[0.5ex]
    2 & 3
    \end{pmatrix}
    $$

    and one eigenvector associated with each eigenvalue.

??? soluzione "Solution"

    The characteristic equation is

    $$
    \det(\boldsymbol A-\lambda\boldsymbol I)
    =
    \det\begin{pmatrix}
    4-\lambda & 1\\[0.5ex]
    2 & 3-\lambda
    \end{pmatrix}
    =(4-\lambda)(3-\lambda)-2
    =\lambda^2-7\lambda+10
    =(\lambda-2)(\lambda-5)=0,
    $$

    hence $\lambda_1=2$ and $\lambda_2=5$.

    For $\lambda_1=2$:

    $$
    (\boldsymbol A-2\boldsymbol I)\boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    \begin{pmatrix}
    2 & 1\\[0.5ex]
    2 & 1
    \end{pmatrix}
    \boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    2v_1+v_2=0,
    \qquad
    \boldsymbol v_1=\begin{pmatrix}1\\[0.5ex]-2\end{pmatrix}.
    $$

    For $\lambda_2=5$:

    $$
    (\boldsymbol A-5\boldsymbol I)\boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    \begin{pmatrix}
    -1 & 1\\[0.5ex]
    2 & -2
    \end{pmatrix}
    \boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    v_1=v_2,
    \qquad
    \boldsymbol v_2=\begin{pmatrix}1\\[0.5ex]1\end{pmatrix}.
    $$

    Check: $\boldsymbol A\boldsymbol v_1=(4-2,\;2-6)'=(2,-4)'=2\,\boldsymbol v_1$ and $\boldsymbol A\boldsymbol v_2=(5,5)'=5\,\boldsymbol v_2$.

<a id="box-exe_eig_2x2_sym-2"></a>

!!! esercizio "Exercise 2"

    Compute the eigenvalues and one eigenvector for each eigenvalue of the symmetric matrix

    $$
    \boldsymbol Q=
    \begin{pmatrix}
    5 & 2\\[0.5ex]
    2 & 2
    \end{pmatrix}.
    $$

    Is $\boldsymbol Q$ positive definite?

??? soluzione "Solution"

    The characteristic equation is

    $$
    \det(\boldsymbol Q-\lambda\boldsymbol I)
    =(5-\lambda)(2-\lambda)-4
    =\lambda^2-7\lambda+6
    =(\lambda-1)(\lambda-6)=0,
    $$

    hence $\lambda_1=1$ and $\lambda_2=6$.

    For $\lambda_1=1$:

    $$
    \begin{pmatrix}
    4 & 2\\[0.5ex]
    2 & 1
    \end{pmatrix}
    \boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    2v_1+v_2=0,
    \qquad
    \boldsymbol v_1=\begin{pmatrix}1\\[0.5ex]-2\end{pmatrix}.
    $$

    For $\lambda_2=6$:

    $$
    \begin{pmatrix}
    -1 & 2\\[0.5ex]
    2 & -4
    \end{pmatrix}
    \boldsymbol v=\boldsymbol 0
    \Longleftrightarrow
    v_1=2v_2,
    \qquad
    \boldsymbol v_2=\begin{pmatrix}2\\[0.5ex]1\end{pmatrix}.
    $$

    Since $\boldsymbol Q$ is symmetric and both eigenvalues are strictly positive, $\boldsymbol Q$ is <strong>positive definite</strong>. (Note also that $\boldsymbol v_1'\boldsymbol v_2=2-2=0$.)

<a id="box-exe_eig_triangular-3"></a>

!!! esercizio "Exercise 3"

    Without computing any determinant, find the eigenvalues of

    $$
    \boldsymbol U=
    \begin{pmatrix}
    3 & 1 & -2\\[0.5ex]
    0 & -1 & 4\\[0.5ex]
    0 & 0 & 2
    \end{pmatrix}.
    $$

    Then find one eigenvector for each eigenvalue and check the trace and the determinant.

??? soluzione "Solution"

    $\boldsymbol U$ is upper triangular, hence its eigenvalues are its diagonal entries:

    $$
    \lambda_1=3,\qquad \lambda_2=-1,\qquad \lambda_3=2.
    $$

    - $\lambda_1=3$: $(\boldsymbol U-3\boldsymbol I)\boldsymbol v=\boldsymbol 0$ gives $v_2-2v_3=0$, $-4v_2+4v_3=0$, $-v_3=0$, hence $v_2=v_3=0$ and $\boldsymbol v_1=(1,0,0)'$.

    - $\lambda_2=-1$:

        $$
        (\boldsymbol U+\boldsymbol I)\boldsymbol v=
        \begin{pmatrix}
        4 & 1 & -2\\[0.5ex]
        0 & 0 & 4\\[0.5ex]
        0 & 0 & 3
        \end{pmatrix}
        \boldsymbol v=\boldsymbol 0
        \Longrightarrow
        v_3=0,\ \ 4v_1+v_2=0,
        \qquad
        \boldsymbol v_2=\begin{pmatrix}1\\[0.5ex]-4\\[0.5ex]0\end{pmatrix}.
        $$

    - $\lambda_3=2$:

        $$
        (\boldsymbol U-2\boldsymbol I)\boldsymbol v=
        \begin{pmatrix}
        1 & 1 & -2\\[0.5ex]
        0 & -3 & 4\\[0.5ex]
        0 & 0 & 0
        \end{pmatrix}
        \boldsymbol v=\boldsymbol 0
        \Longrightarrow
        v_2=\tfrac{4}{3}v_3,\ \ v_1=-v_2+2v_3=\tfrac{2}{3}v_3.
        $$

        Choosing $v_3=3$: $\boldsymbol v_3=(2,4,3)'$.

    Check: $\operatorname{tr}(\boldsymbol U)=3-1+2=4=\lambda_1+\lambda_2+\lambda_3$ and $\det(\boldsymbol U)=3\cdot(-1)\cdot 2=-6=\lambda_1\,\lambda_2\,\lambda_3$.

<a id="box-exe_eig_3x3_full-4"></a>

!!! esercizio "Exercise 4"

    Compute the characteristic polynomial, the eigenvalues and one eigenvector for each eigenvalue of

    $$
    \boldsymbol Q=
    \begin{pmatrix}
    -1 & 1 & 0\\[0.5ex]
    1 & 2 & 3\\[0.5ex]
    0 & 3 & -1
    \end{pmatrix}.
    $$

    Classify $\boldsymbol Q$ (definite, semidefinite or indefinite).

??? soluzione "Solution"

    Expanding along the first row:

    \begin{align*}
    \det(\boldsymbol Q-\lambda\boldsymbol I)
    &=
    \det\begin{pmatrix}
    -1-\lambda & 1 & 0\\[0.5ex]
    1 & 2-\lambda & 3\\[0.5ex]
    0 & 3 & -1-\lambda
    \end{pmatrix}\\[1ex]
    &=(-1-\lambda)\big[(2-\lambda)(-1-\lambda)-9\big]-1\cdot\big[1\cdot(-1-\lambda)-3\cdot 0\big]\\[1ex]
    &=(-1-\lambda)\big[(2-\lambda)(-1-\lambda)-9-1\big]
    =(-1-\lambda)(\lambda^2-\lambda-12)\\[1ex]
    &=(-1-\lambda)(\lambda-4)(\lambda+3).
    \end{align*}

    The eigenvalues are $\lambda_1=-1$, $\lambda_2=4$, $\lambda_3=-3$.

    - $\lambda_1=-1$: $(\boldsymbol Q+\boldsymbol I)\boldsymbol v=\boldsymbol 0$ with $\boldsymbol Q+\boldsymbol I=\begin{pmatrix}0 & 1 & 0\\ 1 & 3 & 3\\ 0 & 3 & 0\end{pmatrix}$ gives $v_2=0$ and $v_1+3v_3=0$: $\boldsymbol v_1=(3,0,-1)'$.

    - $\lambda_2=4$: $\boldsymbol Q-4\boldsymbol I=\begin{pmatrix}-5 & 1 & 0\\ 1 & -2 & 3\\ 0 & 3 & -5\end{pmatrix}$ gives $v_2=5v_1$, $v_3=\frac{3}{5}v_2=3v_1$ (and $v_1-10v_1+9v_1=0$): $\boldsymbol v_2=(1,5,3)'$.

    - $\lambda_3=-3$: $\boldsymbol Q+3\boldsymbol I=\begin{pmatrix}2 & 1 & 0\\ 1 & 5 & 3\\ 0 & 3 & 2\end{pmatrix}$ gives $v_2=-2v_1$, $v_3=-\frac{3}{2}v_2=3v_1$ (and $v_1-10v_1+9v_1=0$): $\boldsymbol v_3=(1,-2,3)'$.

    Check: $\operatorname{tr}(\boldsymbol Q)=-1+2-1=0=-1+4-3$ and $\det(\boldsymbol Q)=-1\cdot(-2-9)-1\cdot(-1-0)=12=(-1)\cdot 4\cdot(-3)$.

    $\boldsymbol Q$ is symmetric with a positive and a negative eigenvalue, hence it is <strong>indefinite</strong>.

<a id="box-exe_eig_trace_det-5"></a>

!!! esercizio "Exercise 5"

    The matrix

    $$
    \boldsymbol Q=
    \begin{pmatrix}
    4 & -1 & 1\\[0.5ex]
    -1 & 4 & -1\\[0.5ex]
    1 & -1 & 4
    \end{pmatrix}
    $$

    has the eigenvalue $\lambda=3$ with multiplicity $2$. Using the trace, find the third eigenvalue; then check the result with the determinant and find an eigenvector for it.

??? soluzione "Solution"

    The eigenvalues, counted with multiplicity, are $\lambda_1=\lambda_2=3$ and $\lambda_3$. Since the trace is the sum of the eigenvalues:

    $$
    \operatorname{tr}(\boldsymbol Q)=4+4+4=12=3+3+\lambda_3
    \quad\Longrightarrow\quad
    \lambda_3=6.
    $$

    Check with the determinant (Laplace expansion along the first row):

    $$
    \det(\boldsymbol Q)=4\,(16-1)-(-1)\,(-4+1)+1\,(1-4)=60-3-3=54=3\cdot 3\cdot 6. \quad\checkmark
    $$

    Eigenvector for $\lambda_3=6$:

    $$
    (\boldsymbol Q-6\boldsymbol I)\boldsymbol v=
    \begin{pmatrix}
    -2 & -1 & 1\\[0.5ex]
    -1 & -2 & -1\\[0.5ex]
    1 & -1 & -2
    \end{pmatrix}
    \boldsymbol v=\boldsymbol 0.
    $$

    Adding the first two equations: $-3v_1-3v_2=0$, i.e., $v_2=-v_1$; then from the first equation $v_3=2v_1+v_2=v_1$. Hence $\boldsymbol v=(1,-1,1)'$; indeed $\boldsymbol Q\boldsymbol v=(4+1+1,\,-1-4-1,\,1+1+4)'=(6,-6,6)'=6\,\boldsymbol v$.

<a id="box-exe_eig_definiteness-6"></a>

!!! esercizio "Exercise 6"

    Using the eigenvalues, classify the following symmetric matrices:

    $$
    {\rm a)}~\boldsymbol Q_1=
    \begin{pmatrix}
    -3 & 1\\[0.5ex]
    1 & -3
    \end{pmatrix},
    \qquad
    {\rm b)}~\boldsymbol Q_2=
    \begin{pmatrix}
    1 & 3\\[0.5ex]
    3 & 1
    \end{pmatrix},
    \qquad
    {\rm c)}~\boldsymbol Q_3=
    \begin{pmatrix}
    2 & 2\\[0.5ex]
    2 & 2
    \end{pmatrix}.
    $$

??? soluzione "Solution"

    - **a)** $(-3-\lambda)^2-1=\lambda^2+6\lambda+8=(\lambda+2)(\lambda+4)$: the eigenvalues are $-2$ and $-4$, both strictly negative, hence $\boldsymbol Q_1$ is <strong>negative definite</strong>.

    - **b)** $(1-\lambda)^2-9=\lambda^2-2\lambda-8=(\lambda-4)(\lambda+2)$: the eigenvalues are $4$ and $-2$, hence $\boldsymbol Q_2$ is <strong>indefinite</strong>.

    - **c)** $(2-\lambda)^2-4=\lambda^2-4\lambda=\lambda(\lambda-4)$: the eigenvalues are $0$ and $4$, both non-negative, hence $\boldsymbol Q_3$ is <strong>positive semidefinite</strong> (but not positive definite, since $0$ is an eigenvalue).

<a id="box-exe_eig_sylvester_pd-7"></a>

!!! esercizio "Exercise 7"

    Using Sylvester's criterion, prove that the matrix

    $$
    \boldsymbol Q=
    \begin{pmatrix}
    2 & -1 & 0\\[0.5ex]
    -1 & 2 & -1\\[0.5ex]
    0 & -1 & 2
    \end{pmatrix}
    $$

    is positive definite.

??? soluzione "Solution"

    $\boldsymbol Q$ is symmetric and its leading principal minors are

    $$
    \Delta_1=2>0,
    \qquad
    \Delta_2=\det\begin{pmatrix}2 & -1\\ -1 & 2\end{pmatrix}=4-1=3>0,
    $$

    $$
    \Delta_3=\det(\boldsymbol Q)=2\,(4-1)-(-1)\,(-2-0)+0=6-2=4>0.
    $$

    All the leading principal minors are strictly positive, hence $\boldsymbol Q$ is <strong>positive definite</strong>. (Here Sylvester's criterion is convenient: the eigenvalues of $\boldsymbol Q$ are $2$ and $2\pm\sqrt 2$, which are not integers.)

<a id="box-exe_eig_sylvester_nd-8"></a>

!!! esercizio "Exercise 8"

    Using Sylvester's criterion, classify

    $$
    \boldsymbol Q=
    \begin{pmatrix}
    -2 & 1 & 0\\[0.5ex]
    1 & -3 & 1\\[0.5ex]
    0 & 1 & -2
    \end{pmatrix}.
    $$

??? soluzione "Solution"

    $\boldsymbol Q$ is symmetric and its leading principal minors are

    $$
    \Delta_1=-2<0,
    \qquad
    \Delta_2=\det\begin{pmatrix}-2 & 1\\ 1 & -3\end{pmatrix}=6-1=5>0,
    $$

    $$
    \Delta_3=\det(\boldsymbol Q)=-2\,(6-1)-1\,(-2-0)=-10+2=-8<0.
    $$

    The leading principal minors alternate in sign starting with a negative one, hence $\boldsymbol Q$ is <strong>negative definite</strong>. (Indeed, its eigenvalues are $-1$, $-2$ and $-4$.)

<a id="box-exe_eig_semidefinite_minors-9"></a>

!!! esercizio "Exercise 9"

    Using the principal minors, decide whether the following symmetric matrices are positive semidefinite:

    $$
    {\rm a)}~\boldsymbol Q_a=
    \begin{pmatrix}
    2 & -2 & 0\\[0.5ex]
    -2 & 2 & 0\\[0.5ex]
    0 & 0 & 1
    \end{pmatrix},
    \qquad
    {\rm b)}~\boldsymbol Q_b=
    \begin{pmatrix}
    1 & 1 & 0\\[0.5ex]
    1 & 1 & 0\\[0.5ex]
    0 & 0 & -1
    \end{pmatrix}.
    $$

??? soluzione "Solution"

    - **a)** The leading principal minors are $\Delta_1=2$, $\Delta_2=4-4=0$, $\Delta_3=\det(\boldsymbol Q_a)=0$: $\boldsymbol Q_a$ is not positive definite. We check <strong>all</strong> principal minors:

        - order 1: $2,\ 2,\ 1$;

        - order 2: $\det\begin{pmatrix}2 & -2\\ -2 & 2\end{pmatrix}=0$, $\det\begin{pmatrix}2 & 0\\ 0 & 1\end{pmatrix}=2$, $\det\begin{pmatrix}2 & 0\\ 0 & 1\end{pmatrix}=2$;

        - order 3: $\det(\boldsymbol Q_a)=0$.

        All are $\ge 0$: $\boldsymbol Q_a$ is <strong>positive semidefinite</strong>. Indeed $\boldsymbol x'\boldsymbol Q_a\boldsymbol x=2(x_1-x_2)^2+x_3^2\ge 0$, and the eigenvalues are $0,1,4$.

    - **b)** The leading principal minors are $\Delta_1=1$, $\Delta_2=1-1=0$, $\Delta_3=\det(\boldsymbol Q_b)=-1\cdot 0=0$: they are all $\ge 0$, but this is <strong>not</strong> enough. The principal minor of order 1 given by the entry $q_{33}=-1$ is negative, hence $\boldsymbol Q_b$ is <strong>not</strong> positive semidefinite: for $\boldsymbol x=(0,0,1)'$ we have $\boldsymbol x'\boldsymbol Q_b\boldsymbol x=-1<0$. Since for $\boldsymbol x=(1,0,0)'$ we have $\boldsymbol x'\boldsymbol Q_b\boldsymbol x=1>0$, the matrix is <strong>indefinite</strong> (its eigenvalues are $2,0,-1$).

<a id="box-exe_eig_parametric-10"></a>

!!! esercizio "Exercise 10"

    Let $k\in\R$ and

    $$
    \boldsymbol Q(k)=
    \begin{pmatrix}
    2 & 1 & 0\\[0.5ex]
    1 & k & 1\\[0.5ex]
    0 & 1 & 2
    \end{pmatrix}.
    $$

    For which values of $k$ is $\boldsymbol Q(k)$ positive definite? For which values is it positive semidefinite?

??? soluzione "Solution"

    $\boldsymbol Q(k)$ is symmetric for every $k$. Its leading principal minors are

    $$
    \Delta_1=2,
    \qquad
    \Delta_2=\det\begin{pmatrix}2 & 1\\ 1 & k\end{pmatrix}=2k-1,
    \qquad
    \Delta_3=2\,(2k-1)-1\cdot(2-0)=4k-4.
    $$

    By Sylvester's criterion, $\boldsymbol Q(k)$ is positive definite if and only if

    $$
    2>0,\qquad 2k-1>0 \Leftrightarrow k>\tfrac{1}{2},\qquad 4k-4>0 \Leftrightarrow k>1,
    $$

    that is, if and only if $\boldsymbol{k>1}$.

    For positive semidefiniteness we need all principal minors $\ge 0$: order 1: $2,\ k,\ 2$; order 2: $2k-1$, $\det\begin{pmatrix}2 & 0\\ 0 & 2\end{pmatrix}=4$, $2k-1$; order 3: $4k-4$. They are all $\ge 0$ if and only if $k\ge 0$, $k\ge\frac{1}{2}$ and $k\ge 1$, i.e., if and only if $\boldsymbol{k\ge 1}$. For $k=1$ the matrix is positive semidefinite but not positive definite: its eigenvalues are $0,2,3$.
