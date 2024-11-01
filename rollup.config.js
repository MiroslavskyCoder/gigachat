const typescript = require('rollup-plugin-typescript2');
const jsonPlugin = require('@rollup/plugin-json'); 
const babel = require('rollup-plugin-babel');
const resolve = require('@rollup/plugin-node-resolve'); 
const sourceMaps = require('rollup-plugin-sourcemaps');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify-es');

module.exports = {
    input: 'src/index.ts',
    plugins: [
        typescript({
            typescript: require('typescript'), 
            tsconfig: "./tsconfig.json", 
            include: [ '**/*.ts' ],
        }),
        babel(), 
        jsonPlugin(),
        commonjs(),  
        sourceMaps(),  
        uglify()
    ],
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named'
    },
};
