var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var buildPath = path.resolve(__dirname, 'public');
var mainPath = path.resolve(__dirname, 'src','index.js');

module.exports = {
    entry: [
        './src/index.js'
    ],
    devtool: 'source-map',
    output: {
        path: buildPath,
        filename: '/bundle.js',
    },
    resolve: {
        extensions: ['', '.jsx', '.es6', '.js', '.less'],
        moduleDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            'Promise': 'exports?global.Promise!es6-promise',
            'fetch': 'exports?self.fetch!whatwg-fetch'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};

