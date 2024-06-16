import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getViewedProducts: build.query<
			VIEWEDPRODUCTS.GetViewedProductsResponse,
			VIEWEDPRODUCTS.GetViewedProductsRequest
		>({
			query: () => ({
				url: '/api/gadget/viewed-products',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['viewedProducts']
		})
	})
});

export const { useGetViewedProductsQuery } = api;
