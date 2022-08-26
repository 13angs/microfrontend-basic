const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./common.webpack');
const packageJson = require('../package.json');

// const checkout_host = process.env.CHECKOUT_HOST || 'http://localhost:4003';
const checkout_host = 'http://localhost:4003';

const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: `${checkout_host}/`
    // publicPath: '/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'checkout',
      filename: 'remoteEntry.js',
      exposes: {
        './CheckoutApp': './src/bootstrap'
      },
      shared: packageJson.dependencies,
    }),
    
  ],
};

module.exports = merge(commonConfig, devConfig);