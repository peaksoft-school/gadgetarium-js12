import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getComparison: build.query<
			COMPARISONPRODUCTS.GetComparisonProductsResponse,
			COMPARISONPRODUCTS.GetComparisonProductsRequest
		>({
			query: () => ({
				url: 'https://api-v2.elchocrud.pro/api/v1/e29346eff0c433ab971a172fd2128212/comparison_products',
				method: 'GET'
			}),
			providesTags: ['comparison']
		}),
		comparisonPutProduct: build.mutation<
			COMPARISONPRODUCTS.PutComparisonProductResponse,
			COMPARISONPRODUCTS.PutComparisonProductRequest
		>({
			query: ({ _id, isComparison }) => ({
				url: `https://api-v2.elchocrud.pro/api/v1/e29346eff0c433ab971a172fd2128212/comparison_products/${_id}`,
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
				url: 'https://api-v2.elchocrud.pro/api/v1/e29346eff0c433ab971a172fd2128212/comparison_products',
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
				url: 'https://api-v2.elchocrud.pro/api/v1/e29346eff0c433ab971a172fd2128212/comparison_products',
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
