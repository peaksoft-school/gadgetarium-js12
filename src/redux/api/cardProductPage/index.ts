import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getCardProduct: build.query<
			CARTPRODUCT.GetCardProductResponse,
			CARTPRODUCT.GetCardProductRequest
		>({
			query: ({gadgetId, color, memory}) => ({
				url: `/api/gadget/by-id/${gadgetId}?${color}&${memory}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['cardProductApi']
		})
	})
});

export  const { useGetCardProductQuery } = api;
