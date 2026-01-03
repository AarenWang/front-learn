#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if ! command -v cloc >/dev/null 2>&1; then
  echo "cloc is not installed or not on PATH" >&2
  exit 1
fi

printf "%-40s %10s %10s %10s %10s\n" "module" "files" "blank" "comment" "code"

while IFS= read -r -d '' module_dir; do
  module_name="$(basename "$module_dir")"

  cloc_output="$(cloc --csv --quiet --sum-one --exclude-dir=node_modules "$module_dir" | tail -n 1)"
  IFS=',' read -r _ files blank comment code <<<"$cloc_output"

  printf "%-40s %10s %10s %10s %10s\n" "$module_name" "$files" "$blank" "$comment" "$code"

done < <(find "$root_dir" -maxdepth 1 -mindepth 1 -type d \
  ! -name node_modules \
  ! -name .git \
  -print0 | sort -z)
