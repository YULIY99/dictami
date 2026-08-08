<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Выкладка сайта

Сайт публикуется из ветки `gh-pages` — там лежит только собранный `out/`.
Исходники живут в `main` и наружу не отдаются.

Выкладывать одной командой из `dictami-web/`:

```
bash scripts/deploy.sh
```

Скрипт сам делает `npm run build`, копирует `out/` в ветку `gh-pages`
(с `--delete`, поэтому удалённые файлы действительно исчезают с сайта)
и пушит. GitHub Pages подхватывает через 3–7 минут.

Файлы для скачивания (`*.zip`, `*.delta`, `Dictami.dmg`, `appcast.xml`)
класть в `public/` — оттуда они попадают в сборку. В корень репозитория
ничего складывать не надо.
