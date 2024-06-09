import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		// getOrder: build.query<
		// 	ORDERPRODUCT.GetBasketProductsResponse,
		// 	ORDERPRODUCT.GetBasketProductsRequest
		// >({
		// 	query: () => ({
		// 		url: '/api/order',
		// 		method: 'GET',1111111111111111111111111111111111111111111111111111111
		// 		headers: {
		// 			Authorization: `Bearer ${localStorage.getItem('token')}`
		// 		}
		// 	}),
		// 	providesTags: ['orderUser']
		// }),
		patchPaymentType: build.mutation<
			PAYMENTPRODUCT.PatchPaymentProductsResponse,
			PAYMENTPRODUCT.PatchPaymentProductsRequest
		>({
			query: (data) => ({
				url: `/api/paypal/${data.orderId}`,
				// params: {
				// 	payment
				// },
				method: 'PATCH',
				body: { payment: data.payment }

			}),
			invalidatesTags: ['payment']
		})
	})
});

export const { usePatchPaymentTypeMutation } = api;
