const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  cache: true,
  entry: {
    webvowl: './src/webvowl/js/entry.js',
    'webvowl.app': './src/app/js/entry.js',
  },
  output: {
    path: path.join(__dirname, 'deploy/'),
    publicPath: '',
    filename: 'js/[name].js',
    chunkFilename: 'js/[chunkhash].js',
    libraryTarget: 'assign',
    library: '[name]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ context: 'src/app', from: 'data/**/*' }]),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    new webpack.ProvidePlugin({ d3: 'd3' }),
  ],
  externals: {
    d3: 'd3',
  },
};
