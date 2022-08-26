const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./common.webpack');
const packageJson = require('../package.json');
const path = require('path');

// const home_host = process.env.HOME_HOST || 'http://localhost:4001';
const home_host ='http://localhost:4001';

const devConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: `${home_host}/`,
        // path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'home',
            filename: 'remoteEntry.js',
            exposes: {
                './HomeApp': './src/bootstrap'
            },
            shared: packageJson.dependencies,
        }),
    ]
}

module.exports = merge(commonConfig, devConfig);