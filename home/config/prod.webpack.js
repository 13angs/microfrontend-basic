const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./common.webpack');
const packageJson = require('../package.json');
const path = require('path');

const devConfig = {
    mode: 'production',
    output: {
        publicPath: 'http://localhost:3001/',
        path: path.resolve(__dirname, 'dist')
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