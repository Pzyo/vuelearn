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
			let totalPrice = 0;
			for (let i = 0; i < this.books.length; i++) {
				totalPrice += this.books[i].price * this.books[i].count;
			}
			
			
			return totalPrice;
		}
	}
})