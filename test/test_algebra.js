/* Test del motore di calcolo contro i risultati di SymPy (test/casi.json).
 *
 * Non basta che il risultato finale sia giusto: per ogni algoritmo si
 * ripercorrono i PASSI mostrati allo studente (ogni operazione elementare
 * applicata alla matrice precedente deve dare la matrice stampata).
 *
 * Gira in Node (CI):      node test/test_algebra.js
 * e in Chrome (in locale): python3 test/esegui_test.py
 */
(function (root) {
  "use strict";

  function runTests(LA, casi) {
    const { Frac, M } = LA;
    const F = (s) => Frac.parse(s);
    const mat = (rows) => rows.map((r) => r.map(F));
    const errors = [];
    let checks = 0;
    function ok(cond, msg) { checks++; if (!cond) errors.push(msg); }
    const str = (A) => JSON.stringify(M.toStrings(A));

    // --- lettura dei numeri
    casi.parse.forEach(([inp, exp]) => {
      const f = Frac.parse(inp);
      ok(exp === null ? f === null : f !== null && f.toString() === exp, `parse(${JSON.stringify(inp)}) = ${f} invece di ${exp}`);
    });

    // --- forma a scala: righe nulle in fondo, pivot che scendono verso destra
    function isEchelon(E, coefCols) {
      let last = -1, zero = false;
      for (const r of E) {
        const j = r.slice(0, coefCols).findIndex((x) => !x.isZero());
        if (j < 0) { zero = true; continue; }
        if (zero || j <= last) return false;
        last = j;
      }
      return true;
    }
    function replay(A0, steps, label, matrixKey) {
      let A = A0;
      steps.forEach((st, k) => {
        if (st.op) A = LA.applyOp(A, st.op);
        ok(M.eq(A, st[matrixKey || "matrix"]), `${label}: il passo ${k + 1} (${st.op ? LA.texOp(st.op) : "-"}) non corrisponde`);
        if (st.op && st.op.type === "scale") ok(!st.op.c.isZero(), `${label}: moltiplicazione di una riga per 0`);
        if (st.op && st.op.type === "add") ok(st.op.i !== st.op.k, `${label}: R_i <- R_i + c R_i`);
      });
      return A;
    }

    casi.matrici.forEach((c, idx) => {
      const A = mat(c.A);
      const id = `matrice #${idx} ${c.m}x${c.n} ${JSON.stringify(c.A)}`;
      for (const piv of ["first", "partial"]) {
        // Gauss: forma a scala, passi ripercorribili, rango
        const g = LA.gauss(A, { pivoting: piv });
        const E = replay(A, g.steps, `${id} gauss/${piv}`);
        ok(M.eq(E, g.result), `${id} gauss/${piv}: risultato diverso dall'ultimo passo`);
        ok(isEchelon(g.result, c.n), `${id} gauss/${piv}: non è in forma a scala`);
        ok(g.pivots.length === c.rank, `${id} gauss/${piv}: rango ${g.pivots.length} invece di ${c.rank}`);
        // Gauss–Jordan: la forma ridotta è unica → deve coincidere con SymPy
        const j = LA.gauss(A, { pivoting: piv, jordan: true });
        replay(A, j.steps, `${id} jordan/${piv}`);
        ok(str(j.result) === JSON.stringify(c.rref), `${id} jordan/${piv}: RREF diversa da SymPy`);
      }
      ok(LA.rank(A).rank === c.rank, `${id}: rank()`);
      if (c.m !== c.n) return;
      const n = c.n;
      // determinante con tre metodi
      ok(LA.det(A).toString() === c.det, `${id}: det ${LA.det(A)} invece di ${c.det}`);
      for (const piv of ["first", "partial"]) {
        const de = LA.detElimination(A, { pivoting: piv });
        ok(de.det.toString() === c.det, `${id}: det per eliminazione/${piv} ${de.det} invece di ${c.det}`);
        const sw = de.steps.filter((s) => s.op && s.op.type === "swap").length;
        ok(de.sign === (sw % 2 ? -1 : 1), `${id}: segno degli scambi`);
      }
      ok(LA.laplace(A).det.toString() === c.det, `${id}: Laplace`);
      if (n >= 3) {
        for (let i = 0; i < n; i++) {
          ok(LA.laplace(A, { type: "row", idx: i }).det.toString() === c.det, `${id}: Laplace riga ${i + 1}`);
          ok(LA.laplace(A, { type: "col", idx: i }).det.toString() === c.det, `${id}: Laplace colonna ${i + 1}`);
        }
      }
      if (n === 3) ok(LA.sarrus(A).det.toString() === c.det, `${id}: Sarrus`);
      // inversa: Gauss–Jordan e cofattori
      for (const piv of ["first", "partial"]) {
        const inv = LA.inverseGJ(A, { pivoting: piv });
        replay(M.hcat(A, M.identity(n)), inv.steps, `${id} inversa/${piv}`);
        if (c.inverse === null) ok(inv.singular && inv.inverse === null, `${id}: singolare non riconosciuta (${piv})`);
        else {
          ok(!inv.singular && str(inv.inverse) === JSON.stringify(c.inverse), `${id}: inversa Gauss–Jordan/${piv} sbagliata`);
          ok(M.eq(M.mul(A, inv.inverse), M.identity(n)), `${id}: A·A^{-1} ≠ I`);
        }
      }
      const cof = LA.inverseCofactors(A);
      ok(cof.det.toString() === c.det, `${id}: det nei cofattori`);
      ok(c.inverse === null ? cof.inverse === null : str(cof.inverse) === JSON.stringify(c.inverse), `${id}: inversa con i cofattori`);
      // LU / PLU
      for (const piv of ["first", "partial"]) {
        const f = LA.lu(A, { pivoting: piv });
        ok(f.ok, `${id}: lu/${piv} fallita`);
        if (!f.ok) continue;
        ok(M.eq(M.mul(f.P, A), M.mul(f.L, f.U)), `${id}: lu/${piv}: PA ≠ LU`);
        ok(M.isLowerTriangular(f.L) && f.L.every((r, i) => r[i].isOne()), `${id}: lu/${piv}: L non unitriangolare inferiore`);
        ok(M.isUpperTriangular(f.U), `${id}: lu/${piv}: U non triangolare superiore`);
        ok(f.P.every((r) => r.filter((x) => x.isOne()).length === 1 && r.every((x) => x.isZero() || x.isOne())), `${id}: lu/${piv}: P non è di permutazione`);
        let d = f.swaps % 2 ? LA.ONE.neg() : LA.ONE;
        f.U.forEach((r, i) => (d = d.mul(r[i])));
        ok(d.toString() === c.det, `${id}: lu/${piv}: det = ±prod(u_ii) non torna`);
        // ogni passo: P_k A = L_k U_k non vale durante (L parziale), ma l'ultimo stato coincide col risultato
        if (f.steps.length) ok(M.eq(f.steps[f.steps.length - 1].U, f.U), `${id}: lu/${piv}: ultimo passo ≠ U`);
      }
      // polinomio caratteristico e autovalori
      const p = LA.charPoly(A);
      ok(JSON.stringify(p.map(String)) === JSON.stringify(c.charpoly), `${id}: polinomio caratteristico ${p.map(String)} invece di ${c.charpoly}`);
      const e = LA.eigen(A);
      const rat = e.values.filter((v) => v.type === "rational").map((v) => [v.value.toString(), v.mult]);
      ok(JSON.stringify(rat) === JSON.stringify(c.rational_eigs), `${id}: autovalori razionali ${JSON.stringify(rat)} invece di ${JSON.stringify(c.rational_eigs)}`);
      e.values.filter((v) => v.type === "rational").forEach((v) => {
        ok(v.vectors.length === c.geom_mult[v.value.toString()], `${id}: autospazio di ${v.value}: dimensione ${v.vectors.length}`);
        v.vectors.forEach((w) => {
          const Aw = A.map((r) => r.reduce((s, a, j) => s.add(a.mul(w[j])), LA.ZERO));
          ok(Aw.every((x, i) => x.eq(w[i].mul(v.value))), `${id}: A v ≠ λ v per λ = ${v.value}`);
        });
      });
      let count = 0;
      e.values.forEach((v) => (count += v.type === "rational" ? v.mult : 1));
      ok(count === n, `${id}: ${count} autovalori invece di ${n}`);
      if (c.definiteness) ok(LA.definiteness(A).kind === c.definiteness, `${id}: definitezza ${LA.definiteness(A).kind} invece di ${c.definiteness}`);
    });

    // --- sistemi lineari
    casi.sistemi.forEach((c, idx) => {
      const A = mat(c.A), b = c.b.map(F);
      const id = `sistema #${idx} ${JSON.stringify(c.A)} | ${JSON.stringify(c.b)}`;
      for (const piv of ["first", "partial"]) {
        const r = LA.solve(A, b, { pivoting: piv });
        replay(M.hcat(A, b.map((x) => [x])), r.steps, `${id} solve/${piv}`);
        ok(r.kind === c.kind, `${id}: ${r.kind} invece di ${c.kind}`);
        ok(r.rankA === c.rankA && r.rankAb === c.rankAb, `${id}: ranghi ${r.rankA},${r.rankAb} invece di ${c.rankA},${c.rankAb}`);
        if (r.kind === "none") continue;
        const Ax = (x) => A.map((row) => row.reduce((s, a, j) => s.add(a.mul(x[j])), LA.ZERO));
        ok(Ax(r.x0).every((v, i) => v.eq(b[i])), `${id}: A x0 ≠ b`);
        ok(r.dirs.length === c.A[0].length - c.rankA, `${id}: numero di parametri`);
        r.dirs.forEach((d) => ok(Ax(d).every((v) => v.isZero()), `${id}: A v ≠ 0 per una direzione`));
        if (c.kind === "unique") ok(JSON.stringify(r.x0.map(String)) === JSON.stringify(c.x), `${id}: soluzione ${r.x0} invece di ${c.x}`);
      }
      if (c.kind === "unique" && c.A.length === c.A[0].length) {
        const cr = LA.cramer(A, b);
        ok(JSON.stringify(cr.x.map(String)) === JSON.stringify(c.x), `${id}: Cramer`);
        const f = LA.lu(A, { pivoting: "partial" });
        const Pb = f.P.map((r) => r.reduce((s, a, j) => s.add(a.mul(b[j])), LA.ZERO));
        const y = LA.forwardSub(f.L, Pb).y;
        const x = LA.backSub(f.U, y).x;
        ok(JSON.stringify(x.map(String)) === JSON.stringify(c.x), `${id}: soluzione con LU`);
      }
    });

    // --- generatori degli esercizi
    let seed = 12345;
    const rng = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
    for (let t = 0; t < 40; t++) {
      const n = 2 + (t % 3);
      const A = LA.gen.inverse(n, rng);
      const d = LA.det(A);
      ok(!d.isZero(), `gen.inverse: matrice singolare`);
      const s = LA.gen.system(n, rng);
      const r = LA.solve(s.A, s.b);
      ok(r.kind === "unique" && r.x0.every((v, i) => v.eq(s.x[i])), `gen.system: soluzione sbagliata`);
      const l = LA.gen.lu(n, rng);
      const f = LA.lu(l.A, { pivoting: "none" });
      ok(f.ok && M.eq(f.L, l.L) && M.eq(f.U, l.U), `gen.lu: fattori diversi`);
      const e = LA.gen.eigen(n, rng);
      const vals = [];
      LA.eigen(e.A).values.forEach((v) => { for (let k = 0; k < (v.mult || 1); k++) vals.push(v.type === "rational" ? v.value.toNumber() : NaN); });
      ok(JSON.stringify(vals) === JSON.stringify(e.values), `gen.eigen: autovalori ${vals} invece di ${e.values}`);
      const rk = 1 + (t % n);
      ok(LA.rank(LA.gen.rank(n + 1, n + 1, rk, rng)).rank === rk, `gen.rank`);
    }

    // --- notazione delle operazioni (come nelle dispense)
    const T = (op) => LA.texOp(op);
    ok(T({ type: "swap", i: 0, k: 1 }) === "R_{1} \\leftrightarrow R_{2}", "texOp swap");
    ok(T({ type: "scale", i: 1, c: F("-1") }) === "R_{2} \\leftarrow -R_{2}", "texOp scale -1");
    ok(T({ type: "scale", i: 2, c: F("1/5") }) === "R_{3} \\leftarrow \\frac{1}{5}R_{3}", "texOp scale 1/5");
    ok(T({ type: "add", i: 2, k: 1, c: F("-3/2") }) === "R_{3} \\leftarrow R_{3} - \\frac{3}{2}R_{2}", "texOp add -3/2");
    ok(T({ type: "add", i: 1, k: 0, c: F("-1") }) === "R_{2} \\leftarrow R_{2} - R_{1}", "texOp add -1");
    ok(T({ type: "add", i: 0, k: 2, c: F("2") }) === "R_{1} \\leftarrow R_{1} + 2R_{3}", "texOp add 2");

    // --- somme
    const f = LA.parseExpr("k^2");
    let sum = LA.ZERO;
    for (let k = 1; k <= 10; k++) sum = sum.add(f(k));
    ok(sum.toString() === "385", "somma dei quadrati");
    ok(LA.parseExpr("2k+1")(3).toString() === "7", "moltiplicazione implicita");
    ok(LA.parseExpr("(1/2)^k")(3).toString() === "1/8", "potenza di frazione");
    // moltiplicazione sottintesa dopo k e fra parentesi (pulsante «Σ 1/(k(k+1))»)
    const tel = LA.parseExpr("1/(k(k+1))");
    let st = LA.ZERO;
    for (let k = 1; k <= 10; k++) st = st.add(tel(k));
    ok(st.toString() === "10/11", "somma telescopica 1/(k(k+1)) = 10/11");
    ok(LA.parseExpr("(k+1)(k+2)")(1).toString() === "6", "(k+1)(k+2)");
    ok(LA.parseExpr("k(k+1)/2")(4).toString() === "10", "k(k+1)/2");
    ok(LA.parseExpr("2k^2")(3).toString() === "18", "2k^2 = 2·(k^2)");
    ok(LA.parseExpr("-k^2")(3).toString() === "-9", "-k^2 = -(k^2)");
    ok(LA.parseExpr("3(k-1)")(5).toString() === "12", "3(k-1)");
    ok(LA.parseExpr("2^k")(10).toString() === "1024", "2^k");
    let errore = false;
    try { LA.parseExpr("k+"); } catch (e) { errore = true; }
    ok(errore, "espressione incompleta rifiutata");

    return { checks: checks, errors: errors };
  }

  if (typeof module === "object" && module.exports) {
    module.exports = runTests;
    if (require.main === module) {
      const path = require("path");
      const LA = require(path.join(__dirname, "..", "docs", "javascripts", "algebra.js"));
      const casi = require(path.join(__dirname, "casi.json"));
      const r = runTests(LA, casi);
      console.log(`${r.checks} controlli, ${r.errors.length} errori`);
      r.errors.slice(0, 40).forEach((e) => console.log("  ✗ " + e));
      process.exit(r.errors.length ? 1 : 0);
    }
  } else {
    root.runTests = runTests;
  }
})(typeof self !== "undefined" ? self : this);
