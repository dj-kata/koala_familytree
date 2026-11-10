#!/usr/bin/env python3
"""Serve this GitHub Pages site locally without browser caching."""

from __future__ import annotations

import argparse
import functools
import http.server
import os
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parent.parent


class NoCacheRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def main() -> None:
    parser = argparse.ArgumentParser(description="コアラ家系図をローカル配信します")
    parser.add_argument("--port", type=int, default=8000, help="待受ポート (default: 8000)")
    parser.add_argument("--pid-file", type=Path, help=argparse.SUPPRESS)
    args = parser.parse_args()

    handler = functools.partial(NoCacheRequestHandler, directory=PROJECT_ROOT)
    server = http.server.ThreadingHTTPServer(("127.0.0.1", args.port), handler)
    if args.pid_file:
        args.pid_file.write_text(str(os.getpid()), encoding="ascii")
    print(f"家系図: http://127.0.0.1:{args.port}/", flush=True)
    print("終了するには Ctrl+C を押してください", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
        if args.pid_file:
            args.pid_file.unlink(missing_ok=True)


if __name__ == "__main__":
    main()
