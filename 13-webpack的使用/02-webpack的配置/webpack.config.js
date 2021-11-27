// 使用node去获取项目文件的绝对路径
const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		// __dirname是一个全局变量，保存的当前文件所在的绝对路径
		path: path.resolve(__dirname, 'dist'),  // 只能写绝对路径
		filename: 'bundle.js'
	}
}