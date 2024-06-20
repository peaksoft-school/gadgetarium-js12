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
    addBrandApi: build.mutation<BRANDAPI.addBrandResponse, BRANDAPI.addBrandRequest>({
      query: ({brandName, file}) => ({
        url: `/api/brand?${brandName}`,
        method: 'POST',
        headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: file
      }),
      invalidatesTags: ['brandApi']
    })
	})
});

export const { useGetBrandApiQuery, useAddBrandApiMutation } = api;
