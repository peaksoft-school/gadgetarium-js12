import {api as index} from '../index';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getBasket: build.query<BasketProducts.GetBasketProductsResponse, BasketProducts.GetBasketProductsRequest>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ['basket'],
    })
  })
})

export const {useGetBasketQuery} = api