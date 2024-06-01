import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getBasket: build.query<
			BASKETPRODUCTS.GetBasketProductsResponse,
			BASKETPRODUCTS.GetBasketProductsRequest
		>({
			query: () => ({
				url: '/api/basket',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['basket']
		}),
		getBasketOrderAmount: build.query<
			BASKETPRODUCTS.GetBasketOrderAmountsResponse,
			BASKETPRODUCTS.GetBasketOrderAmountsRequest
		>({
			query: ({ ids }) => ({
				url: `/api/basket/all-amount-in-basket?${ids ? ids : ''}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['basket']
		}),
		basketPutProduct: build.mutation<
			BASKETPRODUCTS.PutProductResponse,
			BASKETPRODUCTS.PutProductRequest
		>({
			query: ({ id, basket }) => ({
				url: `/api/basket/${id}`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: { basket }
			}),
			invalidatesTags: ['basket']
		})
	})
});

export const {
	useGetBasketQuery,
	useGetBasketOrderAmountQuery,
	useBasketPutProductMutation
} = api;
