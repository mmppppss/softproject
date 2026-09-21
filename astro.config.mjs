// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://softproject.qzz.io',
  integrations: [react()],
  trailingSlash: 'never',
});