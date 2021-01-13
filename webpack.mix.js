const mix = require('laravel-mix');

mix
    .js('src/js/libraries.js', 'public/js') // comment out
    .js('src/js/projects.js', 'public/js')
    .sass('src/scss/libraries.scss', 'public/css') // comment out
    .sass('src/scss/projects.scss', 'public/css');
