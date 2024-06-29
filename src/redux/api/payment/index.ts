import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		patchPaymentType: build.mutation<
			PAYMENTPRODUCT.PatchPaymentProductsResponse,
			PAYMENTPRODUCT.PatchPaymentProductsRequest
		>({
			query: ({ orderId, payment }) => ({
				url: `/api/paypal?${orderId}&${payment}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: { orderId, payment }
			}),
			invalidatesTags: ['payment']
		}),
		postCreatePayment: build.mutation<
			PAYMENTPRODUCT.PostPaymentResponse,
			PAYMENTPRODUCT.PostPaymentRequest
		>({
			query: ({ newData, token, test }) => ({
				url: `/api/payment/create/${4}`,
				method: 'POST	',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: newData,
				params: {
					token: 'tok_createDispute'
				}
			}),
			invalidatesTags: ['payment']
		})
	})
});

export const { usePatchPaymentTypeMutation, usePostCreatePaymentMutation } =
	api;
