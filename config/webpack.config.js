const { EnvironmentPlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const port = parseInt(process.env.PORT, 10) || 3000;

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/',
    filename: 'main.js',
  },
  devtool: !isProd && 'cheap-module-eval-source-map',
  stats: {
    colors: !isProd,
    hash: true,
    timings: true,
    assets: true,
    chunks: isProd,
    chunkModules: isProd,
    modules: isProd,
    children: isProd,
  },
  devServer: { port, historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new EnvironmentPlugin(['NODE_ENV', 'API_URL']),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'static', to: '.' },
    ]),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};
