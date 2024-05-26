import { api as index } from '../../index';

interface IHistory {
	_id: string;
	date: string;
	orderNumber: string;
	statusDelivered: string;
	statusCancelled: string;
	statusProcessing: string;
	statusOnTheWay: string;
	total: string;
	client: string;
	firstName: string;
	lastName: string;
	region: string;
	address: string;
	phone: string;
	email: string;
	payment: string;
	city: string;
	discount: string;
}

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getOrder: build.query<IHistory[], number>({
			query: () => ({
				url: '/api/personal',
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}` 
				}
			}),
			providesTags: ['personalHistory']
		}),
		postOrder: build.mutation<IHistory[], IHistory>({
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
		deleteOrder: build.mutation<void, void>({
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
