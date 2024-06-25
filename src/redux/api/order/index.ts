import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getDeliveryData: build.query<
			ORDERPRODUCT.GetBasketProductsResponse,
			ORDERPRODUCT.GetBasketProductsRequest
		>({
			query: () => ({
				url: '/api/order/data-return',
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
			query: ({
				subGadgetId,
				deliveryType,
				deliveryAddress,
				email,
				phoneNumber,
				firstName,
				lastName
			}) => ({
				url: `/api/order?${subGadgetId}&${deliveryType}`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: { deliveryAddress, email, phoneNumber, firstName, lastName }
			}),
			invalidatesTags: ['orderUser']
		})
	})
});

export const { usePostOrderDeliveryMutation, useGetDeliveryDataQuery } = api;
