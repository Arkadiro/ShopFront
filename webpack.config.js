const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'app-bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    devServer: {
        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,

            // Poll using interval (in ms, accepts boolean too)
            poll: 1000,
        },
        contentBase: path.join(__dirname, './'),
        stats: "errors-only",
        compress: true,
        port: 9000
    },
    plugins: [
        // Ignore node_modules so CPU usage with poll
        // watching drops significantly.
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, "node_modules")
        ]),
    ],
}