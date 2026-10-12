// Runs after `next build` (npm "postbuild"). The site has one root layout,
// which hard-codes <html lang="en">, so the German pages shipped as English
// to browsers, screen readers and search engines that read the attribute
// (Bing does). A static export cannot vary the root <html> per route without
// splitting the app into several root layouts, so the built HTML is
// corrected here instead. Fails the build if nothing matched, so a future
// layout change cannot silently undo it.
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const LOCALES = { de: "de" };
let changed = 0;

function walk(dir, lang) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, lang);
    else if (name.endsWith(".html")) {
      const html = readFileSync(p, "utf8");
      const next = html.replace(/<html lang="en"/, `<html lang="${lang}"`);
      if (next === html && !html.includes(`<html lang="${lang}"`)) {
        console.error(`set-html-lang: no <html lang="en"> in ${p}`);
        process.exit(1);
      }
      if (next !== html) { writeFileSync(p, next); changed++; }
    }
  }
}

for (const [dir, lang] of Object.entries(LOCALES)) {
  const root = join("out", dir);
  if (!existsSync(root)) { console.error(`set-html-lang: ${root} missing`); process.exit(1); }
  walk(root, lang);
}
console.log(`set-html-lang: ${changed} page(s) updated`);
