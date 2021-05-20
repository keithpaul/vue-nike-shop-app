<template>
	<header id="navbar" class="main-header">
		<div class="main-header__logo">
			<router-link to="/" class="main-header__logo-home">
				<svg
					class="pre-logo-svg"
					height="60px"
					width="60px"
					fill="#111"
					viewBox="0 0 69 32"
				>
					<path
						d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"
					></path>
				</svg>
			</router-link>
		</div>
		<div class="main-header__items">
			<button @click="openCheckout()" class="main-header__item">
				<svg
					width="20"
					height="22"
					viewBox="0 0 20 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 5H19V21H1V5Z"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M6 1V5H14V1H6Z"
						stroke="black"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span class="cart-icon__quantity">{{ getCartItemQuantity }}</span>
			</button>
			<button @click="openSearch()" class="main-header__item">
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M18.027 18.027L17.2978 18.7113L17.3087 18.7229L17.3199 18.7341L18.027 18.027ZM18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L18.2929 19.7071ZM8.78378 15.5676C5.0372 15.5676 2 12.5304 2 8.78378H0C0 13.6349 3.93263 17.5676 8.78378 17.5676V15.5676ZM2 8.78378C2 5.0372 5.0372 2 8.78378 2V0C3.93263 0 0 3.93263 0 8.78378H2ZM8.78378 2C12.5304 2 15.5676 5.0372 15.5676 8.78378H17.5676C17.5676 3.93263 13.6349 0 8.78378 0V2ZM15.5676 8.78378C15.5676 10.6048 14.8514 12.2564 13.6833 13.4758L15.1275 14.8593C16.638 13.2825 17.5676 11.1407 17.5676 8.78378H15.5676ZM13.6833 13.4758C12.4472 14.7661 10.7099 15.5676 8.78378 15.5676V17.5676C11.2775 17.5676 13.5299 16.5271 15.1275 14.8593L13.6833 13.4758ZM13.6762 14.8518L17.2978 18.7113L18.7562 17.3427L15.1346 13.4833L13.6762 14.8518ZM17.3199 18.7341L17.8064 19.2206L19.2206 17.8064L18.7341 17.3199L17.3199 18.7341ZM17.8064 19.2206L18.2929 19.7071L19.7071 18.2929L19.2206 17.8064L17.8064 19.2206Z"
						fill="black"
					/>
				</svg>
			</button>
			<button @click="openMainMenu()" class="main-header__item">
				<svg
					width="20"
					height="18"
					viewBox="0 0 20 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V0ZM19 2C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0V2ZM1 2H19V0H1V2Z"
						fill="black"
					/>
					<path
						d="M1 8C0.447715 8 0 8.44772 0 9C0 9.55228 0.447715 10 1 10V8ZM19 10C19.5523 10 20 9.55228 20 9C20 8.44772 19.5523 8 19 8V10ZM1 10H19V8H1V10Z"
						fill="black"
					/>
					<path
						d="M1 16C0.447715 16 0 16.4477 0 17C0 17.5523 0.447715 18 1 18V16ZM19 18C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16V18ZM1 18H19V16H1V18Z"
						fill="black"
					/>
				</svg>
			</button>
		</div>
	</header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'MainHeader',
	methods: {
		openCheckout() {
			console.log('Open Checkout');
		},
		openSearch() {
			console.log('Open Search');
		},
		openMainMenu() {
			console.log('Open Main Menu');
		},
	},
	computed: {
		...mapGetters({
			getCartItemQuantity: 'getCartItemQuantity',
		}),
	},
};
</script>

<style lang="scss" scoped>
.main-header {
	position: sticky;
	z-index: 2;
	top: 0;
	height: 58px;
	width: 100%;
	background-color: $white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px 0 25px;
	box-sizing: border-box;
}

.main-header__title {
	display: flex;

	p {
		&:nth-of-type(1) {
			margin-right: 10px;
		}
	}
}

.main-header__item {
	background: $white;
	border: none;
	display: inline-block;
	padding: 10px;
	cursor: pointer;
	position: relative;

	&:nth-of-type(2) {
		margin: 0 10px;
	}

	.cart-icon__quantity {
		position: absolute;
		bottom: 4px;
		left: 50%;
		transform: translateX(-50%);
		padding: 10px;
	}
}

.main-header__hamburger {
	width: 20px;
	height: 2px;
	background: black;
}
</style>
