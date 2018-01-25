const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
module.exports = function () {
	return {
		plugins: [
			new OptimizeCSSAssetsPlugin({
				cssProcessor: cssnano,
				options: {
					discardComments: {
						removeAll: true
					},
					safe: true,
				},
				canPrint: false,
			}),
		],
	};
};