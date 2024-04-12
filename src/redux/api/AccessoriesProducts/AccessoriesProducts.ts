import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		GetAccessories: build.query<
			AccessoriesProducts.GetAccessoriesProductsResponse,
			AccessoriesProducts.GetAccessoriesProductsRequest
		>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['accessories']
		})
	})
});

export const { useGetAccessoriesQuery } = api;
