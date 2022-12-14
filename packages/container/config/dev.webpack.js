const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./common.webpack');
// const packageJson = require('../package.json');
const path = require('path');
const webpack = require('webpack');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3000/',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                home: 'home@http://localhost:3001/remoteEntry.js',
                product: 'product@http://localhost:3002/remoteEntry.js',
                checkout: 'checkout@http://localhost:3003/remoteEntry.js',
                profile: 'profile@http://localhost:3004/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:3005/remoteEntry.js',
            },
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),

        new webpack.EnvironmentPlugin({})
    ]
}

module.exports = merge(commonConfig, devConfig);