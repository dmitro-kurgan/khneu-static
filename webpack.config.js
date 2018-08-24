const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
 
const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'index': PATHS.source + '/pages/index/index.js',
			'faculties': PATHS.source + '/pages/faculties/faculties.js',
			'divisions': PATHS.source + '/pages/divisions/divisions.js',
			'org': PATHS.source + '/pages/org/org.js',
			'news': PATHS.source + '/pages/news/news.js',
			'article': PATHS.source + '/pages/article/article.js',
			'schedule': PATHS.source + '/pages/schedule/schedule.js',
			'anons': PATHS.source + '/pages/anons/anons.js',
		},

		output: {
			path: PATHS.build,
			filename: './js/[name].js'
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/index/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'faculties.html',
				chunks: ['faculties'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/faculties/faculties.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'divisions.html',
				chunks: ['divisions'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/divisions/divisions.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'org.html',
				chunks: ['org'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/org/org.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'news.html',
				chunks: ['news'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/news/news.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'article.html',
				chunks: ['article'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/article/article.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'schedule.html',
				chunks: ['schedule'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/schedule/schedule.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'anons.html',
				chunks: ['anons'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/pages/anons/anons.pug'
			}),
			// new webpack.optimize.CommonsChunkPlugin({
			// 	name: 'common'
			// }),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				"window.jQuery": "jquery/dist/jquery.min.js"
			}),
			new webpack.ProvidePlugin({
				GoogleMapsLoader: 'google-maps'
			})
		]
	},
	pug(),
	images(),
	fonts(),
]);

module.exports = function(env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		])
	}
};