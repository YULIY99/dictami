import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves plain files, so the whole site is exported as static
  // HTML. Trailing slashes make /privacy resolve to /privacy/index.html, which
  // is the file Pages actually looks for.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
