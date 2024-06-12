import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getSliders: build.query<SLIDER.GetResponse, SLIDER.GetRequest>({
			query: (images) => ({
				url: '/api/banner',
				method: 'GET',
				body: images
			}),
			providesTags: ['slider']
		})
	})
});

export const { useGetSlidersQuery } = api;
