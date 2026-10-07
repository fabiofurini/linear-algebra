/* Motore di calcolo del laboratorio di Algebra Lineare.
 *
 * Aritmetica ESATTA con frazioni (BigInt): lo studente lavora a mano con le
 * frazioni, il laboratorio mostra -3/2 e non -1.5000001.
 * Ogni algoritmo restituisce la lista dei PASSI (operazione, matrice dopo
 * l'operazione, commento) con la notazione delle dispense:
 *   R_i <-> R_k,  R_i <- lambda R_i,  R_i <- R_i + lambda R_k.
 *
 * Funziona nel browser (oggetto globale LA) e in Node (require), dove lo
 * usano i test che confrontano i risultati con SymPy.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.LA = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // ------------------------------------------------------------------ frazioni
  function gcd(a, b) {
    if (a < 0n) a = -a;
    if (b < 0n) b = -b;
    while (b) { const t = a % b; a = b; b = t; }
    return a;
  }

  class Frac {
    constructor(n, d) {
      n = BigInt(n);
      d = d === undefined ? 1n : BigInt(d);
      if (d === 0n) throw new Error("division by zero");
      if (d < 0n) { n = -n; d = -d; }
      const g = gcd(n, d) || 1n;
      this.n = n / g;
      this.d = d / g;
    }
    static of(x) {
      if (x instanceof Frac) return x;
      if (typeof x === "bigint") return new Frac(x);
      if (typeof x === "number") {
        if (Number.isInteger(x)) return new Frac(BigInt(x));
        return Frac.parse(String(x));
      }
      const f = Frac.parse(String(x));
      if (!f) throw new Error("not a number: " + x);
      return f;
    }
    /** "3", "-3/4", "0.25", "1,5" (virgola italiana), "-.5", "2e3" → Frac, oppure null */
    static parse(s) {
      if (s === null || s === undefined) return null;
      s = String(s).trim().replace(/\s+/g, "").replace(/−/g, "-").replace(",", ".");
      if (s === "" || s === "+" || s === "-") return null;
      let m = s.match(/^([+-]?\d+)\/([+-]?\d+)$/);
      if (m) {
        const d = BigInt(m[2]);
        if (d === 0n) return null;
        return new Frac(BigInt(m[1]), d);
      }
      m = s.match(/^([+-]?)(\d*)(?:\.(\d*))?(?:[eE]([+-]?\d+))?$/);
      if (!m || (m[2] === "" && (m[3] === undefined || m[3] === ""))) return null;
      const sign = m[1] === "-" ? -1n : 1n;
      const intPart = m[2] || "0";
      const dec = m[3] || "";
      let n = BigInt(intPart + dec) * sign;
      let d = 10n ** BigInt(dec.length);
      const e = m[4] ? parseInt(m[4], 10) : 0;
      if (Math.abs(e) > 60) return null;
      if (e > 0) n *= 10n ** BigInt(e);
      if (e < 0) d *= 10n ** BigInt(-e);
      return new Frac(n, d);
    }
    add(o) { o = Frac.of(o); return new Frac(this.n * o.d + o.n * this.d, this.d * o.d); }
    sub(o) { o = Frac.of(o); return new Frac(this.n * o.d - o.n * this.d, this.d * o.d); }
    mul(o) { o = Frac.of(o); return new Frac(this.n * o.n, this.d * o.d); }
    div(o) { o = Frac.of(o); if (o.n === 0n) throw new Error("division by zero"); return new Frac(this.n * o.d, this.d * o.n); }
    neg() { return new Frac(-this.n, this.d); }
    abs() { return this.n < 0n ? this.neg() : this; }
    inv() { return new Frac(this.d, this.n); }
    pow(k) { let r = ONE; for (let i = 0; i < k; i++) r = r.mul(this); return r; }
    isZero() { return this.n === 0n; }
    isOne() { return this.n === 1n && this.d === 1n; }
    isInt() { return this.d === 1n; }
    sign() { return this.n > 0n ? 1 : this.n < 0n ? -1 : 0; }
    eq(o) { o = Frac.of(o); return this.n === o.n && this.d === o.d; }
    cmp(o) { o = Frac.of(o); const a = this.n * o.d, b = o.n * this.d; return a < b ? -1 : a > b ? 1 : 0; }
    toNumber() { return Number(this.n) / Number(this.d); }
    toString() { return this.d === 1n ? this.n.toString() : this.n + "/" + this.d; }
    /** LaTeX: 3, -3, \frac{3}{4}, -\frac{3}{4} */
    tex() {
      if (this.d === 1n) return this.n.toString();
      const a = this.n < 0n ? -this.n : this.n;
      return (this.n < 0n ? "-" : "") + "\\frac{" + a + "}{" + this.d + "}";
    }
    /** come tex() ma con le parentesi se negativo (per i prodotti: 2\cdot(-3)) */
    texP() { return this.n < 0n ? "\\left(" + this.tex() + "\\right)" : this.tex(); }
  }
  const ZERO = new Frac(0n), ONE = new Frac(1n);

  // ------------------------------------------------------------------ matrici
  const M = {
    of(rows) { return rows.map((r) => r.map((x) => Frac.of(x))); },
    clone(A) { return A.map((r) => r.slice()); },
    rows(A) { return A.length; },
    cols(A) { return A.length ? A[0].length : 0; },
    identity(n) { return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? ONE : ZERO))); },
    zeros(m, n) { return Array.from({ length: m }, () => Array.from({ length: n }, () => ZERO)); },
    transpose(A) { return A[0].map((_, j) => A.map((r) => r[j])); },
    mul(A, B) {
      const m = A.length, p = B.length, n = B[0].length;
      if (A[0].length !== p) throw new Error("dimensions");
      const C = M.zeros(m, n);
      for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
          let s = ZERO;
          for (let k = 0; k < p; k++) s = s.add(A[i][k].mul(B[k][j]));
          C[i][j] = s;
        }
      return C;
    },
    eq(A, B) {
      if (A.length !== B.length || A[0].length !== B[0].length) return false;
      return A.every((r, i) => r.every((x, j) => x.eq(B[i][j])));
    },
    minor(A, i, j) { return A.filter((_, r) => r !== i).map((r) => r.filter((_, c) => c !== j)); },
    hcat(A, B) { return A.map((r, i) => r.concat(B[i])); },
    split(A, k) { return [A.map((r) => r.slice(0, k)), A.map((r) => r.slice(k))]; },
    toStrings(A) { return A.map((r) => r.map((x) => x.toString())); },
    isUpperTriangular(A) { return A.every((r, i) => r.every((x, j) => j >= i || x.isZero())); },
    isLowerTriangular(A) { return A.every((r, i) => r.every((x, j) => j <= i || x.isZero())); },
    isSymmetric(A) { return A.length === A[0].length && A.every((r, i) => r.every((x, j) => x.eq(A[j][i]))); },
  };

  // ------------------------------------------------------------------ LaTeX
  /** Matrice in LaTeX. opt.bar = colonna dopo cui va la barra verticale
   * (matrice aumentata), opt.piv = [r, c] pivot evidenziato,
   * opt.rows = righe appena modificate, opt.cells = {"r,c": classe}. */
  function texMatrix(A, opt) {
    opt = opt || {};
    const n = A.length ? A[0].length : 0;
    const righe = A.map((r, i) =>
      r.map((x, j) => {
        let t = x.tex();
        const key = i + "," + j;
        if (opt.piv && opt.piv[0] === i && opt.piv[1] === j) t = "\\class{la-piv}{" + t + "}";
        else if (opt.cells && opt.cells[key]) t = "\\class{" + opt.cells[key] + "}{" + t + "}";
        else if (opt.rows && opt.rows.indexOf(i) >= 0) t = "\\class{la-mod}{" + t + "}";
        return t;
      }).join(" & ")
    );
    const corpo = righe.join(" \\\\[0.4ex] ");
    if (opt.bar !== undefined && opt.bar !== null && opt.bar > 0 && opt.bar < n) {
      const spec = "c".repeat(opt.bar) + "|" + "c".repeat(n - opt.bar);
      return "\\left(\\begin{array}{" + spec + "}" + corpo + "\\end{array}\\right)";
    }
    return "\\begin{pmatrix}" + corpo + "\\end{pmatrix}";
  }

  /** coefficiente davanti a un simbolo: 1→"", -1→"-", 2→"2", 1/2→"\frac{1}{2}" */
  function texCoef(c) {
    if (c.isOne()) return "";
    if (c.eq(-1)) return "-";
    return c.tex();
  }
  const R = (i) => "R_{" + (i + 1) + "}";

  /** Operazione elementare in LaTeX, con la notazione delle dispense. */
  function texOp(op) {
    if (op.type === "swap") return R(op.i) + " \\leftrightarrow " + R(op.k);
    if (op.type === "scale") return R(op.i) + " \\leftarrow " + texCoef(op.c) + R(op.i);
    if (op.type === "add") {
      const c = op.c;
      const a = c.abs();
      return R(op.i) + " \\leftarrow " + R(op.i) + (c.sign() < 0 ? " - " : " + ") + (a.isOne() ? "" : a.tex()) + R(op.k);
    }
    return "";
  }

  function applyOp(A, op) {
    const B = M.clone(A);
    if (op.type === "swap") { const t = B[op.i]; B[op.i] = B[op.k]; B[op.k] = t; }
    else if (op.type === "scale") B[op.i] = B[op.i].map((x) => x.mul(op.c));
    else if (op.type === "add") B[op.i] = B[op.i].map((x, j) => x.add(op.c.mul(B[op.k][j])));
    return B;
  }

  // ------------------------------------------------------------------ Gauss
  /**
   * Eliminazione di Gauss (forma a scala) o di Gauss–Jordan (forma ridotta).
   * opt.pivoting: "first" (primo elemento non nullo, come nelle dispense) o
   *               "partial" (massimo in valore assoluto: pivoting parziale)
   * opt.coefCols: quante colonne possono contenere pivot (per (A|b) e (A|I)
   *               i pivot si cercano solo nel blocco dei coefficienti)
   * opt.jordan:   true = Gauss–Jordan: pivot normalizzati a 1 e zeri anche sopra
   * opt.stopOnMissingPivot: true = si ferma alla prima colonna senza pivot
   *               (inversa: la matrice è singolare)
   * Restituisce {steps, result, pivots: [[r,c]...], swaps, missing}.
   */
  function gauss(A0, opt) {
    opt = opt || {};
    const piv = opt.pivoting || "first";
    let A = M.clone(A0);
    const m = A.length, n = A[0].length;
    const nc = opt.coefCols === undefined ? n : opt.coefCols;
    const steps = [];
    const pivots = [];
    let swaps = 0;
    let r = 0;
    let missing = null;
    const push = (op, note, extra) => {
      if (op) A = applyOp(A, op);
      steps.push(Object.assign({ op: op, matrix: M.clone(A), note: note }, extra || {}));
    };
    for (let c = 0; c < nc && r < m; c++) {
      // scelta del pivot nella colonna c, righe r..m-1
      let p = -1;
      if (piv === "partial") {
        let best = null;
        for (let i = r; i < m; i++) if (!A[i][c].isZero() && (best === null || A[i][c].abs().cmp(best) > 0)) { best = A[i][c].abs(); p = i; }
      } else {
        for (let i = r; i < m; i++) if (!A[i][c].isZero()) { p = i; break; }
      }
      if (p < 0) {
        steps.push({ op: null, matrix: M.clone(A), note: { key: "noPivot", col: c, row: r } });
        if (opt.stopOnMissingPivot) { missing = c; break; }
        continue;
      }
      if (p !== r) {
        swaps++;
        const why = piv === "partial" ? "swapPartial" : "swapZero";
        push({ type: "swap", i: r, k: p }, { key: why, col: c, row: r, from: p, val: A[p][c] }, { piv: [r, c], rowsMod: [r, p] });
      } else if (piv === "partial" && r < m - 1) {
        steps.push({ op: null, matrix: M.clone(A), note: { key: "partialStay", col: c, row: r, val: A[r][c] }, piv: [r, c] });
      }
      pivots.push([r, c]);
      if (opt.jordan && !A[r][c].isOne()) {
        const k = A[r][c].inv();
        push({ type: "scale", i: r, c: k }, { key: "normalize", row: r, col: c }, { piv: [r, c], rowsMod: [r] });
      }
      for (let i = opt.jordan ? 0 : r + 1; i < m; i++) {
        if (i === r || A[i][c].isZero()) continue;
        const lam = A[i][c].div(A[r][c]).neg();
        push({ type: "add", i: i, k: r, c: lam }, { key: i > r ? "eliminate" : "eliminateUp", row: i, col: c, piv: r, mult: lam.neg() }, { piv: [r, c], rowsMod: [i] });
      }
      r++;
    }
    return { steps: steps, result: A, pivots: pivots, swaps: swaps, missing: missing };
  }

  function rank(A, opt) {
    const g = gauss(A, opt || {});
    return { rank: g.pivots.length, steps: g.steps, result: g.result, pivots: g.pivots };
  }

  // ------------------------------------------------------------------ determinante
  function detNum(A) {
    // per eliminazione, senza passi (uso interno)
    const n = A.length;
    if (n === 0) return ONE;
    const g = gauss(A, { pivoting: "first" });
    if (g.pivots.length < n) return ZERO;
    let d = g.swaps % 2 ? ONE.neg() : ONE;
    for (let i = 0; i < n; i++) d = d.mul(g.result[i][i]);
    return d;
  }

  /** Determinante per eliminazione: tiene traccia dell'effetto di ogni operazione. */
  function detElimination(A, opt) {
    const n = A.length;
    const g = gauss(A, { pivoting: (opt && opt.pivoting) || "first" });
    let sign = 1;
    const steps = g.steps.map((s) => {
      if (s.op && s.op.type === "swap") sign = -sign;
      return Object.assign({}, s, { sign: sign });
    });
    const U = g.result;
    let det = ZERO;
    let diag = [];
    if (g.pivots.length === n) {
      det = sign < 0 ? ONE.neg() : ONE;
      for (let i = 0; i < n; i++) { det = det.mul(U[i][i]); diag.push(U[i][i]); }
    }
    return { det: det, steps: steps, U: U, swaps: g.swaps, sign: sign, diag: diag, singular: g.pivots.length < n };
  }

  /** Sarrus (3×3): restituisce i sei prodotti, come nelle dispense. */
  function sarrus(A) {
    const [a, b, c] = A[0], [d, e, f] = A[1], [g, h, i] = A[2];
    const plus = [[a, e, i], [b, f, g], [c, d, h]];
    const minus = [[c, e, g], [b, d, i], [a, f, h]];
    const val = (t) => t[0].mul(t[1]).mul(t[2]);
    let det = ZERO;
    plus.forEach((t) => (det = det.add(val(t))));
    minus.forEach((t) => (det = det.sub(val(t))));
    return { det: det, plus: plus, minus: minus, plusVals: plus.map(val), minusVals: minus.map(val) };
  }

  /** riga o colonna con più zeri (per lo sviluppo di Laplace) */
  function bestLine(A) {
    const n = A.length;
    let best = { type: "row", idx: 0, zeros: -1 };
    for (let i = 0; i < n; i++) {
      const z = A[i].filter((x) => x.isZero()).length;
      if (z > best.zeros) best = { type: "row", idx: i, zeros: z };
    }
    for (let j = 0; j < n; j++) {
      const z = A.filter((r) => r[j].isZero()).length;
      if (z > best.zeros) best = { type: "col", idx: j, zeros: z };
    }
    return best;
  }

  /**
   * Sviluppo di Laplace ricorsivo. Restituisce un albero:
   * {matrix, det, line:{type,idx}, terms:[{i,j,a,sign,minor,sub}]} ; per n<=2 formula diretta.
   */
  function laplace(A, line) {
    const n = A.length;
    if (n === 1) return { matrix: A, det: A[0][0], n: 1 };
    if (n === 2) {
      const det = A[0][0].mul(A[1][1]).sub(A[0][1].mul(A[1][0]));
      return { matrix: A, det: det, n: 2 };
    }
    line = line || bestLine(A);
    const terms = [];
    let det = ZERO;
    for (let t = 0; t < n; t++) {
      const i = line.type === "row" ? line.idx : t;
      const j = line.type === "row" ? t : line.idx;
      const a = A[i][j];
      const sign = (i + j) % 2 === 0 ? 1 : -1;
      if (a.isZero()) { terms.push({ i: i, j: j, a: a, sign: sign, zero: true }); continue; }
      const minor = M.minor(A, i, j);
      const sub = laplace(minor);
      det = det.add(a.mul(sub.det).mul(sign));
      terms.push({ i: i, j: j, a: a, sign: sign, minor: minor, sub: sub });
    }
    return { matrix: A, det: det, n: n, line: { type: line.type, idx: line.idx }, terms: terms };
  }

  // ------------------------------------------------------------------ inversa
  /** Gauss–Jordan su (A | I). Restituisce {steps, inverse|null, singular, col} */
  function inverseGJ(A, opt) {
    const n = A.length;
    const aug = M.hcat(A, M.identity(n));
    const g = gauss(aug, { pivoting: (opt && opt.pivoting) || "first", coefCols: n, jordan: true, stopOnMissingPivot: true });
    if (g.missing !== null) return { steps: g.steps, inverse: null, singular: true, col: g.missing, result: g.result };
    const [, inv] = M.split(g.result, n);
    return { steps: g.steps, inverse: inv, singular: false, result: g.result };
  }

  /** cofattori: C_ij = (-1)^{i+j} det(A_ij); A^{-1} = adj(A)/det(A), adj = C^T */
  function inverseCofactors(A) {
    const n = A.length;
    const det = detNum(A);
    const C = M.zeros(n, n);
    const minors = [];
    for (let i = 0; i < n; i++) {
      minors.push([]);
      for (let j = 0; j < n; j++) {
        const mij = n === 1 ? ONE : detNum(M.minor(A, i, j));
        minors[i].push(mij);
        C[i][j] = (i + j) % 2 ? mij.neg() : mij;
      }
    }
    const adj = M.transpose(C);
    const inverse = det.isZero() ? null : adj.map((r) => r.map((x) => x.div(det)));
    return { det: det, cof: C, minors: minors, adj: adj, inverse: inverse };
  }

  // ------------------------------------------------------------------ LU / PLU
  /**
   * PA = LU con L triangolare inferiore con 1 sulla diagonale, moltiplicatori
   * l_ij memorizzati in L; ogni scambio di righe è registrato in P (e scambia
   * anche i moltiplicatori già calcolati).
   * opt.pivoting: "none" (LU: errore se serve uno scambio), "first", "partial"
   */
  function lu(A0, opt) {
    opt = opt || {};
    const piv = opt.pivoting || "first";
    const n = A0.length;
    let U = M.clone(A0);
    let L = M.zeros(n, n);
    let P = M.identity(n);
    const steps = [];
    let swaps = 0;
    const snap = (op, note, extra) => steps.push(Object.assign({ op: op, U: M.clone(U), L: withDiag(L), P: M.clone(P), note: note }, extra || {}));
    function withDiag(Lm) { return Lm.map((r, i) => r.map((x, j) => (i === j ? ONE : j < i ? x : ZERO))); }
    for (let k = 0; k < n - 1; k++) {
      let p = -1;
      if (piv === "partial") {
        let best = null;
        for (let i = k; i < n; i++) if (!U[i][k].isZero() && (best === null || U[i][k].abs().cmp(best) > 0)) { best = U[i][k].abs(); p = i; }
      } else {
        for (let i = k; i < n; i++) if (!U[i][k].isZero()) { p = i; break; }
      }
      if (p < 0) { snap(null, { key: "luZeroCol", col: k }); continue; }
      if (piv === "none" && p !== k) {
        return { ok: false, needsPivot: true, col: k, steps: steps };
      }
      if (p !== k) {
        swaps++;
        [U[k], U[p]] = [U[p], U[k]];
        [P[k], P[p]] = [P[p], P[k]];
        for (let j = 0; j < k; j++) { const t = L[k][j]; L[k][j] = L[p][j]; L[p][j] = t; }
        snap({ type: "swap", i: k, k: p }, { key: piv === "partial" ? "swapPartial" : "swapZero", col: k, row: k, from: p }, { piv: [k, k] });
      }
      for (let i = k + 1; i < n; i++) {
        if (U[i][k].isZero()) continue;
        const l = U[i][k].div(U[k][k]);
        L[i][k] = l;
        U[i] = U[i].map((x, j) => x.sub(l.mul(U[k][j])));
        snap({ type: "add", i: i, k: k, c: l.neg() }, { key: "luMult", row: i, col: k, mult: l }, { piv: [k, k] });
      }
    }
    L = withDiag(L);
    return { ok: true, L: L, U: U, P: P, steps: steps, swaps: swaps };
  }

  /** L y = b (in avanti) */
  function forwardSub(L, b) {
    const n = L.length, y = [];
    const lines = [];
    for (let i = 0; i < n; i++) {
      let s = b[i];
      for (let j = 0; j < i; j++) s = s.sub(L[i][j].mul(y[j]));
      y.push(s.div(L[i][i]));
      lines.push({ i: i, value: y[i] });
    }
    return { y: y, lines: lines };
  }
  /** U x = y (all'indietro), U quadrata invertibile */
  function backSub(U, y) {
    const n = U.length, x = new Array(n);
    const lines = [];
    for (let i = n - 1; i >= 0; i--) {
      let s = y[i];
      for (let j = i + 1; j < n; j++) s = s.sub(U[i][j].mul(x[j]));
      x[i] = s.div(U[i][i]);
      lines.push({ i: i, value: x[i] });
    }
    return { x: x, lines: lines };
  }

  // ------------------------------------------------------------------ sistemi
  /**
   * Risolve A x = b con Gauss su (A|b) + Rouché–Capelli + sostituzione all'indietro.
   * Restituisce {steps, echelon, rankA, rankAb, kind: "unique"|"infinite"|"none",
   *   x0, dirs (vettori dei parametri), free (indici liberi), back (righe della sostituzione)}
   */
  function solve(A, b, opt) {
    opt = opt || {};
    const m = A.length, n = A[0].length;
    const aug = M.hcat(A, b.map((x) => [x]));
    const g = gauss(aug, { pivoting: opt.pivoting || "first", coefCols: n });
    const E = g.result;
    const rankA = g.pivots.length;
    let rankAb = rankA;
    let badRow = -1;
    for (let i = rankA; i < m; i++) if (!E[i][n].isZero()) { rankAb = rankA + 1; badRow = i; break; }
    const out = { steps: g.steps, echelon: E, rankA: rankA, rankAb: rankAb, n: n, pivots: g.pivots };
    if (rankAb > rankA) return Object.assign(out, { kind: "none", badRow: badRow });
    const pivCols = g.pivots.map((p) => p[1]);
    const free = [];
    for (let j = 0; j < n; j++) if (pivCols.indexOf(j) < 0) free.push(j);
    // ogni incognita = vettore di coefficienti [costante, t_1, ..., t_f]
    const f = free.length;
    const expr = new Array(n);
    free.forEach((j, k) => { const v = new Array(f + 1).fill(ZERO); v[k + 1] = ONE; expr[j] = v; });
    const back = [];
    for (let q = g.pivots.length - 1; q >= 0; q--) {
      const [r, c] = g.pivots[q];
      // E[r][c] x_c + sum_{j>c} E[r][j] x_j = E[r][n]
      let v = new Array(f + 1).fill(ZERO);
      v[0] = E[r][n];
      for (let j = c + 1; j < n; j++) {
        if (E[r][j].isZero()) continue;
        v = v.map((x, k) => x.sub(E[r][j].mul(expr[j][k])));
      }
      v = v.map((x) => x.div(E[r][c]));
      expr[c] = v;
      back.push({ row: r, col: c, expr: v });
    }
    const x0 = expr.map((v) => v[0]);
    const dirs = free.map((_, k) => expr.map((v) => v[k + 1]));
    return Object.assign(out, { kind: f === 0 ? "unique" : "infinite", free: free, expr: expr, x0: x0, dirs: dirs, back: back });
  }

  /** Regola di Cramer (A quadrata, det ≠ 0) */
  function cramer(A, b) {
    const n = A.length;
    const det = detNum(A);
    const parts = [];
    for (let i = 0; i < n; i++) {
      const Ai = A.map((r, k) => r.map((x, j) => (j === i ? b[k] : x)));
      const di = detNum(Ai);
      parts.push({ i: i, Ai: Ai, det: di, x: det.isZero() ? null : di.div(det) });
    }
    return { det: det, parts: parts, x: det.isZero() ? null : parts.map((p) => p.x) };
  }

  // ------------------------------------------------------------------ polinomi
  // polinomio = array di Frac, p[k] = coefficiente di x^k
  const Poly = {
    trim(p) { p = p.slice(); while (p.length > 1 && p[p.length - 1].isZero()) p.pop(); return p; },
    add(p, q) { const n = Math.max(p.length, q.length); const r = []; for (let i = 0; i < n; i++) r.push((p[i] || ZERO).add(q[i] || ZERO)); return Poly.trim(r); },
    sub(p, q) { return Poly.add(p, q.map((x) => x.neg())); },
    mul(p, q) { const r = new Array(p.length + q.length - 1).fill(ZERO); p.forEach((a, i) => q.forEach((b, j) => (r[i + j] = r[i + j].add(a.mul(b))))); return Poly.trim(r); },
    scale(p, c) { return Poly.trim(p.map((x) => x.mul(c))); },
    evalF(p, x) { let r = ZERO; for (let i = p.length - 1; i >= 0; i--) r = r.mul(x).add(p[i]); return r; },
    evalN(p, x) { let r = 0; for (let i = p.length - 1; i >= 0; i--) r = r * x + p[i].toNumber(); return r; },
    deg(p) { return Poly.trim(p).length - 1; },
    /** divisione per (x - r) (Ruffini) */
    deflate(p, r) { const n = p.length - 1; const q = new Array(n).fill(ZERO); let acc = ZERO; for (let i = n; i >= 1; i--) { acc = acc.mul(r).add(p[i]); q[i - 1] = acc; } return q; },
    /** LaTeX in variabile v (default \lambda), dal grado massimo */
    tex(p, v) {
      v = v || "\\lambda";
      p = Poly.trim(p);
      let s = "";
      for (let k = p.length - 1; k >= 0; k--) {
        const c = p[k];
        if (c.isZero()) continue;
        const neg = c.sign() < 0;
        const a = c.abs();
        let term;
        if (k === 0) term = a.tex();
        else term = (a.isOne() ? "" : a.tex()) + v + (k > 1 ? "^{" + k + "}" : "");
        if (s === "") s = (neg ? "-" : "") + term;
        else s += (neg ? " - " : " + ") + term;
      }
      return s || "0";
    },
  };

  /** det(A - λI) come polinomio in λ (sviluppo di Laplace su matrici di polinomi) */
  function charPoly(A) {
    const n = A.length;
    const P = A.map((r, i) => r.map((x, j) => (i === j ? [x, ONE.neg()] : [x])));
    function detP(B) {
      const k = B.length;
      if (k === 1) return B[0][0];
      if (k === 2) return Poly.sub(Poly.mul(B[0][0], B[1][1]), Poly.mul(B[0][1], B[1][0]));
      let s = [ZERO];
      for (let j = 0; j < k; j++) {
        if (Poly.trim(B[0][j]).length === 1 && B[0][j][0].isZero()) continue;
        const minor = B.slice(1).map((r) => r.filter((_, c) => c !== j));
        let t = Poly.mul(B[0][j], detP(minor));
        if (j % 2) t = t.map((x) => x.neg());
        s = Poly.add(s, t);
      }
      return s;
    }
    return Poly.trim(detP(P));
  }

  function lcmBig(a, b) { return (a / gcd(a, b)) * b; }

  /** radici razionali di un polinomio a coefficienti razionali (con molteplicità) */
  function rationalRoots(p) {
    p = Poly.trim(p);
    const roots = [];
    // zero come radice
    while (p.length > 1 && p[0].isZero()) { roots.push(ZERO); p = p.slice(1); }
    if (p.length <= 1) return { roots: roots, rest: p };
    // coefficienti interi
    let L = 1n;
    p.forEach((c) => (L = lcmBig(L, c.d)));
    const ints = p.map((c) => (c.n * L) / c.d);
    const divisors = (x) => {
      x = x < 0n ? -x : x;
      const ds = [];
      if (x > 1000000n) return ds; // troppo grande: niente ricerca esaustiva
      for (let d = 1n; d * d <= x; d++) if (x % d === 0n) { ds.push(d); if (d * d !== x) ds.push(x / d); }
      return ds;
    };
    const a0 = ints[0], an = ints[ints.length - 1];
    const cands = [];
    divisors(a0).forEach((pp) => divisors(an).forEach((qq) => { cands.push(new Frac(pp, qq)); cands.push(new Frac(-pp, qq)); }));
    let changed = true;
    while (changed && p.length > 1) {
      changed = false;
      for (const c of cands) {
        if (Poly.evalF(p, c).isZero()) { roots.push(c); p = Poly.deflate(p, c); changed = true; break; }
      }
    }
    return { roots: roots, rest: Poly.trim(p) };
  }

  /** radice quadrata esatta di un razionale non negativo: {exact: Frac} oppure {k, r, d} con valore k*sqrt(r)/d */
  function isqrt(n) {
    if (n < 0n) throw new Error("neg");
    if (n < 2n) return n;
    let x = BigInt(Math.floor(Math.sqrt(Number(n))));
    while (x * x > n) x--;
    while ((x + 1n) * (x + 1n) <= n) x++;
    return x;
  }
  function sqrtFrac(q) {
    // sqrt(n/d) = sqrt(n*d)/d
    const N = q.n * q.d;
    const s = isqrt(N);
    if (s * s === N) return { exact: new Frac(s, q.d) };
    // N = k^2 r con r libero da quadrati
    let k = 1n, r = N;
    for (let p = 2n; p * p <= r && p < 100000n; p++) {
      while (r % (p * p) === 0n) { r /= p * p; k *= p; }
    }
    return { k: k, r: r, d: q.d };
  }
  /** LaTeX di a + s*k*sqrt(r)/d con s = ±1 */
  function texSurd(a, s, sq) {
    // (a*d ± k sqrt r)/d
    const coef = new Frac(sq.k, sq.d);
    const kk = coef.n, dd = coef.d;
    const rad = (kk === 1n ? "" : kk.toString()) + "\\sqrt{" + sq.r + "}";
    if (a.isZero()) return (s < 0 ? "-" : "") + (dd === 1n ? rad : "\\frac{" + rad + "}{" + dd + "}");
    // denominatore comune
    const D = lcmBig(a.d, dd);
    const A = (a.n * D) / a.d;
    const K = (kk * D) / dd;
    const radK = (K === 1n ? "" : K.toString()) + "\\sqrt{" + sq.r + "}";
    const num = A.toString() + (s < 0 ? " - " : " + ") + radK;
    return D === 1n ? num : "\\frac{" + num + "}{" + D + "}";
  }

  /** radici numeriche (Durand–Kerner) di un polinomio */
  function numericRoots(p) {
    p = Poly.trim(p);
    const n = p.length - 1;
    if (n < 1) return [];
    const a = p.map((c) => c.toNumber());
    const lead = a[n];
    const c = a.map((x) => x / lead);
    let z = [];
    for (let k = 0; k < n; k++) z.push([Math.cos((2 * Math.PI * k) / n + 0.4) * 1.5, Math.sin((2 * Math.PI * k) / n + 0.4) * 1.5]);
    const cmul = (x, y) => [x[0] * y[0] - x[1] * y[1], x[0] * y[1] + x[1] * y[0]];
    const cdiv = (x, y) => { const d = y[0] * y[0] + y[1] * y[1]; return [(x[0] * y[0] + x[1] * y[1]) / d, (x[1] * y[0] - x[0] * y[1]) / d]; };
    const ev = (x) => { let r = [1, 0]; for (let k = n - 1; k >= 0; k--) r = [cmul(r, x)[0] + c[k], cmul(r, x)[1]]; return r; };
    for (let it = 0; it < 500; it++) {
      let delta = 0;
      z = z.map((zi, i) => {
        let den = [1, 0];
        z.forEach((zj, j) => { if (i !== j) den = cmul(den, [zi[0] - zj[0], zi[1] - zj[1]]); });
        const step = cdiv(ev(zi), den);
        delta = Math.max(delta, Math.abs(step[0]) + Math.abs(step[1]));
        return [zi[0] - step[0], zi[1] - step[1]];
      });
      if (delta < 1e-14) break;
    }
    return z.map((x) => ({ re: x[0], im: Math.abs(x[1]) < 1e-9 ? 0 : x[1] }));
  }

  /** base del nucleo di B (vettori a coefficienti interi, primitivi) */
  function nullspace(B) {
    const n = B[0].length;
    const g = gauss(B, { pivoting: "first", jordan: true });
    const E = g.result;
    const pivCols = g.pivots.map((p) => p[1]);
    const free = [];
    for (let j = 0; j < n; j++) if (pivCols.indexOf(j) < 0) free.push(j);
    return free.map((fj) => {
      const v = new Array(n).fill(ZERO);
      v[fj] = ONE;
      g.pivots.forEach(([r, c]) => (v[c] = E[r][fj].neg()));
      // a coefficienti interi
      let L = 1n;
      v.forEach((x) => (L = lcmBig(L, x.d)));
      let w = v.map((x) => x.mul(new Frac(L)));
      let G = 0n;
      w.forEach((x) => (G = gcd(G, x.n)));
      if (G > 1n) w = w.map((x) => x.div(new Frac(G)));
      // primo elemento non nullo positivo
      const first = w.find((x) => !x.isZero());
      if (first && first.sign() < 0) w = w.map((x) => x.neg());
      return w;
    });
  }

  /**
   * Autovalori: polinomio caratteristico esatto, radici razionali esatte,
   * radici di un fattore di secondo grado in forma esatta (con radicali),
   * le altre numeriche; autovettori esatti per gli autovalori razionali.
   */
  function eigen(A) {
    const n = A.length;
    const p = charPoly(A);
    const rr = rationalRoots(p);
    const values = []; // {exact: Frac} | {tex, num} | {num, im}
    // molteplicità delle radici razionali
    const groups = [];
    rr.roots.forEach((r) => {
      const g = groups.find((x) => x.value.eq(r));
      if (g) g.mult++;
      else groups.push({ value: r, mult: 1 });
    });
    groups.sort((a, b) => a.value.cmp(b.value));
    groups.forEach((g) => {
      const B = A.map((row, i) => row.map((x, j) => (i === j ? x.sub(g.value) : x)));
      values.push({ type: "rational", value: g.value, mult: g.mult, vectors: nullspace(B) });
    });
    const rest = rr.rest;
    const deg = rest.length - 1;
    if (deg === 2) {
      const [c, b, a] = rest;
      const disc = b.mul(b).sub(a.mul(c).mul(4));
      const mid = b.neg().div(a.mul(2));
      if (disc.sign() >= 0) {
        const sq = sqrtFrac(disc.div(a.mul(a).mul(4)));
        values.push({ type: "surd", tex: texSurd(mid, -1, sq), num: mid.toNumber() - Math.sqrt(disc.toNumber()) / Math.abs(2 * a.toNumber()) });
        values.push({ type: "surd", tex: texSurd(mid, 1, sq), num: mid.toNumber() + Math.sqrt(disc.toNumber()) / Math.abs(2 * a.toNumber()) });
      } else {
        const im = Math.sqrt(-disc.toNumber()) / Math.abs(2 * a.toNumber());
        const sq = sqrtFrac(disc.neg().div(a.mul(a).mul(4)));
        const imTex = sq.exact ? sq.exact.tex() : texSurd(ZERO, 1, sq);
        values.push({ type: "complex", re: mid.toNumber(), im: -im, tex: (mid.isZero() ? "" : mid.tex() + " - ") + (mid.isZero() ? "-" : "") + (imTex === "1" ? "" : imTex) + "\\,i" });
        values.push({ type: "complex", re: mid.toNumber(), im: im, tex: (mid.isZero() ? "" : mid.tex() + " + ") + (imTex === "1" ? "" : imTex) + "\\,i" });
      }
    } else if (deg > 2) {
      numericRoots(rest).forEach((z) => values.push(z.im === 0 ? { type: "numeric", num: z.re } : { type: "complex", re: z.re, im: z.im }));
    }
    return { poly: p, values: values, n: n };
  }

  /** minori principali di nord-ovest (guida) e tutti i minori principali */
  function leadingMinors(A) {
    const n = A.length, out = [];
    for (let k = 1; k <= n; k++) out.push({ k: k, sub: A.slice(0, k).map((r) => r.slice(0, k)), det: detNum(A.slice(0, k).map((r) => r.slice(0, k))) });
    return out;
  }
  function principalMinors(A) {
    const n = A.length, out = [];
    for (let mask = 1; mask < 1 << n; mask++) {
      const idx = [];
      for (let i = 0; i < n; i++) if (mask & (1 << i)) idx.push(i);
      const sub = idx.map((i) => idx.map((j) => A[i][j]));
      out.push({ idx: idx, det: detNum(sub) });
    }
    return out;
  }
  /** classificazione di una matrice simmetrica: criterio di Sylvester + minori principali */
  function definiteness(A) {
    const lead = leadingMinors(A);
    const all = principalMinors(A);
    const n = A.length;
    let kind;
    if (lead.every((m) => m.det.sign() > 0)) kind = "pd";
    else if (lead.every((m) => (m.k % 2 ? m.det.sign() < 0 : m.det.sign() > 0))) kind = "nd";
    else if (all.every((m) => m.det.sign() >= 0)) kind = "psd";
    else if (all.every((m) => (m.idx.length % 2 ? m.det.sign() <= 0 : m.det.sign() >= 0))) kind = "nsd";
    else kind = "indef";
    return { kind: kind, lead: lead, all: all, n: n };
  }

  // ------------------------------------------------------------------ norme
  function norms(x) {
    const l1 = x.reduce((s, v) => s.add(v.abs()), ZERO);
    const sq = x.reduce((s, v) => s.add(v.mul(v)), ZERO);
    const linf = x.reduce((s, v) => (v.abs().cmp(s) > 0 ? v.abs() : s), ZERO);
    return { l1: l1, l2sq: sq, l2: sqrtFrac(sq), linf: linf };
  }
  function quadForm(Q, x) {
    let s = ZERO;
    for (let i = 0; i < x.length; i++) for (let j = 0; j < x.length; j++) s = s.add(x[i].mul(Q[i][j]).mul(x[j]));
    return s;
  }
  function texSqrt(sq) {
    if (sq.exact) return sq.exact.tex();
    return texSurd(ZERO, 1, sq);
  }

  // ------------------------------------------------------------------ generatori (esercizi)
  function rnd(a, b, rng) { return a + Math.floor((rng || Math.random)() * (b - a + 1)); }
  function randMatrix(m, n, a, b, rng) { return Array.from({ length: m }, () => Array.from({ length: n }, () => new Frac(BigInt(rnd(a, b, rng))))); }
  /** matrice unitriangolare inferiore casuale (det = 1) */
  function randUnitLower(n, a, rng) { return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? ONE : j < i ? new Frac(BigInt(rnd(-a, a, rng))) : ZERO))); }
  function randUpper(n, a, diag, rng) {
    return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => {
      if (j < i) return ZERO;
      if (i === j) { let v = 0; while (v === 0) v = rnd(-diag, diag, rng); return new Frac(BigInt(v)); }
      return new Frac(BigInt(rnd(-a, a, rng)));
    }));
  }
  function randPerm(n, rng) {
    const p = [...Array(n).keys()];
    for (let i = n - 1; i > 0; i--) { const j = rnd(0, i, rng); [p[i], p[j]] = [p[j], p[i]]; }
    return p.map((k) => Array.from({ length: n }, (_, j) => (j === k ? ONE : ZERO)));
  }
  const gen = {
    /** matrice con determinante intero piccolo, entrate piccole */
    det(n, rng) { let A; do { A = randMatrix(n, n, -4, 5, rng); } while (n > 2 && A.flat().filter((x) => x.isZero()).length > n * n - n); return A; },
    /** matrice invertibile con inversa a entrate "pulite" (det = ±1 o ±2) */
    inverse(n, rng) {
      for (let t = 0; t < 200; t++) {
        const L = randUnitLower(n, 2, rng), U = randUpper(n, 2, n > 2 ? 1 : 2, rng);
        let A = M.mul(randPerm(n, rng), M.mul(L, U));
        const mx = Math.max(...A.flat().map((x) => Math.abs(x.toNumber())));
        if (mx <= 9) return A;
      }
      return M.of([[2, 1], [1, 1]]);
    },
    /** matrice m×n di rango r */
    rank(m, n, r, rng) {
      for (let t = 0; t < 200; t++) {
        const A = M.mul(randMatrix(m, r, -2, 2, rng), randMatrix(r, n, -2, 3, rng));
        if (rank(A).rank === r && Math.max(...A.flat().map((x) => Math.abs(x.toNumber()))) <= 12) return A;
      }
      return randMatrix(m, n, -3, 3, rng);
    },
    /** sistema quadrato con soluzione intera */
    system(n, rng) {
      const A = gen.inverse(n, rng);
      const x = Array.from({ length: n }, () => new Frac(BigInt(rnd(-4, 4, rng))));
      const b = A.map((r) => r.reduce((s, a, j) => s.add(a.mul(x[j])), ZERO));
      return { A: A, b: b, x: x };
    },
    /** A = LU con L unitriangolare e U intere */
    lu(n, rng) { const L = randUnitLower(n, 3, rng), U = randUpper(n, 4, 4, rng); return { A: M.mul(L, U), L: L, U: U }; },
    /** matrice con autovalori interi: A = S D S^{-1}, S unimodulare */
    eigen(n, rng) {
      for (let t = 0; t < 300; t++) {
        const S = M.mul(randUnitLower(n, 1, rng), M.transpose(randUnitLower(n, 1, rng)));
        const Sinv = inverseGJ(S).inverse;
        const d = Array.from({ length: n }, () => rnd(-3, 5, rng));
        const D = d.map((v, i) => d.map((_, j) => (i === j ? new Frac(BigInt(v)) : ZERO)));
        const A = M.mul(M.mul(S, D), Sinv);
        if (Math.max(...A.flat().map((x) => Math.abs(x.toNumber()))) <= 9) return { A: A, values: d.slice().sort((a, b) => a - b) };
      }
      return { A: M.of([[2, -1], [-1, 2]]), values: [1, 3] };
    },
  };

  // ------------------------------------------------------------------ espressioni (somme e produttorie)
  /** parser minimo: numeri, k, + - * / ^ (esponente intero), parentesi */
  function parseExpr(src, varName) {
    varName = varName || "k";
    const s = src.replace(/\s+/g, "").replace(/·|×/g, "*").replace(/−/g, "-");
    let i = 0;
    function peek() { return s[i]; }
    function num() { const m = s.slice(i).match(/^\d+(?:[.,]\d+)?/); if (!m) return null; i += m[0].length; return { t: "n", v: Frac.parse(m[0]) }; }
    function atom() {
      const c = peek();
      if (c === "(") { i++; const e = expr(); if (s[i] !== ")") throw new Error(")"); i++; return e; }
      if (c === "-") { i++; return { t: "neg", a: factor() }; }
      if (c === varName) { i++; return { t: "v" }; }
      const n = num();
      if (n) {
        // moltiplicazione implicita: 2k, 3(k+1)
        if (peek() === varName || peek() === "(") return { t: "*", a: n, b: factor() };
        return n;
      }
      throw new Error("unexpected " + c);
    }
    function factor() { let a = atom(); if (peek() === "^") { i++; const b = factor(); a = { t: "^", a: a, b: b }; } return a; }
    function term() { let a = factor(); while (peek() === "*" || peek() === "/") { const op = s[i++]; a = { t: op, a: a, b: factor() }; } return a; }
    function expr() { let a = term(); while (peek() === "+" || peek() === "-") { const op = s[i++]; a = { t: op, a: a, b: term() }; } return a; }
    const tree = expr();
    if (i !== s.length) throw new Error("unexpected " + s[i]);
    function ev(t, k) {
      switch (t.t) {
        case "n": return t.v;
        case "v": return k;
        case "neg": return ev(t.a, k).neg();
        case "+": return ev(t.a, k).add(ev(t.b, k));
        case "-": return ev(t.a, k).sub(ev(t.b, k));
        case "*": return ev(t.a, k).mul(ev(t.b, k));
        case "/": return ev(t.a, k).div(ev(t.b, k));
        case "^": {
          const e = ev(t.b, k);
          if (!e.isInt() || e.n > 64n || e.n < -64n) throw new Error("exponent");
          const p = ev(t.a, k).pow(Number(e.n < 0n ? -e.n : e.n));
          return e.n < 0n ? p.inv() : p;
        }
      }
    }
    return function (k) { return ev(tree, Frac.of(k)); };
  }

  return {
    Frac: Frac, ZERO: ZERO, ONE: ONE, M: M, Poly: Poly,
    texMatrix: texMatrix, texOp: texOp, texCoef: texCoef, applyOp: applyOp,
    gauss: gauss, rank: rank, det: detNum, detElimination: detElimination, sarrus: sarrus, laplace: laplace, bestLine: bestLine,
    inverseGJ: inverseGJ, inverseCofactors: inverseCofactors, lu: lu, forwardSub: forwardSub, backSub: backSub,
    solve: solve, cramer: cramer, charPoly: charPoly, rationalRoots: rationalRoots, eigen: eigen, nullspace: nullspace,
    leadingMinors: leadingMinors, principalMinors: principalMinors, definiteness: definiteness,
    norms: norms, quadForm: quadForm, sqrtFrac: sqrtFrac, texSqrt: texSqrt, texSurd: texSurd, numericRoots: numericRoots,
    gen: gen, parseExpr: parseExpr, rnd: rnd,
  };
});
