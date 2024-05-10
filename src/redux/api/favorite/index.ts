import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getFavorite: build.query<
			FAVORITEPRODUCTS.GetFavoriteProductsResponse,
			FAVORITEPRODUCTS.GetFavoriteProductsRequest
		>({
			query: () => ({
				url: 'https://api-v2.elchocrud.pro/api/v1/eca987f41677bb5cc17c0789a3c9920e/favorite_products',
				method: 'GET'
			}),
			providesTags: ['favorite']
		}),
		favoritePutProduct: build.mutation<
			FAVORITEPRODUCTS.PutFavoriteProductResponse,
			FAVORITEPRODUCTS.PutFavoriteProductRequest
		>({
			query: ({ id, isFavorite }) => ({
				url: `https://api-v2.elchocrud.pro/api/v1/eca987f41677bb5cc17c0789a3c9920e/favorite_products/${id}`,
				method: 'PATCH',
				body: { isFavorite }
			}),
			invalidatesTags: ['favorite']
		})
	})
});

export const { useGetFavoriteQuery, useFavoritePutProductMutation } = api;
