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
		basketPutProduct: build.mutation<
			PRODUCTSTORE.PutProductResponse,
			PRODUCTSTORE.PutProductRequest
		>({
			query: ({ _id, isInBasket, isFavorite }) => ({
				url: `${_id}`,
				method: 'PATCH',
				body: { isInBasket, isFavorite }
			}),
			invalidatesTags: ['product']
		})
	})
});

export const { useGetProductsQuery, useBasketPutProductMutation } = api;
