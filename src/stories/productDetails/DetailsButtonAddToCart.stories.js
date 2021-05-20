import AddToCartButton from '../../subComponents/productDetails/DetailsButtonAddToCart.vue';

export default {
	component: AddToCartButton,
	title: 'Components/Add-to-cart-button',
};

export const Primary = () => ({
	components: { AddToCartButton },
	template: '<AddToCartButton />',
});
