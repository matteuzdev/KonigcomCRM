#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET_DIR="$ROOT_DIR/.external/agency-agents"
UPSTREAM="https://github.com/msitarzewski/agency-agents.git"

mkdir -p "$ROOT_DIR/.external"

if [ -d "$TARGET_DIR/.git" ]; then
  echo "Atualizando Agency Agents..."
  git -C "$TARGET_DIR" fetch origin main
  git -C "$TARGET_DIR" checkout main
  git -C "$TARGET_DIR" pull --ff-only origin main
else
  echo "Clonando Agency Agents..."
  git clone --depth 1 "$UPSTREAM" "$TARGET_DIR"
fi

echo
printf 'Agency Agents disponível em: %s\n' "$TARGET_DIR"
printf 'Upstream: %s\n' "$UPSTREAM"
