import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getDeliveryProduct: build.query<
			DELIVERY.GetDeliveryResponse,
			DELIVERY.GetDeliveryRequest
		>({
			query: (id) => ({
				url: `/api/gadget/delivery/${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token') || ''}`
				}
			}),
			providesTags: ['deliveryApi']
		})
	})
});

export const { useGetDeliveryProductQuery } = api;
