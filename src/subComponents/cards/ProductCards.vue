<template>
	<div>
		<div class="card-details__container">
			<router-link
				:to="{
					name: 'ProductView',
					params: { id: product.id, code: product.code },
				}"
				class="card-details__card"
				v-for="product in products"
				:key="product.id"
			>
				<div class="card-details__image">
					<img
						:src="getProductDisplayImage(product.code, product.affix)"
						:alt="product.affix"
					/>
				</div>
				<div class="card-details__contents">
					<div class="card-details__contents-heading">
						<p class="card-heading">{{ product.title }}</p>
					</div>
					<div class="card-details__contents-subheading">
						<p class="card-subheading">{{ product.description }}</p>
					</div>
					<div class="card-details__contents-colours">
						<p class="card-colours" v-html="getColours(product.inventory)"></p>
					</div>
					<div class="card-details__contents-price">
						<p>
							<span class="card-price-new">{{
								formatCurrency(product.price_new)
							}}</span>
							&nbsp;
							<span v-if="product.price_old" class="card-price-old">{{
								formatCurrency(product.price_old)
							}}</span>
						</p>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductCards',
	props: {
		products: {
			type: Object,
			required: true,
		},
	},
	created() {},
	methods: {
		getColours(product) {
			console.log(product);
			return `${Object.keys(product).length} Colors`;
		},
		formatCurrency(value) {
			return '$' + value;
		},
		getProductDisplayImage(code, affix) {
			console.log(code);
			let codeA = code.toString().split('-')[0];
			let codeB = code.toString().split('-')[1];
			let codeAffix = affix;

			return require(`@/assets/images/${codeA}/${codeB}/${codeAffix}-${codeA}-thumb.jpg`);
		},
	},
};
</script>

<style lang="scss">
.card-details__container {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	column-gap: 6px;
	row-gap: 20px;
	padding-bottom: 20px;

	.card-details__card {
		box-sizing: border-box;

		&:nth-of-type(2n) {
			grid-column: 7 / 13;
		}
		&:nth-of-type(2n-1) {
			grid-column: 1 / 7;
		}
	}

	.card-details__image {
		width: 100%;
		img {
			display: block;
			width: 100%;
			height: auto;
		}
	}

	.card-details__contents {
		padding: 0 10px;
	}
}

/* specific margins */
.card-details {
	&__image {
		margin-bottom: 15px;
	}
	&__contents-heading {
		margin-bottom: 5px;
	}
	&__contents-subheading {
		margin-bottom: 10px;
	}
	&__contents-colours {
		margin-bottom: 10px;
	}
	&__contents-price {
		margin-bottom: 0;
	}
}
</style>
