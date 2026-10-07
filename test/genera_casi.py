"""Genera i casi di prova del motore di calcolo (docs/javascripts/algebra.js).

Per centinaia di matrici (quadrate e rettangolari, singolari, con zeri sul
pivot, con frazioni) calcola con SymPy, in aritmetica esatta, i risultati
attesi: determinante, rango, forma ridotta (RREF), inversa, polinomio
caratteristico, autovalori razionali con molteplicità, dimensioni degli
autospazi, sistemi lineari. Il test (test/test_algebra.js) li confronta
con il motore: se un solo risultato non coincide, la pubblicazione si ferma.

Uso: python3 test/genera_casi.py   → test/casi.json
"""
import json
import random
from pathlib import Path

import sympy as sp

random.seed(20261007)
QUI = Path(__file__).parent
lam = sp.Symbol("lambda")


def s(x):
    """razionale SymPy → stringa "p/q" letta da Frac.parse"""
    x = sp.Rational(x)
    return str(x.p) if x.q == 1 else f"{x.p}/{x.q}"


def mat_s(A):
    return [[s(A[i, j]) for j in range(A.cols)] for i in range(A.rows)]


def entrata(rng, frazioni=False, zeri=0.2):
    if rng.random() < zeri:
        return sp.Integer(0)
    if frazioni and rng.random() < 0.3:
        return sp.Rational(rng.randint(-7, 7), rng.randint(1, 5))
    return sp.Integer(rng.randint(-6, 6))


def matrice(m, n, rng, frazioni=False, zeri=0.2):
    return sp.Matrix(m, n, lambda i, j: entrata(rng, frazioni, zeri))


def singolare(n, rng):
    A = matrice(n, n, rng)
    # una riga combinazione lineare delle altre
    i, j, k = rng.sample(range(n), 3) if n >= 3 else (1, 0, 0)
    if n >= 3:
        A[i, :] = rng.randint(-2, 2) * A[j, :] + rng.randint(-2, 2) * A[k, :]
    else:
        A[1, :] = rng.randint(-3, 3) * A[0, :]
    return A


def con_zero_sul_pivot(n, rng):
    A = matrice(n, n, rng)
    A[0, 0] = 0
    return A


def caso_matrice(A):
    c = {"A": mat_s(A), "m": A.rows, "n": A.cols, "rank": int(A.rank())}
    R, piv = A.rref()
    c["rref"] = mat_s(R)
    if A.rows == A.cols:
        n = A.rows
        d = A.det()
        c["det"] = s(d)
        c["inverse"] = mat_s(A.inv()) if d != 0 else None
        # det(A - λI)
        p = sp.Poly((A - lam * sp.eye(n)).det(), lam)
        coeffs = [s(x) for x in reversed(p.all_coeffs())]
        c["charpoly"] = coeffs
        radici = sp.roots(p, filter="Q")
        c["rational_eigs"] = sorted(([s(r), int(mlt)] for r, mlt in radici.items()), key=lambda t: sp.Rational(t[0]))
        c["geom_mult"] = {s(r): int(n - (A - r * sp.eye(n)).rank()) for r in radici}
        if A.is_symmetric():
            ev = [complex(sp.N(e)) for e in A.eigenvals(multiple=True)]
            re = [e.real for e in ev]
            tol = 1e-9
            if all(x > tol for x in re):
                k = "pd"
            elif all(x < -tol for x in re):
                k = "nd"
            elif all(x > -tol for x in re):
                k = "psd"
            elif all(x < tol for x in re):
                k = "nsd"
            else:
                k = "indef"
            c["definiteness"] = k
    return c


def caso_sistema(A, b):
    n = A.cols
    aug = A.row_join(b)
    rA, rAb = A.rank(), aug.rank()
    kind = "none" if rAb > rA else ("unique" if rA == n else "infinite")
    c = {"A": mat_s(A), "b": [s(x) for x in b], "kind": kind, "rankA": int(rA), "rankAb": int(rAb)}
    if kind == "unique":
        c["x"] = [s(x) for x in A.solve(b)]
    return c


def main():
    rng = random.Random(7)
    matrici, sistemi = [], []
    for n in (1, 2, 3, 4):
        for _ in range(30 if n > 1 else 6):
            matrici.append(caso_matrice(matrice(n, n, rng)))
        for _ in range(12):
            matrici.append(caso_matrice(matrice(n, n, rng, frazioni=True)))
        if n >= 2:
            for _ in range(15):
                matrici.append(caso_matrice(singolare(n, rng)))
            for _ in range(10):
                matrici.append(caso_matrice(con_zero_sul_pivot(n, rng)))
    # matrici con autovalori interi (A = S D S^-1) e simmetriche
    for n in (2, 3, 4):
        for _ in range(12):
            while True:
                S = matrice(n, n, rng, zeri=0.3)
                if S.det() in (1, -1):
                    break
            D = sp.diag(*[rng.randint(-3, 4) for _ in range(n)])
            matrici.append(caso_matrice(S * D * S.inv()))
        for _ in range(15):
            B = matrice(n, n, rng)
            matrici.append(caso_matrice(B + B.T))
        for _ in range(8):
            B = matrice(n, n, rng)
            matrici.append(caso_matrice(B.T * B))  # semidefinita positiva
    # rettangolari
    for m, n in ((2, 3), (3, 2), (3, 4), (4, 3), (2, 4), (4, 5), (3, 5)):
        for _ in range(10):
            matrici.append(caso_matrice(matrice(m, n, rng)))
        for _ in range(5):
            r = rng.randint(1, min(m, n))
            matrici.append(caso_matrice(matrice(m, r, rng, zeri=0) * matrice(r, n, rng, zeri=0)))
    # sistemi
    for m, n in ((2, 2), (3, 3), (4, 4), (2, 3), (3, 2), (3, 4), (4, 3)):
        for _ in range(15):
            A = matrice(m, n, rng)
            if rng.random() < 0.5:
                b = A * sp.Matrix(n, 1, lambda i, j: rng.randint(-3, 3))  # compatibile
            else:
                b = sp.Matrix(m, 1, lambda i, j: rng.randint(-5, 5))
            sistemi.append(caso_sistema(A, b))
        for _ in range(6):
            A = singolare(m, rng) if m == n and m > 1 else matrice(m, n, rng)
            b = sp.Matrix(m, 1, lambda i, j: rng.randint(-5, 5))
            sistemi.append(caso_sistema(A, b))
    parse = [["3", "3"], ["-3/4", "-3/4"], ["6/8", "3/4"], ["0.25", "1/4"], ["1,5", "3/2"], ["-.5", "-1/2"],
             ["2e3", "2000"], ["  7 ", "7"], ["4/-6", "-2/3"], ["−2", "-2"], ["1.2e-1", "3/25"],
             ["abc", None], ["1/0", None], ["", None], ["1/2/3", None], ["--1", None], [".", None]]
    out = {"matrici": matrici, "sistemi": sistemi, "parse": parse}
    (QUI / "casi.json").write_text(json.dumps(out, separators=(",", ":")))
    print(f"{len(matrici)} matrici, {len(sistemi)} sistemi, {len(parse)} casi di lettura")


if __name__ == "__main__":
    main()
