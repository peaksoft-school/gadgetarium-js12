import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getFavorite: build.query<
			FAVORITEPRODUCTS.GetFavoriteProductsResponse,
			FAVORITEPRODUCTS.GetFavoriteProductsRequest
		>({
			query: () => ({
				url: '/api/favorites',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['favorite']
		}),
		favoritePutProduct: build.mutation<
			FAVORITEPRODUCTS.PutFavoriteProductResponse,
			FAVORITEPRODUCTS.PutFavoriteProductRequest
		>({
			query: (subGadgetId) => ({
				url: `/api/favorites/${subGadgetId}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['favorite']
		}),
		deleteAllProduct: build.mutation({
			query: (subGadgetId) => ({
				url: `/api/favorites/clear`,
				method: 'DELETE',
				body: subGadgetId,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['favorite']
		}),
		deleteByIdFavoriteProduct: build.mutation({
			query: (subGadgetId) => ({
				url: `/api/favorites/${subGadgetId}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['favorite']
		})
	})
});

export const {
	useGetFavoriteQuery,
	useFavoritePutProductMutation,
	useDeleteAllProductMutation,
	useDeleteByIdFavoriteProductMutation
} = api;