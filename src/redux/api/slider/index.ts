import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getSliders: build.query<SLIDER.GetResponse, SLIDER.GetRequest>({
			query: () => ({
				url: 'https://api.elchocrud.pro/api/v1/53bbbf91c4ea62724aae7e81c91510e8/sliders',
				method: 'GET'
			}),
			providesTags: ['slider']
		})
	})
});

export const { useGetSlidersQuery: useGetSlidersQuery } = api;
