const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        format: {
          comments: false,
        },
      },
      extractComments: false,
    })],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'build/assets', to: 'assets' },
      ],
    }),
    new HTMLWebpackPlugin({
      template: 'build/index.html',
      filename: 'index.html',
      hash: true,
      minify: false,
    }),
  ],
};
