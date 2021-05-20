/*
 * Mocking client-server processing
 */
const _products = [
	{
		id: 1,
		title: 'Nike React Metcon',
		description: 'Men’s Training Shoe',
		affix: 'jordan-one-take-ii-basketball-shoe',
		price_new: 146.99,
		price_old: null,
		code: 'CV7562-003',
		inventory: [
			{ size: 7.5, quantity: 5 },
			{ size: 8, quantity: 2 },
			{ size: 8.5, quantity: 0 },
			{ size: 9, quantity: 3 },
			{ size: 9.5, quantity: 7 },
			{ size: 10, quantity: 1 },
			{ size: 10, quantity: 0 },
			{ size: 11, quantity: 2 },
		],
		colors: ['Black/Fierce', 'Purple/Racer', 'Blue/White'],
	},
	{
		id: 2,
		title: 'Nike React Metcon',
		description: 'Men’s Training Shoe',
		affix: 'jordan-one-take-ii-basketball-shoe',
		price_new: 154.99,
		price_old: 190,
		code: 'CV7562-100',
		inventory: [
			{ size: 7.5, quantity: 5 },
			{ size: 8, quantity: 2 },
			{ size: 8.5, quantity: 0 },
			{ size: 9, quantity: 3 },
			{ size: 9.5, quantity: 7 },
			{ size: 10, quantity: 1 },
			{ size: 10, quantity: 0 },
			{ size: 11, quantity: 2 },
		],
		colors: ['White/Iron', 'Grey/Vault/Black'],
	},
	{
		id: 3,
		title: 'Jordan ‘Why Not?’ Zer0.3 SE',
		description: 'Men’s Basketball Shoe',
		affix: 'jordan-one-take-ii-basketball-shoe',
		price_new: 117.99,
		price_old: 199,
		code: 'k4Ql69-300',
		inventory: [
			{ size: 7.5, quantity: 5 },
			{ size: 8, quantity: 2 },
			{ size: 8.5, quantity: 0 },
			{ size: 9, quantity: 3 },
			{ size: 9.5, quantity: 7 },
			{ size: 10, quantity: 1 },
			{ size: 10, quantity: 0 },
			{ size: 11, quantity: 2 },
		],
		colors: ['White', 'Lime/New', 'Green/Bright Mango'],
	},
];

export default {
	getProducts(cb) {
		setTimeout(() => cb(_products), 1500);
	},
	buyProducts(products, cb, errorCb) {
		setTimeout(() => {
			// simulate random checkout failure.
			Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
		}, 100);
	},
};
