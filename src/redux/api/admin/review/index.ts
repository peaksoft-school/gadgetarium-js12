import { api as index } from "../../index";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    useGetReviewQuery: build.query<
    REVIEWSTORE.GetReviewResponse,
    REVIEWSTORE.GetReviewRequest
    >({
      query: () => ({
        url: "/api/feedback",
        method: 'GET',
        headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}` 
				},
      }),
      providesTags: ['adminReview']
    }),
    postReviewQuery: build.mutation<
      REVIEWSTORE.PostReviewResponse,
      REVIEWSTORE.PostReviewRequest
    >({
      query: (products) => ({
        url: "/api/feedback",
        method: "POST",
        headers: {
					'Authorization': `Bearer ${localStorage.getItem('token')}` 
				},
        body: products
      })
    })
  })
});

export const { useUseGetReviewQueryQuery: useGetReviewQuery, usePostReviewQueryMutation } = api;