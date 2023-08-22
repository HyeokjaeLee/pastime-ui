import path from 'node:path';

import generatePackageJson from 'rollup-plugin-generate-package-json';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react-swc';

const ALIAS_NAME_LIST = [
  'components',
  'utils',
  'hooks',
  'contexts',
  'constants',
  'styles',
  'plugins',
];

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'README.md',
          dest: '',
        },
      ],
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
    alias: ALIAS_NAME_LIST.reduce((acc, name) => {
      acc[`@${name}`] = path.resolve(__dirname, `src/${name}`);
      return acc;
    }, {} as Record<string, string>),
  },
});
