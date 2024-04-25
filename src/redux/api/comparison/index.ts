import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getComparison: build.query<
			FAVORITEPRODUCTS.GetFavoriteProductsResponse,
			FAVORITEPRODUCTS.GetFavoriteProductsRequest
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
		})
	})
});

export const { useGetComparisonQuery, useComparisonPutProductMutation } = api;
