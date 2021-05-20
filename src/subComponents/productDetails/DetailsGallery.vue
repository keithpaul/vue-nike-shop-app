<template>
	<div class="details-gallery">
		<div class="details-gallery__main-image">
			<img
				:src="
					require(`@/assets/images/CV7562/100/jordan-one-take-ii-basketball-shoe-CV7562-left-side.jpg`)
				"
				alt=""
			/>
		</div>
		<div class="details-gallery__thumbs">
			<div class="details-gallery__thumbs-image">
				<img
					:src="
						require(`@/assets/images/CV7562/100/jordan-one-take-ii-basketball-shoe-CV7562-thumb.jpg`)
					"
					alt=""
				/>
			</div>
			<div class="details-gallery__thumbs-image">
				<img
					:src="
						require(`@/assets/images/CV7562/003/jordan-one-take-ii-basketball-shoe-CV7562-thumb.jpg`)
					"
					alt=""
				/>
			</div>
			<div class="details-gallery__thumbs-image">
				<img
					:src="
						require(`@/assets/images/CV7562/003/jordan-one-take-ii-basketball-shoe-CV7562-thumb.jpg`)
					"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailsGallery',
};
</script>

<style lang="scss" scoped>
.details-gallery {
	width: 100%;
	margin-bottom: 60px;
	.details-gallery__main-image {
		width: 100%;
		margin-bottom: 8px;
		img {
			display: block;
			width: 100%;
			height: auto;
		}
	}
	.details-gallery__thumbs {
		width: 100%;
		display: flex;
		overflow: scroll;
		.details-gallery__thumbs-image {
			flex: 1 0 30%;
			&:not(:first-of-type) {
				margin-left: 8px;
			}
		}
	}
}
</style>
