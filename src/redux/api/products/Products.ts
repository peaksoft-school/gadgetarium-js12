import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<
			ProductsStore.GetProductsResponse,
			ProductsStore.GetProductsRequest
		>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['products']
		}),
		getProductsItemId: build.query<
			ProductsStore.GetProductsItemIdResponse,
			ProductsStore.GetProductsItemIdRequest
		>({
			query: (_id) => ({
				url: `/${_id}`,
				method: 'GET'
			}),
			providesTags: ['products']
		})
	})
});

export const { useGetProductsQuery, useGetProductsItemIdQuery } = api;
