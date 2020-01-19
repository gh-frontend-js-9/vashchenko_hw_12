'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlug = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/build.js',
    publicPath: ''
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'html-loader',
      //       options: {
      //         minimize: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        loader: 'file-loader',
        options: {
          publicPath: 'assets/images',
          name: '[name].[ext]',
          outputPath: 'images',
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'assets/fonts',
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new htmlWebpackPlug({
      favicon: './src/assets/images/favicon.png',
      filename: 'index.html',
      template: path.join(__dirname, 'src/pages', 'login.html'),
      hash: true,
    }),
    new htmlWebpackPlug({
      favicon: './src/assets/images/favicon.png',
      filename: 'signup.html',
      template: path.join(__dirname, 'src/pages', 'signup.html'),
      hash: true,
    }),
    new htmlWebpackPlug({
      favicon: './src/assets/images/favicon.png',
      filename: 'reset.html',
      template: path.join(__dirname, 'src/pages', 'reset.html'),
      hash: true,
    }),
    new htmlWebpackPlug({
      favicon: './src/assets/images/favicon.png',
      filename: 'home.html',
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true
    }),
  ]
};
