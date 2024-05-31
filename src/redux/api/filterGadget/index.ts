import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getFiltredGadget: build.query<
			FILTREDPRODUCTS.GetFiltredProductsResponse,
			FILTREDPRODUCTS.GetFiltredProductsRequest
		>({
			query: ({ id, brand, sort, discount, colour }) => ({
				url: `/api/gadget/${id}/filter?${brand}&${sort}&${discount}&${colour}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['filterProductsApi']
		})
	})
});

export const { useGetFiltredGadgetQuery } = api;
