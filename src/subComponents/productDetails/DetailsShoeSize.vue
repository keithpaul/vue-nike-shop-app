<template>
	<div class="details-shoesize">
		<div class="details-shoesize__options-container">
			<p class="details-shoesize-heading">Select Size</p>
			<a class="details-shoesize-link">Size Guide</a>
		</div>
		<div class="details-shoesize__size-container">
			<div
				v-for="(size, i) in inventory"
				:key="i"
				class="details-shoesize__size-list"
			>
				<button
					:disabled="size.quantity === 0"
					class="details-shoesize__list-button details-shoesize-button"
					:class="[
						size.quantity > 0 ? 'available' : 'sold-out',
						i === index ? 'selected' : '',
					]"
					@click="selectSize(size.size, i)"
				>
					US {{ size.size }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailsShoeSize',
	props: {
		inventory: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			index: null,
		};
	},
	methods: {
		selectSize(size, index) {
			this.index !== index ? (this.index = index) : (this.index = null);

			this.$emit('selectedSize', this.index !== null ? size : false);
		},
	},
};
</script>

<style lang="scss" scoped>
.details-shoesize {
	width: 100%;
	padding: 0 32px;
	box-sizing: border-box;
	margin-bottom: 35px;
}

.details-shoesize__options-container {
	display: flex;
	justify-content: space-between;
	padding: 0 15px;
	box-sizing: border-box;
	margin-bottom: 12px;
}

.details-shoesize__size-container {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	row-gap: 8px;
	column-gap: 8px;
}

.details-shoesize__size-list {
	height: 50px;
	box-sizing: border-box;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.details-shoesize__list-button {
	width: 100%;
	height: 100%;
	border-radius: 5px;
	&.sold-out {
		background-color: $grey-light;
		border: 1px solid $grey-regular;
		color: $grey-dark;
	}

	&.available {
		background: $white;
		border: 1px solid $grey-regular;
		color: $black;
		&.selected {
			border: 1px solid $black;
		}
	}
}
</style>
