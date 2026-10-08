---
title: "Absolute value"
---

# Absolute value

<div class="info-capitolo" markdown>

**Further topics · Chapter A.1** · lecture notes by Fabio Furini · [:material-file-pdf-box: Chapter PDF](../pdf/extras-01-absolute-value.pdf)

</div>

## 1. Definition

<a id="box-def_absolute-value-1"></a>

!!! definizione "Definition 1: absolute value"

    The <strong>absolute value</strong> $|a|$ of a real number  $a$ is the following non-negative real number:

    \begin{equation}
    |a|  = 
    \begin{cases}
    a & {\rm if~~} a \ge 0\\
    -a & {\rm if~~} a < 0
    \end{cases}
    \label{ass_1}
    \end{equation}

!!! chiave ""

    From the definition of absolute value it immediately follows that:

    \begin{equation}
    |a| < \varepsilon \Longleftrightarrow -\varepsilon < a < \varepsilon, \qquad \forall \varepsilon > 0, a \in \mathbb{R}
    \label{ass_2}
    \end{equation}

    and, similarly, for non-strict inequalities:

    \begin{equation}
    |a| \le \varepsilon \Longleftrightarrow -\varepsilon \le a \le \varepsilon, \qquad \forall \varepsilon \ge 0, a \in \mathbb{R}
    \label{ass_2b}
    \end{equation}

## 2. Triangle inequality

<a id="box-obs_triangle-inequality-2"></a>

!!! teorema "Observation 1: triangle inequality"

    \begin{equation}
    |b + c| \le |b| + |c|,  \qquad \forall  b,c \in \mathbb{R}
    \label{ass_3}
    \end{equation}

??? dimostrazione "Proof"

    We write the two relations:

    $$
    -|b| \le b \le |b|, \quad \quad -|c| \le c \le |c|
    $$

    and add member to member:

    $$
    -(|b| + |c|) \le b + c \le |b| + |c|
    $$

    So for \(\eqref{ass_2b}\), with $\varepsilon=|b|+|c|\ge 0$ and  $a=b+c$, it follows \(\eqref{ass_3}\). <span class="qed">□</span>

- The triangle inequality is also used in the following form:

    \begin{equation}
    |d - e| \le |d-f| + |e-f| \qquad \forall d,e,f \in \mathbb{R}
    \label{ass_4}
    \end{equation}

    To obtain it, it  suffices to set in \(\eqref{ass_3}\):

    $$
    b = d - f, \quad c =   f-e
    $$

    and we get:

    $$
    |d - f  +f-e|=|d -e| \le |d - f| + |f-e| = |d - f| + |e-f|
    $$

    since:

    $$
    |f - e| = |e-f| \qquad \forall e,f \in \mathbb{R}
    $$

- Finally, another form of the triangle inequality is:

    \begin{equation}
    |g| \le |g-h| + |h| {\rm ~~~~~that~is~~~~~} |g| - |h| \le |g-h| \qquad \forall g,h \in \mathbb{R}
     \label{ass_AA}
    \end{equation}

    To obtain it,  it suffices to set in \(\eqref{ass_3}\):

    $$
    b =  g - h, \quad  c = h
    $$

<a id="box-obs_reverse-triangle-inequality-3"></a>

!!! teorema "Observation 2: reverse triangle inequality"

    \begin{equation}
    \big|\, |g| - |h| \,\big| \le |g-h|, \quad \forall g,h \in \mathbb{R}
    \label{ass_5}
    \end{equation}

??? dimostrazione "Proof"

    From \(\eqref{ass_AA}\), we have:

    $$
    |g| - |h| \le |g-h| \qquad \forall g,h \in \mathbb{R}
    $$

    Similarly exchanging $g$ for $h$ in \(\eqref{ass_AA}\) we get:

    $$
    |h| - |g| \le |h-g| = |g-h|  {\rm ~~~~that~is~~~~} |g| - |h| \ge -|g-h|
    $$

    then we have

    $$
    -(|g-h|) \le  |g| - |h| \le |g-h| \qquad \forall g,h \in \mathbb{R}
    $$

    Accordingly from \(\eqref{ass_2b}\), with $\varepsilon = |g-h| \ge 0$ and $a= |g| - |h|$, we get the reverse triangle inequality. <span class="qed">□</span>

- The triangle inequality \(\eqref{ass_3}\) can easily be generalized to the case of $k$ addends:

    \begin{equation}
    \left| \sum_{i=1}^k  b_i \right| \le  \sum_{i=1}^k  |b_i|.
    \label{ass_6}
    \end{equation}

- The following immediate properties also hold:

    \begin{equation}
    |b\:c| = |b| \: |c|, \qquad \left| \frac{b}{c}\right|= \frac{|b|}{|c|}, \qquad |-b|=|b| \qquad \forall  b,c \in \mathbb{R} ~ (c \neq 0 {\rm ~in~the~quotient}).
    \label{ass_7}
    \end{equation}

## Exercises and lab

- :material-pencil-box-multiple: **Exercises** · [the exercise sheet of this chapter: 8 exercises with worked solutions](../exercises/es-extras-01-absolute-value.md)

