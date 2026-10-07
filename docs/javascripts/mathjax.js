// MathJax con le macro delle note (decla.tex): la matematica del sito è
// esattamente quella delle dispense.
window.MathJax = {
  loader: { load: ["[tex]/mathtools", "[tex]/cancel", "[tex]/color", "[tex]/html"] },
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    tags: "ams",
    packages: { "[+]": ["mathtools", "cancel", "color", "html"] },
    macros: {
      N: "\\mathbb{N}", Z: "\\mathbb{Z}", Q: "\\mathbb{Q}", R: "\\mathbb{R}",
      C: "\\mathbb{C}", F: "\\mathbb{F}",
      rr: "\\rightarrow", mt: "\\mapsto", ip: "+\\infty", im: "-\\infty",
      sgn: "\\operatorname{sgn}", rank: "\\operatorname{rank}", tr: "\\operatorname{tr}",
      adj: "\\operatorname{adj}", diag: "\\operatorname{diag}", span: "\\operatorname{span}",
      Ima: "\\operatorname{Im}",
      blue: ["{\\color[RGB]{25,113,194}{#1}}", 1], red: ["{\\color[RGB]{224,49,49}{#1}}", 1],
      green: ["{\\color[RGB]{47,158,68}{#1}}", 1], yellow: ["{\\color[RGB]{240,140,0}{#1}}", 1],
      violet: ["{\\color[RGB]{156,54,181}{#1}}", 1], orange: ["{\\color[RGB]{232,89,12}{#1}}", 1],
      airforceblue: ["{\\color[RGB]{93,138,168}{#1}}", 1], munsell: ["{\\color[RGB]{212,163,0}{#1}}", 1],
      viridian: ["{\\color[RGB]{64,130,109}{#1}}", 1],
      thicksim: "\\sim", thickapprox: "\\approx",
      mathscr: ["\\mathcal{#1}", 1]
    }
  },
  options: { ignoreHtmlClass: ".*|", processHtmlClass: "arithmatex|la-mj" }
};

document$.subscribe(() => {
  document.querySelectorAll(".md-nav .md-ellipsis, .md-nav__link").forEach((el) => {
    if (el.textContent.includes("\\(")) el.classList.add("arithmatex");
  });
  if (!MathJax.startup || !MathJax.startup.output) return;  // primo caricamento: MathJax fa da sé
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
