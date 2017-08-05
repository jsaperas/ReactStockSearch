const webpack = require('webpack');

const config = {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
  		rules: [
    		{
      		test: /\.jsx?/,
      		exclude: /node_modules/,
      		use: 'babel-loader'
    		}
  		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	}
};

module.exports = config;