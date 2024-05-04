import {
	BaseQueryFn,
	createApi,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_PRODUCT_URL
	// prepareHeaders: (headers) => {
	// 	return headers;
	// },
	// credentials: 'include'
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
<<<<<<< HEAD
	tagTypes: [
		'auth',
		'basket',
		'product',
		'slider',
		'favorite',
		'comparison',
		'phones'
	],
=======
	tagTypes: ['auth', 'basket', 'product', 'slider','favorite', 'comparison', 'phones'],
>>>>>>> aaf5a31812061a7903f287570910415615b2a773
	endpoints: () => ({})
});
