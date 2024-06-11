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
					'Authorization': `Bearer ${localStorage.getItem("token")}` 
				}
      })
    }),
    putAdminOrder: build.mutation<
      ORDERSTORE.PutOrderResponse,
      ORDERSTORE.PutOrderRequest
    >({
      query: ({ id, ...products }) => ({
        url: `https://api-v2.elchocrud.pro/api/v1/5babd4e55530d1ca27208b3cf92e6438/adminOrders/${id}`,
        method: "PATCH",
        body: products
      })
    }),
    deleteAdminOrder: build.mutation<
      ORDERSTORE.DeleteOrderResponse,
      ORDERSTORE.DeleteOrderRequest
    >({
      query: ({ id }) => ({
        url: `https://api-v2.elchocrud.pro/api/v1/5babd4e55530d1ca27208b3cf92e6438/adminOrders/${id}`,
        method: "DELETE",
      })
    })
  })
});

export const { useGetAdminOrderQuery: useGetAdminOrderQuery, usePostAdminOrderMutation, usePutAdminOrderMutation, useDeleteAdminOrderMutation } = api;