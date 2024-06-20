import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProductsSale: build.query<
			PRODUCTSALE.GetProductsSaleResponse,
			PRODUCTSALE.GetProductsSaleRequest
		>({
			query: ({ page, size }) => ({
				url: `/api/gadget/discounts?${page}&${size}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token') || ''} `
				}
			}),
			providesTags: ['products']
		})
	})
});

export const { useGetProductsSaleQuery } = api;
