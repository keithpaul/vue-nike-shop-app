import { createStore } from 'vuex';
import shop from '@/api/shop';

const store = createStore({
	state: {
		products: [],
		cart: [],
	},
	mutations: {
		setProducts(state, products) {
			// payload || items
			// update the state and setting the items array
			state.products = products;
		},

		pushProductToCart(state, product) {
			state.cart.push({
				code: product.code,
				size: product.size,
				quantity: 1,
			});
			console.log('Item added to cart');
			console.log(this.state.cart);
		},

		incrementItemQuantity(state, cartItem) {
			let itemCode = cartItem.code;
			state.cart.find((x) => x.code === itemCode).quantity++;
			console.log('Added 1 more to cart');
			console.log(state.cart);
		},

		decrementProductInventory(state, product) {
			let productsItem = state.products.find((x) => x.code === product.code);

			let productsQuantityIndex = productsItem.inventory
				.map((x) => x.size)
				.indexOf(product.size);

			productsItem.inventory[productsQuantityIndex].quantity--;

			console.log('Removed 1 from inventory');
		},
	},
	actions: {
		fetchProducts({ commit }) {
			console.log('fetching products');
			return new Promise((resolve) => {
				shop.getProducts((products) => {
					commit('setProducts', products); // items || payload
					resolve(); // don't need reject as this fun can't fail
				});
			});
		},

		addProductToCart(context, product) {
			// find cart Item
			let productObject = context.state.products.find(
				(x) => x.code === product.code
			);

			let sizeIndex = productObject.inventory
				.map((x) => x.size)
				.indexOf(product.size);

			if (productObject.inventory[sizeIndex].quantity > 0) {
				const cartItem = productObject;

				const isItemInCart = context.state.cart.find(
					(x) => x.code === product.code && x.size === product.size
				);
				if (!isItemInCart) {
					context.commit('pushProductToCart', product);
				} else {
					context.commit('incrementItemQuantity', cartItem);
				}
				context.commit('decrementProductInventory', product);
			}
		},
	},
	getters: {
		availableProducts(state) {
			//return state.products.filter((product) => product.inventory > 0);
			return state.products;
		},
		productItemById: (state) => (id) => {
			const itemId = parseInt(id);

			return state.products.find((item) => item.id === itemId);
		},
		getCartItemQuantity(state) {
			let quantity = state.cart.reduce((acc, item) => {
				return acc + item.quantity;
			}, 0);

			return quantity;
		},
	},
	modules: {},
});

export default store;
