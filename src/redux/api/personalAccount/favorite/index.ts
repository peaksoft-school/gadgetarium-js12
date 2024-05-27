import { api as index } from "../../index";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    useGetProductsQuery: build.query<
    FAVORITESTORE.GetFavoritesResponse,
    FAVORITESTORE.GetFavoritesRequest
    >({
      query: () => ({
        url: 'https://api-v2.elchocrud.pro/api/v1/630d05743b278686f2f99b684d3b7f61/favorite',
        method: 'GET'
      }),
      providesTags: ['personalFavorite']
    }),
    postProductsQuery: build.mutation<
      FAVORITESTORE.PostFavoriteResponse,
      FAVORITESTORE.PostFavoriteRequest
    >({
      query: (products) => ({
        url: "https://api-v2.elchocrud.pro/api/v1/630d05743b278686f2f99b684d3b7f61/favorite",
        method: "POST",
        body: products
      })
    })
  })
});

export const { useUseGetProductsQueryQuery: useGetProductsQuery, usePostProductsQueryMutation } = api;