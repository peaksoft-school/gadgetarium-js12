import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getOrder: build.query<
			ORDERPRODUCT.GetBasketProductsResponse,
			ORDERPRODUCT.GetBasketProductsRequest
		>({
			query: () => ({
				url: '/api/order',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['orderUser']
		}),
		postOrderDelivery: build.mutation<
			ORDERPRODUCT.PostBasketProductsResponse,
			ORDERPRODUCT.PostBasketProductsRequest
		>({
			query: () => ({
				url: '/api/order',
				method: 'POST',
				// body: deliveryType,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['orderUser']
		})
	})
});

export const { useGetOrderQuery, usePostOrderDeliveryMutation } = api;
