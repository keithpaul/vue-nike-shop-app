<template>
	<div class="details-button-add">
		<div class="details-button-add-static">
			<button
				class="details-button-add-static__button"
				@click="addToCart()"
				:disabled="!enabled"
			>
				Add To Bag
			</button>
		</div>
		<div class="details-button-add-sticky" ref="fixedButton">
			<button
				class="details-button-add-sticky__button"
				@click="addToCart()"
				:disabled="!enabled"
			>
				Add To Bag
			</button>
		</div>
	</div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'DetailsButtonAddToCart',
	props: ['product', 'enabled'],
	mounted() {
		setTimeout(() => {
			this.getButtonPos();
		}, 500);
	},
	methods: {
		addToCart() {
			this.$emit('addToCart', true);
		},
		getButtonPos() {
			ScrollTrigger.create({
				scroller: 'body',
				trigger: '.details-button-add-static',
				start: 'top bottom',
				end: 'bottom top',
				onEnter: () => {
					gsap.to('.details-button-add-sticky', { opacity: 0 });
				},
				onEnterBack: () => {
					gsap.to('.details-button-add-sticky', { opacity: 0 });
				},
				onLeave: () => {
					gsap.to('.details-button-add-sticky', { opacity: 1 });
				},
				onLeaveBack: () => {
					gsap.to('.details-button-add-sticky', { opacity: 1 });
				},
			});
		},
	},
};
</script>

<style lang="scss">
.details-button-add-static {
	width: 100%;
	padding: 0 32px;
	box-sizing: border-box;
	margin-bottom: 10px;
}

.details-button-add-static__button {
	width: 100%;
	height: 56px;
	border-radius: 28px;
	border: none;
	background: $black;
	color: $white;
	font-size: 18px;
	font-weight: $font-regular;
}

.details-button-add-sticky {
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 10;
	width: 100%;
}

.details-button-add-sticky__button {
	height: 60px;
	width: 100%;
	background: $black;
	color: $white;
	font-size: 18px;
	font-weight: $font-regular;
	border: none;
}
</style>
