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
		})
	})
});

export const { usePatchPaymentTypeMutation } = api;
