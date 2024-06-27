import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getAdminOrder: build.query<
			ORDERSTORE.GetOrderResponse,
			ORDERSTORE.GetOrderRequest
		>({
			query: ({status, keyword, page, size, startDate, endDate}) => ({
				url: `/api/order?keyword=${keyword}&status=${status}&startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['adminOrders']
		}),
		postAdminOrder: build.mutation<
			ORDERSTORE.PostOrderResponse,
			ORDERSTORE.PostOrderRequest
		>({
			query: (products) => ({
				url: '/api/order',
				method: 'POST',
				body: products,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['adminOrders']
		}),
		putAdminOrder: build.mutation<
			ORDERSTORE.PutOrderResponse,
			ORDERSTORE.PutOrderRequest
		>({
			query: ({ orderId, status }) => ({
				url: `/api/order/${orderId}?status=${status}`,
				method: 'PATCH',
				body: { status },
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['adminOrders'],
		}),
		deleteAdminOrder: build.mutation<
			ORDERSTORE.DeleteOrderResponse,
			ORDERSTORE.DeleteOrderRequest
		>({
			query: (orderId) => ({
				url: `/api/order/${orderId}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['adminOrders']
		})
	})
});

export const {
	useGetAdminOrderQuery: useGetAdminOrderQuery,
	usePostAdminOrderMutation,
	usePutAdminOrderMutation,
	useDeleteAdminOrderMutation
} = api;
