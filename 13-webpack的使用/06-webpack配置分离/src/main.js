// 1.使用CommonJS的模块化规范导入
const {add, mul} = require('./js/mathUtils.js');

console.log(add(10, 20));
console.log(mul(30, 40));

// 2.使用ES6的模块化规范导入
import {name, age, height} from "./js/info.js"
console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('./css/normal.css');

// 4.依赖less文件
require('./css/special.less');
document.writeln('<h2>你好啊，pzyo</h2>')

// 5. 使用vue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App'

new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})