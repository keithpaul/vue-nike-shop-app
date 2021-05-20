import { createWebHistory, createRouter } from 'vue-router';
import ProductList from '@/components/ProductList.vue';
import ProductView from '@/components/ProductView.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
	{
		path: '/',
		name: 'Products',
		component: ProductList,
	},
	{
		path: '/product/:id',
		name: 'ProductView',
		component: ProductView,
		props: true,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
