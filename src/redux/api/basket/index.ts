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
				url: `/api/basket/all-amount-in-basket?${ids}`,
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
		}),
		basketDeleteProduct: build.mutation<
			BASKETPRODUCTS.BasketDeleteResponse,
			BASKETPRODUCTS.BasketDeleteRequest
		>({
			query: (gadgetId) => ({
				url: `/api/basket/${gadgetId}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['basket']
		}),
		getBasketOrderGadget: build.query<
			BASKETPRODUCTS.GetBasketOrderGadgetResponse,
			BASKETPRODUCTS.GetBasketOrderGadgetRequest
		>({
			query: (ids) => ({
				url: `/api/basket/order-amounts?${ids}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
		})
	})
});

export const {
	useGetBasketQuery,
	useGetBasketOrderAmountQuery,
	useBasketPutProductMutation,
	useBasketDeleteProductMutation,
	useGetBasketOrderGadgetQuery
} = api;
