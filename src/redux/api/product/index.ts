import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<
			PRODUCTSTORE.GetProductsResponse,
			PRODUCTSTORE.GetProductsRequest
		>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['product']
		}),
		getProductsItemId: build.query<
			PRODUCTSTORE.GetProductsItemIdResponse,
			PRODUCTSTORE.GetProductsItemIdRequest
		>({
			query: (_id) => ({
				url: `/${_id}`,
				method: 'GET'
			}),
			providesTags: ['product']
		})
	})
});

export const { useGetProductsQuery, useGetProductsItemIdQuery } = api;
