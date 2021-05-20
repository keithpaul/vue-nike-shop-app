<template>
	<div class="menu-header">
		<div class="menu-header__title">
			<p class="menu-title">{{ pageTitle }}</p>
			<p class="menu-title" v-html="getItemsTotal"></p>
		</div>
		<button class="menu-header__hamburger" @click="openMenu()">
			<img :src="require(`@/assets/svg/menu-icon.svg`)" alt="" />
		</button>
	</div>
</template>

<script>
export default {
	name: 'MenuHeader',
	props: {
		pageTitle: {
			type: String,
			required: false,
			default: 'Items',
		},
		itemCount: {
			type: Number,
			required: false,
			default: 999,
		},
	},
	methods: {
		openMenu() {
			console.log('toggle open menu ');
		},
	},
	computed: {
		getItemsTotal() {
			return `(${this.$store.state.products.length})`;
		},
	},
};
</script>

<style lang="scss" scoped>
.menu-header {
	position: sticky;
	top: 0;
	left: 0;
	height: 58px;
	width: 100%;
	background-color: $white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px 0 25px;
	box-sizing: border-box;
}

.menu-header__title {
	display: flex;

	p {
		&:nth-of-type(1) {
			margin-right: 10px;
		}
	}
}

.menu-header__hamburger {
	background: $white;
	border: none;
	display: block;
	padding: 10px;
	cursor: pointer;
}
</style>
