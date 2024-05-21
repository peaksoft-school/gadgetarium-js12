import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getPhones: build.query<
			FILTREDPRODUCTS.GetFiltredProductsResponse,
			FILTREDPRODUCTS.GetFiltredProductsRequest
		>({
			query: () => ({
				url: '/api/gadget/filter',
				method: 'GET'
			}),
			providesTags: ['phones']
		})
	})
});

export const { useGetPhonesQuery } = api;
