<template>
	<div class="details-header">
		<div class="details-header__text-container">
			<div class="details-header__subheading">
				<h2 class="product-details__subheading">{{ subHeading }}</h2>
			</div>
			<div class="details-header__heading">
				<h3 class="product-details__heading">{{ heading }}</h3>
			</div>
			<div v-if="price_old" class="details-header__discount">
				<p class="product-details__discount">{{ calculateDiscount }}% off</p>
			</div>
		</div>
		<div class="details-header__price-container">
			<div class="details-header__price-new">
				<p class="product-details__price-new">${{ price_new }}</p>
			</div>
			<div v-if="price_old" class="details-header__price-old">
				<p class="product-details__price-old">${{ price_old }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailsHeader',
	props: {
		heading: {
			type: String,
			required: true,
		},
		subHeading: {
			type: String,
			required: true,
		},
		price_new: {
			type: Number,
			required: true,
		},
		price_old: {
			type: Number,
			required: false,
		},
	},
	computed: {
		calculateDiscount() {
			let discount = 100 - 100 * (this.price_new / this.price_old); // need to rework this
			return Math.round(discount);
		},
	},
};
</script>

<style lang="scss" scoped>
.details-header {
	height: 168px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 0 32px;
	box-sizing: border-box;
	margin-top: 20px;
}

.details-header__text-container {
	box-sizing: border-box;
	padding-right: 5px;
	div {
		flex: 0 0 100%;
	}
}

.details-header__price-old {
	text-align: right;
	.product-details__price-old {
		text-decoration: line-through;
	}
}

/* Set margins */
.details-header__subheading {
	margin-bottom: 10px;
}
.details-header__heading {
	margin-bottom: 15px;
}
.details-header__price-new {
	margin-bottom: 4px;
}
</style>
