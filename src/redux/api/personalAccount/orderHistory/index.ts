import { api as index } from '../../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getOrder: build.query<
		ORDERHISTORYSTORE.GetOrderResponse,
		ORDERHISTORYSTORE.GetOrderRequest
		>({
			query: () => ({
				url: '/api/personal',
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}` 
				}
			}),
			providesTags: ['personalHistory']
		}),
		postOrder: build.mutation<
		ORDERHISTORYSTORE.PostOrderRequest,
		ORDERHISTORYSTORE.PostOrderResponse
		>({
			query: (products) => ({
				url: '/api/personal',
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}` 
				},
				body: products
			}),
			invalidatesTags: ['personalHistory']
		}),
		deleteOrder: build.mutation({
			query: () => ({
				url: '/api/personal',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}` 
				},
				method: 'DELETE'
			}),
			invalidatesTags: ['personalHistory']
		})
	})
});

export const {
	useGetOrderQuery,
	usePostOrderMutation,
	useDeleteOrderMutation
} = api;
