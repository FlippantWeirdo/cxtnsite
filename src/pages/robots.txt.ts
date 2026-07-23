import type { APIRoute } from "astro";

// Only the real production domain is open to crawlers. Every other host
// (the cxtnsite.vercel.app review deploy, branch previews, local builds)
// returns a blanket Disallow so staging never lands in search results.
// `import.meta.env.SITE` mirrors the `site` value resolved in astro.config.mjs,
// so this flips to allow-all automatically once caxtenengineering.com is live.
const site = import.meta.env.SITE ?? "";
const isProductionDomain = site.includes("caxtenengineering.com");

const body = isProductionDomain
  ? `User-agent: *
Allow: /

Sitemap: ${site.replace(/\/$/, "")}/sitemap-index.xml
`
  : `User-agent: *
Disallow: /
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
