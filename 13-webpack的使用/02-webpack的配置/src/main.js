// 使用CommonJS的模块化规范导入
const {add, mul} = require('./mathUtils.js');

console.log(add(10, 20));
console.log(mul(30, 40));

// 使用ES6的模块化规范导入
import {name, age, height} from "./info.js"
console.log(name);
console.log(age);
console.log(height);