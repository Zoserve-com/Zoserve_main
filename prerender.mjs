/**
 * prerender.mjs — Post-build static pre-render script
 *
 * Usage: node prerender.mjs
 * Run AFTER `vite build` and `vite build --ssr src/entry-server.jsx`
 *
 * For each route in ROUTES:
 *   1. Calls the SSR entry's renderRoute() to get the React HTML string
 *   2. Reads dist/index.html (the shell built by vite build)
 *   3. Injects the rendered HTML into <div id="root">...</div>
 *   4. Writes dist/<path>/index.html  (or dist/index.html for '/')
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ROUTES = ['/', '/web-development', '/ai-development', '/saas-development'];

async function run() {
    // Load the SSR bundle built by `vite build --ssr`
    const ssrEntryPath = resolve(__dirname, 'dist/server/entry-server.js');
    const { renderRoute } = await import(ssrEntryPath);

    // Read the HTML shell produced by `vite build`
    const templatePath = resolve(__dirname, 'dist/index.html');
    const template = readFileSync(templatePath, 'utf-8');

    for (const route of ROUTES) {
        console.log(`Pre-rendering: ${route}`);

        // Render the React tree for this route to an HTML string
        const appHtml = renderRoute(route);

        // Inject into the shell — replace the empty root div
        const rendered = template.replace(
            '<div id="root"></div>',
            `<div id="root">${appHtml}</div>`
        );

        // Determine output path
        const outDir = route === '/'
            ? resolve(__dirname, 'dist')
            : resolve(__dirname, 'dist', route.slice(1)); // strip leading /

        mkdirSync(outDir, { recursive: true });
        writeFileSync(resolve(outDir, 'index.html'), rendered, 'utf-8');
        console.log(`  → Written to dist${route === '/' ? '' : route}/index.html`);
    }

    console.log('\n✅ Pre-rendering complete!');
}

run().catch((err) => {
    console.error('Pre-render failed:', err);
    process.exit(1);
});
