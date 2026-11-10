#!/usr/bin/env bash

# WSL does not forward SIGINT to a Windows process launched through uv.exe.
# Record the exact Windows Python PID and terminate only that process tree.

set -u

project_root="$(cd "$(dirname "$0")/.." && pwd)"
pid_file="$project_root/.serve.pid"
windows_uv="${1:-uv}"
launcher_pid=""

cleanup() {
    status=$?
    trap - EXIT INT TERM

    if [[ -f "$pid_file" ]]; then
        server_pid="$(tr -d '\r\n' < "$pid_file")"
        if [[ "$server_pid" =~ ^[0-9]+$ ]]; then
            /mnt/c/Windows/System32/taskkill.exe /PID "$server_pid" /T /F >/dev/null 2>&1 || true
        fi
        rm -f "$pid_file"
    fi

    if [[ -n "$launcher_pid" ]]; then
        kill "$launcher_pid" >/dev/null 2>&1 || true
    fi
    exit "$status"
}

trap 'exit 130' INT
trap 'exit 143' TERM
trap cleanup EXIT

cd "$project_root"
WSLENV="${WSLENV:+${WSLENV}:}PYTHONUTF8/w:PYTHONIOENCODING/w" \
PYTHONUTF8=1 \
PYTHONIOENCODING=utf-8 \
"$windows_uv" run --no-project python scripts/serve.py --pid-file .serve.pid &
launcher_pid=$!
wait "$launcher_pid"
