"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Keeps <html lang> right after client-side navigation between English and
// German pages. The first load already has the correct value, written into
// the HTML by scripts/set-html-lang.mjs.
export function HtmlLang() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = pathname?.startsWith("/de/") ? "de" : "en";
  }, [pathname]);
  return null;
}
