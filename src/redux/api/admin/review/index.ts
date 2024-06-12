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
			query: ({ id, responseAdmin }) => ({
				url: `/api/feedback/reply/${id}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: { responseAdmin }
			}),
			invalidatesTags: ['adminReview']
		}),
		deleteFeedback: build.mutation({
			query: (id) => ({
				url: `/api/feedback/${id}`,
				method: 'DELETE',
				body: id,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['adminReview']
		})
	})
});

export const {
	useUseGetReviewQueryQuery: useGetReviewQuery,
	usePostReviewQueryMutation,
	useDeleteFeedbackMutation
} = api;
