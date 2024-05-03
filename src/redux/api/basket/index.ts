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
			query: ({ id, isInBasket }) => ({
				url: `/${id}`,
				method: 'PATCH',
				body: { isInBasket }
			}),
			invalidatesTags: ['basket']
		}),
		basketProductDeleteAll: build.mutation<BASKETPRODUCTS.BasketProductsDeleteResponse, BASKETPRODUCTS.BasketProductsDeleteRequest>({
			query: ({isInBasket}) => ({
				url: ``,
				method: "PATCH",
				body: { isInBasket }
			}),
			invalidatesTags: ['basket']
		})
	})
});

export const { useGetBasketQuery, useBasketPutProductMutation, useBasketProductDeleteAllMutation } = api;
