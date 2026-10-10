// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://rithinkumar.in',
	base: process.env.GITHUB_PAGES === 'true' && process.env.GITHUB_PAGES_CUSTOM_DOMAIN !== 'true'
		? '/Rithin_Portfolio'
		: '/',
	trailingSlash: 'always',
});
