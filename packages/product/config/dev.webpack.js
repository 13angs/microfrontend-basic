const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./common.webpack');
const packageJson = require('../package.json');
const path = require('path');
const webpack = require('webpack');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3002/',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3002,
        host: 'localhost',
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'product',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new webpack.EnvironmentPlugin({})
    ]
}

module.exports = merge(commonConfig, devConfig);
