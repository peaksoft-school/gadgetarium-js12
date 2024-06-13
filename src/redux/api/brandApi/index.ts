import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getBrandApi: build.query<
			BRANDAPI.getBrandApiResponse,
			BRANDAPI.getBrandApiRequest
		>({
			query: () => ({
				url: '/api/brand',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['brandApi']
		}),
    addBrandApi: build.mutation({
      query: () => ({
        // url: `/api/brand?${}`,
        method: 'POST',
        headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
      }),
      invalidatesTags: ['brandApi']
    })
	})
});

export const { useGetBrandApiQuery, useAddBrandApiMutation } = api;
