const app = new Vue({
	el: '#app',
	data: {
		books: [
			{
				id: 1,
				name: "《算法导论》",
				date: "2006-9",
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: "《UNIX编程艺术》",
				date: "2000-5",
				price: 75.80,
				count: 1
			},
			{
				id: 3,
				name: "《编程珠玑》",
				date: "1996-8",
				price: 98.01,
				count: 1
			},
			{
				id: 4,
				name: "《代码大全》",
				date: "2010-10",
				price: 101.00,
				count: 1
			}
		],
		isOn: true
	},
	methods: {
		// getFinalPrice(price) {
		// 	return '￥' + price.toFixed(2)
		// }
		decrement(index) {
			this.books[index].count--;
		},
		increment(index) {
			this.books[index].count++;
		},
		removeHandle(index) {
			this.books.splice(index, 1);
		}
	},
	filters: {
		showPrice(price) {
			return '￥' + price.toFixed(2);
		}
	},
	computed: {
		totalPrice() {
			// let totalPrice = 0;
			
			// 1. 普通的for循环
			// for (let i = 0; i < this.books.length; i++) {
			// 	totalPrice += this.books[i].price * this.books[i].count;
			// }
			
			// 2. 使用in关键字的循环
			// for (let i in this.books) {
			// 	totalPrice += this.books[i].price * this.books[i].count;
			// }
			
			// 3. 使用of关键字的循环
			// for (let item of this.books) {
			// 	totalPrice += item.price * item.count;
			// }
			
			// return totalPrice
			
			// 4. reduce高阶函数
			return this.books.reduce(function (preValue, item){
				return preValue + item.price * item.count
			}, 0)
		}
	}
})

// 编程范式：命令式编程/声明式编程
// 编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
const nums = [10, 20, 30, 111, 222, 333, 40, 50]

// 1. 需求：找出所有小于100的数字
// let newNums = []
// for (let n of nums) {
// 	if (i < 100) {
// 		newNums.push(n)
// 	}
// }
// 高阶函数--filter使用
// filter中的回调函数有一个要求，必须返回布尔值
// true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false：当返回false时，函数内部会自动过滤这次的n 
let newNums = nums.filter(function (n){
	return n < 100
})

// 2. 需求：将所有小于100的数字进行转换，全部*2
// let new2Nums = []
// for (let n of newNums) {
// 	new2Nums.push(n * 2)
// }
// 高阶函数--map使用
let new2Nums = newNums.map(function (n){
	return n * 2
})

// 3. 需求：将所有new2Nums数字相加，得到最后的结果
// let total = 0;
// for (let n of new2Nums) {
// 	total += n;
// }
// 高阶函数--reduce使用
// reduce作用对数组中所有的内容进行汇总
let total = new2Nums.reduce(function (preValue, n){
	return preValue + n
}, 0)

// 合起来实现计算总价的写法
total = nums.filter(function (n){
	return n < 100
}).map(function (n){
	return n * 2
}).reduce(function (preValue, n){
	return preValue + n
}, 0)

// 更加简洁的写法，一行代码实现
total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);