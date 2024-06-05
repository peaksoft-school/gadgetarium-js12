import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getComparison: build.query<
			COMPARISONPRODUCTS.GetComparisonProductsResponse,
			COMPARISONPRODUCTS.GetComparisonProductsRequest
		>({
			query: () => ({
				url: '/api/comparison',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['comparison']
		}),
		comparisonPatchProducts: build.mutation<
			COMPARISONPRODUCTS.PatchComparisonProductResponse,
			COMPARISONPRODUCTS.PatchComparisonProductRequest
		>({
			query: (subGadgetId) => ({
				url: `/api/comparison/${subGadgetId}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['comparison']
		})
	})
});

export const { useGetComparisonQuery, useComparisonPatchProductsMutation } =
	api;
