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
		}),
		getReviews: build.query<
			REVIEWSTORE.GetReviewsResponse,
			REVIEWSTORE.GetReviewsRequest
		>({
			query: ({ id, page, size }) => ({
				url: `/api/gadget/reviews/${id}?${page}&${size}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['reviewsApi']
		}),
		apiFeedbackStatistics: build.query<
			REVIEWSTORE.GetFeedbackStatisticsResponse,
			REVIEWSTORE.GetFeedbackStatisticsRequest
		>({
			query: ({ id }) => ({
				url: `/api/feedback/statistics/${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['reviewsApi']
		}),
		postUsersCommits: build.mutation<
			REVIEWSTORE.PostForUsersCommitsResponse,
			REVIEWSTORE.PostForUsersCommitsRequest
		>({
			query: ({ gadgetId, comment, grade, images }) => ({
				url: `/api/feedback/${gadgetId}`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: { comment, grade, images }
			}),
			invalidatesTags: ['reviewsApi']
		}),
		editUserCommit: build.mutation<
			REVIEWSTORE.EditUserCommitResponse,
			REVIEWSTORE.EditUserCommitRequest
		>({
			query: ({ feedId, comment, grade, images }) => ({
				url: `/api/feedback/edit/${feedId}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: { comment, grade, images }
			}),
			invalidatesTags: ['reviewsApi']
		}),
		deleteByIdUserCommit: build.mutation({
			query: (feedId) => ({
				url: `/api/feedback/delete-feedback/${feedId}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['reviewsApi']
		})
	})
});

export const {
	useUseGetReviewQueryQuery: useGetReviewQuery,
	usePostReviewQueryMutation,
	useDeleteFeedbackMutation,
	usePatchReviewQueryMutation,
	useApiFeedbackStatisticsQuery,
	useDeleteByIdUserCommitMutation,
	useEditUserCommitMutation,
	useGetReviewsQuery,
	usePostUsersCommitsMutation
} = api;
