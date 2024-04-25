import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getBasket: build.query<
			BASKETPRODUCTS.GetBasketProductsResponse,
			BASKETPRODUCTS.GetBasketProductsRequest
		>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['basket']
		}),
		basketPutProduct: build.mutation<
			BASKETPRODUCTS.PutProductResponse,
			BASKETPRODUCTS.PutProductRequest
		>({
			query: ({ _id, isInBasket }) => ({
				url: `/${_id}`,
				method: 'PATCH',
				body: { isInBasket }
			}),
			invalidatesTags: ['basket']
		})
	})
});

export const { useGetBasketQuery, useBasketPutProductMutation } = api;
