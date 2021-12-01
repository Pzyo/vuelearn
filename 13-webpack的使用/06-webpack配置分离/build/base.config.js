// 使用node去获取项目文件的绝对路径
const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		// __dirname是一个全局变量，保存的当前文件所在的绝对路径
		path: path.resolve(__dirname, '../dist'),  // 只能写绝对路径
		filename: 'bundle.js',
		// publicPath: 'dist/'
	},
	module: {
		rules: [
			{
				// 使用正则匹配所有.css结尾的文件
				test: /\.css$/i,
				// css-loader只负责将css文件进行加载
				// style-loader负责将样式添加到DOM中
				// 使用数组加载多个loader时，加载顺序是从右向左
				// use: ["style-loader", "css-loader"],
				// 也支持对象数组的写法
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
			},
			{
				test: /\.less$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'less-loader'
				}],
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							// 当加载的图片大小，小于limit时，会将图片编译成base64字符串形式
							limit: 25000,
							name: 'img/[name].[hash:8].[ext]'
						}
					}
				]
			},
			{
				test: /\.m?js$/,
				// exclude 排除以下目录
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			},
			{
				test: /\.vue$/i,
				use: {
					loader: 'vue-loader',
				}
			}
		],
	},
	resolve: {
		extensions: ['.js', '.ts', '.vue', '.json', '.css', '.node', '.sass'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new Webpack.BannerPlugin('最终版权归aaa所有'),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}