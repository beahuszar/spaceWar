const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.(png|jpe?g|gif|ttf)$/i,
      use: [{ loader: 'file-loader' }],
    }],
  },
  devServer: {
    contentBase: 'dist',
    port: 3000,
  },
  devtool: 'inline-source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'build/assets', to: 'assets' },
      ],
    }),
    new HTMLWebpackPlugin({
      template: 'build/index.html',
      filename: 'index.html',
    }),
  ],
};
