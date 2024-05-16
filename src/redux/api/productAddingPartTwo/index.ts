import { api as index } from "../index";

interface IProduct {
  _id: number;
  brand: string;
  colour: string;
  gb: string;
  ram: string;
  simCard: string;
  date: string;
  productQuantity: string;
  productPrice: string;
}

const api = index.injectEndpoints({
  endpoints: (build) => ({
    useGetNewProductsQuery: build.query<IProduct[], number>({
      query: () => ({
        url: 'https://api-v2.elchocrud.pro/api/v1/3fefa9ad15052f81ba2ff2373005cec8/addProduct',
        method: 'GET'
      }),
      providesTags: ['productAdd']
    }),
    postNewProductsQuery: build.mutation<IProduct[], IProduct>({
      query: (products) => ({
        url: "https://api-v2.elchocrud.pro/api/v1/3fefa9ad15052f81ba2ff2373005cec8/addProduct",
        method: "POST",
        body: products
      })
    }),
    patchNewProductsQuery: build.mutation<IProduct, { productId: number; productPrice: string }>({
      query: ({ productId, productPrice }) => ({
        url: `https://api-v2.elchocrud.pro/api/v1/3fefa9ad15052f81ba2ff2373005cec8/addProduct/${productId}`,
        method: "PATCH",
        body: { productPrice }
      }),
      invalidatesTags: ['productAdd']
    })
  })
});

export const { useUseGetNewProductsQueryQuery: useGetNewProductsQuery, usePostNewProductsQueryMutation, usePatchNewProductsQueryMutation } = api;
