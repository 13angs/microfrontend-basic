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
        publicPath: 'http://localhost:3005/',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3005,
        host: 'localhost',
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './BashboardApp': './src/bootstrap',
                './Dashboard/Order': './src/page/order.page',
                './Dashboard/Product': './src/page/product.page'
            },
            shared: packageJson.dependencies,
            remotes: {
                container: 'container@http://localhost:3000/remoteEntry.js',
            },
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new webpack.EnvironmentPlugin({})
    ]
}

module.exports = merge(commonConfig, devConfig);
