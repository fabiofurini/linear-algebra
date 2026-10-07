<h3 align="center">Teaching material by
<a href="https://sites.google.com/view/fabiofurini/home-page">Fabio Furini</a></h3>
<p align="center">
  Associate Professor of Operations Research ·
  <a href="https://www.diag.uniroma1.it/">DIAG</a>, Sapienza University of Rome ·
  <a href="https://sites.google.com/view/fabiofurini/home-page">personal page</a>
</p>

# Linear Algebra

The preliminary linear algebra material for the Operations Research courses:
sums and products, vectors, matrices and determinants, elementary operations,
inverse matrix, LU factorization, eigenvalues, norms and linear systems.

**📖 Lecture notes online: [fabiofurini.github.io/linear-algebra](https://fabiofurini.github.io/linear-algebra/)**

**🧮 Computation lab: [the tools](https://fabiofurini.github.io/linear-algebra/lab/)** — type a
matrix and watch **every step**: Gaussian elimination, determinant (Laplace,
Sarrus, elimination), inverse matrix via Gauss–Jordan, rank, LU/PLU
factorization, linear systems (Gauss, Rouché–Capelli, Cramer), eigenvalues and
Sylvester's criterion. **Exact fraction arithmetic**, with the same notation as
the lecture notes. It runs in the browser, phones included.

**⬇️ All the lecture notes as one PDF: [lecture-notes-linear-algebra.pdf](https://fabiofurini.github.io/linear-algebra/pdf/lecture-notes-linear-algebra.pdf)**

## Exercises

One sheet per chapter, with worked solutions; the lab's *Practice* tab generates
as many new exercises as you like, and checks your answer.

## The computation engine

The lab lives in [`docs/javascripts/algebra.js`](docs/javascripts/algebra.js)
(exact fraction arithmetic) and [`docs/javascripts/laboratorio.js`](docs/javascripts/laboratorio.js).
Results **and every intermediate step** are checked against SymPy:

```bash
python3 test/genera_casi.py     # the expected results, computed with SymPy
node test/test_algebra.js       # more than 46 000 checks
```

## Licence

- **Text, figures and data** (`docs/`): [CC BY 4.0](LICENSE).
- **Code** (`docs/javascripts/`, `python/`, `test/`): [MIT](LICENSE-CODE).

To cite the material see [`CITATION.cff`](CITATION.cff).

## Versione italiana

The whole course is also available in Italian:
**[fabiofurini.github.io/algebra-lineare](https://fabiofurini.github.io/algebra-lineare/)**
([repository](https://github.com/fabiofurini/algebra-lineare)).

## Of the same series

- [Operations Research Lab](https://fabiofurini.github.io/operations-research-lab/)
- [MIP Modelling](https://fabiofurini.github.io/mip-modelling/)
- [Mathematical Analysis 1](https://fabiofurini.github.io/mathematical-analysis-1/)

---

Teaching material by **[Fabio Furini](https://sites.google.com/view/fabiofurini/home-page)** — [DIAG](https://www.diag.uniroma1.it/), Sapienza University of Rome.
