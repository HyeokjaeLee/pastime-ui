import path from 'node:path';

import generatePackageJson from 'rollup-plugin-generate-package-json';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import react from '@vitejs/plugin-react-swc';

export const ALIAS = ['components', 'utils', 'hooks', 'contexts', 'constants'];

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    outDir: 'dist/library',
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: '@hyeokjaelee/frontend-library',
      formats: ['es', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      plugins: [
        generatePackageJson({
          outputFolder: 'dist/library',
          baseContents: (pkg) => ({
            ...pkg,
            module: './index.js',
            main: './index.js',
            types: './index.d.ts',
            scripts: undefined,
            optionalDependencies: {},
            eslintConfig: undefined,
          }),
        }),
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: ALIAS.reduce((alias, name) => {
      alias[`@${name}`] = `/src/${name}`;
      return alias;
    }, {}),
  },
});
