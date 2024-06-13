import { api as index } from "../../index";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getInfoOrder: build.query<
      INFOGRAPHICS.GetOrderResponse,
      INFOGRAPHICS.GetOrderRequest
    >({
      query: () => ({
        url: '/api/order/info',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      providesTags: ['infoGraphics']
    }),
    getInfoDayOrder: build.query<
      INFOGRAPHICS.GetInfoDayRequest,
      INFOGRAPHICS.GetInfoDayResponse
    >({
      query: () => ({
        url: '/api/order/info-amount',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      providesTags: ['infoGraphics']
    }),
    getInfoMonthOrder: build.query<
      INFOGRAPHICS.GetInfoMonthRequest,
      INFOGRAPHICS.GetInfoMonthResponse
    >({
      query: () => ({
        url: '/api/order/info-amount',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      providesTags: ['infoGraphics']
    }),
    getInfoYearOrder: build.query<
      INFOGRAPHICS.GetInfoYearRequest,
      INFOGRAPHICS.GetInfoYearResponse
    >({
      query: () => ({
        url: '/api/order/info-amount',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      providesTags: ['infoGraphics']
    }),
  })
});

export const { 
  useGetInfoOrderQuery: useGetInfoOrder, 
  useGetInfoDayOrderQuery: useGetInfoDay, 
  useGetInfoMonthOrderQuery: useGetInfoMonth,
  useGetInfoYearOrderQuery: useGetInfoYear
} = api;