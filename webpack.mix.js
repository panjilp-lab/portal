// webpack.mix.js

let mix = require('laravel-mix');

mix 
    .sass('src/scss/app.scss', 'assets/css')
    .sass('src/scss/custom.scss', 'assets/css')
    .setPublicPath('public')