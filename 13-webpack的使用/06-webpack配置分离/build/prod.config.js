const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = WebpackMerge(baseConfig, {
	plugins: [
		new UglifyjsWebpackPlugin()
	]
})