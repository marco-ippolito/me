import { defineConfig } from 'vite';
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { resolve } from 'path';
import { readdirSync, readFileSync } from 'fs';

export default defineConfig({
  root: './src/',
  build: {
    outDir: '../dist', // relative to root
    emptyOutDir: true, // necessary when outDir is outside root
  },
  plugins: [
    ViteEjsPlugin({
      icons: Object.fromEntries(
        readdirSync('./src/assets/icons').map(item => [
          item,
          readFileSync(resolve('./src/assets/icons/', item), 'utf8'),
        ]),
      ),
      agenda: JSON.parse(readFileSync('./src/assets/data/agenda.json', 'utf8'))
    }),
  ],
});
