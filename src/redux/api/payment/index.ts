import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getOrderId: build.query<
			PAYMENTPRODUCT.GetOrderIdResponse,
			PAYMENTPRODUCT.GetOrderIdRequest
		>({
			query: () => ({
				url: `/api/payment/get-new`,
				method: 'GET',

				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['payment']
		}),
		getReviewPay: build.query<
			PAYMENTPRODUCT.GetReviewResponse,
			PAYMENTPRODUCT.GetReviewRequest
		>({
			query: ({ orderId }) => ({
				url: `/api/payment/order/${orderId}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['payment']
		}),
		getDecorPayment: build.query<
			PAYMENTPRODUCT.GetPayDecorResponse,
			PAYMENTPRODUCT.GetPayDecorRequest
		>({
			query: ({ orderId }) => ({
				url: `/api/payment/${orderId}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['payment']
		}),
		patchPaymentType: build.mutation<
			PAYMENTPRODUCT.PatchPaymentProductsResponse,
			PAYMENTPRODUCT.PatchPaymentProductsRequest
		>({
			query: ({ orderId, payment }) => ({
				url: `/api/payment/${orderId}?payment=${payment}`,
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
			PAYMENTPRODUCT.TestCreateRequest
		>({
			query: ({ token, orderId, paymentId }) => ({
				url: `/api/payment/create/${orderId}?token=${token}`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: { paymentId }
			}),
			invalidatesTags: ['payment']
		}),
		postConfirmPayment: build.mutation<
			PAYMENTPRODUCT.PostConfirmPayResponse,
			PAYMENTPRODUCT.PostPaymentRequest
		>({
			query: (paymentId) => ({
				url: `/api/payment/confirm?paymentId=${paymentId}	`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['payment']
		})
	})
});

export const {
	usePatchPaymentTypeMutation,
	usePostCreatePaymentMutation,
	useGetOrderIdQuery,
	usePostConfirmPaymentMutation,
	useGetReviewPayQuery,
	useGetDecorPaymentQuery
} = api;
