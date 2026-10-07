/* Laboratorio di calcolo di Algebra Lineare.
 *
 * Nelle pagine:  <div class="la-tool" data-tool="inversa" data-matrix="2,1;1,1"></div>
 * Strumenti: gauss, det, inversa, rango, lu, sistema, autovalori, prodotto,
 *            somme, norme, pivoting.
 * Il calcolo è del motore algebra.js (frazioni esatte, passi con la notazione
 * delle dispense); qui ci sono l'inserimento delle matrici, la resa dei passi
 * con MathJax, gli esercizi generati, l'esportazione in LaTeX nel formato
 * delle note e i link condivisibili.
 */
(function () {
  "use strict";
  const LA = window.LA;
  const { Frac, M } = LA;
  const IT = (document.documentElement.lang || "it").slice(0, 2) === "it";

  // ------------------------------------------------------------------ testi
  const TXT = {
    it: {
      compute: "Calcola", practice: "Esercitati", doit: "Fallo tu",
      random: "Casuale", examples: "Esempi dalle dispense", clear: "Azzera", asText: "Scrivi come testo",
      rows: "righe", cols: "colonne", size: "dimensione",
      prev: "Passo precedente", next: "Passo successivo", all: "Mostra tutti i passi", oneByOne: "Un passo alla volta",
      stepOf: (k, n) => `Passo ${k} di ${n}`, start: "Matrice di partenza",
      copyLatex: "Copia in LaTeX", copyLink: "Copia il link", copied: "Copiato!",
      useIn: "Usa questa matrice in:", invalid: "Controlla le caselle in rosso: si accettano interi, frazioni (3/4) e decimali (0,5).",
      pivFirst: "Pivot: primo elemento non nullo (come nelle dispense)", pivPartial: "Pivoting parziale (massimo in valore assoluto)",
      gaussEchelon: "Gauss: forma a scala", gaussJordan: "Gauss–Jordan: forma ridotta",
      noPivot: (n) => `Colonna ${n.col + 1}: dalla riga ${n.row + 1} in giù sono tutti zeri, quindi in questa colonna non c'è pivot e si passa alla colonna successiva.`,
      swapZero: (n) => `Il candidato pivot in posizione (${n.row + 1},${n.col + 1}) è zero: scambiamo la riga ${n.row + 1} con la riga ${n.from + 1}, la prima che ha un elemento non nullo nella colonna ${n.col + 1}.`,
      swapPartial: (n) => `Pivoting parziale: nella colonna ${n.col + 1}, dalla riga ${n.row + 1} in giù, l'elemento più grande in valore assoluto è ${tex(n.val)}, nella riga ${n.from + 1}: scambiamo le righe.`,
      partialStay: (n) => `Pivoting parziale: il pivot ${tex(n.val)} della riga ${n.row + 1} è già il più grande in valore assoluto nella colonna ${n.col + 1}: nessuno scambio.`,
      normalize: (n) => `Rendiamo il pivot uguale a 1: moltiplichiamo la riga ${n.row + 1} per l'inverso del pivot.`,
      eliminate: (n) => `Annulliamo l'elemento in posizione (${n.row + 1},${n.col + 1}) sotto il pivot: moltiplicatore ${tex(n.mult)}.`,
      eliminateUp: (n) => `Annulliamo l'elemento in posizione (${n.row + 1},${n.col + 1}) sopra il pivot.`,
      luMult: (n) => `Moltiplicatore \\(\\ell_{${n.row + 1}${n.col + 1}} = ${n.mult.tex()}\\): lo scriviamo in \\(\\boldsymbol L\\) e facciamo \\(R_{${n.row + 1}} \\leftarrow R_{${n.row + 1}} - \\ell_{${n.row + 1}${n.col + 1}}\\,R_{${n.col + 1}}\\).`,
      luZeroCol: (n) => `Colonna ${n.col + 1}: sotto la diagonale sono già tutti zeri (e il pivot è nullo): si passa oltre.`,
      echelonDone: (r) => `Forma a scala raggiunta: ${r} pivot, quindi il rango è ${r}.`,
      rrefDone: "Forma ridotta raggiunta: ogni pivot vale 1 ed è l'unico elemento non nullo della sua colonna.",
      rank: "rango", pivotsAt: "pivot nelle colonne",
      // determinante
      method: "Metodo", laplace: "Sviluppo di Laplace", sarrus: "Regola di Sarrus (3×3)", elimination: "Eliminazione di Gauss",
      lineAuto: "riga o colonna con più zeri", alongRow: (i) => `lungo la riga ${i}`, alongCol: (j) => `lungo la colonna ${j}`,
      expandAlong: (l) => `Sviluppiamo lungo ${l.type === "row" ? "la riga" : "la colonna"} ${l.idx + 1}${""}`,
      zeroTerms: "i termini con \\(a_{ij} = 0\\) sono nulli e non vanno calcolati",
      subDet: (i, j) => `Calcolo di \\(\\det(\\boldsymbol A_{${i}${j}})\\)`,
      sarrusOnly3: "La regola di Sarrus vale solo per le matrici 3×3.",
      detEffect: "effetto sul determinante", swapSign: "cambia segno", unchanged: "non cambia", timesLambda: (l) => `moltiplicato per \\(${l.tex()}\\)`,
      detTriangular: "La matrice è triangolare superiore: il suo determinante è il prodotto degli elementi sulla diagonale; ogni scambio di righe ha cambiato il segno.",
      singularRow: "Nella forma a scala manca un pivot: c'è una riga nulla, quindi il determinante è 0.",
      // inversa
      gaussJordanInv: "Gauss–Jordan su \\((\\boldsymbol A \\mid \\boldsymbol I)\\)", cofactors: "Matrice dei cofattori",
      invStart: "Scriviamo la matrice aumentata \\((\\boldsymbol A \\mid \\boldsymbol I)\\): con le operazioni elementari di riga trasformiamo il blocco di sinistra nella matrice identità.",
      invDone: "Il blocco di sinistra è diventato la matrice identità, quindi il blocco di destra è \\(\\boldsymbol A^{-1}\\).",
      invSingular: (c) => `Nella colonna ${c + 1} non si trova un pivot: il blocco di sinistra non può diventare la matrice identità, quindi \\(\\boldsymbol A\\) è <strong>singolare</strong> (\\(\\det \\boldsymbol A = 0\\)) e non ha inversa.`,
      verify: "Verifica", notSquare: "Serve una matrice quadrata.",
      cofIntro: "Cofattori \\(C_{ij} = (-1)^{i+j}\\det(\\boldsymbol A_{ij})\\), dove \\(\\boldsymbol A_{ij}\\) è la matrice minore ottenuta togliendo la riga \\(i\\) e la colonna \\(j\\).",
      adjIntro: "La matrice aggiunta è la trasposta della matrice dei cofattori:",
      // LU
      luNone: "LU senza scambi", luFirst: "PLU (scambio se il pivot è zero)", luPartial: "PLU con pivoting parziale",
      luNeeds: (c) => `Il pivot della colonna ${c + 1} è zero: senza scambi di righe la fattorizzazione LU non esiste. Scegli PLU.`,
      luDone: "Fattorizzazione completata. Verifica:",
      // sistemi
      rhs: "termini noti", gaussBack: "Gauss + sostituzione all'indietro", cramer: "Regola di Cramer", luSolve: "Con la fattorizzazione LU",
      rc: "Teorema di Rouché–Capelli", unknowns: "incognite",
      kindUnique: "una e una sola soluzione", kindInfinite: (k) => `infinite soluzioni, con ${k} ${k === 1 ? "parametro libero" : "parametri liberi"}`, kindNone: "nessuna soluzione: il sistema è incompatibile",
      badRow: (i) => `La riga ${i + 1} della forma a scala dice \\(0 = \\) un numero diverso da zero: impossibile.`,
      backSub: "Sostituzione all'indietro", free: (v, t) => `\\(${v}\\) è libera: poniamo \\(${v} = ${t}\\).`,
      solution: "Soluzione", cramerNeedsSquare: "La regola di Cramer si applica ai sistemi quadrati.", cramerDetZero: "\\(\\det \\boldsymbol A = 0\\): la regola di Cramer non si applica.",
      forward: "Sostituzione in avanti", backward: "Sostituzione all'indietro",
      // autovalori
      charEq: "Equazione caratteristica", roots: "Radici", eigvecs: "Autovettori", eigOf: (l) => `Autovettori di \\(\\lambda = ${l}\\)`,
      mult: "molteplicità", irrational: "Questo autovalore non è razionale: gli autovettori non si mostrano in forma esatta.",
      traceCheck: "Controllo: somma e prodotto degli autovalori", symmetric: "La matrice è simmetrica: studiamo la definitezza.",
      sylvester: "Criterio di Sylvester (minori principali di nord-ovest)", allMinors: "Tutti i minori principali",
      kinds: { pd: "definita positiva", nd: "definita negativa", psd: "semidefinita positiva", nsd: "semidefinita negativa", indef: "indefinita" },
      maxSize: (n) => `Dimensione massima: ${n}×${n}.`,
      // prodotto
      clickCell: "Fai clic su un elemento del prodotto: si illuminano la riga e la colonna che lo producono.",
      dimMismatch: (p, q) => `Il prodotto non si può fare: le colonne di \\(\\boldsymbol A\\) (${p}) devono essere quante le righe di \\(\\boldsymbol B\\) (${q}).`,
      commute: "Anche \\(\\boldsymbol B\\boldsymbol A\\):", noCommute: "\\(\\boldsymbol A\\boldsymbol B \\neq \\boldsymbol B\\boldsymbol A\\): il prodotto di matrici non è commutativo.", yesCommute: "Qui \\(\\boldsymbol A\\boldsymbol B = \\boldsymbol B\\boldsymbol A\\): queste due matrici commutano (non succede in generale).",
      // somme
      sumExpr: "termine generale (in k)", from: "da", to: "a", sum: "Sommatoria", prod: "Produttoria", exprError: "Espressione non valida: usa k, numeri, + − * / ^ e parentesi.",
      tooMany: "Al massimo 2000 termini.", closedForm: "Con la formula chiusa delle dispense:",
      // norme
      vector: "vettore", genNorm: "norma ℓ₂ generalizzata con la matrice Q", notPD: "Q non è simmetrica definita positiva: \\(\\sqrt{\\boldsymbol x^\\top\\boldsymbol Q\\boldsymbol x}\\) non è una norma.",
      // esercizi
      newEx: "Nuovo esercizio", check: "Controlla", showSol: "Mostra lo svolgimento", right: "Esatto!", wrong: "Non ancora: riprova, oppure guarda lo svolgimento.",
      yourAnswer: "La tua risposta", score: (a, b) => `Punteggio: ${a} su ${b}`,
      exDet: "Calcola il determinante della matrice", exInv: "Calcola l'inversa della matrice", exRank: "Calcola il rango della matrice",
      exSys: "Risolvi il sistema", exLU: "Trova la fattorizzazione \\(\\boldsymbol A = \\boldsymbol L\\boldsymbol U\\) (senza scambi) di", exEig: "Trova gli autovalori (con la loro molteplicità, separati da virgole) di",
      fillAll: "Riempi tutte le caselle.",
      // fallo tu
      doitIntro: "Porta la matrice in forma a scala scegliendo tu le operazioni elementari. Il laboratorio le esegue, controlla, e se ti blocchi ti suggerisce la mossa successiva.",
      opSwap: "Scambia", opScale: "Moltiplica", opAdd: "Somma un multiplo", apply: "Applica", undo: "Annulla", hint: "Suggerimento", restart: "Ricomincia",
      rowWord: "riga", by: "per", times: "volte la riga",
      errSame: "Scegli due righe diverse.", errZero: "Moltiplicare per 0 non è un'operazione elementare.", errNum: "Scrivi un numero (anche 3/4).",
      doitDone: (k, s) => `Forma a scala raggiunta in ${k} ${k === 1 ? "mossa" : "mosse"}! Il metodo delle dispense ne usa ${s}.`,
      doitHint: (op) => `Prova: \\(${op}\\)`, doitNoHint: "La matrice è già in forma a scala.", moves: "Mosse",
      // pivoting
      eps: "piccolezza del pivot", exact: "esatto", noPiv: "senza pivoting", withPiv: "con pivoting parziale", error: "errore",
    },
    en: {
      compute: "Compute", practice: "Practice", doit: "Do it yourself",
      random: "Random", examples: "Examples from the notes", clear: "Clear", asText: "Type as text",
      rows: "rows", cols: "columns", size: "size",
      prev: "Previous step", next: "Next step", all: "Show all steps", oneByOne: "One step at a time",
      stepOf: (k, n) => `Step ${k} of ${n}`, start: "Starting matrix",
      copyLatex: "Copy as LaTeX", copyLink: "Copy link", copied: "Copied!",
      useIn: "Use this matrix in:", invalid: "Check the red cells: integers, fractions (3/4) and decimals (0.5) are accepted.",
      pivFirst: "Pivot: first nonzero entry (as in the notes)", pivPartial: "Partial pivoting (largest absolute value)",
      gaussEchelon: "Gauss: row echelon form", gaussJordan: "Gauss–Jordan: reduced form",
      noPivot: (n) => `Column ${n.col + 1}: all entries from row ${n.row + 1} down are zero, so this column has no pivot: move on to the next column.`,
      swapZero: (n) => `The pivot candidate in position (${n.row + 1},${n.col + 1}) is zero: swap row ${n.row + 1} with row ${n.from + 1}, the first one with a nonzero entry in column ${n.col + 1}.`,
      swapPartial: (n) => `Partial pivoting: in column ${n.col + 1}, from row ${n.row + 1} down, the entry largest in absolute value is ${tex(n.val)}, in row ${n.from + 1}: swap the rows.`,
      partialStay: (n) => `Partial pivoting: the pivot ${tex(n.val)} in row ${n.row + 1} is already the largest in absolute value in column ${n.col + 1}: no swap.`,
      normalize: (n) => `Make the pivot equal to 1: multiply row ${n.row + 1} by the inverse of the pivot.`,
      eliminate: (n) => `Eliminate the entry in position (${n.row + 1},${n.col + 1}) below the pivot: multiplier ${tex(n.mult)}.`,
      eliminateUp: (n) => `Eliminate the entry in position (${n.row + 1},${n.col + 1}) above the pivot.`,
      luMult: (n) => `Multiplier \\(\\ell_{${n.row + 1}${n.col + 1}} = ${n.mult.tex()}\\): store it in \\(\\boldsymbol L\\) and apply \\(R_{${n.row + 1}} \\leftarrow R_{${n.row + 1}} - \\ell_{${n.row + 1}${n.col + 1}}\\,R_{${n.col + 1}}\\).`,
      luZeroCol: (n) => `Column ${n.col + 1}: the entries below the diagonal are already zero (and the pivot is zero): move on.`,
      echelonDone: (r) => `Row echelon form reached: ${r} pivots, so the rank is ${r}.`,
      rrefDone: "Reduced form reached: every pivot equals 1 and is the only nonzero entry in its column.",
      rank: "rank", pivotsAt: "pivots in columns",
      method: "Method", laplace: "Laplace expansion", sarrus: "Sarrus rule (3×3)", elimination: "Gaussian elimination",
      lineAuto: "row or column with most zeros", alongRow: (i) => `along row ${i}`, alongCol: (j) => `along column ${j}`,
      expandAlong: (l) => `Expand along ${l.type === "row" ? "row" : "column"} ${l.idx + 1}`,
      zeroTerms: "the terms with \\(a_{ij} = 0\\) vanish and need not be computed",
      subDet: (i, j) => `Computing \\(\\det(\\boldsymbol A_{${i}${j}})\\)`,
      sarrusOnly3: "The Sarrus rule only applies to 3×3 matrices.",
      detEffect: "effect on the determinant", swapSign: "changes sign", unchanged: "unchanged", timesLambda: (l) => `multiplied by \\(${l.tex()}\\)`,
      detTriangular: "The matrix is upper triangular: its determinant is the product of the diagonal entries; every row swap changed the sign.",
      singularRow: "The row echelon form misses a pivot: there is a zero row, so the determinant is 0.",
      gaussJordanInv: "Gauss–Jordan on \\((\\boldsymbol A \\mid \\boldsymbol I)\\)", cofactors: "Cofactor matrix",
      invStart: "Write the augmented matrix \\((\\boldsymbol A \\mid \\boldsymbol I)\\): with elementary row operations we turn the left block into the identity matrix.",
      invDone: "The left block is now the identity matrix, so the right block is \\(\\boldsymbol A^{-1}\\).",
      invSingular: (c) => `No pivot can be found in column ${c + 1}: the left block cannot become the identity, so \\(\\boldsymbol A\\) is <strong>singular</strong> (\\(\\det \\boldsymbol A = 0\\)) and has no inverse.`,
      verify: "Check", notSquare: "A square matrix is needed.",
      cofIntro: "Cofactors \\(C_{ij} = (-1)^{i+j}\\det(\\boldsymbol A_{ij})\\), where \\(\\boldsymbol A_{ij}\\) is the minor matrix obtained by deleting row \\(i\\) and column \\(j\\).",
      adjIntro: "The adjugate matrix is the transpose of the cofactor matrix:",
      luNone: "LU without swaps", luFirst: "PLU (swap when the pivot is zero)", luPartial: "PLU with partial pivoting",
      luNeeds: (c) => `The pivot of column ${c + 1} is zero: without row swaps the LU factorization does not exist. Choose PLU.`,
      luDone: "Factorization completed. Check:",
      rhs: "right-hand side", gaussBack: "Gauss + back substitution", cramer: "Cramer's rule", luSolve: "With the LU factorization",
      rc: "Rouché–Capelli theorem", unknowns: "unknowns",
      kindUnique: "exactly one solution", kindInfinite: (k) => `infinitely many solutions, with ${k} free ${k === 1 ? "parameter" : "parameters"}`, kindNone: "no solution: the system is inconsistent",
      badRow: (i) => `Row ${i + 1} of the echelon form says \\(0 = \\) a nonzero number: impossible.`,
      backSub: "Back substitution", free: (v, t) => `\\(${v}\\) is free: set \\(${v} = ${t}\\).`,
      solution: "Solution", cramerNeedsSquare: "Cramer's rule applies to square systems.", cramerDetZero: "\\(\\det \\boldsymbol A = 0\\): Cramer's rule does not apply.",
      forward: "Forward substitution", backward: "Back substitution",
      charEq: "Characteristic equation", roots: "Roots", eigvecs: "Eigenvectors", eigOf: (l) => `Eigenvectors of \\(\\lambda = ${l}\\)`,
      mult: "multiplicity", irrational: "This eigenvalue is not rational: eigenvectors are not shown in exact form.",
      traceCheck: "Check: sum and product of the eigenvalues", symmetric: "The matrix is symmetric: let us study its definiteness.",
      sylvester: "Sylvester's criterion (leading principal minors)", allMinors: "All principal minors",
      kinds: { pd: "positive definite", nd: "negative definite", psd: "positive semidefinite", nsd: "negative semidefinite", indef: "indefinite" },
      maxSize: (n) => `Maximum size: ${n}×${n}.`,
      clickCell: "Click an entry of the product: the row and the column producing it light up.",
      dimMismatch: (p, q) => `The product is not defined: the columns of \\(\\boldsymbol A\\) (${p}) must match the rows of \\(\\boldsymbol B\\) (${q}).`,
      commute: "Also \\(\\boldsymbol B\\boldsymbol A\\):", noCommute: "\\(\\boldsymbol A\\boldsymbol B \\neq \\boldsymbol B\\boldsymbol A\\): matrix multiplication is not commutative.", yesCommute: "Here \\(\\boldsymbol A\\boldsymbol B = \\boldsymbol B\\boldsymbol A\\): these two matrices commute (not true in general).",
      sumExpr: "general term (in k)", from: "from", to: "to", sum: "Sum", prod: "Product", exprError: "Invalid expression: use k, numbers, + − * / ^ and parentheses.",
      tooMany: "At most 2000 terms.", closedForm: "With the closed formula from the notes:",
      vector: "vector", genNorm: "generalized ℓ₂ norm with matrix Q", notPD: "Q is not symmetric positive definite: \\(\\sqrt{\\boldsymbol x^\\top\\boldsymbol Q\\boldsymbol x}\\) is not a norm.",
      newEx: "New exercise", check: "Check", showSol: "Show the solution", right: "Correct!", wrong: "Not yet: try again, or look at the solution.",
      yourAnswer: "Your answer", score: (a, b) => `Score: ${a} out of ${b}`,
      exDet: "Compute the determinant of the matrix", exInv: "Compute the inverse of the matrix", exRank: "Compute the rank of the matrix",
      exSys: "Solve the system", exLU: "Find the factorization \\(\\boldsymbol A = \\boldsymbol L\\boldsymbol U\\) (no swaps) of", exEig: "Find the eigenvalues (with multiplicity, comma separated) of",
      fillAll: "Fill in all the cells.",
      doitIntro: "Bring the matrix to row echelon form choosing the elementary operations yourself. The lab carries them out, checks, and suggests the next move if you get stuck.",
      opSwap: "Swap", opScale: "Multiply", opAdd: "Add a multiple", apply: "Apply", undo: "Undo", hint: "Hint", restart: "Restart",
      rowWord: "row", by: "by", times: "times row",
      errSame: "Choose two different rows.", errZero: "Multiplying by 0 is not an elementary operation.", errNum: "Type a number (3/4 is fine).",
      doitDone: (k, s) => `Row echelon form reached in ${k} ${k === 1 ? "move" : "moves"}! The method in the notes uses ${s}.`,
      doitHint: (op) => `Try: \\(${op}\\)`, doitNoHint: "The matrix is already in row echelon form.", moves: "Moves",
      eps: "pivot size", exact: "exact", noPiv: "no pivoting", withPiv: "partial pivoting", error: "error",
    },
  }[IT ? "it" : "en"];

  // pagine degli strumenti (per «Usa questa matrice in»)
  const PAGINE = IT
    ? { gauss: ["gauss", "Gauss"], rango: ["rango", "Rango"], det: ["determinante", "Determinante"], inversa: ["inversa", "Inversa"], lu: ["lu", "LU"], sistema: ["sistemi", "Sistema"], autovalori: ["autovalori", "Autovalori"] }
    : { gauss: ["gauss", "Gauss"], rango: ["rank", "Rank"], det: ["determinant", "Determinant"], inversa: ["inverse", "Inverse"], lu: ["lu", "LU"], sistema: ["systems", "System"], autovalori: ["eigenvalues", "Eigenvalues"] };

  // esempi delle dispense (stesse matrici degli esempi dei capitoli)
  const ESEMPI = {
    quadrate: [
      ["4.1 — Sarrus", "1,2,0;3,1,4;2,-1,1"], ["4.1 — 2×2", "2,-1;3,4"], ["4.1 — 4×4", "1,-2,0,5;3,4,7,-1;2,0,-3,6;-4,1,2,8"],
      ["4.2 — pivoting", "0,2,1;1,-1,0;2,1,3"], ["4.2 — pivoting parziale / partial pivoting", "1,2,1;3,-1,2;2,3,-1"],
      ["4.3 — Gauss–Jordan", "2,1;1,1"], ["4.3 — 3×3", "1,2,0;0,1,1;2,0,1"], ["4.5", "2,-1;-1,2"],
      ["singolare / singular", "1,2,3;4,5,6;7,8,9"],
    ],
    rettangolari: [["4.1 — rank 1", "1,2,3;2,4,6"], ["3×4", "1,2,0,1;2,4,1,3;3,6,1,4"]],
  };

  // ------------------------------------------------------------------ utilità
  const tex = (x) => "\\(" + (x instanceof Frac ? x.tex() : x) + "\\)";
  const el = (tag, attrs, html) => {
    const e = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (k === "on") for (const [ev, fn] of Object.entries(v)) e.addEventListener(ev, fn);
      else if (v !== undefined && v !== null && v !== false) e.setAttribute(k, v === true ? "" : v);
    }
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  const disp = (t) => `<div class="la-disp">\\[${t}\\]</div>`;
  /** MathJax del sito elabora solo gli elementi con classe «arithmatex»:
   * la si mette sugli elementi che contengono davvero una formula. */
  function marcaFormule(node) {
    const ha = (t) => t && (t.indexOf("\\(") >= 0 || t.indexOf("\\[") >= 0 || t.indexOf("$$") >= 0);
    const visita = (e) => {
      let propria = false;
      e.childNodes.forEach((c) => {
        if (c.nodeType === 3 && ha(c.nodeValue)) propria = true;
        else if (c.nodeType === 1) visita(c);
      });
      if (propria) e.classList.add("arithmatex");
    };
    if (node.nodeType === 1) visita(node);
  }
  function typeset(node) {
    marcaFormule(node);
    const vai = (n) => {
      if (window.MathJax && MathJax.typesetPromise && MathJax.startup && MathJax.startup.document) {
        MathJax.typesetClear([node]);
        MathJax.typesetPromise([node]).catch((e) => console.warn(e));
      } else if (n > 0) setTimeout(() => vai(n - 1), 150);
    };
    vai(100);
  }
  const parseMatrix = (s) => s.split(";").map((r) => r.split(",").map((x) => Frac.parse(x)));
  const matStr = (A) => A.map((r) => r.map((x) => x.toString()).join(",")).join(";");
  const vecTex = (v) => "\\begin{pmatrix}" + v.map((x) => x.tex()).join("\\\\") + "\\end{pmatrix}";
  const X = (j, n) => (n <= 4 && false ? "xyzw"[j] : "x_{" + (j + 1) + "}");

  function readHash() {
    const h = {};
    location.hash.replace(/^#/, "").split("&").forEach((kv) => {
      const [k, v] = kv.split("=");
      if (k && v !== undefined) h[k] = decodeURIComponent(v);
    });
    return h;
  }
  function writeHash(obj) {
    const s = Object.entries(obj).filter(([, v]) => v !== undefined && v !== null && v !== "").map(([k, v]) => k + "=" + encodeURIComponent(v).replace(/%2C/g, ",").replace(/%3B/g, ";").replace(/%2F/g, "/")).join("&");
    history.replaceState(null, "", "#" + s);
  }
  function copy(text, btn) {
    const done = () => { const o = btn.textContent; btn.textContent = TXT.copied; setTimeout(() => (btn.textContent = o), 1400); };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => fallback());
    else fallback();
    function fallback() { const t = el("textarea"); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); done(); } catch (e) { /* niente */ } t.remove(); }
  }
  function button(label, onClick, cls) { return el("button", { type: "button", class: "la-btn " + (cls || ""), on: { click: onClick } }, label); }
  function select(options, value, onChange) {
    const s = el("select", { class: "la-select", on: { change: () => onChange(s.value) } });
    options.forEach(([v, l]) => { const o = el("option", { value: v }, l); if (v === value) o.selected = true; s.appendChild(o); });
    return s;
  }

  // ------------------------------------------------------------------ inserimento di una matrice
  /** griglia di caselle; opt: {rows, cols, square, maxR, maxC, values, label, examples, onEnter, minR, minC, vector} */
  function MatrixInput(opt) {
    const box = el("div", { class: "la-input" });
    let rows = opt.rows, cols = opt.cols;
    let values = opt.values || null;
    const head = el("div", { class: "la-input-head" });
    const name = el("span", { class: "la-input-name" }, opt.label ? tex(opt.label) : "");
    const dims = el("span", { class: "la-dims" });
    head.append(name, dims);
    const grid = el("div", { class: "la-grid" });
    const textArea = el("textarea", { class: "la-textarea", rows: 4, spellcheck: "false", placeholder: IT ? "1 2 3\n4 5 6" : "1 2 3\n4 5 6" });
    textArea.style.display = "none";
    const bar = el("div", { class: "la-input-bar" });
    box.append(head, grid, textArea, bar);
    let inputs = [];

    function dimControls() {
      dims.innerHTML = "";
      const mk = (label, get, set, min, max) => {
        const g = el("span", { class: "la-dim" });
        g.append(button("−", () => { if (get() > min) { snapshot(); set(get() - 1); render(); } }, "la-mini"),
          el("span", {}, `${get()} ${label}`),
          button("+", () => { if (get() < max) { snapshot(); set(get() + 1); render(); } }, "la-mini"));
        return g;
      };
      if (opt.square) dims.append(mk(TXT.size === "size" ? "×" : "×", () => rows, (v) => { rows = cols = v; }, opt.minR || 1, opt.maxR || 6));
      else if (opt.vector) dims.append(mk(IT ? "componenti" : "entries", () => rows, (v) => { rows = v; }, opt.minR || 1, opt.maxR || 8));
      else {
        dims.append(mk(TXT.rows, () => rows, (v) => { rows = v; }, opt.minR || 1, opt.maxR || 6));
        if (!opt.fixedCols) dims.append(mk(TXT.cols, () => cols, (v) => { cols = v; }, opt.minC || 1, opt.maxC || 6));
      }
    }
    function snapshot() { values = inputs.map((r) => r.map((i) => i.value)); }
    function render() {
      dimControls();
      grid.innerHTML = "";
      grid.style.gridTemplateColumns = `repeat(${cols}, minmax(2.6em, 4.2em))`;
      inputs = [];
      for (let i = 0; i < rows; i++) {
        inputs.push([]);
        for (let j = 0; j < cols; j++) {
          const v = values && values[i] && values[i][j] !== undefined ? values[i][j] : "0";
          const inp = el("input", { type: "text", inputmode: "text", class: "la-cell", value: v, "aria-label": `(${i + 1},${j + 1})`, autocomplete: "off", spellcheck: "false" });
          inp.addEventListener("input", () => { validate(inp); if (opt.onChange) opt.onChange(); });
          inp.addEventListener("focus", () => inp.select());
          inp.addEventListener("keydown", (e) => {
            const mv = { ArrowUp: [-1, 0], ArrowDown: [1, 0], Enter: [0, 0] }[e.key] || (e.key === "ArrowLeft" && inp.selectionStart === 0 ? [0, -1] : e.key === "ArrowRight" && inp.selectionEnd === inp.value.length ? [0, 1] : null);
            if (!mv) return;
            e.preventDefault();
            if (e.key === "Enter") { if (opt.onEnter) opt.onEnter(); return; }
            const r = Math.min(rows - 1, Math.max(0, i + mv[0])), c = Math.min(cols - 1, Math.max(0, j + mv[1]));
            inputs[r][c].focus();
          });
          inputs[i].push(inp);
          grid.appendChild(inp);
        }
      }
      if (opt.onChange) opt.onChange();
    }
    function validate(inp) { const ok = Frac.parse(inp.value) !== null; inp.classList.toggle("la-bad", !ok); return ok; }
    function get() {
      if (textArea.style.display !== "none") fromText();
      let ok = true;
      const A = inputs.map((r) => r.map((inp) => { const f = Frac.parse(inp.value); if (!f) { ok = false; inp.classList.add("la-bad"); } return f; }));
      return ok ? A : null;
    }
    function set(A) {
      rows = A.length; cols = A[0].length;
      values = A.map((r) => r.map((x) => (x instanceof Frac ? x.toString() : String(x))));
      render();
    }
    function fromText() {
      const righe = textArea.value.trim().split(/\n|;/).map((r) => r.trim()).filter(Boolean).map((r) => r.split(/[\s,]+/).filter(Boolean));
      if (!righe.length) return;
      if (opt.vector) { set(righe.flat().map((x) => [x])); return; }
      const c = Math.max(...righe.map((r) => r.length));
      let A = righe.map((r) => Array.from({ length: c }, (_, j) => r[j] || "0"));
      if (opt.square) { const n = Math.max(A.length, c); A = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (A[i] && A[i][j]) || "0")); }
      values = A; rows = A.length; cols = A[0].length;
      render();
    }
    // barra: casuale, esempi, testo, azzera
    if (opt.random !== false) bar.append(button(TXT.random, () => { set(opt.random ? opt.random(rows, cols) : LA.gen.det(rows).map((r) => r.slice(0, cols))); if (opt.onChange) opt.onChange(); }));
    if (opt.examples && opt.examples.length) {
      const s = select([["", TXT.examples + " ▾"]].concat(opt.examples.map(([l, m]) => [m, l])), "", (v) => { if (v) { set(parseMatrix(v)); s.value = ""; if (opt.onPick) opt.onPick(); } });
      bar.append(s);
    }
    bar.append(button(TXT.asText, () => {
      if (textArea.style.display === "none") {
        snapshot();
        textArea.value = values.map((r) => r.join(" ")).join("\n");
        textArea.style.display = ""; grid.style.display = "none";
      } else { fromText(); textArea.style.display = "none"; grid.style.display = ""; }
    }, "la-ghost"));
    bar.append(button(TXT.clear, () => { values = null; render(); }, "la-ghost"));
    render();
    return { el: box, get: get, set: set, dims: () => [rows, cols], inputs: () => inputs };
  }

  // ------------------------------------------------------------------ visualizzazione dei passi
  /** steps: [{title, html}] ; il primo può essere la matrice di partenza */
  function StepViewer(container, steps, opt) {
    opt = opt || {};
    let k = opt.all ? -1 : 0;
    const nav = el("div", { class: "la-nav" });
    const body = el("div", { class: "la-steps" });
    container.append(nav, body);
    function draw() {
      nav.innerHTML = "";
      body.innerHTML = "";
      if (steps.length > 1) {
        if (k >= 0) {
          nav.append(button("⏮", () => { k = 0; draw(); }, "la-mini"), button("◀ " + TXT.prev, () => { if (k > 0) { k--; draw(); } }),
            el("span", { class: "la-count" }, TXT.stepOf(k + 1, steps.length)),
            button(TXT.next + " ▶", () => { if (k < steps.length - 1) { k++; draw(); } }, "la-primary"), button("⏭", () => { k = steps.length - 1; draw(); }, "la-mini"),
            button(TXT.all, () => { k = -1; draw(); }, "la-ghost"));
        } else nav.append(button(TXT.oneByOne, () => { k = 0; draw(); }, "la-ghost"));
      }
      const show = k < 0 ? steps : [steps[k]];
      show.forEach((s, idx) => {
        const n = k < 0 ? idx : k;
        const card = el("div", { class: "la-step" + (s.final ? " la-final" : "") });
        card.append(el("div", { class: "la-step-title" }, (steps.length > 1 && !s.final ? `<span class="la-step-n">${n + 1}</span>` : "") + (s.title || "")));
        if (s.html) card.append(el("div", { class: "la-step-body" }, s.html));
        body.appendChild(card);
      });
      typeset(body);
    }
    draw();
  }

  // passi di Gauss → schede
  function gaussCards(A0, steps, opt) {
    opt = opt || {};
    const bar = opt.bar;
    const cards = [{ title: TXT.start, html: disp(LA.texMatrix(A0, { bar: bar })) }];
    steps.forEach((s) => {
      const nota = s.note && TXT[s.note.key] ? TXT[s.note.key](s.note) : "";
      let html = disp(LA.texMatrix(s.matrix, { bar: bar, piv: s.piv, rows: s.rowsMod }));
      if (opt.extra) html += opt.extra(s);
      cards.push({ title: s.op ? tex(LA.texOp(s.op)) + `<span class="la-note">${nota}</span>` : `<span class="la-note">${nota}</span>`, html: html });
    });
    return cards;
  }

  // ------------------------------------------------------------------ LaTeX nel formato delle note
  function latexAug(A, bar) {
    const n = A[0].length;
    const spec = bar ? `*{${bar}}{C{2.2em}}|*{${n - bar}}{C{2.2em}}` : `*{${n}}{C{2.2em}}`;
    const righe = A.map((r) => r.map((x) => "$" + x.tex() + "$").join(" & ")).join("\\\\\n");
    return `\\left(\n\\begin{array}{${spec}}\n${righe}\n\\end{array}\n\\right)`;
  }
  function latexSteps(A0, steps, bar, titolo) {
    const op = (o) => o.type === "swap" ? LA.texOp(o).replace(/R_\{(\d+)\}/g, "R_$1") : LA.texOp(o).replace(/R_\{(\d+)\}/g, "R_$1");
    let s = `\\bigskip\n\\begin{tcolorbox}[example={${titolo}}{ex:lab}]\n\\newcolumntype{C}[1]{>{\\centering\\arraybackslash}m{#1}}\n\n\\begin{align*}\n&${latexAug(A0, bar)}`;
    steps.filter((t) => t.op).forEach((t) => {
      s += ` \\\\[2ex]\n%\n&${latexAug(t.matrix, bar)}\n\\hspace{1em}\\text{(} ${op(t.op)} \\text{)}`;
    });
    s += "\n\\end{align*}\n\\end{tcolorbox}\n";
    return s;
  }

  // ------------------------------------------------------------------ cornice comune di uno strumento
  function Frame(root, spec) {
    root.innerHTML = "";
    root.classList.add("la-mj");
    const tabs = el("div", { class: "la-tabs" });
    const panes = {};
    const modes = spec.modes || ["compute"];
    modes.forEach((m, i) => {
      const t = button(TXT[m] || m, () => select(m), "la-tab");
      t.dataset.mode = m;
      tabs.appendChild(t);
      panes[m] = el("div", { class: "la-pane" });
      if (i) panes[m].hidden = true;
    });
    function select(m) {
      tabs.querySelectorAll(".la-tab").forEach((t) => t.classList.toggle("la-on", t.dataset.mode === m));
      Object.entries(panes).forEach(([k, p]) => (p.hidden = k !== m));
      if (spec.onMode) spec.onMode(m);
    }
    if (modes.length > 1) root.appendChild(tabs);
    Object.values(panes).forEach((p) => root.appendChild(p));
    select(modes[0]);
    return { panes: panes, select: select };
  }

  /** riga di opzioni + pulsante Calcola + area dei risultati */
  function ComputeLayout(pane) {
    const inputs = el("div", { class: "la-inputs" });
    const opts = el("div", { class: "la-opts" });
    const actions = el("div", { class: "la-actions" });
    const msg = el("div", { class: "la-msg", role: "status" });
    const out = el("div", { class: "la-out" });
    pane.append(inputs, opts, actions, msg, out);
    return { inputs, opts, actions, msg, out };
  }

  function useIn(A, current) {
    const box = el("div", { class: "la-usein" }, `<span>${TXT.useIn}</span>`);
    Object.entries(PAGINE).forEach(([k, [slug, label]]) => {
      if (k === current) return;
      if (A.length !== A[0].length && ["det", "inversa", "lu", "autovalori"].indexOf(k) >= 0) return;
      const href = `../${slug}/#A=${matStr(A)}`;
      box.append(el("a", { href: href, class: "la-chip" }, label));
    });
    return box;
  }
  function shareBar(extraLatex) {
    const b = el("div", { class: "la-share" });
    b.append(button("🔗 " + TXT.copyLink, (e) => copy(location.href, e.currentTarget), "la-ghost"));
    if (extraLatex) b.append(button("𝐓𝐞𝐗 " + TXT.copyLatex, (e) => copy(extraLatex(), e.currentTarget), "la-ghost"));
    return b;
  }
  function err(msgBox, text) { msgBox.innerHTML = text ? `<div class="la-err">${text}</div>` : ""; if (text) typeset(msgBox); }
  function startMatrix(root, fallback) {
    const h = readHash();
    const src = h.A || root.dataset.matrix || fallback;
    const A = parseMatrix(src);
    return A.every((r) => r.every((x) => x)) ? A : parseMatrix(fallback);
  }

  // ------------------------------------------------------------------ esercizi (modalità «Esercitati»)
  function Practice(pane, make) {
    // make() → {prompt (html), answerUI (el), check() → bool|null, solution() → [cards]}
    let score = 0, total = 0, cur = null;
    const head = el("div", { class: "la-practice-head" });
    const box = el("div", { class: "la-practice" });
    const res = el("div", { class: "la-msg" });
    const sol = el("div", { class: "la-out" });
    const scoreEl = el("span", { class: "la-score" });
    pane.append(head, box, res, sol);
    const nuovo = () => {
      cur = make();
      box.innerHTML = "";
      res.innerHTML = "";
      sol.innerHTML = "";
      box.append(el("div", { class: "la-prompt" }, cur.prompt));
      box.append(cur.answerUI);
      const acts = el("div", { class: "la-actions" });
      acts.append(button(TXT.check, () => {
        const r = cur.check();
        if (r === null) { res.innerHTML = `<div class="la-err">${TXT.fillAll}</div>`; return; }
        if (!cur.counted) { total++; if (r) score++; cur.counted = true; }
        res.innerHTML = r ? `<div class="la-ok">✓ ${TXT.right}</div>` : `<div class="la-err">✗ ${TXT.wrong}</div>`;
        scoreEl.textContent = TXT.score(score, total);
      }, "la-primary"), button(TXT.showSol, () => { sol.innerHTML = ""; cur.counted = true; StepViewer(sol, cur.solution(), { all: false }); }, "la-ghost"));
      box.append(acts);
      typeset(box);
    };
    head.append(button("↻ " + TXT.newEx, nuovo), scoreEl);
    nuovo();
  }
  function numberAnswer() {
    const inp = el("input", { type: "text", class: "la-cell la-answer", placeholder: TXT.yourAnswer });
    return { el: inp, get: () => Frac.parse(inp.value) };
  }
  function matrixAnswer(m, n) {
    const mi = MatrixInput({ rows: m, cols: n, random: false, fixedCols: true, minR: m, maxR: m, values: Array.from({ length: m }, () => Array(n).fill("")) });
    mi.el.querySelector(".la-dims").remove();
    mi.el.querySelector(".la-input-bar").remove();
    return mi;
  }

  // ================================================================== STRUMENTI
  const TOOLS = {};

  // ------------------------------------------------------------------ Gauss
  TOOLS.gauss = function (root) {
    const F = Frame(root, { modes: ["compute", "doit"] });
    const L = ComputeLayout(F.panes.compute);
    let piv = "first", jordan = false;
    const mi = MatrixInput({ rows: 3, cols: 3, label: "\\boldsymbol A", maxR: 8, maxC: 8, examples: ESEMPI.quadrate.concat(ESEMPI.rettangolari), onEnter: run, onPick: run,
      random: (m, n) => LA.gen.rank(m, n, Math.max(1, Math.min(m, n) - (Math.random() < 0.3 ? 1 : 0))) });
    mi.set(startMatrix(root, "0,2,1;1,-1,0;2,1,3"));
    L.inputs.append(mi.el);
    L.opts.append(select([["first", TXT.pivFirst], ["partial", TXT.pivPartial]], piv, (v) => { piv = v; run(); }),
      select([["0", TXT.gaussEchelon], ["1", TXT.gaussJordan]], "0", (v) => { jordan = v === "1"; run(); }));
    L.actions.append(button(TXT.compute, run, "la-primary"));
    function run() {
      const A = mi.get();
      if (!A) return err(L.msg, TXT.invalid);
      err(L.msg, "");
      writeHash({ A: matStr(A) });
      const g = LA.gauss(A, { pivoting: piv, jordan: jordan });
      const cards = gaussCards(A, g.steps);
      cards.push({ final: true, title: jordan ? TXT.rrefDone : TXT.echelonDone(g.pivots.length),
        html: disp(LA.texMatrix(g.result, { cells: Object.fromEntries(g.pivots.map(([r, c]) => [r + "," + c, "la-piv"])) })) +
          `<p>${TXT.rank}: <strong>${g.pivots.length}</strong> · ${TXT.pivotsAt} ${g.pivots.map((p) => p[1] + 1).join(", ") || "—"}</p>` });
      L.out.innerHTML = "";
      StepViewer(L.out, cards);
      L.out.append(shareBar(() => latexSteps(A, g.steps, null, IT ? "Eliminazione di Gauss" : "Gaussian elimination")), useIn(A, "gauss"));
    }
    run();
    DoIt(F.panes.doit, () => mi.get() || parseMatrix("0,2,1;1,-1,0;2,1,3"));
  };

  /** «Fallo tu»: lo studente sceglie le operazioni */
  function DoIt(pane, getStart) {
    pane.append(el("p", { class: "la-intro" }, TXT.doitIntro));
    const wrap = el("div", {});
    pane.append(wrap);
    let A0, A, history;
    function start() { A0 = getStart(); A = M.clone(A0); history = []; draw(); }
    function isEchelon(B) {
      let last = -1, zero = false;
      for (const r of B) {
        const j = r.findIndex((x) => !x.isZero());
        if (j < 0) { zero = true; continue; }
        if (zero || j <= last) return false;
        last = j;
      }
      return true;
    }
    function draw(message) {
      wrap.innerHTML = "";
      const m = A.length;
      const mat = el("div", { class: "la-doit-mat" }, disp(LA.texMatrix(A, { rows: history.length ? history[history.length - 1].rows : [] })));
      wrap.append(mat);
      if (isEchelon(A)) {
        const std = LA.gauss(A0).steps.filter((s) => s.op).length;
        wrap.append(el("div", { class: "la-ok" }, "✓ " + TXT.doitDone(history.length, std)));
      }
      const rowSel = (v) => select(Array.from({ length: m }, (_, i) => [String(i), `${TXT.rowWord} ${i + 1}`]), String(v), () => {});
      const ctl = el("div", { class: "la-doit-ctl" });
      let tipo = "add";
      const tipoSel = select([["add", TXT.opAdd], ["swap", TXT.opSwap], ["scale", TXT.opScale]], tipo, (v) => { tipo = v; form(); });
      const formBox = el("span", { class: "la-doit-form" });
      let ri, rk, lam;
      function form() {
        formBox.innerHTML = "";
        ri = rowSel(1 % m); rk = rowSel(0); lam = el("input", { type: "text", class: "la-cell la-lam", value: tipo === "scale" ? "1/2" : "-1" });
        if (tipo === "swap") formBox.append(el("span", {}, "R"), ri, el("span", {}, " ↔ "), rk);
        if (tipo === "scale") formBox.append(ri, el("span", {}, " " + TXT.by + " "), lam);
        if (tipo === "add") formBox.append(ri, el("span", {}, " ← R + "), lam, el("span", {}, " " + TXT.times + " "), rk);
      }
      form();
      ctl.append(tipoSel, formBox, button(TXT.apply, () => {
        const i = +ri.value, k = +rk.value;
        let op;
        if (tipo === "swap") { if (i === k) return draw(TXT.errSame); op = { type: "swap", i: i, k: k }; }
        else {
          const c = Frac.parse(lam.value);
          if (!c) return draw(TXT.errNum);
          if (tipo === "scale") { if (c.isZero()) return draw(TXT.errZero); op = { type: "scale", i: i, c: c }; }
          else { if (i === k) return draw(TXT.errSame); op = { type: "add", i: i, k: k, c: c }; }
        }
        A = LA.applyOp(A, op);
        history.push({ op: op, rows: op.type === "swap" ? [op.i, op.k] : [op.i] });
        draw();
      }, "la-primary"));
      wrap.append(ctl);
      const acts = el("div", { class: "la-actions" });
      acts.append(button("↶ " + TXT.undo, () => { if (!history.length) return; history.pop(); A = M.clone(A0); history.forEach((h) => (A = LA.applyOp(A, h.op))); draw(); }, "la-ghost"),
        button("💡 " + TXT.hint, () => {
          const g = LA.gauss(A);
          const s = g.steps.find((x) => x.op);
          draw(s ? TXT.doitHint(LA.texOp(s.op)) : TXT.doitNoHint);
        }, "la-ghost"),
        button("⟲ " + TXT.restart, start, "la-ghost"));
      wrap.append(acts);
      if (message) wrap.append(el("div", { class: "la-msg" }, `<div class="la-hint">${message}</div>`));
      if (history.length) wrap.append(el("div", { class: "la-history" }, `<strong>${TXT.moves}:</strong> ` + history.map((h) => tex(LA.texOp(h.op))).join(" · ")));
      typeset(wrap);
    }
    start();
    pane.addEventListener("la-restart", start);
    // quando si apre la scheda, riparte dalla matrice inserita
    const obs = new MutationObserver(() => { if (!pane.hidden) start(); });
    obs.observe(pane, { attributes: true, attributeFilter: ["hidden"] });
  }

  // ------------------------------------------------------------------ rango
  TOOLS.rango = function (root) {
    const F = Frame(root, { modes: ["compute", "practice"] });
    const L = ComputeLayout(F.panes.compute);
    const mi = MatrixInput({ rows: 3, cols: 4, label: "\\boldsymbol A", maxR: 8, maxC: 8, examples: ESEMPI.rettangolari.concat(ESEMPI.quadrate), onEnter: run, onPick: run,
      random: (m, n) => LA.gen.rank(m, n, 1 + Math.floor(Math.random() * Math.min(m, n))) });
    mi.set(startMatrix(root, "1,2,0,1;2,4,1,3;3,6,1,4"));
    L.inputs.append(mi.el);
    L.actions.append(button(TXT.compute, run, "la-primary"));
    function run() {
      const A = mi.get();
      if (!A) return err(L.msg, TXT.invalid);
      err(L.msg, "");
      writeHash({ A: matStr(A) });
      const g = LA.gauss(A);
      const cards = gaussCards(A, g.steps);
      cards.push({ final: true, title: TXT.echelonDone(g.pivots.length),
        html: disp(LA.texMatrix(g.result, { cells: Object.fromEntries(g.pivots.map(([r, c]) => [r + "," + c, "la-piv"])) })) +
          disp(`\\operatorname{rank}(\\boldsymbol A) = ${g.pivots.length} \\le \\min\\{${A.length}, ${A[0].length}\\}`) });
      L.out.innerHTML = "";
      StepViewer(L.out, cards);
      L.out.append(shareBar(() => latexSteps(A, g.steps, null, IT ? "rango di una matrice" : "rank of a matrix")), useIn(A, "rango"));
    }
    run();
    Practice(F.panes.practice, () => {
      const m = 3 + Math.floor(Math.random() * 2), n = 3 + Math.floor(Math.random() * 2);
      const r = 1 + Math.floor(Math.random() * Math.min(m, n));
      const A = LA.gen.rank(m, n, r);
      const a = numberAnswer();
      return { prompt: `${TXT.exRank} ${disp("\\boldsymbol A = " + LA.texMatrix(A))}`, answerUI: a.el,
        check: () => { const v = a.get(); return v === null ? null : v.eq(r); },
        solution: () => { const g = LA.gauss(A); return gaussCards(A, g.steps).concat([{ final: true, title: TXT.echelonDone(r), html: "" }]); } };
    });
  };

  // ------------------------------------------------------------------ determinante
  TOOLS.det = function (root) {
    const F = Frame(root, { modes: ["compute", "practice"] });
    const L = ComputeLayout(F.panes.compute);
    let method = "laplace", line = "auto", piv = "first";
    const lineBox = el("span", {});
    let mi = null;
    mi = MatrixInput({ rows: 3, cols: 3, square: true, maxR: 6, label: "\\boldsymbol A", examples: ESEMPI.quadrate, onEnter: run, onPick: run, onChange: lineOptions });
    mi.set(startMatrix(root, "1,2,0;3,1,4;2,-1,1"));
    L.inputs.append(mi.el);
    L.opts.append(select([["laplace", TXT.laplace], ["sarrus", TXT.sarrus], ["elim", TXT.elimination]], method, (v) => { method = v; lineOptions(); run(); }), lineBox);
    function lineOptions() {
      if (!mi) return;   // durante la costruzione della griglia
      lineBox.innerHTML = "";
      const n = mi.dims()[0];
      if (method === "laplace" && n >= 3) {
        const o = [["auto", TXT.lineAuto]];
        for (let i = 0; i < n; i++) o.push(["r" + i, TXT.alongRow(i + 1)]);
        for (let j = 0; j < n; j++) o.push(["c" + j, TXT.alongCol(j + 1)]);
        if (!o.find((x) => x[0] === line)) line = "auto";
        lineBox.append(select(o, line, (v) => { line = v; run(); }));
      }
      if (method === "elim") lineBox.append(select([["first", TXT.pivFirst], ["partial", TXT.pivPartial]], piv, (v) => { piv = v; run(); }));
    }
    lineOptions();
    L.actions.append(button(TXT.compute, run, "la-primary"));
    function run() {
      const A = mi.get();
      if (!A) return err(L.msg, TXT.invalid);
      if (method === "sarrus" && A.length !== 3) return err(L.msg, TXT.sarrusOnly3);
      err(L.msg, "");
      writeHash({ A: matStr(A), m: method });
      L.out.innerHTML = "";
      StepViewer(L.out, detCards(A, method, line, piv));
      L.out.append(shareBar(), useIn(A, "det"));
    }
    run();
    Practice(F.panes.practice, () => {
      const n = 2 + Math.floor(Math.random() * 2) + (Math.random() < 0.2 ? 1 : 0);
      const A = LA.gen.det(n);
      const d = LA.det(A);
      const a = numberAnswer();
      return { prompt: `${TXT.exDet} ${disp("\\boldsymbol A = " + LA.texMatrix(A))}`, answerUI: a.el,
        check: () => { const v = a.get(); return v === null ? null : v.eq(d); },
        solution: () => detCards(A, n === 3 ? "sarrus" : "laplace", "auto", "first") };
    });
  };

  function detCards(A, method, line, piv) {
    const n = A.length;
    const cards = [];
    if (method === "sarrus") {
      const s = LA.sarrus(A);
      const prod = (t) => t.map((x) => x.texP()).join("\\cdot ");
      const f1 = s.plus.map(prod).join(" + ") + " \\;-\\; " + s.minus.map(prod).join(" - ");
      const val = (v, first) => (v.sign() < 0 ? (first ? "-" : " - ") + v.abs().tex() : (first ? "" : " + ") + v.tex());
      const f2 = s.plusVals.map((v, i) => val(v, i === 0)).join("") + s.minusVals.map((v) => (v.sign() < 0 ? " + " + v.abs().tex() : " - " + v.tex())).join("");
      cards.push({ title: TXT.start, html: disp("\\boldsymbol A = " + LA.texMatrix(A)) + disp("\\det(\\boldsymbol A) = aei + bfg + cdh \\;-\\; ceg - bdi - afh") });
      cards.push({ title: "Sarrus", html: disp("\\det(\\boldsymbol A) = " + f1) });
      cards.push({ final: true, title: "\\(\\det(\\boldsymbol A) = " + s.det.tex() + "\\)", html: disp("\\det(\\boldsymbol A) = " + f2 + " = " + s.det.tex()) });
      return cards;
    }
    if (method === "elim") {
      const r = LA.detElimination(A, { pivoting: piv });
      const gc = gaussCards(A, r.steps, {
        extra: (s) => s.op ? `<p class="la-effect">${TXT.detEffect}: <strong>${s.op.type === "swap" ? TXT.swapSign : s.op.type === "scale" ? TXT.timesLambda(s.op.c) : TXT.unchanged}</strong></p>` : "",
      });
      if (r.singular) gc.push({ final: true, title: "\\(\\det(\\boldsymbol A) = 0\\)", html: `<p>${TXT.singularRow}</p>` + disp(LA.texMatrix(r.U)) });
      else {
        const sgn = r.swaps ? `(-1)^{${r.swaps}}\\cdot ` : "";
        gc.push({ final: true, title: "\\(\\det(\\boldsymbol A) = " + r.det.tex() + "\\)", html: `<p>${TXT.detTriangular}</p>` + disp(`\\det(\\boldsymbol A) = ${sgn}${r.diag.map((x) => x.texP()).join("\\cdot ")} = ${r.det.tex()}`) });
      }
      return gc;
    }
    // Laplace
    const ln = line && line !== "auto" ? { type: line[0] === "r" ? "row" : "col", idx: +line.slice(1) } : null;
    const tree = LA.laplace(A, ln);
    cards.push({ title: TXT.start, html: disp("\\boldsymbol A = " + LA.texMatrix(A)) });
    laplaceCards(tree, cards, "\\boldsymbol A", 0);
    cards.push({ final: true, title: "\\(\\det(\\boldsymbol A) = " + tree.det.tex() + "\\)", html: "" });
    return cards;
  }
  function laplaceCards(t, cards, name, depth) {
    const n = t.n;
    if (n === 1) { cards.push({ title: `\\(\\det(${name}) = ${t.det.tex()}\\)`, html: "" }); return; }
    if (n === 2) {
      const [[a, b], [c, d]] = t.matrix;
      cards.push({ title: `\\(\\det(${name})\\)`, html: disp(`\\det${LA.texMatrix(t.matrix)} = ${a.texP()}\\cdot ${d.texP()} - ${b.texP()}\\cdot ${c.texP()} = ${t.det.tex()}`) });
      return;
    }
    const lab = t.line.type === "row" ? `i = ${t.line.idx + 1}` : `j = ${t.line.idx + 1}`;
    const formula = t.line.type === "row"
      ? `\\det(${name}) = \\sum_{j=1}^{${n}} (-1)^{${t.line.idx + 1}+j}\\, a_{${t.line.idx + 1}j}\\, \\det(${name}_{${t.line.idx + 1}j})`
      : `\\det(${name}) = \\sum_{i=1}^{${n}} (-1)^{i+${t.line.idx + 1}}\\, a_{i${t.line.idx + 1}}\\, \\det(${name}_{i${t.line.idx + 1}})`;
    const termini = t.terms.map((x, k) => {
      const segno = x.sign > 0 ? (k ? " + " : "") : " - ";
      if (x.zero) return `${segno}${x.a.texP()}\\cdot\\det(${name}_{${x.i + 1}${x.j + 1}})`;
      return `${segno}${x.a.texP()}\\cdot\\det${LA.texMatrix(x.minor)}`;
    }).join("");
    const zeri = t.terms.some((x) => x.zero) ? `<p class="la-note">(${TXT.zeroTerms})</p>` : "";
    cards.push({ title: TXT.expandAlong(t.line) + ` <span class="la-note">(${lab})</span>`, html: disp(formula) + disp(`= ${termini}`) + zeri });
    t.terms.filter((x) => !x.zero).forEach((x) => {
      const sub = `${name}_{${x.i + 1}${x.j + 1}}`;
      if (x.sub.n >= 3) cards.push({ title: TXT.subDet(x.i + 1, x.j + 1), html: "" });
      laplaceCards(x.sub, cards, sub, depth + 1);
    });
    const somma = t.terms.filter((x) => !x.zero).map((x, k) => {
      const v = x.a.mul(x.sub.det).mul(x.sign);
      return (k ? (v.sign() < 0 ? " - " : " + ") : v.sign() < 0 ? "-" : "") + v.abs().tex();
    }).join("") || "0";
    const sostituito = t.terms.filter((x) => !x.zero).map((x, k) => (x.sign > 0 ? (k ? " + " : "") : " - ") + `${x.a.texP()}\\cdot ${x.sub.det.texP()}`).join("") || "0";
    cards.push({ title: `\\(\\det(${name})\\)`, html: disp(`\\det(${name}) = ${sostituito} = ${somma} = ${t.det.tex()}`) });
  }

  // ------------------------------------------------------------------ inversa
  TOOLS.inversa = function (root) {
    const F = Frame(root, { modes: ["compute", "practice"] });
    const L = ComputeLayout(F.panes.compute);
    let method = "gj", piv = "first";
    const mi = MatrixInput({ rows: 3, cols: 3, square: true, maxR: 6, label: "\\boldsymbol A", examples: ESEMPI.quadrate, onEnter: run, onPick: run, random: (n) => LA.gen.inverse(n) });
    mi.set(startMatrix(root, "2,1;1,1"));
    L.inputs.append(mi.el);
    L.opts.append(select([["gj", TXT.gaussJordanInv.replace(/\\\(|\\\)/g, "").replace(/\\boldsymbol /g, "").replace("\\mid", "|")], ["cof", TXT.cofactors]], method, (v) => { method = v; run(); }),
      select([["first", TXT.pivFirst], ["partial", TXT.pivPartial]], piv, (v) => { piv = v; run(); }));
    L.actions.append(button(TXT.compute, run, "la-primary"));
    let last = null;
    function run() {
      const A = mi.get();
      if (!A) return err(L.msg, TXT.invalid);
      err(L.msg, "");
      writeHash({ A: matStr(A), m: method });
      L.out.innerHTML = "";
      const r = method === "gj" ? inverseCards(A, piv) : cofactorCards(A);
      last = r;
      StepViewer(L.out, r.cards);
      L.out.append(shareBar(method === "gj" ? () => latexSteps(M.hcat(A, M.identity(A.length)), r.steps, A.length, IT ? "matrice inversa con il metodo di Gauss--Jordan" : "inverse matrix via Gauss--Jordan elimination") : null), useIn(A, "inversa"));
    }
    run();
    Practice(F.panes.practice, () => {
      const n = Math.random() < 0.55 ? 2 : 3;
      const A = LA.gen.inverse(n);
      const inv = LA.inverseGJ(A).inverse;
      const ans = matrixAnswer(n, n);
      return { prompt: `${TXT.exInv} ${disp("\\boldsymbol A = " + LA.texMatrix(A))}`, answerUI: ans.el,
        check: () => { const B = ans.get(); if (!B) return null; return M.eq(B, inv); },
        solution: () => inverseCards(A, "first").cards };
    });
  };
  function inverseCards(A, piv) {
    const n = A.length;
    const r = LA.inverseGJ(A, { pivoting: piv });
    const aug = M.hcat(A, M.identity(n));
    const cards = gaussCards(aug, r.steps, { bar: n });
    cards[0].html = `<p>${TXT.invStart}</p>` + cards[0].html;
    if (r.singular) cards.push({ final: true, title: "\\(\\det(\\boldsymbol A) = 0\\)", html: `<p>${TXT.invSingular(r.col)}</p>` });
    else cards.push({ final: true, title: TXT.invDone, html: disp("\\boldsymbol A^{-1} = " + LA.texMatrix(r.inverse)) +
      `<p><strong>${TXT.verify}:</strong></p>` + disp(`\\boldsymbol A\\,\\boldsymbol A^{-1} = ${LA.texMatrix(A)}${LA.texMatrix(r.inverse)} = ${LA.texMatrix(M.mul(A, r.inverse))} = \\boldsymbol I`) });
    return { cards: cards, steps: r.steps };
  }
  function cofactorCards(A) {
    const n = A.length;
    const c = LA.inverseCofactors(A);
    const cards = [{ title: TXT.start, html: disp("\\boldsymbol A = " + LA.texMatrix(A)) + disp(`\\det(\\boldsymbol A) = ${c.det.tex()}`) }];
    if (c.det.isZero()) { cards.push({ final: true, title: "\\(\\det(\\boldsymbol A) = 0\\)", html: `<p>${TXT.invSingular(0).replace(/^.*?:/, "")}</p>` }); return { cards: cards }; }
    if (n === 2) {
      const [[a, b], [cc, d]] = A;
      cards.push({ title: "2×2", html: disp(`\\boldsymbol A^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix} d & -b\\\\ -c & a\\end{pmatrix} = \\frac{1}{${c.det.tex()}}${LA.texMatrix([[d, b.neg()], [cc.neg(), a]])}`) });
    } else {
      let lines = [];
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++)
        lines.push(`C_{${i + 1}${j + 1}} = ${(i + j) % 2 ? "-" : "+"}\\det${LA.texMatrix(M.minor(A, i, j))} = ${c.cof[i][j].tex()}`);
      cards.push({ title: TXT.cofactors, html: `<p>${TXT.cofIntro}</p>` + lines.map((l) => disp(l)).join("") });
      cards.push({ title: "\\(\\boldsymbol C\\), \\(\\operatorname{adj}(\\boldsymbol A)\\)", html: disp("\\boldsymbol C = " + LA.texMatrix(c.cof)) + `<p>${TXT.adjIntro}</p>` + disp("\\operatorname{adj}(\\boldsymbol A) = \\boldsymbol C^\\top = " + LA.texMatrix(c.adj)) });
    }
    cards.push({ final: true, title: "\\(\\boldsymbol A^{-1} = \\frac{1}{\\det(\\boldsymbol A)}\\operatorname{adj}(\\boldsymbol A)\\)", html: disp(`\\boldsymbol A^{-1} = \\frac{1}{${c.det.tex()}}${LA.texMatrix(c.adj)} = ${LA.texMatrix(c.inverse)}`) +
      `<p><strong>${TXT.verify}:</strong></p>` + disp(`\\boldsymbol A\\,\\boldsymbol A^{-1} = ${LA.texMatrix(M.mul(A, c.inverse))}`) });
    return { cards: cards };
  }

  // ------------------------------------------------------------------ LU / PLU
  TOOLS.lu = function (root) {
    const F = Frame(root, { modes: ["compute", "practice"] });
    const L = ComputeLayout(F.panes.compute);
    let piv = "first";
    const mi = MatrixInput({ rows: 3, cols: 3, square: true, maxR: 6, label: "\\boldsymbol A", examples: ESEMPI.quadrate, onEnter: run, onPick: run, random: (n) => (Math.random() < 0.5 ? LA.gen.lu(n).A : LA.gen.inverse(n)) });
    mi.set(startMatrix(root, "2,1,1;4,3,3;8,7,9"));
    L.inputs.append(mi.el);
    L.opts.append(select([["none", TXT.luNone], ["first", TXT.luFirst], ["partial", TXT.luPartial]], piv, (v) => { piv = v; run(); }));
    L.actions.append(button(TXT.compute, run, "la-primary"));
    function run() {
      const A = mi.get();
      if (!A) return err(L.msg, TXT.invalid);
      err(L.msg, "");
      writeHash({ A: matStr(A), p: piv });
      L.out.innerHTML = "";
      StepViewer(L.out, luCards(A, piv));
      L.out.append(shareBar(), useIn(A, "lu"));
    }
    run();
    Practice(F.panes.practice, () => {
      const n = Math.random() < 0.5 ? 2 : 3;
      const g = LA.gen.lu(n);
      const la = matrixAnswer(n, n), ua = matrixAnswer(n, n);
      const ui = el("div", { class: "la-inputs" });
      la.el.querySelector(".la-input-head").innerHTML = tex("\\boldsymbol L");
      ua.el.querySelector(".la-input-head").innerHTML = tex("\\boldsymbol U");
      ui.append(la.el, ua.el);
      return { prompt: `${TXT.exLU} ${disp("\\boldsymbol A = " + LA.texMatrix(g.A))}`, answerUI: ui,
        check: () => { const Lm = la.get(), Um = ua.get(); if (!Lm || !Um) return null; return M.eq(Lm, g.L) && M.eq(Um, g.U); },
        solution: () => luCards(g.A, "none") };
    });
  };
  function luCards(A, piv) {
    const r = LA.lu(A, { pivoting: piv });
    const cards = [{ title: TXT.start, html: disp("\\boldsymbol A = " + LA.texMatrix(A)) }];
    const usaP = piv !== "none";
    r.steps.forEach((s) => {
      const nota = s.note && TXT[s.note.key] ? TXT[s.note.key](s.note) : "";
      let html = disp("\\boldsymbol U = " + LA.texMatrix(s.U, { piv: s.piv, rows: s.op ? (s.op.type === "swap" ? [s.op.i, s.op.k] : [s.op.i]) : [] }) +
        "\\qquad \\boldsymbol L = " + LA.texMatrix(s.L, s.note.key === "luMult" ? { cells: { [s.note.row + "," + s.note.col]: "la-piv" } } : {}) +
        (usaP ? "\\qquad \\boldsymbol P = " + LA.texMatrix(s.P) : ""));
      cards.push({ title: (s.op ? tex(LA.texOp(s.op)) : "") + `<span class="la-note">${nota}</span>`, html: html });
    });
    if (!r.ok) { cards.push({ final: true, title: "✗", html: `<p>${TXT.luNeeds(r.col)}</p>` }); return cards; }
    const lhs = usaP ? "\\boldsymbol P\\boldsymbol A" : "\\boldsymbol A";
    cards.push({ final: true, title: TXT.luDone, html:
      disp((usaP ? "\\boldsymbol P = " + LA.texMatrix(r.P) + "\\quad " : "") + "\\boldsymbol L = " + LA.texMatrix(r.L) + "\\quad \\boldsymbol U = " + LA.texMatrix(r.U)) +
      disp(`${lhs} = ${LA.texMatrix(usaP ? M.mul(r.P, A) : A)} = ${LA.texMatrix(r.L)}${LA.texMatrix(r.U)} = \\boldsymbol L\\boldsymbol U`) +
      disp(`\\det(\\boldsymbol A) = ${r.swaps ? `(-1)^{${r.swaps}}` : ""}\\prod_i u_{ii} = ${LA.det(A).tex()}`) });
    return cards;
  }

  // ------------------------------------------------------------------ sistemi lineari
  TOOLS.sistema = function (root) {
    const F = Frame(root, { modes: ["compute", "practice"] });
    const L = ComputeLayout(F.panes.compute);
    let method = "gauss", piv = "first";
    const h = readHash();
    const A0 = startMatrix(root, "1,1,1;2,-1,1;1,2,-1");
    let mi = null, bi = null;
    mi = MatrixInput({ rows: 3, cols: 3, label: "\\boldsymbol A", maxR: 6, maxC: 6, onEnter: run, examples: ESEMPI.quadrate.concat(ESEMPI.rettangolari),
      onChange: () => syncB(), onPick: () => { syncB(); run(); }, random: (m, n) => LA.gen.rank(m, n, Math.min(m, n) - (Math.random() < 0.3 ? 1 : 0)) });
    mi.set(A0);
    bi = MatrixInput({ rows: A0.length, cols: 1, label: "\\boldsymbol b", random: false, fixedCols: true, maxR: 6,
      values: (h.b || root.dataset.b || "6,3,2").split(",").map((x) => [x]) });
    bi.el.querySelector(".la-dims").remove();
    function syncB() {
      if (!mi || !bi) return;
      const m = mi.dims()[0];
      const cur = bi.get() || [];
      const vals = Array.from({ length: m }, (_, i) => [cur[i] ? cur[i][0].toString() : "0"]);
      if (cur.length !== m) bi.set(vals);
    }
    const pair = el("div", { class: "la-pair" });
    pair.append(mi.el, el("div", { class: "la-bar-sep" }, "|"), bi.el);
    L.inputs.append(pair);
    L.opts.append(select([["gauss", TXT.gaussBack], ["cramer", TXT.cramer], ["lu", TXT.luSolve]], method, (v) => { method = v; run(); }),
      select([["first", TXT.pivFirst], ["partial", TXT.pivPartial]], piv, (v) => { piv = v; run(); }));
    L.actions.append(button(TXT.compute, run, "la-primary"));
    function run() {
      const A = mi.get(), B = bi.get();
      if (!A || !B) return err(L.msg, TXT.invalid);
      const b = B.map((r) => r[0]);
      if (b.length !== A.length) { syncB(); return; }
      err(L.msg, "");
      writeHash({ A: matStr(A), b: b.map(String).join(","), m: method });
      L.out.innerHTML = "";
      let cards;
      if (method === "cramer") cards = cramerCards(A, b);
      else if (method === "lu") cards = luSolveCards(A, b, piv === "first" ? "first" : "partial");
      else cards = solveCards(A, b, piv);
      StepViewer(L.out, cards);
      L.out.append(shareBar(method === "gauss" ? () => latexSteps(M.hcat(A, b.map((x) => [x])), LA.solve(A, b, { pivoting: piv }).steps, A[0].length, IT ? "sistema lineare con l'eliminazione di Gauss" : "linear system via Gaussian elimination") : null), useIn(A, "sistema"));
    }
    run();
    Practice(F.panes.practice, () => {
      const n = Math.random() < 0.5 ? 2 : 3;
      const s = LA.gen.system(n);
      const ans = matrixAnswer(n, 1);
      ans.el.querySelector(".la-input-head").innerHTML = tex("\\boldsymbol x");
      return { prompt: `${TXT.exSys} ${disp(systemTex(s.A, s.b))}`, answerUI: ans.el,
        check: () => { const x = ans.get(); if (!x) return null; return x.every((r, i) => r[0].eq(s.x[i])); },
        solution: () => solveCards(s.A, s.b, "first") };
    });
  };
  function linComb(coefs, vars, constFirst) {
    // coefs: Frac[], vars: tex[]; restituisce "2x_1 - x_2 + 3"
    let s = "";
    coefs.forEach((c, k) => {
      if (c.isZero()) return;
      const v = vars[k];
      const a = c.abs();
      const term = v === "" ? a.tex() : (a.isOne() ? "" : a.tex()) + v;
      s += s === "" ? (c.sign() < 0 ? "-" : "") + term : (c.sign() < 0 ? " - " : " + ") + term;
    });
    return s || "0";
  }
  function systemTex(A, b) {
    const n = A[0].length;
    const righe = A.map((r, i) => {
      const vars = r.map((_, j) => X(j, n));
      return linComb(r, vars) + " &= " + b[i].tex();
    });
    return "\\left\\{\\begin{aligned}" + righe.join("\\\\") + "\\end{aligned}\\right.";
  }
  function solveCards(A, b, piv) {
    const m = A.length, n = A[0].length;
    const r = LA.solve(A, b, { pivoting: piv });
    const cards = gaussCards(M.hcat(A, b.map((x) => [x])), r.steps, { bar: n });
    cards[0].html = disp(systemTex(A, b)) + cards[0].html;
    // Rouché–Capelli
    const kind = r.kind === "unique" ? TXT.kindUnique : r.kind === "none" ? TXT.kindNone : TXT.kindInfinite(r.free.length);
    let rc = disp(`\\operatorname{rank}(\\boldsymbol A) = ${r.rankA},\\qquad \\operatorname{rank}(\\boldsymbol A\\mid\\boldsymbol b) = ${r.rankAb},\\qquad n = ${n}`);
    if (r.kind === "none") rc += `<p>${TXT.badRow(r.badRow)}</p>`;
    rc += `<p>⇒ <strong>${kind}</strong></p>`;
    cards.push({ title: TXT.rc, html: rc });
    if (r.kind === "none") return cards;
    // sostituzione all'indietro
    const E = r.echelon;
    const params = r.free.map((_, k) => (r.free.length === 1 ? "t" : `t_{${k + 1}}`));
    const vars = Array.from({ length: n }, (_, j) => X(j, n));
    const exprTex = (v) => linComb(v, [""].concat(params));
    let html = "";
    r.free.forEach((j, k) => (html += `<p>${TXT.free(vars[j], params[k])}</p>`));
    r.back.forEach((bk) => {
      const row = E[bk.row];
      const eq = linComb(row.slice(0, n), vars) + " = " + row[n].tex();
      html += disp(`${eq} \\;\\Longrightarrow\\; ${vars[bk.col]} = ${exprTex(bk.expr)}`);
    });
    cards.push({ title: TXT.backSub, html: html });
    let fin;
    if (r.kind === "unique") fin = disp("\\boldsymbol x = " + vecTex(r.x0));
    else fin = disp("\\boldsymbol x = " + vecTex(r.x0) + r.dirs.map((d, k) => " + " + params[k] + vecTex(d)).join("") + (r.free.length === 1 ? ",\\quad t \\in \\R" : ",\\quad " + params.join(", ") + " \\in \\R"));
    const Ax0 = A.map((row) => row.reduce((s, a, j) => s.add(a.mul(r.x0[j])), LA.ZERO));
    fin += `<p><strong>${TXT.verify}:</strong></p>` + disp(`\\boldsymbol A ${vecTex(r.x0)} = ${vecTex(Ax0)} = \\boldsymbol b`);
    cards.push({ final: true, title: TXT.solution, html: fin });
    return cards;
  }
  function cramerCards(A, b) {
    const n = A.length;
    const cards = [{ title: TXT.start, html: disp(systemTex(A, b)) }];
    if (A.length !== A[0].length) { cards.push({ final: true, title: "✗", html: `<p>${TXT.cramerNeedsSquare}</p>` }); return cards; }
    const c = LA.cramer(A, b);
    cards.push({ title: "\\(\\det(\\boldsymbol A)\\)", html: disp(`\\det(\\boldsymbol A) = \\det${LA.texMatrix(A)} = ${c.det.tex()}`) });
    if (c.det.isZero()) { cards.push({ final: true, title: "✗", html: `<p>${TXT.cramerDetZero}</p>` }); return cards; }
    c.parts.forEach((p) => {
      const cells = {};
      for (let i = 0; i < n; i++) cells[i + "," + p.i] = "la-mod";
      cards.push({ title: `\\(${X(p.i, n)}\\)`, html: disp(`\\det(\\boldsymbol A_{${p.i + 1}}) = \\det${LA.texMatrix(p.Ai, { cells: cells })} = ${p.det.tex()}`) +
        disp(`${X(p.i, n)} = \\frac{\\det(\\boldsymbol A_{${p.i + 1}})}{\\det(\\boldsymbol A)} = \\frac{${p.det.tex()}}{${c.det.tex()}} = ${p.x.tex()}`) });
    });
    cards.push({ final: true, title: TXT.solution, html: disp("\\boldsymbol x = " + vecTex(c.x)) });
    return cards;
  }
  function luSolveCards(A, b, piv) {
    const n = A.length;
    const cards = [{ title: TXT.start, html: disp(systemTex(A, b)) }];
    if (A.length !== A[0].length || LA.det(A).isZero()) { cards.push({ final: true, title: "✗", html: `<p>${A.length !== A[0].length ? TXT.notSquare : TXT.cramerDetZero.replace(/Cramer('s rule)?|la regola di Cramer/i, "LU")}</p>` }); return cards; }
    const f = LA.lu(A, { pivoting: piv });
    cards.push({ title: "\\(\\boldsymbol P\\boldsymbol A = \\boldsymbol L\\boldsymbol U\\)", html: disp("\\boldsymbol P = " + LA.texMatrix(f.P) + "\\quad \\boldsymbol L = " + LA.texMatrix(f.L) + "\\quad \\boldsymbol U = " + LA.texMatrix(f.U)) });
    const Pb = f.P.map((r) => r.reduce((s, a, j) => s.add(a.mul(b[j])), LA.ZERO));
    const fw = LA.forwardSub(f.L, Pb);
    const yv = Array.from({ length: n }, (_, j) => `y_{${j + 1}}`);
    let html = disp(`\\boldsymbol L\\boldsymbol y = \\boldsymbol P\\boldsymbol b = ${vecTex(Pb)}`);
    fw.lines.forEach((ln) => { html += disp(`${linComb(f.L[ln.i].slice(0, ln.i + 1), yv)} = ${Pb[ln.i].tex()} \\;\\Longrightarrow\\; y_{${ln.i + 1}} = ${ln.value.tex()}`); });
    cards.push({ title: TXT.forward, html: html });
    const bw = LA.backSub(f.U, fw.y);
    const xv = Array.from({ length: n }, (_, j) => X(j, n));
    html = disp(`\\boldsymbol U\\boldsymbol x = \\boldsymbol y = ${vecTex(fw.y)}`);
    bw.lines.forEach((ln) => { html += disp(`${linComb(f.U[ln.i], xv)} = ${fw.y[ln.i].tex()} \\;\\Longrightarrow\\; ${xv[ln.i]} = ${ln.value.tex()}`); });
    cards.push({ title: TXT.backward, html: html });
    cards.push({ final: true, title: TXT.solution, html: disp("\\boldsymbol x = " + vecTex(bw.x)) });
    return cards;
  }

  // ------------------------------------------------------------------ autovalori
  TOOLS.autovalori = function (root) {
    const F = Frame(root, { modes: ["compute", "practice"] });
    const L = ComputeLayout(F.panes.compute);
    const mi = MatrixInput({ rows: 2, cols: 2, square: true, maxR: 4, label: "\\boldsymbol A", examples: ESEMPI.quadrate.filter((e) => e[1].split(";").length <= 4), onEnter: run, onPick: run, random: (n) => LA.gen.eigen(n).A });
    mi.set(startMatrix(root, "2,-1;-1,2"));
    L.inputs.append(mi.el);
    L.actions.append(button(TXT.compute, run, "la-primary"));
    function run() {
      const A = mi.get();
      if (!A) return err(L.msg, TXT.invalid);
      if (A.length > 4) return err(L.msg, TXT.maxSize(4));
      err(L.msg, "");
      writeHash({ A: matStr(A) });
      L.out.innerHTML = "";
      StepViewer(L.out, eigenCards(A));
      L.out.append(shareBar(), useIn(A, "autovalori"));
    }
    run();
    Practice(F.panes.practice, () => {
      const n = Math.random() < 0.6 ? 2 : 3;
      const g = LA.gen.eigen(n);
      const inp = el("input", { type: "text", class: "la-cell la-answer la-wide", placeholder: IT ? "es. 1, 3, 3" : "e.g. 1, 3, 3" });
      return { prompt: `${TXT.exEig} ${disp("\\boldsymbol A = " + LA.texMatrix(g.A))}`, answerUI: inp,
        check: () => {
          const parts = inp.value.split(/[;,]\s*|\s+/).filter(Boolean).map((x) => Frac.parse(x));
          if (!parts.length || parts.some((x) => !x)) return null;
          const a = parts.map((x) => x.toNumber()).sort((x, y) => x - y);
          return JSON.stringify(a) === JSON.stringify(g.values);
        },
        solution: () => eigenCards(g.A) };
    });
  };
  function eigenCards(A) {
    const n = A.length;
    const e = LA.eigen(A);
    const lamI = A.map((r, i) => r.map((x, j) => (i === j ? (x.isZero() ? "-\\lambda" : x.tex() + " - \\lambda") : x.tex())));
    const lamTex = "\\begin{pmatrix}" + lamI.map((r) => r.join(" & ")).join("\\\\") + "\\end{pmatrix}";
    const cards = [{ title: TXT.start, html: disp("\\boldsymbol A = " + LA.texMatrix(A)) + disp(`\\boldsymbol A - \\lambda \\boldsymbol I = ${lamTex}`) }];
    let charHtml = "";
    if (n === 2) {
      const [[a, b], [c, d]] = A;
      charHtml = disp(`\\det(\\boldsymbol A - \\lambda\\boldsymbol I) = (${lamI[0][0]})(${lamI[1][1]}) - ${b.texP()}\\cdot ${c.texP()} = ${LA.Poly.tex(e.poly)}`);
    } else charHtml = disp(`\\det(\\boldsymbol A - \\lambda\\boldsymbol I) = ${LA.Poly.tex(e.poly)}`);
    charHtml += disp(`${LA.Poly.tex(e.poly)} = 0`);
    cards.push({ title: TXT.charEq, html: charHtml });
    // fattorizzazione con le radici razionali
    const rat = e.values.filter((v) => v.type === "rational");
    const altri = e.values.filter((v) => v.type !== "rational");
    const lead = e.poly[e.poly.length - 1];
    let fact = "";
    if (rat.length) {
      fact = (lead.eq(-1) ? "-" : lead.isOne() ? "" : lead.tex()) + rat.map((v) => {
        const base = v.value.isZero() ? "\\lambda" : `(\\lambda ${v.value.sign() < 0 ? "+" : "-"} ${v.value.abs().tex()})`;
        return base + (v.mult > 1 ? `^{${v.mult}}` : "");
      }).join("") + (altri.length ? "\\,q(\\lambda)" : "");
    }
    let rootsHtml = fact ? disp(`${LA.Poly.tex(e.poly)} = ${fact}`) : "";
    const valTex = (v) => v.type === "rational" ? v.value.tex() : v.tex ? v.tex : v.type === "complex" ? `${v.re.toFixed(4)} ${v.im < 0 ? "-" : "+"} ${Math.abs(v.im).toFixed(4)}\\,i` : `\\approx ${v.num.toFixed(4)}`;
    rootsHtml += disp(e.values.map((v, k) => `\\lambda_{${k + 1}} = ${valTex(v)}` + (v.mult > 1 ? `\\;(${TXT.mult}\\ ${v.mult})` : "")).join(",\\qquad "));
    cards.push({ title: TXT.roots, html: rootsHtml });
    e.values.forEach((v) => {
      if (v.type !== "rational") { cards.push({ title: TXT.eigOf(valTex(v)), html: `<p>${TXT.irrational}</p>` }); return; }
      const B = A.map((r, i) => r.map((x, j) => (i === j ? x.sub(v.value) : x)));
      const g = LA.gauss(B, { jordan: true });
      cards.push({ title: TXT.eigOf(v.value.tex()), html: disp(`\\boldsymbol A - ${v.value.texP()}\\,\\boldsymbol I = ${LA.texMatrix(B)} \\;\\longrightarrow\\; ${LA.texMatrix(g.result)}`) +
        disp(v.vectors.map((w, k) => `\\boldsymbol v_{${k + 1}} = ${vecTex(w)}`).join(",\\quad ") + `\\qquad (\\boldsymbol A - ${v.value.texP()}\\boldsymbol I)\\boldsymbol v = \\boldsymbol 0`) });
    });
    // traccia e determinante
    let tr = LA.ZERO; A.forEach((r, i) => (tr = tr.add(r[i])));
    if (!altri.length) {
      let s = LA.ZERO, p = LA.ONE;
      rat.forEach((v) => { for (let k = 0; k < v.mult; k++) { s = s.add(v.value); p = p.mul(v.value); } });
      cards.push({ title: TXT.traceCheck, html: disp(`\\sum_i \\lambda_i = ${s.tex()} = \\operatorname{tr}(\\boldsymbol A),\\qquad \\prod_i \\lambda_i = ${p.tex()} = \\det(\\boldsymbol A) = ${LA.det(A).tex()}`) });
    }
    if (M.isSymmetric(A)) {
      const d = LA.definiteness(A);
      let html = `<p>${TXT.symmetric}</p><p><strong>${TXT.sylvester}:</strong></p>` +
        disp(d.lead.map((m) => `\\Delta_{${m.k}} = ${m.k === 1 ? m.det.tex() : "\\det" + LA.texMatrix(m.sub) + " = " + m.det.tex()}`).join(",\\quad "));
      if (d.kind === "psd" || d.kind === "nsd" || (d.kind === "indef" && d.lead.some((m) => m.det.isZero())))
        html += `<p><strong>${TXT.allMinors}:</strong></p>` + disp(d.all.map((m) => `\\Delta_{\\{${m.idx.map((i) => i + 1).join(",")}\\}} = ${m.det.tex()}`).join(",\\; "));
      cards.push({ final: true, title: `\\(\\boldsymbol A\\) ${IT ? "è" : "is"} <strong>${TXT.kinds[d.kind]}</strong>`, html: html });
    }
    return cards;
  }

  // ------------------------------------------------------------------ prodotto di matrici
  TOOLS.prodotto = function (root) {
    const F = Frame(root, { modes: ["compute"] });
    const L = ComputeLayout(F.panes.compute);
    const h = readHash();
    const a = MatrixInput({ rows: 2, cols: 3, label: "\\boldsymbol A", maxR: 5, maxC: 5, onEnter: run, random: (m, n) => LA.gen.det(Math.max(m, n)).slice(0, m).map((r) => r.slice(0, n)) });
    const b = MatrixInput({ rows: 3, cols: 2, label: "\\boldsymbol B", maxR: 5, maxC: 5, onEnter: run, random: (m, n) => LA.gen.det(Math.max(m, n)).slice(0, m).map((r) => r.slice(0, n)) });
    a.set(parseMatrix(h.A || root.dataset.matrix || "1,2,0;-1,3,1"));
    b.set(parseMatrix(h.B || root.dataset.b || "2,1;0,-1;4,3"));
    L.inputs.append(a.el, b.el);
    L.actions.append(button(TXT.compute, run, "la-primary"));
    function run() {
      const A = a.get(), B = b.get();
      if (!A || !B) return err(L.msg, TXT.invalid);
      if (A[0].length !== B.length) return err(L.msg, TXT.dimMismatch(A[0].length, B.length));
      err(L.msg, "");
      writeHash({ A: matStr(A), B: matStr(B) });
      const C = M.mul(A, B);
      L.out.innerHTML = "";
      const tavola = el("div", { class: "la-prod" });
      const tab = (Mx, cls, name) => {
        const t = el("table", { class: "la-ptab " + cls });
        Mx.forEach((r, i) => { const tr = el("tr"); r.forEach((x, j) => tr.append(el("td", { "data-i": i, "data-j": j }, tex(x)))); t.append(tr); });
        const w = el("div", { class: "la-pwrap" });
        w.append(el("div", { class: "la-pname" }, tex(name)), t);
        return w;
      };
      const ta = tab(A, "la-pa", "\\boldsymbol A"), tb = tab(B, "la-pb", "\\boldsymbol B"), tc = tab(C, "la-pc", "\\boldsymbol A\\boldsymbol B");
      tavola.append(ta, el("span", { class: "la-op" }, "·"), tb, el("span", { class: "la-op" }, "="), tc);
      const spieg = el("div", { class: "la-explain" }, `<p class="la-note">${TXT.clickCell}</p>`);
      L.out.append(tavola, spieg);
      function evidenzia(i, j) {
        L.out.querySelectorAll(".la-ptab td").forEach((td) => td.classList.remove("la-hl", "la-hl2"));
        ta.querySelectorAll(`td[data-i="${i}"]`).forEach((td) => td.classList.add("la-hl"));
        tb.querySelectorAll(`td[data-j="${j}"]`).forEach((td) => td.classList.add("la-hl"));
        tc.querySelector(`td[data-i="${i}"][data-j="${j}"]`).classList.add("la-hl2");
        const termini = A[i].map((x, k) => `${x.texP()}\\cdot ${B[k][j].texP()}`).join(" + ");
        spieg.innerHTML = disp(`c_{${i + 1}${j + 1}} = \\sum_{k=1}^{${B.length}} a_{${i + 1}k}\\, b_{k${j + 1}} = ${termini} = ${C[i][j].tex()}`);
        typeset(spieg);
      }
      tc.querySelectorAll("td").forEach((td) => td.addEventListener("click", () => evidenzia(+td.dataset.i, +td.dataset.j)));
      evidenzia(0, 0);
      if (A.length === A[0].length && B.length === B[0].length && A.length === B.length) {
        const BA = M.mul(B, A);
        L.out.append(el("div", { class: "la-explain" }, `<p>${TXT.commute}</p>` + disp(`\\boldsymbol B\\boldsymbol A = ${LA.texMatrix(BA)}`) + `<p>${M.eq(C, BA) ? TXT.yesCommute : TXT.noCommute}</p>`));
      } else if (B[0].length === A.length) {
        const BA = M.mul(B, A);
        L.out.append(el("div", { class: "la-explain" }, `<p>${TXT.commute}</p>` + disp(`\\boldsymbol B\\boldsymbol A = ${LA.texMatrix(BA)}\\in\\R^{${BA.length}\\times ${BA[0].length}}`) + `<p>${TXT.noCommute}</p>`));
      }
      L.out.append(shareBar());
      typeset(L.out);
    }
    run();
  };

  // ------------------------------------------------------------------ somme e produttorie
  TOOLS.somme = function (root) {
    const F = Frame(root, { modes: ["compute"] });
    const L = ComputeLayout(F.panes.compute);
    const h = readHash();
    let tipo = h.t || root.dataset.tipo || "sum";
    const expr = el("input", { type: "text", class: "la-cell la-wide", value: h.f || root.dataset.f || "k^2" });
    const a = el("input", { type: "text", class: "la-cell", value: h.a || "1" });
    const b = el("input", { type: "text", class: "la-cell", value: h.b || "10" });
    const riga = el("div", { class: "la-sumrow" });
    const ts = select([["sum", TXT.sum + " Σ"], ["prod", TXT.prod + " Π"]], tipo, (v) => { tipo = v; run(); });
    riga.append(ts, el("label", {}, TXT.sumExpr + " "), expr, el("label", {}, " k " + TXT.from + " "), a, el("label", {}, " " + TXT.to + " "), b);
    [expr, a, b].forEach((x) => x.addEventListener("keydown", (e) => { if (e.key === "Enter") run(); }));
    L.inputs.append(riga);
    const pronti = IT ? [["k", "Σ k"], ["k^2", "Σ k²"], ["k^3", "Σ k³"], ["(1/2)^k", "Σ (1/2)^k"], ["2k-1", "Σ (2k−1)"], ["1/(k(k+1))", "Σ 1/(k(k+1))"]] : [["k", "Σ k"], ["k^2", "Σ k²"], ["k^3", "Σ k³"], ["(1/2)^k", "Σ (1/2)^k"], ["2k-1", "Σ (2k−1)"], ["1/(k(k+1))", "Σ 1/(k(k+1))"]];
    const chips = el("div", { class: "la-usein" });
    pronti.forEach(([f, l]) => chips.append(el("a", { class: "la-chip", href: "#", on: { click: (e) => { e.preventDefault(); expr.value = f; tipo = "sum"; ts.value = "sum"; run(); } } }, l)));
    chips.append(el("a", { class: "la-chip", href: "#", on: { click: (e) => { e.preventDefault(); expr.value = "k"; tipo = "prod"; ts.value = "prod"; run(); } } }, "Π k = n!"));
    L.inputs.append(chips);
    L.actions.append(button(TXT.compute, run, "la-primary"));
    function run() {
      let f;
      try { f = LA.parseExpr(expr.value); } catch (e) { return err(L.msg, TXT.exprError); }
      const A = parseInt(a.value, 10), B = parseInt(b.value, 10);
      if (!isFinite(A) || !isFinite(B)) return err(L.msg, TXT.exprError);
      if (B - A > 2000) return err(L.msg, TXT.tooMany);
      err(L.msg, "");
      writeHash({ t: tipo, f: expr.value, a: A, b: B });
      const vals = [];
      try { for (let k = A; k <= B; k++) vals.push(f(k)); } catch (e) { return err(L.msg, TXT.exprError); }
      let tot = tipo === "sum" ? LA.ZERO : LA.ONE;
      vals.forEach((v) => (tot = tipo === "sum" ? tot.add(v) : tot.mul(v)));
      const sym = tipo === "sum" ? "\\sum" : "\\prod";
      const op = tipo === "sum" ? " + " : "\\cdot ";
      const show = vals.length <= 8 ? vals.map((v) => (tipo === "prod" ? v.texP() : v.tex())) : vals.slice(0, 5).map((v) => v.tex()).concat(["\\cdots"], vals.slice(-2).map((v) => v.tex()));
      const ftex = expr.value.replace(/\*/g, "\\cdot ").replace(/\^(\w+|\([^)]*\))/g, "^{$1}");
      let html = disp(`${sym}_{k=${A}}^{${B}} ${tipo === "sum" ? "" : ""}\\left(${ftex}\\right) = ${show.join(op).replace(/\+ -/g, "- ")} = ${vals.length ? tot.tex() : tipo === "sum" ? "0" : "1"}`);
      // formule chiuse delle dispense
      const n = B;
      const nF = LA.Frac.of(n);
      const chiuse = {
        k: A === 1 ? `\\frac{n(n+1)}{2} = \\frac{${n}\\cdot ${n + 1}}{2} = ${nF.mul(n + 1).div(2).tex()}` : null,
        "k^2": A === 1 ? `\\frac{n(n+1)(2n+1)}{6} = ${nF.mul(n + 1).mul(2 * n + 1).div(6).tex()}` : null,
        "k^3": A === 1 ? `\\left(\\frac{n(n+1)}{2}\\right)^2 = ${nF.mul(n + 1).div(2).pow(2).tex()}` : null,
        "2k-1": A === 1 ? `n^2 = ${nF.mul(nF).tex()}` : null,
        "1/(k(k+1))": A === 1 ? `1 - \\frac{1}{n+1} = ${LA.ONE.sub(LA.ONE.div(n + 1)).tex()}` : null,
      };
      const mq = expr.value.replace(/\s/g, "").match(/^\((\d+)\/(\d+)\)\^k$|^(\d+)\^k$/);
      if (tipo === "sum" && chiuse[expr.value.replace(/\s/g, "")]) html += `<p>${TXT.closedForm}</p>` + disp(`n = ${n}:\\quad ` + chiuse[expr.value.replace(/\s/g, "")]);
      else if (tipo === "sum" && mq) {
        const q = mq[3] ? LA.Frac.of(mq[3]) : new LA.Frac(BigInt(mq[1]), BigInt(mq[2]));
        if (!q.isOne()) html += `<p>${TXT.closedForm}</p>` + disp(`\\sum_{k=${A}}^{${B}} q^k = q^{${A}}\\,\\frac{1 - q^{${B - A + 1}}}{1 - q} = ${q.pow(Math.max(A, 0)).mul(LA.ONE.sub(q.pow(B - A + 1))).div(LA.ONE.sub(q)).tex()}\\quad (q = ${q.tex()})`);
      } else if (tipo === "prod" && expr.value.replace(/\s/g, "") === "k" && A === 1) html += disp(`\\prod_{k=1}^{n} k = n! = ${B}!`);
      L.out.innerHTML = "";
      L.out.append(el("div", { class: "la-step la-final" }, html), shareBar());
      typeset(L.out);
    }
    run();
  };

  // ------------------------------------------------------------------ norme
  TOOLS.norme = function (root) {
    const F = Frame(root, { modes: ["compute"] });
    const L = ComputeLayout(F.panes.compute);
    const h = readHash();
    let xi = null, qi = null;
    xi = MatrixInput({ rows: 3, cols: 1, vector: true, label: "\\boldsymbol x", maxR: 8, random: (m) => Array.from({ length: m }, () => [String(LA.rnd(-6, 6))]), onEnter: run });
    xi.set((h.x || root.dataset.x || "3,-4,12").split(",").map((v) => [v]));
    let useQ = !!h.Q;
    qi = MatrixInput({ rows: 3, cols: 3, square: true, label: "\\boldsymbol Q", maxR: 8, random: (n) => { const B = LA.gen.inverse(n); return M.mul(M.transpose(B), B); }, onEnter: run });
    qi.set(parseMatrix(h.Q || "2,1,0;1,2,0;0,0,1"));
    const qbox = el("label", { class: "la-check" });
    const cb = el("input", { type: "checkbox" });
    cb.checked = useQ;
    cb.addEventListener("change", () => { useQ = cb.checked; qi.el.hidden = !useQ; run(); });
    qbox.append(cb, document.createTextNode(" " + TXT.genNorm));
    qi.el.hidden = !useQ;
    L.inputs.append(xi.el, qi.el);
    L.opts.append(qbox);
    L.actions.append(button(TXT.compute, run, "la-primary"));
    function run() {
      const X0 = xi.get();
      if (!X0) return err(L.msg, TXT.invalid);
      const x = X0.map((r) => r[0]);
      err(L.msg, "");
      const nn = LA.norms(x);
      const abs = x.map((v) => `|${v.tex()}|`).join(" + ");
      const sq = x.map((v) => v.texP() + "^2").join(" + ");
      let html = disp(`\\|\\boldsymbol x\\|_1 = ${abs} = ${nn.l1.tex()}`) +
        disp(`\\|\\boldsymbol x\\|_2 = \\sqrt{${sq}} = \\sqrt{${nn.l2sq.tex()}} = ${LA.texSqrt(nn.l2)}` + (nn.l2.exact ? "" : ` \\approx ${Math.sqrt(nn.l2sq.toNumber()).toFixed(4)}`)) +
        disp(`\\|\\boldsymbol x\\|_\\infty = \\max\\{${x.map((v) => `|${v.tex()}|`).join(", ")}\\} = ${nn.linf.tex()}`);
      const hashObj = { x: x.map(String).join(",") };
      if (useQ) {
        const Q = qi.get();
        if (!Q) return err(L.msg, TXT.invalid);
        if (Q.length !== x.length) { const n = x.length; qi.set(M.identity(n)); return run(); }
        hashObj.Q = matStr(Q);
        const d = M.isSymmetric(Q) ? LA.definiteness(Q) : { kind: "no" };
        if (d.kind !== "pd") html += `<div class="la-err">${TXT.notPD}</div>`;
        else {
          const q = LA.quadForm(Q, x);
          const s = LA.sqrtFrac(q);
          html += disp(`\\|\\boldsymbol x\\|_{\\boldsymbol Q} = \\sqrt{\\boldsymbol x^\\top \\boldsymbol Q\\,\\boldsymbol x} = \\sqrt{${vecTex(x)}^{\\!\\top} ${LA.texMatrix(Q)} ${vecTex(x)}} = \\sqrt{${q.tex()}} = ${LA.texSqrt(s)}` + (s.exact ? "" : ` \\approx ${Math.sqrt(q.toNumber()).toFixed(4)}`));
        }
      }
      html += disp(`\\|\\boldsymbol x\\|_\\infty \\le \\|\\boldsymbol x\\|_2 \\le \\|\\boldsymbol x\\|_1:\\quad ${nn.linf.tex()} \\le ${Math.sqrt(nn.l2sq.toNumber()).toFixed(3).replace(/\.?0+$/, "")} \\le ${nn.l1.tex()}`);
      writeHash(hashObj);
      L.out.innerHTML = "";
      L.out.append(el("div", { class: "la-step la-final" }, html), shareBar());
      typeset(L.out);
    }
    run();
  };

  // ------------------------------------------------------------------ perché serve il pivoting parziale
  TOOLS.pivoting = function (root) {
    root.innerHTML = "";
    root.classList.add("la-mj");
    const wrap = el("div", { class: "la-pivdemo" });
    root.append(wrap);
    const slider = el("input", { type: "range", min: "1", max: "20", value: "4", class: "la-range" });
    const lab = el("div", { class: "la-range-lab" });
    const out = el("div", {});
    wrap.append(el("div", { class: "la-disp" }, "\\[\\left\\{\\begin{aligned} \\varepsilon\\, x_1 + x_2 &= 1\\\\ x_1 + x_2 &= 2\\end{aligned}\\right.\\qquad \\varepsilon = 10^{-k}\\]"), lab, slider, out);
    function fmt(v) { return Number.isFinite(v) ? v.toPrecision(17).replace(/(\.\d*?)0+(e|$)/, "$1$2").replace(/\.(e|$)/, "$1") : String(v); }
    function run() {
      const k = +slider.value;
      const eps = Math.pow(10, -k);
      lab.innerHTML = `${TXT.eps}: \\(k = ${k}\\), \\(\\varepsilon = 10^{-${k}}\\)`;
      // senza pivoting: pivot eps
      const m = 1 / eps;
      const a22 = 1 - m * 1, b2 = 2 - m * 1;
      const x2a = b2 / a22, x1a = (1 - x2a) / eps;
      // con pivoting parziale: scambio delle righe
      const m2 = eps / 1;
      const a22b = 1 - m2 * 1, b2b = 1 - m2 * 2;
      const x2b = b2b / a22b, x1b = (2 - x2b) / 1;
      // esatto (frazioni)
      const E = new Frac(1n, 10n ** BigInt(k));
      const x1e = LA.ONE.div(LA.ONE.sub(E)), x2e = LA.ONE.sub(E.mul(2)).div(LA.ONE.sub(E));
      const er = (v, ex) => Math.abs(v - ex.toNumber());
      const cls = (e) => (e > 1e-6 ? "la-bad-val" : "la-good-val");
      out.innerHTML = `<table class="la-pivtab"><tr><th></th><th>\\(x_1\\)</th><th>\\(x_2\\)</th><th>${TXT.error} \\(x_1\\)</th></tr>
        <tr><td>${TXT.noPiv}<br><small>\\(R_2 \\leftarrow R_2 - 10^{${k}}R_1\\)</small></td><td class="${cls(er(x1a, x1e))}">${fmt(x1a)}</td><td>${fmt(x2a)}</td><td class="${cls(er(x1a, x1e))}">${er(x1a, x1e).toExponential(1)}</td></tr>
        <tr><td>${TXT.withPiv}<br><small>\\(R_1 \\leftrightarrow R_2,\\ R_2 \\leftarrow R_2 - 10^{-${k}}R_1\\)</small></td><td class="${cls(er(x1b, x1e))}">${fmt(x1b)}</td><td>${fmt(x2b)}</td><td class="${cls(er(x1b, x1e))}">${er(x1b, x1e).toExponential(1)}</td></tr>
        <tr><td>${TXT.exact}</td><td>\\(${k <= 6 ? x1e.tex() : "\\frac{10^{" + k + "}}{10^{" + k + "}-1}"}\\)</td><td>\\(${k <= 6 ? x2e.tex() : "\\frac{10^{" + k + "}-2}{10^{" + k + "}-1}"}\\)</td><td>0</td></tr></table>`;
      typeset(wrap);
    }
    slider.addEventListener("input", run);
    run();
  };

  // ------------------------------------------------------------------ avvio
  function monta() {
    document.querySelectorAll(".la-tool:not([data-pronto])").forEach((root) => {
      root.dataset.pronto = "1";
      const t = TOOLS[root.dataset.tool];
      if (!t) { root.textContent = "?? " + root.dataset.tool; return; }
      try { t(root); } catch (e) { console.error(e); root.innerHTML = `<div class="la-err">Errore: ${e.message}</div>`; }
    });
  }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(monta);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", monta);
  else monta();
})();
