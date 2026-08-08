#!/bin/bash
# Сборка сайта и выкладка ТОЛЬКО собранных файлов в ветку gh-pages.
# Исходники (app/, lib/, components/, package.json…) остаются в main и наружу не отдаются.
#
#   bash scripts/deploy.sh
#
set -euo pipefail

cd "$(dirname "$0")/.."
ROOT="$PWD"
WORKTREE="$ROOT/.deploy"

echo "==> Сборка"
npm run build

test -f out/index.html || { echo "out/index.html не собрался — выкладка отменена"; exit 1; }
test -f out/CNAME     || { echo "out/CNAME пропал — домен слетит, выкладка отменена"; exit 1; }
touch out/.nojekyll

echo "==> Готовлю ветку gh-pages"
git worktree remove --force "$WORKTREE" 2>/dev/null || true
rm -rf "$WORKTREE"
if git ls-remote --exit-code --heads origin gh-pages >/dev/null 2>&1; then
  git fetch origin gh-pages
  git worktree add -B gh-pages "$WORKTREE" origin/gh-pages
else
  git worktree add --detach "$WORKTREE"
  git -C "$WORKTREE" checkout --orphan gh-pages
  git -C "$WORKTREE" rm -rf . >/dev/null 2>&1 || true
fi

echo "==> Копирую out/ в ветку"
rsync -a --delete --exclude='.git' "$ROOT/out/" "$WORKTREE/"

echo "==> Коммит и пуш"
cd "$WORKTREE"
git add -A
if git diff --cached --quiet; then
  echo "Изменений нет."
else
  git commit -q -m "deploy $(date +%Y-%m-%d\ %H:%M)"
  git push -q origin gh-pages
  echo "Запушено."
fi

cd "$ROOT"
git worktree remove --force "$WORKTREE"

echo "==> Готово. GitHub Pages подхватит через 3–7 минут."
