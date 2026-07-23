// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The domain stamped into canonical URLs, the sitemap and OG tags.
// On Vercel we use the domain actually serving the build, so social previews
// and canonicals resolve on the live deployment:
//   - today that's the .vercel.app alias (e.g. cxtnsite.vercel.app)
//   - once caxtenengineering.com is added to the project in Vercel,
//     VERCEL_PROJECT_PRODUCTION_URL becomes that automatically — no code change.
// VERCEL_URL (the per-deploy URL) is the fallback; a local build uses the real domain.
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

// https://astro.build/config
export default defineConfig({
  site: vercelHost ? `https://${vercelHost}` : 'https://caxtenengineering.com',
  integrations: [sitemap()],
});
