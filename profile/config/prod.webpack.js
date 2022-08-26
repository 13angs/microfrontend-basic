const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./common.webpack');
const packageJson = require('../package.json');
const path = require('path');
const webpack = require('webpack');

// const profile_host = process.env.PROFILE_HOST || 'http://localhost:4004';
const profile_host = 'http://localhost:4004';

const devConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: `${profile_host}/`,
        // path: path.resolve(__dirname, 'dist')
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
    ]
}

module.exports = merge(commonConfig, devConfig);