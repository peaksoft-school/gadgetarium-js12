import { api as index } from '../../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		useGetReviewQuery: build.query<
			REVIEWSTORE.GetReviewResponse,
			REVIEWSTORE.GetReviewRequest
		>({
			query: ({ feedbackType }) => ({
				url: `/api/feedback?${feedbackType}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['adminReview']
		}),
		postReviewQuery: build.mutation<
			REVIEWSTORE.PostReviewResponse,
			REVIEWSTORE.PostReviewRequest
		>({
			query: (gadgetId) => ({
				url: `/api/feedback/${gadgetId}`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
				// body: products
			}),
			invalidatesTags: ['adminReview']
		})
	})
});

export const {
	useUseGetReviewQueryQuery: useGetReviewQuery,
	usePostReviewQueryMutation
} = api;
