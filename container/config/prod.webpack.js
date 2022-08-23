const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./common.webpack');
const packageJson = require('../package.json');

// const domain = process.env.PRODUCTION_DOMAIN;
const domain = "http://localhost:4000";

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },

    experiments: {
        topLevelAwait: true
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                checkout: `checkout@${domain}/remoteEntry.js`,
            },
            shared: packageJson.dependencies
        })
    ]
}


module.exports = merge(commonConfig, prodConfig);