import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getFavorite: build.query<
			FAVORITEPRODUCTS.GetFavoriteProductsResponse,
			FAVORITEPRODUCTS.GetFavoriteProductsRequest
		>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['favorite']
		}),
		favoritePutProduct: build.mutation<
			FAVORITEPRODUCTS.PutFavoriteProductResponse,
			FAVORITEPRODUCTS.PutFavoriteProductRequest
		>({
			query: ({ id, isFavorite }) => ({
				url: `/${id}`,
				method: 'PATCH',
				body: { isFavorite }
			}),
			invalidatesTags: ['favorite']
		})
	})
});

export const { useGetFavoriteQuery, useFavoritePutProductMutation } = api;
