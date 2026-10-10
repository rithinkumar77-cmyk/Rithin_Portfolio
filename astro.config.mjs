// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://rithinkumar.in',
	base: process.env.GITHUB_PAGES === 'true' ? '/Rithin_Portfolio' : '/',
	trailingSlash: 'always',
});
