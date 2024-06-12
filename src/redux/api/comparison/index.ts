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
		}),
		getComparisonCompare: build.query<
			COMPARISONPRODUCTS.GetComparisonCompareResponse,
			COMPARISONPRODUCTS.GetComparisonCompareRequest
		>({
			query: ({ gadgetType, isDifferences }) => ({
				url: `/api/comparison/compare?${gadgetType}&${isDifferences}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['comparison']
		}),
		clearAllProductsComparison: build.mutation({
			query: () => ({
				url: `/api/comparison/clear`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['comparison']
		}),
		deleteByIdProductComparison: build.mutation({
			query: (subGadgetId) => ({
				url: `/api/comparison/${subGadgetId}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['comparison']
		})
	})
});

export const {
	useGetComparisonQuery,
	useComparisonPatchProductsMutation,
	useClearAllProductsComparisonMutation,
	useDeleteByIdProductComparisonMutation,
	useGetComparisonCompareQuery
} = api;
