import { api as index } from '..';

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

		deleteFeedback: build.mutation<
			REVIEWSTORE.DeleteReviewResponse,
			REVIEWSTORE.DeleteReviewRequest
		>({
			query: (id) => ({
				url: `/api/feedback/${id}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['adminReview']
		}),
		patchReviewQuery: build.mutation<
			REVIEWSTORE.PatchReviewResponse,
			REVIEWSTORE.PatchReviewRequest
		>({
			query: ({ id, responseAdmin }) => ({
				url: `/api/feedback/${id}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: { responseAdmin }
			}),
			invalidatesTags: ['adminReview']
		})
	})
});

export const {
	useUseGetReviewQueryQuery: useGetReviewQuery,
	usePostReviewQueryMutation,
	useDeleteFeedbackMutation,
	usePatchReviewQueryMutation
} = api;
