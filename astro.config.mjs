// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://softarm.pl',
    integrations: [sitemap()],
    // CSS wstawiony w HTML: pierwsze malowanie nie czeka na osobne pliki .css
    build: { inlineStylesheets: 'always' },
});
