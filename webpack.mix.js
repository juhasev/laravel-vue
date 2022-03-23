const mix = require('laravel-mix');

require('vuetifyjs-mix-extension');
//
// mix.webpackConfig({
//     resolve: {
//         extensions: ['.js', '.vue'],
//         // alias: {
//         //     '@': __dirname + '/resources/js'
//         // }
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.s(c|a)ss$/,
//                 use: [
//                     'vue-style-loader',
//                     'css-loader',
//                     {
//                         // Requires >= sass-loader@^8.0.0
//                         options: {
//                             implementation: require('sass'),
//                             sassOptions: {
//                                 indentedSyntax: true // optional
//                             },
//                         },
//                     },
//                 ],
//             }
//         ]
//     }
// });

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

mix.js('resources/js/app.js', 'public/js').vuetify('vuetify-loader').vue()
