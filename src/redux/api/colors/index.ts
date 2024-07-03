import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getAllColorsApi: build.query<
			COLORSAPI.getColorsApiResponse,
			COLORSAPI.getColorsApiRequest
		>({
			query: () => ({
				url: `/api/gadget/get-colors-count`,
				method: 'GET',
        headers: {
					Authorization: `Bearer ${localStorage.getItem('token') || ''}`
				}
			}),
			providesTags: ['colorsApi']
		})
	})
});

export const { useGetAllColorsApiQuery } = api;
