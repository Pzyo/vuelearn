var name = '小明';
var age = 23;
var flag =true;

function sum(num1, num2) {
	return num1 + num2
}

if (flag) {
	console.log(sum(10, 20));
}

// 1. 导出方式一
export {
	flag,
	sum
}

// 2. 导出方式二
export var num = 1000;
export var height = 170;

// 3. 导出函数/类
export function mul(num1, num2) {
	return num1 * num2
}

export class Person {
	run() {
		console.log('在奔跑')
	}
}

// 4. export default
const address = 'China'
export default address