import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProductsNews: build.query<
			PRODUCTNEW.GetProductsNewsResponse,
			PRODUCTNEW.GetProductsNewsRequest
		>({
			query: () => ({
				url: `/api/gadget/new`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['productsNew']
		})
	})
});

export const { useGetProductsNewsQuery } = api;
