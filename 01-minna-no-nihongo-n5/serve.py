#!/usr/bin/env python3
"""Satu server untuk seluruh Studio Minna no Nihongo (Bab 1-25).

Hanya folder `web/` yang disajikan, di SATU port (default 8765).
Bab 17 dan Bab 1-25 lainnya sudah menyatu di dalam folder itu, jadi
tidak perlu lagi server/port kedua.

Header no-cache dikirim agar browser tidak memakai app.js lama yang
dulu hanya menampilkan Bab 17.

Cara pakai:
    python3 serve.py            # http://localhost:8765
    python3 serve.py 9000       # port lain
"""

from __future__ import annotations

import functools
import http.server
import socket
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent / "web"
DEFAULT_PORT = 8765


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    """SimpleHTTPRequestHandler + header anti-cache + MIME yang aman."""

    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".html": "text/html; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".svg": "image/svg+xml",
    }

    def end_headers(self) -> None:  # noqa: D102
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt: str, *args) -> None:  # noqa: D102
        sys.stderr.write("[web] %s - %s\n" % (self.address_string(), fmt % args))


def _detect_lan_ip() -> str:
    """Deteksi IP LAN perangkat agar bisa langsung dibuka dari HP/laptop teman."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except OSError:
        return socket.gethostname()


def main() -> int:
    port = DEFAULT_PORT
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print(f"Port tidak valid: {sys.argv[1]}", file=sys.stderr)
            return 2

    if not (ROOT / "index.html").is_file():
        print(f"Folder web tidak ditemukan atau tidak punya index.html: {ROOT}", file=sys.stderr)
        return 1

    handler = functools.partial(NoCacheHandler, directory=str(ROOT))

    try:
        server = http.server.ThreadingHTTPServer(("0.0.0.0", port), handler)
    except OSError as exc:
        print(
            f"Gagal membuka port {port}: {exc}\n"
            f"Kemungkinan port sudah dipakai. Matikan server lama lalu coba lagi.",
            file=sys.stderr,
        )
        return 1

    lan_ip = _detect_lan_ip()
    print(f"Satu server aktif. Folder yang disajikan: {ROOT}")
    print(f"Buka di laptop : http://localhost:{port}/")
    print(f"Buka di HP/LAN : http://{lan_ip}:{port}/")
    print("Tekan Ctrl+C untuk berhenti.")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer dihentikan.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
