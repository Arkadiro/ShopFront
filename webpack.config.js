const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// const extractPlugin = new ExtractTextPlugin({
//     filename: 'style.css'
//  });

module.exports = {
    mode: 'development',
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app-bundle.js',
        //publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        //publicPath: '../'
                      }
                    },
                    "css-loader",'sass-loader'
                  ]
            },
            {
                test: /\.html$/,
                loader: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/products/',
                            //publicPath: 'assets/products/'
                        }
                    }
                ]
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, "node_modules")
        ]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style.css",
            //chunkFilename: "[id].css"
          }),
        //new CleanWebpackPlugin(['dist']),
    ],

    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                exclude: /node_modules/
            }),
        ]
    },

    devServer: {
        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,

            // Poll using interval (in ms, accepts boolean too)
            poll: 1000,
        },
        contentBase: path.join(__dirname, './src'),
        stats: "errors-only",
        compress: true,
        port: 9000
    }
}