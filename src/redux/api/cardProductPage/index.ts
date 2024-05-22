/* eslint-disable @typescript-eslint/no-unused-vars */
import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getCardProduct: build.query<
			CARTPRODUCT.GetCardProductResponse,
			CARTPRODUCT.GetCardProductRequest
		>({
			query: (id) => ({
				url: `/api/gadget/by-id/${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['cardProductApi']
		})
	})
});

const { useGetCardProductQuery } = api;
