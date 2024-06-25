import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getDescriptionProduct: build.query<
			DESCRIPTION.GetDescriptionResponse,
			DESCRIPTION.GetDescriptionRequest
		>({
			query: (id) => ({
				url: `/api/gadget/description/${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token') || ''}`
				}
			}),
			providesTags: ['descriptionApi']
		})
	})
});

export const { useGetDescriptionProductQuery } = api;
