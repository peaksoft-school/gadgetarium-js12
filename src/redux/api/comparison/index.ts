import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getComparison: build.query<
			COMPARISONPRODUCTS.GetComparisonProductsResponse,
			COMPARISONPRODUCTS.GetComparisonProductsRequest
		>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['comparison']
		}),
		comparisonPutProduct: build.mutation<
			COMPARISONPRODUCTS.PutComparisonProductResponse,
			COMPARISONPRODUCTS.PutComparisonProductRequest
		>({
			query: ({ _id, isComparison }) => ({
				url: `/${_id}`,
				method: 'PATCH',
				body: { isComparison }
			}),
			invalidatesTags: ['comparison']
		}),
		comparisonResults: build.mutation<
			COMPARISONPRODUCTS.ComparisonResultsResponse,
			COMPARISONPRODUCTS.ComparisonResultsRequest
		>({
			query: (isDifference) => ({
				url: '',
				method: 'PATCH',
				body: isDifference
			}),
			invalidatesTags: ['comparison']
		}),
		CategoryProducts: build.mutation<
			COMPARISONPRODUCTS.CategoryProductsResponse,
			COMPARISONPRODUCTS.CategoryProductsRequest
		>({
			query: (categoryProducts) => ({
				url: '',
				method: 'PATCH',
				body: categoryProducts
			}),
			invalidatesTags: ['comparison']
		})
	})
});

export const {
	useGetComparisonQuery,
	useComparisonPutProductMutation,
	useComparisonResultsMutation,
	useCategoryProductsMutation
} = api;
