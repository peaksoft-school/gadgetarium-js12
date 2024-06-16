import { api as index } from "../index";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getGoodGadget: build.query<
      GOODSSTORE.GetGoodsResponse,
      GOODSSTORE.GetGoodsRequest
    >({
      query: ({page, size}) => ({
        url: '/api/gadget',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      providesTags: ['adminGoods']
    }),

    deleteGoodsGadget: build.mutation<
      GOODSSTORE.DeleteGoodsGadgetResponse,
      GOODSSTORE.DeleteGoodsGadgetRequest
    >({
      query: (subGadgetId) => ({
        url: `/api/gadget/${subGadgetId}`,
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      invalidatesTags: ['adminGoods']
    }),

    getSingleGoodGadget: build.query<
      GOODSSTORE.GetSingleGoodsResponse,
      GOODSSTORE.GetSingleGoodsRequest
    >({
      query: (id) => ({
        url: `/api/gadget/by-id/${id}`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      providesTags: ['adminGoods']
    }),

    getCharacteristicsGoodGadget: build.query<
      GOODSSTORE.GetCharacteristicsGoodGadgetResponse,
      GOODSSTORE.GetCharacteristicsGoodGadgetRequest
    >({
      query: (id) => ({
        url: `/api/gadget/characteristics/${id}`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      providesTags: ['adminGoods']
    }),

    getDescriptionGoodGadget: build.query<
      GOODSSTORE.GetDescriptionGoodGadgetResponse,
      GOODSSTORE.GetDescriptionGoodGadgetRequest
    >({
      query: (id) => ({
        url: `/api/gadget/description/${id}`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      providesTags: ['adminGoods']
    }),

    getReviewGadgetGood: build.query<
      GOODSSTORE.GetReviewGadgetGoodResponse,
      GOODSSTORE.GetReviewGadgetGoodRequest
    >({
      query: (id) => ({
        url: `/api/gadget/reviews/${id}`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      providesTags: ['adminGoods']
    }),

    getGoodsDetailsGadget: build.query<
      GOODSSTORE.GetGoodsDetailsResponse,
      GOODSSTORE.GetGoodsDetailsRequest
    >({
      query: () => ({
        url: `/api/gadget/details`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
      providesTags: ['adminGoods']
    }),


  })
});

export const {
  useGetGoodGadgetQuery: useGetGoodGadgetQuery,
  useGetSingleGoodGadgetQuery: useGetSingleGoodGadgetQuery,
  useGetGoodsDetailsGadgetQuery: useGetGoodsDetailsGadgetQuery,
  useDeleteGoodsGadgetMutation,
  useGetCharacteristicsGoodGadgetQuery: useGetCharacteristicsGoodGadgetQuery,
  useGetDescriptionGoodGadgetQuery: useGetDescriptionGoodGadgetQuery,
  useGetReviewGadgetGoodQuery: useGetReviewGadgetGoodQuery

} = api;