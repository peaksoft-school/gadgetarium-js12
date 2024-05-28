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
		addProductsForFavorite: build.mutation<
			FAVORITEPRODUCTS.PutFavoriteProductResponse,
			FAVORITEPRODUCTS.PutFavoriteProductRequest
		>({
			query: ( {gadgetId} ) => ({
				url: `/api/favorites/${gadgetId}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
			}),
			invalidatesTags: ['favorite']
		})
	})
});

export const { useGetFavoriteQuery, useAddProductsForFavoriteMutation } = api;
