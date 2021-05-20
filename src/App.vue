<template>
	<div class="app-container">
		<MainHeader class="main-header" />
		<MenuHeader v-if="this.$route.name !== 'ProductView'" class="menu-header" />
		<router-view class="app-view" />
	</div>
</template>

<script>
import MainHeader from './subComponents/menu/MainHeader.vue';
import MenuHeader from './subComponents/menu/MenuHeader.vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
	name: 'App',
	components: {
		MainHeader,
		MenuHeader,
	},
	mounted() {
		this.getScroll();
	},
	methods: {
		getScroll() {
			const showAnim = gsap
				.to('.main-header', {
					top: '-58',
					paused: true,
					duration: 0.2,
				})
				.progress(1);
			const showAnim2 = gsap
				.from('.menu-header', {
					top: '58',
					paused: true,
					duration: 0.2,
				})
				.progress(1);
			ScrollTrigger.create({
				start: 'top top',
				end: 99999,
				onUpdate: (self) => {
					self.direction === 1 ? showAnim.play() : showAnim.reverse();
					self.direction === 1 ? showAnim2.play() : showAnim2.reverse();
				},
			});
		},
	},
};
</script>

<style lang="scss">
body,
html {
	width: 100%;
	margin: 0;
}

.app-container {
	width: 100%;
	position: relative;
	border: none;
}

@media screen and (orientation: portrait) {
	#app {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		.app-container {
			position: relative;
			border: none;
		}
	}
}

@media screen and (min-width: 376px) {
	body,
	html {
		overflow: hidden;
	}
	#app {
		-ms-overflow-style: none;
		scrollbar-width: none;
		::-webkit-scrollbar {
			display: none;
		}
	}
	.app-container {
		position: relative;
		height: 800px;
		width: 375px;
		border: 1px solid #efefef;
		box-sizing: border-box;
		border-radius: 20px;
		overflow: scroll;
	}
}
</style>
