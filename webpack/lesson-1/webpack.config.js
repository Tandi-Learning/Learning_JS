var path = require('path');

module.exports = {
    context: path.resolve(''),
    entry: [
        "./js/app.js",
        "./js/utils.js"
    ],
    output: {
        path: path.resolve('build/js/'),
        publicPath: 'public/assets/js/',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join ('/public'), // or (__dirname + '/public')
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
            }
        ],
        // can also use loaders
        rules: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: [ " ", ".js", ".es6" ]
    }
}