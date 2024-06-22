import {
	BaseQueryFn,
	createApi,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_PRODUCT_URL,
	prepareHeaders: (headers) => {
		const token = localStorage.getItem('token-auth');
		if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	}
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions);
	return result;
};

export const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryExtended,
	refetchOnReconnect: true,
	refetchOnFocus: false,
	tagTypes: [
		'auth',
		'basket',
		'product',
		'products',
		'productsNew',
		'productsRecom',
		'slider',
		'favorite',
		'comparison',
		'phones',
		'personalFavorite',
		'personalHistory',
		'adminOrders',
		'productAdd',
		'viewedProducts',
		'adminsOrders',
		'infoGraphics',
		'searchGlobal',
		'cardProductApi',
		'catalogApi',
		'CharacteristicsApi',
		'deliveryApi',
		'descriptionApi',
		'filterProductsApi',
		'productMemoryApi',
		'pdfApi',
		'cardProductsColorsApi',
		'reviewsApi',
		'adminReview',
		'adminGoods',
		'payment',
		'orderUser',
		'addProductApi',
		'brandApi',
		'editProductById'
	],
	endpoints: () => ({})
});
