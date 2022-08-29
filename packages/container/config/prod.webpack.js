const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./common.webpack');
const packageJson = require('../package.json');

// const domain = process.env.PRODUCTION_DOMAIN;
// const domain = "http://localhost:4000";
// const home_host = process.env.HOME_HOST || 'http://localhost:4001';
// const product_host = process.env.PRODUCT_HOST || 'http://localhost:4002';
// const checkout_host = process.env.CHECKOUT_HOST || 'http://localhost:4003';
// const profile_host = process.env.PROFILE_HOST || 'http://localhost:4004';
// const dashboard_host = process.env.DASHBOARD_HOST || 'http://localhost:4005';
const home_host = 'http://localhost:4001';
const product_host = 'http://localhost:4002';
const checkout_host = 'http://localhost:4003';
const profile_host = 'http://localhost:4004';
const dashboard_host = 'http://localhost:4005';

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },

    optimization: {
        splitChunks: false,
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                home: `home@${home_host}/remoteEntry.js`,
                product: `product@${product_host}/remoteEntry.js`,
                checkout: `checkout@${checkout_host}/remoteEntry.js`,
                profile: `profile@${profile_host}/remoteEntry.js`,
                dashboard: `dashboard@${dashboard_host}/remoteEntry.js`,
            },
            shared: packageJson.dependencies
        })
    ]
}


module.exports = merge(commonConfig, prodConfig);