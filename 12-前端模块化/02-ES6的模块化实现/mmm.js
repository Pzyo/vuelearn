// 1. 导入的{}中定义的变量
import {flag, sum} from "./aaa.js";

if (flag) {
	console.log('小明好')
	console.log(sum(30, 40))
}

// 2. 直接导入export定义的变量
import {num, height} from "./aaa.js"
console.log(num)
console.log(height)

// 3. 导入export的function
import {mul} from "./aaa.js"
console.log(mul(10, 20))

// 4. 导入export default的变量
import addr from "./aaa.js"
console.log(addr)

// 5. 统一全部导入
import * as aaa from "./aaa.js"
console.log(aaa.flag);
console.log(aaa.height);