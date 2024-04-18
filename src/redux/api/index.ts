import {
	BaseQueryFn,
	createApi,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_PRODUCT_URL,
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
	tagTypes: [
		'user',
		'auth',
		'admin',
		'basket',
		'products',
		'accessories',
		'sliders'
	],
	endpoints: () => ({})
});
