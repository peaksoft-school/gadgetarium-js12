import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getGlobalSearch: build.query<
			GLOBALSEARCH.GetGlobalSearchResponse,
			GLOBALSEARCH.GetGlobalSearchRequest
		>({
			query: ({ request }) => ({
				url: `/api/gadget/global-search?${request}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['searchGlobal']
		})
	})
});

export const { useGetGlobalSearchQuery } = api;
