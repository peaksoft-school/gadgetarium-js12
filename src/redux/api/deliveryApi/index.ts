import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getDeliveryProduct: build.query({
			query: (id) => ({
				url: `/api/gadget/delivery/${id}`,
				method: 'GET'
			}),
			providesTags: ['deliveryApi']
		})
	})
});

export const { useGetDeliveryProductQuery } = api;
