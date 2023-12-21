import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
		base: command === 'serve' ? '' : '/yoavgurevich.github.io/',
		plugins: [preact()],
}));
