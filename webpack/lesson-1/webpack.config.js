var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsPlugin = new webpack.optimize.CommonsChunkPlugin("shared");

module.exports = {
    context: path.resolve(''),
    // entry: [
    //     "./js/app",
    //     "./js/utils "
    // ],
    entry: {
        home: './js/home_page.js',
        about: './js/about_page.js'
    },
    output: {
        path: path.resolve('build/js/'),
        publicPath: 'public/assets/js/',
        // filename: "bundle.js"
        filename: "[name].js"   // [name] will be replaced with the "key" from the entry
    },
    plugins: [CommonsPlugin],
    devServer: {
        contentBase: path.join ('public'), // or (__dirname + '/public')
        port: 3000,
    },
    module: {
        // with webpack 1.x we use preLoaders
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                loader: "jshint-loader"
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },
    resolve: {
        extensions: [ " ", ".js", ".es6" ]
    }
}