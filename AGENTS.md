<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Выкладка сайта

Сайт публикуется из ветки `gh-pages` — там лежит только собранный `out/`.
Исходники живут в `main` и наружу не отдаются.

Выкладка автоматическая: **каждый пуш в `main` — это публичный деплой.**
GitHub Actions (`.github/workflows/deploy.yml`) ставит зависимости,
выполняет `npm run build`, проверяет наличие `out/index.html` и `out/CNAME`
и публикует `out/` в `gh-pages` (коммит `deploy <sha>`). GitHub Pages
подхватывает через несколько минут.

Порядок работы:

1. Работать из чистой копии `origin/main`.
2. Перед пушем — `npm run build` без ошибок.
3. Перед пушем записать, как откатить: `git revert <sha>` и пуш в `main`
   (CI сам передеплоит предыдущее состояние).

Вручную в `gh-pages` не выкладывать: CI перезапишет ветку при следующем
пуше в `main`, а параллельная ручная выкладка конфликтует с ним.

Файлы для скачивания (`*.zip`, `*.delta`, `Dictami.dmg`, `appcast.xml`)
класть в `public/` — оттуда они попадают в сборку. В корень репозитория
ничего складывать не надо.
