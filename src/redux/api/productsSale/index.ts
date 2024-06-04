import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProductsSale: build.query<
			PRODUCTSALE.GetProductsSaleResponse,
			PRODUCTSALE.GetProductsSaleRequest
		>({
			query: () => ({
				url: '/api/gadget/discounts',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['products']
		})
	})
});

export const { useGetProductsSaleQuery } = api;
