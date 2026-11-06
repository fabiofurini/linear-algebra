/* ==========================================================================
   Autovalutazione «Algebra lineare» (modulo linear-algebra): domande generate.
   Specifica: 02_MODULI_TEMATICI/QUIZ_SPEC.md. Notazione delle dispense:
   vettori e matrici in grassetto, trasposta con l'apice ', rank, det, tr.
   Ogni generatore: genera(rng, lingua) -> {testo, opzioni[4], corretta,
   spiegazione, _v}. Il campo _v (dati dell'istanza e valori delle opzioni in
   forma esatta) serve solo al gemello di verifica in Python (verifica/):
   il motore lo ignora.
   ========================================================================== */
window.QUIZ_GEN = window.QUIZ_GEN || {};
(function () {
  "use strict";
  var MOD = "linear-algebra";
  var EN = "https://fabiofurini.github.io/linear-algebra/";
  var IT = "https://fabiofurini.github.io/algebra-lineare/";
  var LISTA = (QUIZ_GEN[MOD] = QUIZ_GEN[MOD] || []);

  // ------------------------------------------------------------ pagine del sito
  var PAG = {
    sums: ["sums-products/01-sums/", "somme/01-sommatorie/"],
    products: ["sums-products/02-products/", "somme/02-produttorie/"],
    vectors: ["vectors-matrices/01-vectors/", "vettori-matrici/01-vettori/"],
    matrices: ["vectors-matrices/02-matrices/", "vettori-matrici/02-matrici/"],
    elem: ["vectors-matrices/03-elementary-operations/", "vettori-matrici/03-operazioni-elementari/"],
    inverse: ["vectors-matrices/04-inverse-matrix/", "vettori-matrici/04-matrice-inversa/"],
    lu: ["vectors-matrices/05-lu-factorization/", "vettori-matrici/05-fattorizzazione-lu/"],
    eigen: ["vectors-matrices/06-eigenvalues/", "vettori-matrici/06-autovalori/"],
    norms: ["norms/01-norms/", "norme/01-norme/"],
    systems: ["systems/01-linear-systems/", "sistemi/01-sistemi-lineari/"],
    mod: ["extras/02-modular-arithmetic/", "approfondimenti/02-aritmetica-modulare/"]
  };
  /** link a una sezione: ancora EN e (se diversa) IT */
  function LK(p, aEn, aIt) {
    return { en: EN + PAG[p][0] + "#" + aEn, it: IT + PAG[p][1] + "#" + (aIt || aEn) };
  }

  // ------------------------------------------------------------ aritmetica esatta
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
  /** frazione normalizzata [num, den], den > 0 */
  function F(n, d) {
    if (d === undefined) d = 1;
    if (d === 0) throw new Error("divisione per zero");
    if (d < 0) { n = -n; d = -d; }
    var g = gcd(n, d) || 1;
    var x = [n / g + 0, d / g];
    x.fr = true;   // marca: è una frazione, non una coppia di numeri
    return x;
  }
  function q(x) { return typeof x === "number" ? F(x, 1) : x; }
  function fadd(x, y) { x = q(x); y = q(y); return F(x[0] * y[1] + y[0] * x[1], x[1] * y[1]); }
  function fsub(x, y) { x = q(x); y = q(y); return F(x[0] * y[1] - y[0] * x[1], x[1] * y[1]); }
  function fmul(x, y) { x = q(x); y = q(y); return F(x[0] * y[0], x[1] * y[1]); }
  function fdiv(x, y) { x = q(x); y = q(y); return F(x[0] * y[1], x[1] * y[0]); }
  function fz(x) { return q(x)[0] === 0; }
  /** valore esatto per _v: intero se il denominatore è 1 */
  function ex(x) { x = q(x); return x[1] === 1 ? x[0] : x[0] + "/" + x[1]; }

  // ------------------------------------------------------------ casuale
  function ri(r, a, b) { return a + Math.floor(r() * (b - a + 1)); }
  function rnz(r, a, b) { var x; do { x = ri(r, a, b); } while (x === 0); return x; }
  function pick(r, a) { return a[Math.floor(r() * a.length)]; }
  function shuffle(r, a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  /** ripete la costruzione finché non dà un'istanza valida */
  function retry(f) {
    for (var t = 0; t < 2000; t++) { var x = f(); if (x) return x; }
    throw new Error("nessuna istanza valida");
  }
  function distinct(a) {
    var s = {};
    for (var i = 0; i < a.length; i++) { s[a[i]] = 1; }
    return Object.keys(s).length === a.length;
  }

  // ------------------------------------------------------------ LaTeX
  function tex(x) {
    x = q(x);
    if (x[1] === 1) return String(x[0]);
    return (x[0] < 0 ? "-" : "") + "\\frac{" + Math.abs(x[0]) + "}{" + x[1] + "}";
  }
  function pm(M) {
    return "\\begin{pmatrix} " + M.map(function (r) { return r.map(tex).join(" & "); }).join(" \\\\ ") + " \\end{pmatrix}";
  }
  /** vettore colonna scritto come riga trasposta, come nelle dispense: (1,\, 2)' */
  function vt(v) { return "(" + v.map(tex).join(",\\, ") + ")'"; }
  function M$(s) { return "$" + s + "$"; }
  /** combinazione lineare c1 s1 + c2 s2 + ... con segni puliti (coefficienti interi) */
  function lc(terms) {
    var out = "";
    terms.forEach(function (t, i) {
      var c = t[0], s = t[1];
      if (c === 0) return;
      var a = Math.abs(c), segno = c < 0 ? "-" : (out ? "+" : "");
      out += segno + (a === 1 && s ? "" : String(a)) + s;
    });
    return out || "0";
  }
  /** equazione a_1 x_1 + ... = b */
  function eq(row, b) { return lc(row.map(function (c, j) { return [c, "x_" + (j + 1)]; })) + " = " + tex(b); }
  function sistema(A, b) {
    return "\\begin{cases} " + A.map(function (r, i) { return eq(r, b[i]); }).join(" \\\\ ") + " \\end{cases}";
  }
  function L2(l, it, en) { return l === "it" ? it : en; }

  // ------------------------------------------------------------ matrici
  function mmul(A, B) {
    return A.map(function (r) {
      return B[0].map(function (_, k) {
        var s = F(0); for (var j = 0; j < B.length; j++) s = fadd(s, fmul(r[j], B[j][k])); return s;
      });
    });
  }
  function T(A) { return A[0].map(function (_, j) { return A.map(function (r) { return r[j]; }); }); }
  function det2(A) { return fsub(fmul(A[0][0], A[1][1]), fmul(A[0][1], A[1][0])); }
  function det3(A) {
    var a = A[0][0], b = A[0][1], c = A[0][2], d = A[1][0], e = A[1][1], f = A[1][2], g = A[2][0], h = A[2][1], i = A[2][2];
    var pos = fadd(fadd(fmul(fmul(a, e), i), fmul(fmul(b, f), g)), fmul(fmul(c, d), h));
    var neg = fadd(fadd(fmul(fmul(c, e), g), fmul(fmul(b, d), i)), fmul(fmul(a, f), h));
    return fsub(pos, neg);
  }
  function minore(A, i, j) {
    return A.filter(function (_, r) { return r !== i; }).map(function (r) { return r.filter(function (_, c) { return c !== j; }); });
  }
  function rank(M) {
    var A = M.map(function (r) { return r.map(q); }), m = A.length, n = A[0].length, rk = 0;
    for (var c = 0; c < n && rk < m; c++) {
      var p = -1;
      for (var i = rk; i < m; i++) if (!fz(A[i][c])) { p = i; break; }
      if (p < 0) continue;
      var t = A[rk]; A[rk] = A[p]; A[p] = t;
      for (var i2 = rk + 1; i2 < m; i2++) {
        var l = fdiv(A[i2][c], A[rk][c]);
        for (var k = c; k < n; k++) A[i2][k] = fsub(A[i2][k], fmul(l, A[rk][k]));
      }
      rk++;
    }
    return rk;
  }
  /** inversa con Gauss–Jordan (null se singolare) */
  function inv(M) {
    var n = M.length, A = M.map(function (r, i) {
      return r.map(q).concat(M.map(function (_, j) { return F(i === j ? 1 : 0); }));
    });
    for (var c = 0; c < n; c++) {
      var p = -1;
      for (var i = c; i < n; i++) if (!fz(A[i][c])) { p = i; break; }
      if (p < 0) return null;
      var t = A[c]; A[c] = A[p]; A[p] = t;
      var piv = A[c][c];
      A[c] = A[c].map(function (x) { return fdiv(x, piv); });
      for (var i2 = 0; i2 < n; i2++) {
        if (i2 === c) continue;
        var l = A[i2][c];
        A[i2] = A[i2].map(function (x, k) { return fsub(x, fmul(l, A[c][k])); });
      }
    }
    return A.map(function (r) { return r.slice(n); });
  }
  /** sostituzione all'indietro su U triangolare superiore */
  function back(U, c) {
    var n = U.length, x = new Array(n);
    for (var i = n - 1; i >= 0; i--) {
      var s = q(c[i]);
      for (var j = i + 1; j < n; j++) s = fsub(s, fmul(U[i][j], x[j]));
      x[i] = fdiv(s, U[i][i]);
    }
    return x;
  }
  function triU(r, diag, lo, hi) {
    return [[pick(r, diag), ri(r, lo, hi), ri(r, lo, hi)], [0, pick(r, diag), ri(r, lo, hi)], [0, 0, pick(r, diag)]];
  }
  function triL(r, lo, hi) { return [[1, 0, 0], [ri(r, lo, hi), 1, 0], [ri(r, lo, hi), ri(r, lo, hi), 1]]; }
  function intM(M) { return M.map(function (rw) { return rw.map(function (x) { x = q(x); return x[0] / x[1]; }); }); }
  /** vettore intero primitivo con il primo elemento non nullo positivo */
  function prim(v) {
    var g = v.reduce(function (s, x) { return gcd(s, x); }, 0) || 1;
    var w = v.map(function (x) { return x / g + 0; });
    var k = 0; while (k < w.length && w[k] === 0) k++;
    if (k < w.length && w[k] < 0) w = w.map(function (x) { return -x + 0; });
    return w;
  }

  function add(def) { LISTA.push(def); }
  function out(testo, vals, fmt, spieg, dati, corretta) {
    var opz = vals.map(function (v) { return fmt(v); });
    if (!distinct(opz)) return null;
    return { testo: testo, opzioni: opz, corretta: corretta || 0, spiegazione: spieg, _v: { dati: exDeep(dati), valori: vals.map(exDeep) } };
  }
  /** forma esatta per la verifica: frazioni come "n/d" (o intero), il resto invariato */
  function exDeep(v) {
    if (v === null || typeof v !== "object") return v;
    if (Array.isArray(v)) return v.fr ? ex(v) : v.map(exDeep);
    var o = {}; for (var k in v) o[k] = exDeep(v[k]); return o;
  }

  // ======================================================================
  // FACILI
  // ======================================================================

  // 1. combinazione lineare di due vettori
  add({
    id: "la-g-vec-comb", livello: "facile", capitolo: "vectors",
    link: LK("vectors", "2-sum-of-vectors-and-scalar-multiplication", "2-somma-di-vettori-e-prodotto-per-uno-scalare"),
    genera: function (r, l) {
      return retry(function () {
        var p = [ri(r, -4, 5), ri(r, -4, 5), ri(r, -4, 5)], w = [ri(r, -4, 5), ri(r, -4, 5), ri(r, -4, 5)];
        var la = pick(r, [2, 3, -2, -3]), mu = pick(r, [1, -1, 2, -2, 3]);
        var c = p.map(function (x, i) { return la * x + mu * w[i]; });
        var d1 = p.map(function (x, i) { return la * x - mu * w[i]; });
        var d2 = p.map(function (x, i) { return la * (x + mu * w[i]); });
        var d3 = p.map(function (x, i) { return mu * x + la * w[i]; });
        var e = lc([[la, "\\boldsymbol p"], [mu, "\\boldsymbol w"]]);
        return out(
          L2(l, "Dati $\\boldsymbol p = " + vt(p) + "$ e $\\boldsymbol w = " + vt(w) + "$ in $\\R^3$, quanto vale $" + e + "$?",
            "Given $\\boldsymbol p = " + vt(p) + "$ and $\\boldsymbol w = " + vt(w) + "$ in $\\R^3$, what is $" + e + "$?"),
          [c, d1, d2, d3], function (v) { return M$(vt(v)); },
          L2(l, "Si moltiplica ogni componente per il proprio scalare e si sommano le componenti corrispondenti: $" + e + " = " + vt(c) + "$. Attenzione al segno del secondo coefficiente: lo scalare moltiplica solo il proprio vettore.",
            "Multiply each entry by its scalar and add the corresponding entries: $" + e + " = " + vt(c) + "$. Watch the sign of the second coefficient: each scalar multiplies only its own vector."),
          { p: p, w: w, lambda: la, mu: mu });
      });
    }
  });

  // 2. prodotto scalare
  add({
    id: "la-g-scalar-product", livello: "facile", capitolo: "vectors",
    link: LK("vectors", "3-scalar-product", "3-prodotto-scalare"),
    genera: function (r, l) {
      return retry(function () {
        var n = pick(r, [3, 4]), p = [], w = [];
        for (var i = 0; i < n; i++) { p.push(ri(r, -5, 5)); w.push(ri(r, -5, 5)); }
        var c = 0, d1 = 0, d2 = 0, d3 = 0;
        for (var j = 0; j < n; j++) { c += p[j] * w[j]; d1 += Math.abs(p[j] * w[j]); d2 += p[j] * w[n - 1 - j]; d3 += p[j] + w[j]; }
        return out(
          L2(l, "Calcolare il prodotto scalare $\\boldsymbol p'\\,\\boldsymbol w$ di $\\boldsymbol p = " + vt(p) + "$ e $\\boldsymbol w = " + vt(w) + "$.",
            "Compute the scalar product $\\boldsymbol p'\\,\\boldsymbol w$ of $\\boldsymbol p = " + vt(p) + "$ and $\\boldsymbol w = " + vt(w) + "$."),
          [c, d1, d2, d3], function (v) { return M$(tex(v)); },
          L2(l, "$\\boldsymbol p'\\,\\boldsymbol w = \\sum_{j=1}^{" + n + "} p_j w_j = " + c + "$: si moltiplicano le componenti con lo stesso indice (con il loro segno) e si sommano i prodotti.",
            "$\\boldsymbol p'\\,\\boldsymbol w = \\sum_{j=1}^{" + n + "} p_j w_j = " + c + "$: multiply the entries with the same index (with their signs) and add the products."),
          { p: p, w: w });
      });
    }
  });

  // 3. norme l1, l2, l_inf
  add({
    id: "la-g-norms", livello: "facile", capitolo: "norms",
    link: LK("norms", "6-comparison-of-the-ell_1-ell_2-and-ell_infty-norms", "6-confronto-tra-le-norme-ell_1-ell_2-e-ell_infty"),
    genera: function (r, l) {
      var tipo = pick(r, ["1", "2", "inf"]);
      return retry(function () {
        var p = [rnz(r, -12, 12), rnz(r, -12, 12), rnz(r, -12, 12)];
        var s = p[0] * p[0] + p[1] * p[1] + p[2] * p[2], n2 = Math.round(Math.sqrt(s));
        if (n2 * n2 !== s) return null;
        if (!(p.some(function (x) { return x < 0; }) && p.some(function (x) { return x > 0; }))) return null;
        var n1 = Math.abs(p[0]) + Math.abs(p[1]) + Math.abs(p[2]);
        var ninf = Math.max(Math.abs(p[0]), Math.abs(p[1]), Math.abs(p[2]));
        var vals, nome;
        if (tipo === "1") { vals = [n1, n2, ninf, Math.abs(p[0] + p[1] + p[2])]; nome = "\\|\\boldsymbol p\\|_1"; }
        else if (tipo === "2") { vals = [n2, n1, ninf, s]; nome = "\\|\\boldsymbol p\\|_2"; }
        else { vals = [ninf, n1, n2, Math.min(Math.abs(p[0]), Math.abs(p[1]), Math.abs(p[2]))]; nome = "\\|\\boldsymbol p\\|_\\infty"; }
        return out(
          L2(l, "Sia $\\boldsymbol p = " + vt(p) + "$. Quanto vale $" + nome + "$?", "Let $\\boldsymbol p = " + vt(p) + "$. What is $" + nome + "$?"),
          vals, function (v) { return M$(tex(v)); },
          L2(l, "$\\|\\boldsymbol p\\|_1 = " + n1 + "$ (somma dei valori assoluti), $\\|\\boldsymbol p\\|_2 = \\sqrt{" + s + "} = " + n2 + "$, $\\|\\boldsymbol p\\|_\\infty = " + ninf + "$ (massimo valore assoluto). Vale $\\|\\boldsymbol p\\|_\\infty \\le \\|\\boldsymbol p\\|_2 \\le \\|\\boldsymbol p\\|_1$.",
            "$\\|\\boldsymbol p\\|_1 = " + n1 + "$ (sum of the absolute values), $\\|\\boldsymbol p\\|_2 = \\sqrt{" + s + "} = " + n2 + "$, $\\|\\boldsymbol p\\|_\\infty = " + ninf + "$ (largest absolute value). Indeed $\\|\\boldsymbol p\\|_\\infty \\le \\|\\boldsymbol p\\|_2 \\le \\|\\boldsymbol p\\|_1$."),
          { p: p, tipo: tipo });
      });
    }
  });

  // 4. prodotto di matrici 2x2
  add({
    id: "la-g-mat-product", livello: "facile", capitolo: "matrices",
    link: LK("matrices", "3-matrix-product", "3-prodotto-di-matrici"),
    genera: function (r, l) {
      return retry(function () {
        var A = [[ri(r, -3, 4), ri(r, -3, 4)], [ri(r, -3, 4), ri(r, -3, 4)]];
        var B = [[ri(r, -3, 4), ri(r, -3, 4)], [ri(r, -3, 4), ri(r, -3, 4)]];
        var c = intM(mmul(A, B)), d1 = intM(mmul(B, A)), d3 = intM(mmul(A, T(B)));
        var d2 = A.map(function (rw, i) { return rw.map(function (x, j) { return x * B[i][j]; }); });
        return out(
          L2(l, "Siano $\\boldsymbol A = " + pm(A) + "$ e $\\boldsymbol B = " + pm(B) + "$. Quanto vale $\\boldsymbol A\\boldsymbol B$?",
            "Let $\\boldsymbol A = " + pm(A) + "$ and $\\boldsymbol B = " + pm(B) + "$. What is $\\boldsymbol A\\boldsymbol B$?"),
          [c, d1, d2, d3], function (v) { return M$(pm(v)); },
          L2(l, "L'elemento $(i,k)$ di $\\boldsymbol A\\boldsymbol B$ è il prodotto scalare della riga $i$ di $\\boldsymbol A$ per la colonna $k$ di $\\boldsymbol B$: $\\boldsymbol A\\boldsymbol B = " + pm(c) + "$. Il prodotto non è commutativo: $\\boldsymbol B\\boldsymbol A$ è in generale diverso.",
            "Entry $(i,k)$ of $\\boldsymbol A\\boldsymbol B$ is the scalar product of row $i$ of $\\boldsymbol A$ and column $k$ of $\\boldsymbol B$: $\\boldsymbol A\\boldsymbol B = " + pm(c) + "$. The product is not commutative: $\\boldsymbol B\\boldsymbol A$ is in general different."),
          { A: A, B: B });
      });
    }
  });

  // 5. determinante 2x2
  add({
    id: "la-g-det2", livello: "facile", capitolo: "matrices",
    link: LK("matrices", "5-determinant", "5-determinante"),
    genera: function (r, l) {
      return retry(function () {
        var a = ri(r, -6, 7), b = ri(r, -6, 7), c = ri(r, -6, 7), d = ri(r, -6, 7);
        var v = [a * d - b * c, a * d + b * c, b * c - a * d, a * b - c * d];
        return out(
          L2(l, "Quanto vale $\\det(\\boldsymbol A)$ per $\\boldsymbol A = " + pm([[a, b], [c, d]]) + "$?",
            "What is $\\det(\\boldsymbol A)$ for $\\boldsymbol A = " + pm([[a, b], [c, d]]) + "$?"),
          v, function (x) { return M$(tex(x)); },
          L2(l, "Per una matrice $2\\times 2$, $\\det(\\boldsymbol A) = ad - bc = " + tex(a) + "\\cdot" + (d < 0 ? "(" + d + ")" : d) + " - " + (b < 0 ? "(" + b + ")" : b) + "\\cdot" + (c < 0 ? "(" + c + ")" : c) + " = " + v[0] + "$.",
            "For a $2\\times 2$ matrix, $\\det(\\boldsymbol A) = ad - bc = " + tex(a) + "\\cdot" + (d < 0 ? "(" + d + ")" : d) + " - " + (b < 0 ? "(" + b + ")" : b) + "\\cdot" + (c < 0 ? "(" + c + ")" : c) + " = " + v[0] + "$."),
          { A: [[a, b], [c, d]] });
      });
    }
  });

  // 6. determinante 3x3 (Sarrus)
  add({
    id: "la-g-det3", livello: "facile", capitolo: "matrices",
    link: LK("matrices", "5-determinant", "5-determinante"),
    genera: function (r, l) {
      return retry(function () {
        var A = [[ri(r, -3, 4), ri(r, -3, 4), ri(r, -3, 4)], [ri(r, -3, 4), ri(r, -3, 4), ri(r, -3, 4)], [ri(r, -3, 4), ri(r, -3, 4), ri(r, -3, 4)]];
        var a = A[0][0], b = A[0][1], c = A[0][2], d = A[1][0], e = A[1][1], f = A[1][2], g = A[2][0], h = A[2][1], i = A[2][2];
        var D = a * e * i + b * f * g + c * d * h - c * e * g - b * d * i - a * f * h;
        var v = [D, a * e * i + b * f * g + c * d * h + c * e * g + b * d * i + a * f * h,
          a * (e * i - f * h) + b * (d * i - f * g) + c * (d * h - e * g), a * e * i - c * e * g];
        return out(
          L2(l, "Quanto vale $\\det(\\boldsymbol A)$ per $\\boldsymbol A = " + pm(A) + "$?", "What is $\\det(\\boldsymbol A)$ for $\\boldsymbol A = " + pm(A) + "$?"),
          v, function (x) { return M$(tex(x)); },
          L2(l, "Con la regola di Sarrus: $aei + bfg + cdh - ceg - bdi - afh = " + D + "$ (oppure con lo sviluppo di Laplace, con i segni $(-1)^{i+j}$ dei cofattori).",
            "By the Sarrus rule: $aei + bfg + cdh - ceg - bdi - afh = " + D + "$ (or by Laplace expansion, with the signs $(-1)^{i+j}$ of the cofactors)."),
          { A: A });
      });
    }
  });

  // 7. inversa 2x2
  add({
    id: "la-g-inv2", livello: "facile", capitolo: "inverse-matrix",
    link: LK("inverse", "box-obsInverse2x2-11"),
    genera: function (r, l) {
      return retry(function () {
        var a = ri(r, -4, 5), b = ri(r, -4, 5), c = ri(r, -4, 5), d = ri(r, -4, 5), D = a * d - b * c;
        if (D === 0 || Math.abs(D) > 5 || b === c || a === d) return null;
        var M = function (m) { return m.map(function (rw) { return rw.map(function (x) { return F(x, D); }); }); };
        var v = [M([[d, -b], [-c, a]]), M([[a, -b], [-c, d]]), M([[d, b], [c, a]]), M([[d, -c], [-b, a]])];
        return out(
          L2(l, "Sia $\\boldsymbol A = " + pm([[a, b], [c, d]]) + "$. Quanto vale $\\boldsymbol A^{-1}$?", "Let $\\boldsymbol A = " + pm([[a, b], [c, d]]) + "$. What is $\\boldsymbol A^{-1}$?"),
          v, function (m) { return M$(pm(m)); },
          L2(l, "$\\det(\\boldsymbol A) = " + D + "\\neq 0$; si scambiano i due elementi della diagonale, si cambia segno ai due fuori diagonale e si divide per il determinante: $\\boldsymbol A^{-1} = " + (D === 1 ? "" : "\\frac{1}{" + D + "}") + pm([[d, -b], [-c, a]]) + "$.",
            "$\\det(\\boldsymbol A) = " + D + "\\neq 0$; swap the two diagonal entries, change the sign of the two off-diagonal entries and divide by the determinant: $\\boldsymbol A^{-1} = " + (D === 1 ? "" : "\\frac{1}{" + D + "}") + pm([[d, -b], [-c, a]]) + "$."),
          { A: [[a, b], [c, d]] });
      });
    }
  });

  // 8. rango di una matrice 3x4
  add({
    id: "la-g-rank", livello: "facile", capitolo: "matrices",
    link: LK("matrices", "6-rank", "6-rango"),
    genera: function (r, l) {
      return retry(function () {
        var k = pick(r, [1, 2, 3]);
        var row = function () { return [ri(r, -3, 3), ri(r, -3, 3), ri(r, -3, 3), ri(r, -3, 3)]; };
        var b1 = row(), b2 = row(), rows;
        if (k === 1) { var k1 = pick(r, [-2, -1, 2, 3]), k2 = pick(r, [-2, 2, 3, -3]); rows = [b1, b1.map(function (x) { return k1 * x; }), b1.map(function (x) { return k2 * x; })]; }
        else if (k === 2) { var al = rnz(r, -2, 2), be = rnz(r, -2, 2); rows = [b1, b2, b1.map(function (x, j) { return al * x + be * b2[j]; })]; }
        else rows = [b1, b2, row()];
        rows = shuffle(r, rows);
        if (rows.some(function (rw) { return rw.every(function (x) { return x === 0; }); })) return null;
        if (rows.some(function (rw) { return rw.some(function (x) { return Math.abs(x) > 9; }); })) return null;
        if (rank(rows) !== k) return null;
        var vals = [1, 2, 3, 4];
        var o = out(
          L2(l, "Qual è il rango di $\\boldsymbol A = " + pm(rows) + "$?", "What is the rank of $\\boldsymbol A = " + pm(rows) + "$?"),
          vals, function (x) { return M$("\\mathrm{rank}(\\boldsymbol A) = " + x); },
          L2(l, "Con l'eliminazione di Gauss si arriva a una forma a scala con " + k + (k > 1 ? " righe non nulle" : " riga non nulla") + ", quindi $\\mathrm{rank}(\\boldsymbol A) = " + k + "$. In ogni caso $\\mathrm{rank}(\\boldsymbol A) \\le \\min\\{3,4\\} = 3$.",
            "Gaussian elimination gives a row echelon form with " + k + " nonzero row" + (k > 1 ? "s" : "") + ", hence $\\mathrm{rank}(\\boldsymbol A) = " + k + "$. In any case $\\mathrm{rank}(\\boldsymbol A) \\le \\min\\{3,4\\} = 3$."),
          { A: rows }, k - 1);
        return o;
      });
    }
  });

  // 9. valore di k che rende dipendenti tre vettori
  add({
    id: "la-g-lindep-k", livello: "facile", capitolo: "vectors",
    link: LK("vectors", "4-linear-combinations-and-linear-independence", "4-combinazioni-lineari-e-indipendenza-lineare"),
    genera: function (r, l) {
      return retry(function () {
        var v1 = [ri(r, -3, 3), ri(r, -3, 3), ri(r, -3, 3)], v2 = [ri(r, -3, 3), ri(r, -3, 3), ri(r, -3, 3)];
        if (v1[0] * v2[1] - v1[1] * v2[0] === 0) return null;
        var a = rnz(r, -2, 2), b = rnz(r, -2, 2);
        var v3 = v1.map(function (x, i) { return a * x + b * v2[i]; });
        var k = v3[2];
        var vals = [k, -k, a * v1[2] - b * v2[2], b * v1[2] + a * v2[2]];
        return out(
          L2(l, "Per quale valore di $k$ i vettori $\\boldsymbol v_1 = " + vt(v1) + "$, $\\boldsymbol v_2 = " + vt(v2) + "$, $\\boldsymbol v_3 = (" + v3[0] + ",\\, " + v3[1] + ",\\, k)'$ sono linearmente dipendenti?",
            "For which value of $k$ are the vectors $\\boldsymbol v_1 = " + vt(v1) + "$, $\\boldsymbol v_2 = " + vt(v2) + "$, $\\boldsymbol v_3 = (" + v3[0] + ",\\, " + v3[1] + ",\\, k)'$ linearly dependent?"),
          vals, function (x) { return M$("k = " + tex(x)); },
          L2(l, "Dalle prime due componenti $\\boldsymbol v_3 = " + lc([[a, "\\boldsymbol v_1"], [b, "\\boldsymbol v_2"]]) + "$ è l'unica combinazione possibile; la terza componente dà $k = " + k + "$. Per gli altri valori il determinante della matrice con colonne $\\boldsymbol v_1, \\boldsymbol v_2, \\boldsymbol v_3$ è non nullo.",
            "From the first two entries, $\\boldsymbol v_3 = " + lc([[a, "\\boldsymbol v_1"], [b, "\\boldsymbol v_2"]]) + "$ is the only possible combination; the third entry gives $k = " + k + "$. For the other values the determinant of the matrix with columns $\\boldsymbol v_1, \\boldsymbol v_2, \\boldsymbol v_3$ is nonzero."),
          { v1: v1, v2: v2, v3xy: [v3[0], v3[1]] });
      });
    }
  });

  // 10. coordinate rispetto a una base di R^2
  add({
    id: "la-g-coord2", livello: "facile", capitolo: "vectors",
    link: LK("vectors", "41-span-and-basis", "41-span-e-base"),
    genera: function (r, l) {
      return retry(function () {
        var v1 = [ri(r, -3, 3), ri(r, -3, 3)], v2 = [ri(r, -3, 3), ri(r, -3, 3)];
        if (v1[0] * v2[1] - v1[1] * v2[0] === 0) return null;
        var l1 = ri(r, -3, 3), l2 = rnz(r, -3, 3);
        if (l1 === l2) return null;
        var x = [l1 * v1[0] + l2 * v2[0], l1 * v1[1] + l2 * v2[1]];
        var vals = [[l1, l2], [l2, l1], x, [l1, -l2]];
        return out(
          L2(l, "I vettori $\\boldsymbol v_1 = " + vt(v1) + "$ e $\\boldsymbol v_2 = " + vt(v2) + "$ formano una base di $\\R^2$. Quali sono le coordinate $(\\lambda_1, \\lambda_2)$ di $\\boldsymbol x = " + vt(x) + "$, cioè $\\boldsymbol x = \\lambda_1 \\boldsymbol v_1 + \\lambda_2 \\boldsymbol v_2$?",
            "The vectors $\\boldsymbol v_1 = " + vt(v1) + "$ and $\\boldsymbol v_2 = " + vt(v2) + "$ form a basis of $\\R^2$. What are the coordinates $(\\lambda_1, \\lambda_2)$ of $\\boldsymbol x = " + vt(x) + "$, i.e. $\\boldsymbol x = \\lambda_1 \\boldsymbol v_1 + \\lambda_2 \\boldsymbol v_2$?"),
          vals, function (v) { return M$("(" + tex(v[0]) + ",\\, " + tex(v[1]) + ")"); },
          L2(l, "Si risolve il sistema $\\lambda_1 \\boldsymbol v_1 + \\lambda_2 \\boldsymbol v_2 = \\boldsymbol x$ (i vettori della base sono le colonne): $\\lambda_1 = " + l1 + "$, $\\lambda_2 = " + l2 + "$. Le coordinate sono uniche perché $\\boldsymbol v_1, \\boldsymbol v_2$ sono linearmente indipendenti.",
            "Solve $\\lambda_1 \\boldsymbol v_1 + \\lambda_2 \\boldsymbol v_2 = \\boldsymbol x$ (the basis vectors are the columns): $\\lambda_1 = " + l1 + "$, $\\lambda_2 = " + l2 + "$. The coordinates are unique because $\\boldsymbol v_1, \\boldsymbol v_2$ are linearly independent."),
          { v1: v1, v2: v2, x: x });
      });
    }
  });

  /** matrice 2x2 non simmetrica con autovalori interi distinti l1 < l2 */
  function mat2eig(r, simm) {
    return retry(function () {
      var l1 = ri(r, -4, 6), l2 = ri(r, -4, 6);
      if (l1 >= l2) return null;
      var s = l1 + l2, p = l1 * l2, a = ri(r, -3, 6), d = s - a, bc = a * d - p;
      if (bc === 0) return null;
      var divs = [];
      for (var b = -6; b <= 6; b++) if (b !== 0 && bc % b === 0 && Math.abs(bc / b) <= 6) divs.push(b);
      if (!divs.length) return null;
      var bb = pick(r, divs), cc = bc / bb;
      if (simm === false && bb === cc) return null;
      return { Q: [[a, bb], [cc, d]], l1: l1, l2: l2 };
    });
  }

  // 11. autovalori 2x2
  add({
    id: "la-g-eig2", livello: "facile", capitolo: "eigenvalues",
    link: LK("eigen", "1-eigenvalues", "1-autovalori"),
    genera: function (r, l) {
      return retry(function () {
        var m = mat2eig(r), Q = m.Q, a = Q[0][0], d = Q[1][1];
        var srt = function (x, y) { return x <= y ? [x, y] : [y, x]; };
        var vals = [[m.l1, m.l2], srt(a, d), srt(-m.l1, -m.l2), srt(m.l1, -m.l2)];
        var e = L2(l, " e ", " and ");
        var tr = a + d, dt = a * d - Q[0][1] * Q[1][0];
        return out(
          L2(l, "Quali sono gli autovalori di $\\boldsymbol Q = " + pm(Q) + "$?", "What are the eigenvalues of $\\boldsymbol Q = " + pm(Q) + "$?"),
          vals, function (v) { return M$(tex(v[0])) + e + M$(tex(v[1])); },
          L2(l, "$\\det(\\boldsymbol Q - \\lambda\\boldsymbol I) = " + lc([[1, "\\lambda^2"], [-tr, "\\lambda"], [dt, ""]]) + " = (" + lc([[1, "\\lambda"], [-m.l1, ""]]) + ")(" + lc([[1, "\\lambda"], [-m.l2, ""]]) + ")$. Controllo: la somma degli autovalori è la traccia, il prodotto è il determinante. Gli elementi diagonali sono gli autovalori solo per matrici triangolari.",
            "$\\det(\\boldsymbol Q - \\lambda\\boldsymbol I) = " + lc([[1, "\\lambda^2"], [-tr, "\\lambda"], [dt, ""]]) + " = (" + lc([[1, "\\lambda"], [-m.l1, ""]]) + ")(" + lc([[1, "\\lambda"], [-m.l2, ""]]) + ")$. Check: the eigenvalues add up to the trace and multiply to the determinant. The diagonal entries are the eigenvalues only for triangular matrices."),
          { Q: Q });
      });
    }
  });

  // 12. effetto delle operazioni elementari sul determinante
  add({
    id: "la-g-elem-det", livello: "facile", capitolo: "elementary-operations",
    link: LK("elem", "2-effect-of-elementary-operations-on-the-determinant", "2-effetto-delle-operazioni-elementari-sul-determinante"),
    genera: function (r, l) {
      return retry(function () {
        var d = pick(r, [-6, -5, -4, -3, -2, 2, 3, 4, 5, 6]), c = pick(r, [2, 3, -2, -3]), la = pick(r, [2, 3, -2, -3]);
        var sw = shuffle(r, [1, 2, 3]).slice(0, 2), ks = ri(r, 1, 3), ad = shuffle(r, [1, 2, 3]).slice(0, 2);
        var ops = shuffle(r, [
          "R_" + sw[0] + " \\leftrightarrow R_" + sw[1],
          "R_" + ks + " \\leftarrow " + c + "R_" + ks,
          "R_" + ad[0] + " \\leftarrow R_" + ad[0] + (la < 0 ? " - " + (-la) : " + " + la) + "R_" + ad[1]
        ]);
        var vals = [-c * d, c * d, -d, -c * la * d];
        return out(
          L2(l, "Sia $\\boldsymbol A \\in \\R^{3\\times 3}$ con $\\det(\\boldsymbol A) = " + d + "$. Si applicano nell'ordine le operazioni $" + ops.join("$, $") + "$. Quanto vale il determinante della matrice ottenuta?",
            "Let $\\boldsymbol A \\in \\R^{3\\times 3}$ with $\\det(\\boldsymbol A) = " + d + "$. The operations $" + ops.join("$, $") + "$ are applied in this order. What is the determinant of the resulting matrix?"),
          vals, function (x) { return M$(tex(x)); },
          L2(l, "Lo scambio cambia il segno, la moltiplicazione di una riga per $" + c + "$ moltiplica il determinante per $" + c + "$, la somma di un multiplo di un'altra riga non lo cambia: $(-1)\\cdot " + (c < 0 ? "(" + c + ")" : c) + "\\cdot " + (d < 0 ? "(" + d + ")" : d) + " = " + (-c * d) + "$.",
            "The swap changes the sign, multiplying a row by $" + c + "$ multiplies the determinant by $" + c + "$, adding a multiple of another row does not change it: $(-1)\\cdot " + (c < 0 ? "(" + c + ")" : c) + "\\cdot " + (d < 0 ? "(" + d + ")" : d) + " = " + (-c * d) + "$."),
          { det: d, scala: c, somma: la, ops: ops });
      });
    }
  });

  // 13. sommatoria
  add({
    id: "la-g-sum", livello: "facile", capitolo: "sums",
    link: LK("sums", "3-some-important-sums", "3-alcune-sommatorie-importanti"),
    genera: function (r, l) {
      return retry(function () {
        var a = pick(r, [2, 3, 4]), b = ri(r, 6, 14), c = pick(r, [1, 2, 3, 4, -2]), e = rnz(r, -3, 5);
        var sj = b * (b + 1) / 2 - (a - 1) * a / 2, N = b - a + 1;
        var vals = [c * sj + e * N, c * sj + e * (b - a), c * b * (b + 1) / 2 + e * b, c * sj + e];
        var term = lc([[c, "j"], [e, ""]]);
        return out(
          L2(l, "Quanto vale $\\sum_{j=" + a + "}^{" + b + "} (" + term + ")$?", "What is $\\sum_{j=" + a + "}^{" + b + "} (" + term + ")$?"),
          vals, function (x) { return M$(tex(x)); },
          L2(l, "La sommatoria ha $" + b + " - " + a + " + 1 = " + N + "$ termini: $" + c + "\\sum_{j=" + a + "}^{" + b + "} j + " + N + "\\cdot " + (e < 0 ? "(" + e + ")" : e) + "$, con $\\sum_{j=" + a + "}^{" + b + "} j = \\frac{" + b + "\\cdot " + (b + 1) + "}{2} - \\frac{" + (a - 1) + "\\cdot " + a + "}{2} = " + sj + "$. Risultato: $" + vals[0] + "$.",
            "The sum has $" + b + " - " + a + " + 1 = " + N + "$ terms: $" + c + "\\sum_{j=" + a + "}^{" + b + "} j + " + N + "\\cdot " + (e < 0 ? "(" + e + ")" : e) + "$, with $\\sum_{j=" + a + "}^{" + b + "} j = \\frac{" + b + "\\cdot " + (b + 1) + "}{2} - \\frac{" + (a - 1) + "\\cdot " + a + "}{2} = " + sj + "$. Result: $" + vals[0] + "$."),
          { a: a, b: b, c: c, e: e });
      });
    }
  });

  // 14. produttorie e fattoriale
  add({
    id: "la-g-products", livello: "facile", capitolo: "products",
    link: LK("products", "3-factorial", "3-fattoriale"),
    genera: function (r, l) {
      var tipo = pick(r, ["ratio", "const"]);
      return retry(function () {
        var prod = function (lo, hi) { var p = 1; for (var j = lo; j <= hi; j++) p *= j; return p; };
        if (tipo === "ratio") {
          var n = ri(r, 6, 12), k = ri(r, 2, 4);
          var vals = [prod(n - k + 1, n), prod(n - k, n), prod(n - k + 2, n), Math.pow(n, k)];
          return out(
            L2(l, "Quanto vale $\\dfrac{" + n + "!}{" + (n - k) + "!}$?", "What is $\\dfrac{" + n + "!}{" + (n - k) + "!}$?"),
            vals, function (x) { return M$(tex(x)); },
            L2(l, "$\\frac{n!}{(n-k)!} = \\prod_{j=n-k+1}^{n} j$ è il prodotto di $k = " + k + "$ fattori, da $n = " + n + "$ scendendo di uno: risultato $" + vals[0] + "$.",
              "$\\frac{n!}{(n-k)!} = \\prod_{j=n-k+1}^{n} j$ is the product of $k = " + k + "$ factors, from $n = " + n + "$ decreasing by one: result $" + vals[0] + "$."),
            { tipo: tipo, n: n, k: k });
        }
        var n2 = ri(r, 3, 5), c = pick(r, [2, 3, -2]), P = rnz(r, -5, 7);
        var cn = Math.pow(c, n2);
        var vals2 = [cn * P, c * P, n2 * c * P, cn * c * P];
        return out(
          L2(l, "Si sa che $\\prod_{j=1}^{" + n2 + "} a_j = " + P + "$. Quanto vale $\\prod_{j=1}^{" + n2 + "} (" + c + "\\, a_j)$?",
            "We know that $\\prod_{j=1}^{" + n2 + "} a_j = " + P + "$. What is $\\prod_{j=1}^{" + n2 + "} (" + c + "\\, a_j)$?"),
          vals2, function (x) { return M$(tex(x)); },
          L2(l, "La costante compare in ognuno degli $n = " + n2 + "$ fattori: $\\prod_{j=1}^{n} (c\\, a_j) = c^n \\prod_{j=1}^{n} a_j = " + (c < 0 ? "(" + c + ")" : c) + "^{" + n2 + "}\\cdot " + (P < 0 ? "(" + P + ")" : P) + " = " + vals2[0] + "$.",
            "The constant appears in each of the $n = " + n2 + "$ factors: $\\prod_{j=1}^{n} (c\\, a_j) = c^n \\prod_{j=1}^{n} a_j = " + (c < 0 ? "(" + c + ")" : c) + "^{" + n2 + "}\\cdot " + (P < 0 ? "(" + P + ")" : P) + " = " + vals2[0] + "$."),
          { tipo: tipo, n: n2, c: c, P: P });
      });
    }
  });

  // 15. resto della divisione euclidea
  add({
    id: "la-g-mod", livello: "facile", capitolo: "modular-arithmetic",
    link: LK("mod", "box-lem_euclid-division-1"),
    genera: function (r, l) {
      return retry(function () {
        var neg = r() < 0.6, m = ri(r, 3, 9), n = neg ? -ri(r, 7, 60) : ri(r, 20, 99);
        var rr = ((n % m) + m) % m, qq = (n - rr) / m;
        if (rr === 0) return null;
        var vals = neg ? [rr, Math.abs(n) % m, rr - m, qq] : [rr, qq, m - rr, rr + 1];
        return out(
          L2(l, "Quanto vale $" + n + " \\text{ mod } " + m + "$, cioè il resto $r$ della divisione euclidea di $" + n + "$ per $" + m + "$?",
            "What is $" + n + " \\text{ mod } " + m + "$, i.e. the remainder $r$ of the Euclidean division of $" + n + "$ by $" + m + "$?"),
          vals, function (x) { return M$(tex(x)); },
          L2(l, "$" + n + " = (" + qq + ")\\cdot " + m + " + " + rr + "$ con $0 \\le " + rr + " < " + m + "$: il resto è sempre non negativo e minore di $|m|$" + (n < 0 ? ", anche se il dividendo è negativo." : "."),
            "$" + n + " = (" + qq + ")\\cdot " + m + " + " + rr + "$ with $0 \\le " + rr + " < " + m + "$: the remainder is always non-negative and smaller than $|m|$" + (n < 0 ? ", even when the dividend is negative." : ".")),
          { n: n, m: m });
      });
    }
  });

  // 16. regola di Cramer 2x2
  add({
    id: "la-g-cramer2", livello: "facile", capitolo: "linear-systems",
    link: LK("systems", "61-systems-of-two-equations-and-two-variables", "61-sistemi-di-due-equazioni-in-due-variabili"),
    genera: function (r, l) {
      return retry(function () {
        var A = [[ri(r, -4, 5), ri(r, -4, 5)], [ri(r, -4, 5), ri(r, -4, 5)]], D = det2(A)[0];
        if (D === 0 || A.some(function (rw) { return rw.every(function (x) { return x === 0; }); })) return null;
        var b = [ri(r, -9, 9), ri(r, -9, 9)];
        var j = ri(r, 0, 1), o = 1 - j;
        var Aj = A.map(function (rw, i) { return rw.map(function (x, k) { return k === j ? b[i] : x; }); });
        var Ao = A.map(function (rw, i) { return rw.map(function (x, k) { return k === o ? b[i] : x; }); });
        var Ar = A.map(function (rw, i) { return i === j ? b.slice() : rw.slice(); });
        var Dj = det2(Aj)[0];
        if (Dj === 0) return null;
        var vals = [F(Dj, D), F(det2(Ar)[0], D), F(det2(Ao)[0], D), F(D, Dj)];
        return out(
          L2(l, "Con la regola di Cramer, quanto vale $\\tilde x_" + (j + 1) + "$ nella soluzione del sistema $" + sistema(A, b) + "$?",
            "By Cramer's rule, what is $\\tilde x_" + (j + 1) + "$ in the solution of the system $" + sistema(A, b) + "$?"),
          vals, function (x) { return M$(tex(x)); },
          L2(l, "$\\det(\\boldsymbol A) = " + D + "$ e $\\boldsymbol A_" + (j + 1) + "$ si ottiene sostituendo la colonna $" + (j + 1) + "$ (non la riga) con $\\boldsymbol b$: $\\det(\\boldsymbol A_" + (j + 1) + ") = " + Dj + "$, quindi $\\tilde x_" + (j + 1) + " = " + tex(F(Dj, D)) + "$.",
            "$\\det(\\boldsymbol A) = " + D + "$ and $\\boldsymbol A_" + (j + 1) + "$ is obtained by replacing column $" + (j + 1) + "$ (not the row) with $\\boldsymbol b$: $\\det(\\boldsymbol A_" + (j + 1) + ") = " + Dj + "$, hence $\\tilde x_" + (j + 1) + " = " + tex(F(Dj, D)) + "$."),
          { A: A, b: b, j: j + 1 });
      });
    }
  });

  var DEF = {
    pd: ["definita positiva", "positive definite"],
    nd: ["definita negativa", "negative definite"],
    ind: ["indefinita", "indefinite"],
    psd: ["semidefinita positiva ma non definita positiva", "positive semidefinite but not positive definite"],
    nsd: ["semidefinita negativa ma non definita negativa", "negative semidefinite but not negative definite"]
  };
  function lab(k, l) { return DEF[k][l === "it" ? 0 : 1]; }

  // 17. classificazione di una matrice simmetrica 2x2
  add({
    id: "la-g-definite2", livello: "facile", capitolo: "eigenvalues",
    link: LK("eigen", "4-sylvesters-criterion", "4-criterio-di-sylvester"),
    genera: function (r, l) {
      var cat = pick(r, ["pd", "nd", "ind", "psd", "nsd"]);
      return retry(function () {
        var a, b, c;
        if (cat === "psd" || cat === "nsd") {
          var t = pick(r, [1, 2, 3]), u = rnz(r, -2, 2), v = rnz(r, -2, 2), s = cat === "psd" ? 1 : -1;
          a = s * t * u * u; b = s * t * u * v; c = s * t * v * v;
        } else { a = ri(r, -6, 6); b = ri(r, -4, 4); c = ri(r, -6, 6); }
        if (b === 0) return null;
        var D2 = a * c - b * b, k;
        if (D2 > 0) k = a > 0 ? "pd" : "nd"; else if (D2 < 0) k = "ind"; else k = (a + c > 0) ? "psd" : (a + c < 0 ? "nsd" : "zero");
        if (k !== cat) return null;
        var keys = ["pd", "nd", "ind", cat === "nsd" ? "nsd" : "psd"], corr = keys.indexOf(cat);
        var Q = [[a, b], [b, c]];
        return out(
          L2(l, "Come è la matrice simmetrica $\\boldsymbol Q = " + pm(Q) + "$?", "How is the symmetric matrix $\\boldsymbol Q = " + pm(Q) + "$ classified?"),
          keys, function (x) { return lab(x, l); },
          L2(l, "$\\Delta_1 = " + a + "$, $\\Delta_2 = \\det(\\boldsymbol Q) = " + D2 + "$" + (D2 === 0 ? "; con $\\Delta_2 = 0$ servono tutti i minori principali: $q_{11} = " + a + "$, $q_{22} = " + c + "$" : "") + ". Quindi $\\boldsymbol Q$ è " + lab(cat, l) + " (criterio di Sylvester; equivalentemente, dal segno degli autovalori).",
            "$\\Delta_1 = " + a + "$, $\\Delta_2 = \\det(\\boldsymbol Q) = " + D2 + "$" + (D2 === 0 ? "; with $\\Delta_2 = 0$ all principal minors are needed: $q_{11} = " + a + "$, $q_{22} = " + c + "$" : "") + ". Hence $\\boldsymbol Q$ is " + lab(cat, l) + " (Sylvester's criterion; equivalently, by the signs of the eigenvalues)."),
          { Q: Q, chiavi: keys }, corr);
      });
    }
  });

  var CASI = {
    unique: ["esattamente una soluzione", "exactly one solution"],
    none: ["nessuna soluzione", "no solution"],
    inf1: ["infinite soluzioni, con $1$ parametro libero", "infinitely many solutions, with $1$ free parameter"],
    inf2: ["infinite soluzioni, con $2$ parametri liberi", "infinitely many solutions, with $2$ free parameters"]
  };

  // 18. Rouché–Capelli: quante soluzioni
  add({
    id: "la-g-rouche", livello: "facile", capitolo: "linear-systems",
    link: LK("systems", "3-gaussian-elimination-and-the-rouchecapelli-theorem", "3-eliminazione-di-gauss-e-teorema-di-rouchecapelli"),
    genera: function (r, l) {
      var cas = pick(r, ["unique", "none", "inf1", "inf2"]);
      return retry(function () {
        var p1 = pick(r, [1, 1, 2, -1]), E;
        var x = function () { return ri(r, -3, 3); };
        if (cas === "unique") E = [[p1, x(), x(), x()], [0, pick(r, [1, -1, 2]), x(), x()], [0, 0, pick(r, [1, -1, 2, 3]), x()]];
        else if (cas === "none") E = [[p1, x(), x(), x()], [0, pick(r, [1, -1, 2]), x(), x()], [0, 0, 0, rnz(r, -3, 3)]];
        else if (cas === "inf1") E = [[p1, x(), x(), x()], [0, pick(r, [1, -1, 2]), x(), x()], [0, 0, 0, 0]];
        else E = [[p1, x(), x(), x()], [0, 0, 0, 0], [0, 0, 0, 0]];
        var L = triL(r, -2, 2);
        if (L[1][0] === 0 && L[2][0] === 0 && L[2][1] === 0) return null;
        var M = intM(mmul(L, E));
        if (M.some(function (rw) { return rw.slice(0, 3).every(function (v) { return v === 0; }); })) return null;
        if (M.some(function (rw) { return rw.some(function (v) { return Math.abs(v) > 12; }); })) return null;
        var A = M.map(function (rw) { return rw.slice(0, 3); }), b = M.map(function (rw) { return rw[3]; });
        var keys = ["unique", "none", "inf1", "inf2"];
        var rA = rank(A), rAb = rank(M);
        return out(
          L2(l, "Quante soluzioni ha il sistema $" + sistema(A, b) + "$?", "How many solutions does the system $" + sistema(A, b) + "$ have?"),
          keys, function (k) { return CASI[k][l === "it" ? 0 : 1]; },
          L2(l, "Con l'eliminazione di Gauss sulla matrice completa $(\\boldsymbol A | \\boldsymbol b)$ si legge $\\text{rank}(\\boldsymbol A) = " + rA + "$ e $\\text{rank}(\\boldsymbol A | \\boldsymbol b) = " + rAb + "$, con $n = 3$: per il teorema di Rouché–Capelli il sistema ha " + CASI[cas][0] + ".",
            "Gaussian elimination on the augmented matrix $(\\boldsymbol A | \\boldsymbol b)$ gives $\\text{rank}(\\boldsymbol A) = " + rA + "$ and $\\text{rank}(\\boldsymbol A | \\boldsymbol b) = " + rAb + "$, with $n = 3$: by the Rouché–Capelli theorem the system has " + CASI[cas][1] + "."),
          { A: A, b: b, chiavi: keys }, keys.indexOf(cas));
      });
    }
  });

  // ======================================================================
  // MEDIE
  // ======================================================================

  // M1. sistema 3x3 con l'eliminazione di Gauss
  add({
    id: "la-g-gauss-solve", livello: "media", capitolo: "linear-systems",
    link: LK("systems", "2-gaussian-elimination-method", "2-metodo-di-eliminazione-di-gauss"),
    genera: function (r, l) {
      return retry(function () {
        var U = triU(r, [1, -1, 2, -2], -2, 3), L = triL(r, -2, 2);
        if (L[1][0] === 0 && L[2][0] === 0) return null;
        var A = intM(mmul(L, U));
        if (A.some(function (rw) { return rw.some(function (v) { return Math.abs(v) > 9; }); })) return null;
        var x = [ri(r, -3, 3), ri(r, -3, 3), rnz(r, -3, 3)];
        var b = A.map(function (rw) { return rw[0] * x[0] + rw[1] * x[1] + rw[2] * x[2]; });
        var c = U.map(function (rw) { return rw[0] * x[0] + rw[1] * x[1] + rw[2] * x[2]; });
        var d1 = back(U, b);
        var d2 = [x[2], x[1], x[0]];
        var x3 = F(-x[2]), x2 = fdiv(fsub(c[1], fmul(U[1][2], x3)), U[1][1]);
        var x1 = fdiv(fsub(fsub(c[0], fmul(U[0][1], x2)), fmul(U[0][2], x3)), U[0][0]);
        var d3 = [x1, x2, x3];
        var vals = [x, d1, d2, d3];
        return out(
          L2(l, "Risolvere con l'eliminazione di Gauss (eliminazione in avanti e sostituzione all'indietro) il sistema $" + sistema(A, b) + "$.",
            "Solve with Gaussian elimination (forward elimination and backward substitution) the system $" + sistema(A, b) + "$."),
          vals, function (v) { return M$("\\boldsymbol x = " + vt(v)); },
          L2(l, "L'eliminazione in avanti, applicata a tutta la matrice completa (anche alla colonna dei termini noti), porta al sistema triangolare $" + sistema(U, c) + "$; la sostituzione all'indietro dà $\\boldsymbol x = " + vt(x) + "$. Verifica: $\\boldsymbol A\\boldsymbol x = \\boldsymbol b$.",
            "Forward elimination, applied to the whole augmented matrix (including the right-hand side column), gives the triangular system $" + sistema(U, c) + "$; backward substitution gives $\\boldsymbol x = " + vt(x) + "$. Check: $\\boldsymbol A\\boldsymbol x = \\boldsymbol b$."),
          { A: A, b: b });
      });
    }
  });

  // M2. coordinate rispetto a una base di R^3
  add({
    id: "la-g-coord3", livello: "media", capitolo: "vectors",
    link: LK("vectors", "box-obsUniqueCoordinates-19"),
    genera: function (r, l) {
      return retry(function () {
        var V = intM(mmul(triL(r, -2, 2), triU(r, [1, -1], -2, 2)));
        if (V.some(function (rw) { return rw.some(function (v) { return Math.abs(v) > 6; }); })) return null;
        var cols = T(V);
        if (cols.some(function (c) { return c.every(function (v) { return v === 0; }); })) return null;
        var la = [ri(r, -2, 3), ri(r, -2, 3), ri(r, -2, 3)];
        var x = V.map(function (rw) { return rw[0] * la[0] + rw[1] * la[1] + rw[2] * la[2]; });
        var mu = intM([inv(T(V)).map(function (rw) { return rw.reduce(function (s, v, k) { return fadd(s, fmul(v, x[k])); }, F(0)); })])[0];
        var vals = [la, x, mu, [la[2], la[1], la[0]]];
        return out(
          L2(l, "I vettori $\\boldsymbol v_1 = " + vt(cols[0]) + "$, $\\boldsymbol v_2 = " + vt(cols[1]) + "$, $\\boldsymbol v_3 = " + vt(cols[2]) + "$ formano una base di $\\R^3$. Quali sono le coordinate $(\\lambda_1, \\lambda_2, \\lambda_3)$ di $\\boldsymbol x = " + vt(x) + "$ rispetto a questa base?",
            "The vectors $\\boldsymbol v_1 = " + vt(cols[0]) + "$, $\\boldsymbol v_2 = " + vt(cols[1]) + "$, $\\boldsymbol v_3 = " + vt(cols[2]) + "$ form a basis of $\\R^3$. What are the coordinates $(\\lambda_1, \\lambda_2, \\lambda_3)$ of $\\boldsymbol x = " + vt(x) + "$ with respect to this basis?"),
          vals, function (v) { return M$("(" + v.map(tex).join(",\\, ") + ")"); },
          L2(l, "Si risolve $\\lambda_1 \\boldsymbol v_1 + \\lambda_2 \\boldsymbol v_2 + \\lambda_3 \\boldsymbol v_3 = \\boldsymbol x$, un sistema la cui matrice ha i vettori della base come colonne (non come righe): $(\\lambda_1, \\lambda_2, \\lambda_3) = (" + la.join(",\\, ") + ")$. Verifica: $" + lc([[la[0], "\\boldsymbol v_1"], [la[1], "\\boldsymbol v_2"], [la[2], "\\boldsymbol v_3"]]) + " = \\boldsymbol x$.",
            "Solve $\\lambda_1 \\boldsymbol v_1 + \\lambda_2 \\boldsymbol v_2 + \\lambda_3 \\boldsymbol v_3 = \\boldsymbol x$, a system whose matrix has the basis vectors as columns (not as rows): $(\\lambda_1, \\lambda_2, \\lambda_3) = (" + la.join(",\\, ") + ")$. Check: $" + lc([[la[0], "\\boldsymbol v_1"], [la[1], "\\boldsymbol v_2"], [la[2], "\\boldsymbol v_3"]]) + " = \\boldsymbol x$."),
          { v1: cols[0], v2: cols[1], v3: cols[2], x: x });
      });
    }
  });

  // M3. fattorizzazione LU 3x3: la matrice L
  add({
    id: "la-g-lu3", livello: "media", capitolo: "lu-factorization",
    link: LK("lu", "1-lu-factorization", "1-fattorizzazione-lu"),
    genera: function (r, l) {
      return retry(function () {
        var L = [[1, 0, 0], [rnz(r, -3, 3), 1, 0], [rnz(r, -3, 3), rnz(r, -3, 3), 1]];
        var U = triU(r, [1, 2, -1, -2, 3], -3, 3);
        var A = intM(mmul(L, U));
        if (A.some(function (rw) { return rw.some(function (v) { return Math.abs(v) > 12; }); })) return null;
        if (A[1][1] === 0 || L[1][0] === L[2][0]) return null;
        var l32o = F(A[2][1], A[1][1]);
        if (l32o[0] === L[2][1] * l32o[1]) return null;
        var neg = [[1, 0, 0], [-L[1][0], 1, 0], [-L[2][0], -L[2][1], 1]];
        var orig = [[1, 0, 0], [L[1][0], 1, 0], [L[2][0], l32o, 1]];
        var sw = [[1, 0, 0], [L[2][0], 1, 0], [L[1][0], L[2][1], 1]];
        var vals = [L, neg, orig, sw];
        return out(
          L2(l, "Calcolare la fattorizzazione $\\boldsymbol A = \\boldsymbol L\\boldsymbol U$ (eliminazione di Gauss senza scambi di righe) di $\\boldsymbol A = " + pm(A) + "$. Quale è la matrice $\\boldsymbol L$?",
            "Compute the factorization $\\boldsymbol A = \\boldsymbol L\\boldsymbol U$ (Gaussian elimination without row swaps) of $\\boldsymbol A = " + pm(A) + "$. Which is the matrix $\\boldsymbol L$?"),
          vals, function (m) { return M$("\\boldsymbol L = " + pm(m)); },
          L2(l, "I moltiplicatori del passo $R_i \\leftarrow R_i - \\ell_{ij} R_j$ vanno in posizione $(i,j)$ di $\\boldsymbol L$, con il loro segno; $\\ell_{32}$ si calcola sulla matrice già aggiornata dal primo passo. Si ottiene $\\boldsymbol U = " + pm(U) + "$ e $\\boldsymbol L\\boldsymbol U = \\boldsymbol A$.",
            "The multipliers of the steps $R_i \\leftarrow R_i - \\ell_{ij} R_j$ go in position $(i,j)$ of $\\boldsymbol L$, with their sign; $\\ell_{32}$ is computed on the matrix already updated by the first step. We get $\\boldsymbol U = " + pm(U) + "$ and $\\boldsymbol L\\boldsymbol U = \\boldsymbol A$."),
          { A: A });
      });
    }
  });

  // M4. autovettore di una matrice 2x2
  add({
    id: "la-g-eigvec2", livello: "media", capitolo: "eigenvalues",
    link: LK("eigen", "box-defEigen-1"),
    genera: function (r, l) {
      return retry(function () {
        var m = mat2eig(r, false), Q = m.Q, a = Q[0][0], b = Q[0][1], c = Q[1][0], d = Q[1][1], lm = m.l2, ln = m.l1;
        var ev = function (la) { return prim(b !== 0 || la !== a ? [b, la - a] : [la - d, c]); };
        var v = ev(lm);
        var vals = [v, ev(ln), prim([v[1], v[0]]), prim([c, lm - a])];
        if (vals.some(function (w) { return w.every(function (x) { return x === 0; }); })) return null;
        if (vals.some(function (w) { return w.some(function (x) { return Math.abs(x) > 12; }); })) return null;
        return out(
          L2(l, "Gli autovalori di $\\boldsymbol Q = " + pm(Q) + "$ sono $" + ln + "$ e $" + lm + "$. Quale vettore è un autovettore associato all'autovalore $\\lambda = " + lm + "$?",
            "The eigenvalues of $\\boldsymbol Q = " + pm(Q) + "$ are $" + ln + "$ and $" + lm + "$. Which vector is an eigenvector associated with the eigenvalue $\\lambda = " + lm + "$?"),
          vals, function (w) { return M$("\\boldsymbol v = " + vt(w)); },
          L2(l, "Gli autovettori sono le soluzioni non nulle di $(\\boldsymbol Q - " + (lm < 0 ? "(" + lm + ")" : lm) + "\\boldsymbol I)\\boldsymbol v = \\boldsymbol 0$, con $\\boldsymbol Q - " + (lm < 0 ? "(" + lm + ")" : lm) + "\\boldsymbol I = " + pm([[a - lm, b], [c, d - lm]]) + "$: per esempio $\\boldsymbol v = " + vt(v) + "$. Verifica: $\\boldsymbol Q\\boldsymbol v = " + lm + "\\,\\boldsymbol v$.",
            "The eigenvectors are the nonzero solutions of $(\\boldsymbol Q - " + (lm < 0 ? "(" + lm + ")" : lm) + "\\boldsymbol I)\\boldsymbol v = \\boldsymbol 0$, with $\\boldsymbol Q - " + (lm < 0 ? "(" + lm + ")" : lm) + "\\boldsymbol I = " + pm([[a - lm, b], [c, d - lm]]) + "$: for example $\\boldsymbol v = " + vt(v) + "$. Check: $\\boldsymbol Q\\boldsymbol v = " + lm + "\\,\\boldsymbol v$."),
          { Q: Q, lambda: lm });
      });
    }
  });

  /** etichetta di Sylvester per una terna di minori di testa tutti non nulli */
  function sylv(t) {
    if (t[0] > 0 && t[1] > 0 && t[2] > 0) return "pd";
    if (t[0] < 0 && t[1] > 0 && t[2] < 0) return "nd";
    return "ind";
  }
  function det3i(Q) {
    var a = Q[0][0], b = Q[0][1], c = Q[0][2], d = Q[1][0], e = Q[1][1], f = Q[1][2], g = Q[2][0], h = Q[2][1], i = Q[2][2];
    return a * e * i + b * f * g + c * d * h - c * e * g - b * d * i - a * f * h;
  }

  // M5. criterio di Sylvester 3x3
  add({
    id: "la-g-sylvester3", livello: "media", capitolo: "eigenvalues",
    link: LK("eigen", "box-theoSylvester-11"),
    genera: function (r, l) {
      var cat = pick(r, ["pd", "nd", "ind"]);
      return retry(function () {
        var Q;
        if (cat === "ind") {
          var a = ri(r, -4, 5), b = ri(r, -3, 3), c = ri(r, -3, 3), e = ri(r, -4, 5), f = ri(r, -3, 3), i = ri(r, -4, 5);
          Q = [[a, b, c], [b, e, f], [c, f, i]];
        } else {
          var Mx = [[ri(r, -1, 2), ri(r, -1, 1), ri(r, -1, 1)], [ri(r, -1, 1), ri(r, -1, 2), ri(r, -1, 1)], [ri(r, -1, 1), ri(r, -1, 1), ri(r, -1, 2)]];
          Q = intM(mmul(T(Mx), Mx));
          if (cat === "nd") Q = Q.map(function (rw) { return rw.map(function (x) { return -x + 0; }); });
        }
        if (Q.some(function (rw) { return rw.some(function (x) { return Math.abs(x) > 9; }); })) return null;
        if (Q[0][1] === 0 && Q[0][2] === 0 && Q[1][2] === 0) return null;
        var D1 = Q[0][0], D2 = Q[0][0] * Q[1][1] - Q[0][1] * Q[0][1], D3 = det3i(Q);
        if (D1 === 0 || D2 === 0 || D3 === 0 || sylv([D1, D2, D3]) !== cat) return null;
        var t1 = [D1, Q[0][0] * Q[1][1] + Q[0][1] * Q[0][1], D3];
        var S = Q, D3w = S[0][0] * (S[1][1] * S[2][2] - S[1][2] * S[2][1]) + S[0][1] * (S[1][0] * S[2][2] - S[1][2] * S[2][0]) + S[0][2] * (S[1][0] * S[2][1] - S[1][1] * S[2][0]);
        var t2 = [D1, D2, D3w];
        var t3 = [Q[2][2], Q[1][1] * Q[2][2] - Q[1][2] * Q[1][2], D3];
        var trip = [[D1, D2, D3], t1, t2, t3];
        if (trip.some(function (t) { return t.some(function (x) { return x === 0; }); })) return null;
        var vals = trip.map(function (t) { return { minori: t, esito: sylv(t) }; });
        return out(
          L2(l, "Calcolare i minori principali di guida $\\Delta_1, \\Delta_2, \\Delta_3$ della matrice simmetrica $\\boldsymbol Q = " + pm(Q) + "$ e classificarla con il criterio di Sylvester.",
            "Compute the leading principal minors $\\Delta_1, \\Delta_2, \\Delta_3$ of the symmetric matrix $\\boldsymbol Q = " + pm(Q) + "$ and classify it with Sylvester's criterion."),
          vals, function (v) { return "$(\\Delta_1, \\Delta_2, \\Delta_3) = (" + v.minori.join(",\\, ") + ")$: " + lab(v.esito, l); },
          L2(l, "$\\Delta_1 = q_{11} = " + D1 + "$, $\\Delta_2 = q_{11}q_{22} - q_{12}^2 = " + D2 + "$, $\\Delta_3 = \\det(\\boldsymbol Q) = " + D3 + "$ (minori di testa: prime $k$ righe e colonne). Quindi $\\boldsymbol Q$ è " + lab(cat, l) + ".",
            "$\\Delta_1 = q_{11} = " + D1 + "$, $\\Delta_2 = q_{11}q_{22} - q_{12}^2 = " + D2 + "$, $\\Delta_3 = \\det(\\boldsymbol Q) = " + D3 + "$ (leading minors: first $k$ rows and columns). Hence $\\boldsymbol Q$ is " + lab(cat, l) + "."),
          { Q: Q });
      });
    }
  });

  // M6. soluzioni in forma parametrica
  add({
    id: "la-g-param", livello: "media", capitolo: "linear-systems",
    link: LK("systems", "3-gaussian-elimination-and-the-rouchecapelli-theorem", "3-eliminazione-di-gauss-e-teorema-di-rouchecapelli"),
    genera: function (r, l) {
      return retry(function () {
        var a = ri(r, -3, 3), b = ri(r, -3, 3), c = rnz(r, -3, 3);
        var U = [[1, a, b], [0, 1, c], [0, 0, 0]], L = triL(r, -2, 2);
        if (L[1][0] === 0 || (L[2][0] === 0 && L[2][1] === 0)) return null;
        var A = intM(mmul(L, U));
        if (A.some(function (rw) { return rw.every(function (v) { return v === 0; }) || rw.some(function (v) { return Math.abs(v) > 9; }); })) return null;
        var x0 = [ri(r, -3, 3), ri(r, -3, 3), 0];
        var bb = A.map(function (rw) { return rw[0] * x0[0] + rw[1] * x0[1]; });
        if (bb.every(function (v) { return v === 0; })) return null;
        var v = [a * c - b, -c, 1];
        if (v[0] === 0) return null;
        var x0w = [bb[0] - a * bb[1], bb[1], 0];
        if (x0w[0] === x0[0] && x0w[1] === x0[1]) return null;
        var vals = [{ x0: x0, v: v }, { x0: x0, v: [a * c - b, c, 1] }, { x0: x0w, v: v }, { x0: x0, v: [b - a * c, -c, 1] }];
        return out(
          L2(l, "Il sistema $" + sistema(A, bb) + "$ ha infinite soluzioni. Ponendo $x_3 = t$, quale descrizione dell'insieme delle soluzioni è corretta?",
            "The system $" + sistema(A, bb) + "$ has infinitely many solutions. Setting $x_3 = t$, which description of the solution set is correct?"),
          vals, function (o) { return "$\\boldsymbol x = " + vt(o.x0) + " + t\\," + vt(o.v) + "$, $t \\in \\R$"; },
          L2(l, "L'eliminazione porta a $" + eq([1, a, b], bb[0]) + "$, $" + eq([0, 1, c], x0[1]) + "$ e a una riga nulla: $\\text{rank}(\\boldsymbol A) = \\text{rank}(\\boldsymbol A|\\boldsymbol b) = 2 < 3$. Con $x_3 = t$: $\\boldsymbol x_0 = " + vt(x0) + "$ (per $t = 0$) e $\\boldsymbol v = " + vt(v) + "$ con $\\boldsymbol A\\boldsymbol v = \\boldsymbol 0$.",
            "Elimination gives $" + eq([1, a, b], bb[0]) + "$, $" + eq([0, 1, c], x0[1]) + "$ and a zero row: $\\text{rank}(\\boldsymbol A) = \\text{rank}(\\boldsymbol A|\\boldsymbol b) = 2 < 3$. With $x_3 = t$: $\\boldsymbol x_0 = " + vt(x0) + "$ (for $t = 0$) and $\\boldsymbol v = " + vt(v) + "$ with $\\boldsymbol A\\boldsymbol v = \\boldsymbol 0$."),
          { A: A, b: bb });
      });
    }
  });

  // ======================================================================
  // COMPLESSE
  // ======================================================================

  // C1. inversa 3x3 con Gauss–Jordan
  add({
    id: "la-g-gj-inverse3", livello: "complessa", capitolo: "inverse-matrix",
    link: LK("inverse", "21-gaussjordan-method", "21-metodo-di-gaussjordan"),
    genera: function (r, l) {
      return retry(function () {
        var U = triU(r, [1, -1, 1, -1, 2], -2, 2), A = intM(mmul(triL(r, -2, 2), U));
        if (A.some(function (rw) { return rw.some(function (v) { return Math.abs(v) > 6; }); })) return null;
        if (A[0][1] === A[1][0] && A[0][2] === A[2][0] && A[1][2] === A[2][1]) return null;
        var D = det3(A), B = inv(A);
        if (!B || B.some(function (rw) { return rw.some(function (x) { return Math.abs(x[0]) > 12 * x[1]; }); })) return null;
        var Mn = [0, 1, 2].map(function (i) { return [0, 1, 2].map(function (j) { return det2(minore(A, i, j)); }); });
        var noSign = T(Mn).map(function (rw) { return rw.map(function (x) { return fdiv(x, D); }); });
        var vals = [B, T(B), noSign, B.map(function (rw) { return rw.map(function (x) { return fmul(x, -1); }); })];
        return out(
          L2(l, "Con il metodo di Gauss–Jordan si trasforma $(\\boldsymbol A \\mid \\boldsymbol I)$ in $(\\boldsymbol I \\mid \\boldsymbol B)$, dove $\\boldsymbol A = " + pm(A) + "$. Quale è $\\boldsymbol B = \\boldsymbol A^{-1}$?",
            "With the Gauss–Jordan method, $(\\boldsymbol A \\mid \\boldsymbol I)$ is transformed into $(\\boldsymbol I \\mid \\boldsymbol B)$, where $\\boldsymbol A = " + pm(A) + "$. Which is $\\boldsymbol B = \\boldsymbol A^{-1}$?"),
          vals, function (m) { return M$(pm(m)); },
          L2(l, "$\\det(\\boldsymbol A) = " + tex(D) + "$ e $\\boldsymbol A^{-1} = " + pm(B) + "$. Verifica: $\\boldsymbol A\\boldsymbol A^{-1} = \\boldsymbol I$. Con la matrice aggiunta: $\\boldsymbol A^{-1} = \\frac{1}{\\det(\\boldsymbol A)}\\boldsymbol C'$, cofattori con il segno $(-1)^{i+j}$ e trasposti; dimenticare il segno o la trasposizione dà le altre risposte.",
            "$\\det(\\boldsymbol A) = " + tex(D) + "$ and $\\boldsymbol A^{-1} = " + pm(B) + "$. Check: $\\boldsymbol A\\boldsymbol A^{-1} = \\boldsymbol I$. With the adjugate: $\\boldsymbol A^{-1} = \\frac{1}{\\det(\\boldsymbol A)}\\boldsymbol C'$, cofactors with the sign $(-1)^{i+j}$, transposed; forgetting the sign or the transposition gives the other answers."),
          { A: A });
      });
    }
  });

  // C2. sistema con parametro k (Rouché–Capelli)
  add({
    id: "la-g-rouche-k", livello: "complessa", capitolo: "linear-systems",
    link: LK("systems", "1-existence-and-uniqueness-of-solutions", "1-esistenza-e-unicita-delle-soluzioni"),
    genera: function (r, l) {
      var tipo = pick(r, ["none", "inf"]);
      return retry(function () {
        var a = ri(r, -2, 3), b = ri(r, -2, 3), c = ri(r, -2, 3), k0 = rnz(r, -4, 4), e = ri(r, -4, 4), f = ri(r, -4, 4);
        var l21 = rnz(r, -2, 2), l31 = ri(r, -2, 2), l32 = rnz(r, -2, 2);
        var m = rnz(r, -3, 3), s = pick(r, [1, 2, -1]);
        // A(k) = Ac + k * Ak, b(k) = bc + k * bk
        var Ac = [[1, a, b], [l21, l21 * a + 1, l21 * b + c], [l31, l31 * a + l32, l31 * b + l32 * c - k0]];
        var Ak = [[0, 0, 0], [0, 0, 0], [0, 0, 1]];
        var bc = [e, l21 * e + f, l31 * e + l32 * f + (tipo === "none" ? m : -s * k0)];
        var bk = [0, 0, tipo === "none" ? 0 : s];
        if (Ac.some(function (rw) { return rw.some(function (v) { return Math.abs(v) > 9; }); })) return null;
        if (Math.abs(bc[2]) > 15 || Math.abs(bc[1]) > 12) return null;
        var linK = function (ck, c0) { // ck k + c0
          var t = ck === 0 ? "" : (ck === 1 ? "k" : ck === -1 ? "-k" : ck + "k");
          if (c0 === 0) return t || "0";
          return t + (c0 > 0 ? (t ? "+" : "") + c0 : String(c0));
        };
        var r1 = eq(Ac[0], bc[0]), r2 = eq(Ac[1], bc[1]);
        var a33 = linK(1, Ac[2][2]);
        var r3 = lc([[Ac[2][0], "x_1"], [Ac[2][1], "x_2"]]);
        r3 = (r3 === "0" ? "" : r3 + " + ") + "(" + a33 + ")\\,x_3 = " + linK(bk[2], bc[2]);
        var cas = tipo;
        var vals = [{ k: k0, caso: cas }, { k: k0, caso: cas === "none" ? "inf" : "none" }, { k: -k0, caso: cas }, { k: null, caso: "always" }];
        var fmt = function (o) {
          if (o.caso === "always") return L2(l, "esattamente una soluzione per ogni $k \\in \\R$", "exactly one solution for every $k \\in \\R$");
          var t = o.caso === "none" ? L2(l, "nessuna soluzione", "no solution") : L2(l, "infinite soluzioni (un parametro libero)", "infinitely many solutions (one free parameter)");
          return L2(l, "esattamente una soluzione se $k \\neq " + o.k + "$; " + t + " se $k = " + o.k + "$", "exactly one solution if $k \\neq " + o.k + "$; " + t + " if $k = " + o.k + "$");
        };
        return out(
          L2(l, "Al variare del parametro reale $k$, quante soluzioni ha il sistema $\\begin{cases} " + r1 + " \\\\ " + r2 + " \\\\ " + r3 + " \\end{cases}$?",
            "Depending on the real parameter $k$, how many solutions does the system $\\begin{cases} " + r1 + " \\\\ " + r2 + " \\\\ " + r3 + " \\end{cases}$ have?"),
          vals, fmt,
          L2(l, "L'eliminazione di Gauss porta l'ultima riga a $(0\\;\\; 0\\;\\; " + linK(1, -k0) + " \\mid " + (tipo === "none" ? m : linK(s, -s * k0)) + ")$. Se $k \\neq " + k0 + "$: $\\text{rank}(\\boldsymbol A) = \\text{rank}(\\boldsymbol A|\\boldsymbol b) = 3$, una sola soluzione. Se $k = " + k0 + "$: " + (tipo === "none" ? "$\\text{rank}(\\boldsymbol A) = 2 < 3 = \\text{rank}(\\boldsymbol A|\\boldsymbol b)$, nessuna soluzione." : "$\\text{rank}(\\boldsymbol A) = \\text{rank}(\\boldsymbol A|\\boldsymbol b) = 2 < 3$, infinite soluzioni con un parametro libero."),
            "Gaussian elimination turns the last row into $(0\\;\\; 0\\;\\; " + linK(1, -k0) + " \\mid " + (tipo === "none" ? m : linK(s, -s * k0)) + ")$. If $k \\neq " + k0 + "$: $\\text{rank}(\\boldsymbol A) = \\text{rank}(\\boldsymbol A|\\boldsymbol b) = 3$, a unique solution. If $k = " + k0 + "$: " + (tipo === "none" ? "$\\text{rank}(\\boldsymbol A) = 2 < 3 = \\text{rank}(\\boldsymbol A|\\boldsymbol b)$, no solution." : "$\\text{rank}(\\boldsymbol A) = \\text{rank}(\\boldsymbol A|\\boldsymbol b) = 2 < 3$, infinitely many solutions with one free parameter.")),
          { Ac: Ac, Ak: Ak, bc: bc, bk: bk });
      });
    }
  });

  // C3. fattorizzazione PLU con scambio al secondo passo e determinante
  add({
    id: "la-g-plu3", livello: "complessa", capitolo: "lu-factorization",
    link: LK("lu", "box-ex_plu-3x3-5"),
    genera: function (r, l) {
      return retry(function () {
        var R1 = [pick(r, [1, 2, -1, -2]), ri(r, -3, 3), ri(r, -3, 3)];
        var l21 = rnz(r, -2, 3), l31 = rnz(r, -2, 3), s = rnz(r, -3, 3), t = rnz(r, -3, 3), w = ri(r, -3, 3);
        if (l21 === l31 || l21 === -l31) return null;
        var A = [R1.slice(), [l21 * R1[0], l21 * R1[1], l21 * R1[2] + s], [l31 * R1[0], l31 * R1[1] + t, l31 * R1[2] + w]];
        if (A.some(function (rw) { return rw.some(function (v) { return Math.abs(v) > 12; }); })) return null;
        var D = -R1[0] * t * s;
        var Lc = [[1, 0, 0], [l31, 1, 0], [l21, 0, 1]], Ln = [[1, 0, 0], [l21, 1, 0], [l31, 0, 1]];
        var vals = [{ L: Lc, det: D }, { L: Ln, det: D }, { L: Lc, det: -D }, { L: Ln, det: -D }];
        var P = [[1, 0, 0], [0, 0, 1], [0, 1, 0]], U = [R1, [0, t, w], [0, 0, s]];
        return out(
          L2(l, "Si calcola la fattorizzazione $\\boldsymbol P\\boldsymbol A = \\boldsymbol L\\boldsymbol U$ di $\\boldsymbol A = " + pm(A) + "$ con l'eliminazione di Gauss, scambiando due righe solo quando il pivot è nullo; risulta $\\boldsymbol P = " + pm(P) + "$. Quali sono $\\boldsymbol L$ e $\\det(\\boldsymbol A)$?",
            "The factorization $\\boldsymbol P\\boldsymbol A = \\boldsymbol L\\boldsymbol U$ of $\\boldsymbol A = " + pm(A) + "$ is computed by Gaussian elimination, swapping two rows only when the pivot is zero; it turns out that $\\boldsymbol P = " + pm(P) + "$. What are $\\boldsymbol L$ and $\\det(\\boldsymbol A)$?"),
          vals, function (o) { return "$\\boldsymbol L = " + pm(o.L) + "$, $\\det(\\boldsymbol A) = " + o.det + "$"; },
          L2(l, "Primo passo: $\\ell_{21} = " + l21 + "$, $\\ell_{31} = " + l31 + "$; la posizione $(2,2)$ diventa nulla e si scambiano $R_2 \\leftrightarrow R_3$, scambiando anche i moltiplicatori già calcolati; poi $\\ell_{32} = 0$. Si ottiene $\\boldsymbol U = " + pm(U) + "$ e, con $s = 1$ scambio, $\\det(\\boldsymbol A) = (-1)^1 \\prod_i u_{ii} = " + D + "$.",
            "First step: $\\ell_{21} = " + l21 + "$, $\\ell_{31} = " + l31 + "$; position $(2,2)$ becomes zero and $R_2 \\leftrightarrow R_3$ is performed, swapping also the multipliers already computed; then $\\ell_{32} = 0$. We get $\\boldsymbol U = " + pm(U) + "$ and, with $s = 1$ swap, $\\det(\\boldsymbol A) = (-1)^1 \\prod_i u_{ii} = " + D + "$."),
          { A: A, P: P });
      });
    }
  });
})();
