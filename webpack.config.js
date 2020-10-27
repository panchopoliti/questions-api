const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  mode: (process.NODE_ENV !== 'production') ? 'development' : 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: './bin/www.js',
  plugins: [
    new CleanWebpackPlugin(),
    new NodemonPlugin(),
  ],
  node: {
    __dirname: true,
    __filename: true,
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
