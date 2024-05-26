import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getCharacteristicsProduct: build.query<
			CHARACTERISTICS.GetCharacteristicsResponse,
			CHARACTERISTICS.GetCharacteristicsRequest
		>({
			query: (id) => ({
				url: `/api/gadget/characteristics/${id}`,
				method: 'GET'
			}),
			providesTags: ['CharacteristicsApi']
		})
	})
});

export const { useGetCharacteristicsProductQuery } = api;
