const mix = require('laravel-mix');

mix
    .js('dist/js/libraries.js', 'public/js') // comment out
    .js('dist/js/projects.js', 'public/js')
    .sass('dist/scss/libraries.scss', 'public/css') // comment out
    .sass('dist/scss/projects.scss', 'public/css');
