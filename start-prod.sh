#!/usr/bin/env bash
# Production-style server (no file watchers) — use if `npm run dev` still fails on macOS.
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"
LOCAL_NODE="$ROOT/.local/node-v20.19.0-darwin-x64/bin"
if [ -x "$LOCAL_NODE/node" ]; then
  export PATH="$LOCAL_NODE:$PATH"
fi
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js not found. Install from https://nodejs.org/ or brew install node"
  exit 1
fi
npm install
npm run build
exec npm run start
