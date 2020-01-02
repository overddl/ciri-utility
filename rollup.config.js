import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// import tscompilier from 'typescript'
// import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
]

export default {
  input: './src/index.ts',
  output: [{
    file: pkg.main,
    format: 'cjs',
  }, {
    file: pkg.module,
    format: 'es',
  }, {
    file: pkg.browser,
    format: 'iife',
    name: "Ciri",
    globals: {},
  }],
  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
    // typescript({ typescript: tscompilier })
  ],
};