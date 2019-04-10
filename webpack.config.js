// webpack v4
const path = require('path');

// update from 23.12.2018
// const nodeExternals = require('webpack-node-externals');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// this package prevents the hash updates for some reason
const WebpackMd5Hash = require("webpack-md5-hash");

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  // target: 'node', // update from 23.12.2018
  // node externals was causing the dist/main.js to bug with a webpack external_"querystring" error in devtools
  // externals: [nodeExternals()], // update from 23.12.2018
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  // added explicit devServer declaration https://stackoverflow.com/questions/33382526/webpack-dev-server-serves-a-directory-list-instead-of-the-app-page
  devServer: {
    writeToDisk: true,
    index: 'index.html',
    contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: "style.[contenthash].css"
    // }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
};