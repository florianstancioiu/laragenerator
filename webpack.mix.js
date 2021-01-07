const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    //.js('resources/js/admin.js', 'public/js') // comment out
    .js('resources/js/admin/projects.js', 'public/js')
    //.js('resources/js/client.js', 'public/js') // comment out
    //.sass('resources/sass/client.scss', 'public/css') // comment out
    //.sass('resources/sass/admin.scss', 'public/css') // comment out
    .sass('resources/sass/projects.scss', 'public/css')
    .sourceMaps();
