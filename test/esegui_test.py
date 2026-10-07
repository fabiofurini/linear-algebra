"""Esegue test/test_algebra.js in Chrome headless (quando Node non c'è).

Serve la cartella del repository via HTTP, apre test/test.html, che carica
il motore e i casi di SymPy, ed esce con errore se un controllo fallisce.
In CI si usa direttamente: node test/test_algebra.js

Uso: python3 test/esegui_test.py [pagina.html]   (default: test.html)
"""
import functools
import http.server
import re
import subprocess
import sys
import threading
from pathlib import Path

RADICE = Path(__file__).resolve().parents[1]
PORTA = 8791


def main():
    h = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(RADICE))
    h.func.log_message = lambda *a: None
    http.server.ThreadingHTTPServer.allow_reuse_address = True
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", PORTA), h)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    r = subprocess.run(["google-chrome", "--headless=new", "--disable-gpu", "--no-sandbox",
                        "--virtual-time-budget=120000", "--dump-dom",
                        f"http://127.0.0.1:{PORTA}/test/" + (sys.argv[1] if len(sys.argv) > 1 else "test.html") + ""],
                       capture_output=True, text=True, timeout=600)
    m = re.search(r'<pre id="out">(.*?)</pre>', r.stdout, re.S)
    testo = m.group(1) if m else "nessun risultato (errore JavaScript?)\n" + r.stderr[-2000:]
    import html
    testo = html.unescape(testo)
    print(testo)
    sys.exit(0 if re.search(r"\b0 errori\b", testo) else 1)


if __name__ == "__main__":
    main()
