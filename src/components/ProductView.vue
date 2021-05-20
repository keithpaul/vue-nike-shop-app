<template>
	<div class="product-details">
		<DetailsHeading
			:heading="productDetails.title"
			:subHeading="productDetails.description"
			:price_new="productDetails.price_new"
			:price_old="productDetails.price_old"
		/>
		<DetailsGallery />
		<DetailsShoeSize
			:inventory="productDetails.inventory"
			@selectedSize="sizeChosen"
		/>
		<DetailsCartButton
			:enabled="shoeSizeChosen"
			:product="productDetails"
			@addToCart="addItemToCart"
		/>
		<DetailsFavButton />

		<Placeholder />
	</div>
</template>

<script>
import DetailsHeading from '@/subComponents/productDetails/DetailsHeading.vue';
import DetailsGallery from '@/subComponents/productDetails/DetailsGallery.vue';
import DetailsShoeSize from '@/subComponents/productDetails/DetailsShoeSize.vue';
import DetailsCartButton from '@/subComponents/productDetails/DetailsButtonAddToCart.vue';
import DetailsFavButton from '@/subComponents/productDetails/DetailsButtonAddToFavs.vue';

import Placeholder from '@/subComponents/productDetails/placeholder.vue';

export default {
	name: 'ProductView',
	components: {
		DetailsHeading,
		DetailsGallery,
		DetailsShoeSize,
		DetailsCartButton,
		DetailsFavButton,
		Placeholder,
	},
	props: {
		id: {
			type: String,
			required: true,
			default: '3',
		},

		code: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			itemDetails: {
				size: null,
				code: this.code,
			},
			shoeSizeChosen: false,
		};
	},
	computed: {
		productDetails() {
			return this.$store.getters.productItemById(this.id);
		},
	},
	methods: {
		sizeChosen(val) {
			this.itemDetails.size = val;
			val !== false
				? (this.shoeSizeChosen = true)
				: (this.shoeSizeChosen = false);
		},
		addItemToCart() {
			if (this.shoeSizeChosen) {
				this.$store.dispatch('addProductToCart', this.itemDetails);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.product-details {
	position: relative;
}
</style>
