import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProductMemory: build.query<
			PRODUCTMEMORY.GetProductMemoryResponse,
			PRODUCTMEMORY.GetProductMemoryRequest
		>({
			query: ({gadgetId, color}) => ({
				url: `/api/gadget/memories/${gadgetId}?${color}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token') || ''}`
				}
			}),
			providesTags: ['productMemoryApi']
		})
	})
});

export const { useGetProductMemoryQuery } = api;
