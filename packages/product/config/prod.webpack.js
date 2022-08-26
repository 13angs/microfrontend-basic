const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./common.webpack');
const packageJson = require('../package.json');

// const product_host = process.env.PRODUCT_HOST || 'http://localhost:4002';
const product_host = 'http://localhost:4002';

const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: `${product_host}/`
    // publicPath: '/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'product',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductApp': './src/bootstrap'
      },
      shared: packageJson.dependencies,
    }),
    
  ],
};

module.exports = merge(commonConfig, devConfig);