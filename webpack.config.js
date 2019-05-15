const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
	extensions: ['js']
  },
  module: {
    rules: [
      {
        test:  /\.jsx?$/,
		loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader:"file-loader",
        query:{
          name:'[name].[ext]',
          outputPath:'img/'
        }
      },
      {
        test: /\.css$/,
        loaders: ["style-loader","css-loader"]
      }, 
	  {
		test: /\.sass$/,
		use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
	  }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ], 
  watch: true
};
