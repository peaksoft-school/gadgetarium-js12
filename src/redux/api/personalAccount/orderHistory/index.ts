import { api as index } from "../../index";

interface IHistory {
  _id: string;
  date: string;
  orderNumber: string;
  statusDelivered: string;
  statusCancelled: string;
  statusProcessing: string;
  statusOnTheWay: string;
  total: string;
  client: string;
  firstName: string;
  lastName: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  payment: string;
  city: string;
  discount: string;
}

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getOrder: build.query<IHistory[], number>({
      query: () => ({
        url: 'https://api-v2.elchocrud.pro/api/v1/38c4902a09cff610684f21d2e5e1f663/orderHistory',
        method: 'GET'
      }),
      providesTags: ['personalHistory']
    }),
    postOrder: build.mutation<IHistory[], IHistory>({
      query: (products) => ({
        url: "https://api-v2.elchocrud.pro/api/v1/38c4902a09cff610684f21d2e5e1f663/orderHistory",
        method: "POST",
        body: products
      })
    }),
    deleteOrder: build.mutation<void, void>({
      query: () => ({
        url: "https://api-v2.elchocrud.pro/api/v1/38c4902a09cff610684f21d2e5e1f663/orderHistory",
        method: "DELETE",
      })
    })
  })
});

export const { useGetOrderQuery: useGetOrderQuery, usePostOrderMutation, useDeleteOrderMutation} = api;