const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./common.webpack');
const packageJson = require('../package.json');

// const dashboard_host = process.env.DASHBOARD_HOST || 'http://localhost:4005';
const dashboard_host ='http://localhost:4005';

const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: `${dashboard_host}/`
    // publicPath: '/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'product',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap'
      },
      shared: packageJson.dependencies,
    }),
    
  ],
};

module.exports = merge(commonConfig, devConfig);