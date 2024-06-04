import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		// getOrder: build.query<
		// 	ORDERPRODUCT.GetBasketProductsResponse,
		// 	ORDERPRODUCT.GetBasketProductsRequest
		// >({
		// 	query: () => ({
		// 		url: '/api/order',
		// 		method: 'GET',
		// 		headers: {
		// 			Authorization: `Bearer ${localStorage.getItem('token')}`
		// 		}
		// 	}),
		// 	providesTags: ['orderUser']
		// }),
		postOrderDelivery: build.mutation<
			ORDERPRODUCT.PostBasketProductsResponse,
			ORDERPRODUCT.PostBasketProductsRequest
		>({
			query: ({
				ids,
				deliveryType,
				deliveryAddress,
				email,
				phoneNumber,
				firstName,
				lastName
			}) => ({
				url: `/api/order?${ids}&${deliveryType}`,
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

export const { usePostOrderDeliveryMutation } = api;
