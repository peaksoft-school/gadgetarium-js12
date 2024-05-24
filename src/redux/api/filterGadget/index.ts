import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getFiltredGadget: build.mutation<
			FILTREDPRODUCTS.GetFiltredProductsResponse,
			FILTREDPRODUCTS.GetFiltredProductsRequest
		>({
			query: ({ id, brand }) => ({
				url: `/api/gadget/${id}/filter`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: { brand }
			}),
			invalidatesTags: ['filterProductsApi']
		}),
		getFilterProducts: build.query<
			FILTREDPRODUCTS.GetProductsForFiltredResponse,
			FILTREDPRODUCTS.GetProductsForFiltredRequest
		>({
			query: () => ({
				url: `/api/gadget/1/filter`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['filterProductsApi']
		})
	})
});

export const { useGetFiltredGadgetMutation, useGetFilterProductsQuery } = api;
