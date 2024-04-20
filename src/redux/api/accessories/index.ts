import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		GetAccessories: build.query<
			ACCESSORIES.GetResponse,
			ACCESSORIES.GetRequest
		>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['accessories']
		})
	})
});

export const { useGetAccessoriesQuery } = api;
