import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<
			PRODUCTSSTORE.GetProductsResponse,
			PRODUCTSSTORE.GetProductsRequest
		>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['product']
		})
	})
});

export const { useGetProductsQuery } = api;
