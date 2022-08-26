const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./common.webpack');
const packageJson = require('../package.json');

// const domain = process.env.PRODUCTION_DOMAIN;
const domain = "http://localhost:3000";

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
                home: 'home@http://localhost:3001/remoteEntry.js',
                product: 'product@http://localhost:3002/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:3005/remoteEntry.js',
                profile: 'profile@http://localhost:3004/remoteEntry.js',
            },
            shared: packageJson.dependencies
        })
    ]
}


module.exports = merge(commonConfig, prodConfig);