import { api as index } from '../index';

interface IAdminOrders {
	_id: string;
	fullname: string;
	modalName: string;
	number: string;
	date: string;
	quantity: string;
	totalPrice: string;
	orderType: string;
	status: string;
	product: string;
	discount: string;
	discountPrice: string;
	fullOldPrice: string;
	state: string;
	phone: string;
	address: string;
}

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getAdminOrder: build.query<IAdminOrders[], number>({
			query: () => ({
				url: 'https://api-v2.elchocrud.pro/api/v1/5babd4e55530d1ca27208b3cf92e6438/adminOrders',
				method: 'GET'
			}),
			providesTags: ['adminOrders']
		}),
		postAdminOrder: build.mutation<IAdminOrders[], IAdminOrders>({
			query: (products) => ({
				url: 'https://api-v2.elchocrud.pro/api/v1/5babd4e55530d1ca27208b3cf92e6438/adminOrders',
				method: 'POST',
				body: products
			})
		}),
		putAdminOrder: build.mutation<IAdminOrders[], IAdminOrders>({
			query: ({ _id, ...products }) => ({
				url: `https://api-v2.elchocrud.pro/api/v1/5babd4e55530d1ca27208b3cf92e6438/adminOrders/${_id}`,
				method: 'PATCH',
				body: products
			})
		}),
		deleteAdminOrder: build.mutation<IAdminOrders[], IAdminOrders>({
			query: ({ _id }) => ({
				url: `https://api-v2.elchocrud.pro/api/v1/5babd4e55530d1ca27208b3cf92e6438/adminOrders/${_id}`,
				method: 'DELETE'
			})
		})
	})
});

export const {
	useGetAdminOrderQuery: useGetAdminOrderQuery,
	usePostAdminOrderMutation,
	usePutAdminOrderMutation,
	useDeleteAdminOrderMutation
} = api;
