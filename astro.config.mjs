import tailwindcss from '@tailwindcss/vite'
// @ts-check
import { defineConfig } from 'astro/config'

import icon from 'astro-icon'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	prefetch: true,

	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [
		react(),
		icon({
			iconDir: 'src/assets/icons'
		})
	]
})
