<template>
	<div>
		<p v-if="loading">Loading ......</p>
		<ProductCards v-else :products="productList" />
	</div>
</template>

<script>
import ProductCards from '@/subComponents/cards/ProductCards.vue';

import { mapActions } from 'vuex';
export default {
	name: 'productList',
	components: {
		ProductCards,
	},
	data() {
		return {
			loading: false,
		};
	},
	created() {
		this.loading = true;
		this.fetchProducts() // could add store.dispatch('fetchProducts', 'shoes') to fetch only shoes
			.then(() => (this.loading = false));
	},
	computed: {
		productList() {
			return this.$store.getters.availableProducts;
		},
	},
	methods: {
		...mapActions({
			fetchProducts: 'fetchProducts',
		}),
	},
};
</script>
