import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getSliders: build.query<SLIDER.GetResponse, SLIDER.GetRequest>({
			query: () => ({
				url: 'https://76de117aa07ffb38.mokky.dev/sliderBanner',
				method: 'GET'
			}),
			providesTags: ['slider']
		})
	})
});

export const { useGetSlidersQuery } = api;
