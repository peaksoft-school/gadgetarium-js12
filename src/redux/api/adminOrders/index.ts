import { api as index } from "../index";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getAdminOrder: build.query<
      ORDERSTORE.GetOrderResponse,
      ORDERSTORE.GetOrderRequest
    >({
      query: () => ({
        url: '/api/order',
        method: 'GET',
        headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}` 
				}
      }),
      providesTags: ['adminOrders']
    }),
    postAdminOrder: build.mutation<
      ORDERSTORE.PostOrderResponse,
      ORDERSTORE.PostOrderRequest
    >({
      query: (products) => ({
        url: "/api/order",
        method: "POST",
        body: products,
        headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}` 
				}
      })
    }),
    putAdminOrder: build.mutation<
      ORDERSTORE.PutOrderResponse,
      ORDERSTORE.PutOrderRequest
    >({
      query: ({ id, ...products }) => ({
        url: `/api/order/${id}`,
        method: "PATCH",
        body: products
      })
    }),
    deleteAdminOrder: build.mutation<
      ORDERSTORE.DeleteOrderResponse,
      ORDERSTORE.DeleteOrderRequest
    >({
      query: ({ id }) => ({
        url: `/api/order${id}`,
        method: "DELETE",
      })
    })
  })
});

export const { useGetAdminOrderQuery: useGetAdminOrderQuery, usePostAdminOrderMutation, usePutAdminOrderMutation, useDeleteAdminOrderMutation } = api;