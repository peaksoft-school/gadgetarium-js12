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
			query: ({ id, quantity }) => ({
				url: `/api/basket/${id}?${quantity}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
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
			}),
			providesTags: ['basket']
		}),
		deleteByIdBasketProduct: build.mutation({
			query: (gadgetId) => ({
				url: `/api/basket/${gadgetId}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['basket']
		}),
		deleteAllBasket: build.mutation<
			BASKETPRODUCTS.DeleteAllResponse,
			BASKETPRODUCTS.DeleteAllRequest
		>({
			query: ({ids}) => ({
				url: `/api/basket/delete-all?${ids}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['basket']
		})
	})
});

export const {
	useGetBasketQuery,
	useGetBasketOrderAmountQuery,
	useBasketPutProductMutation,
	useBasketDeleteProductMutation,
	useGetBasketOrderGadgetQuery,
	useDeleteByIdBasketProductMutation,
	useDeleteAllBasketMutation
} = api;
