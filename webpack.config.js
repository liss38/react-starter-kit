const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	build: path.join(__dirname, 'build'),
	source: path.join(__dirname, 'source'),
};

module.exports = {
	entry: `${PATHS.source}/index.js`,
	output: {
		path: PATHS.build,
		filename: '[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack App'
		}),
	]
};