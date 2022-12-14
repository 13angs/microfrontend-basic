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
        publicPath: 'http://localhost:3004/',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3004,
        host: 'localhost',
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'profile',
            filename: 'remoteEntry.js',
            exposes: {
                './ProfileApp': './src/bootstrap',
                './Profile/Setting' : './src/pages/settingProfile.page'
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