
// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/index.js', 'dist/').sass('src/app.scss', 'dist/');
