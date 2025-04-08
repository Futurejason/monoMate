// const path = require('path');
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 确定当前环境，默认为开发环境
const mode = 'development';
const isDevelopment = mode === 'development';

export default {
  mode: isDevelopment ? 'development' : 'production',
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevelopment ? 'bundle.js' : 'bundle.[contenthash].js',
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: '@wyw-in-js/webpack-loader',
            options: {
              sourceMap: isDevelopment,
              babelOptions: {
                presets: [
                  ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
                  '@babel/preset-react'
                ]
              }
            }
          },
          'ts-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    isDevelopment && new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
  ].filter(Boolean),
  devServer: {
    hot: true,
    port: 3001,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
  },
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
};
