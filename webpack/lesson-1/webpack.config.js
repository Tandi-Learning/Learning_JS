module.exports = {
    entry: [
        "./app.js",
        "./utils.js"
    ],
    output: {
        filename: "bundle.js"
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