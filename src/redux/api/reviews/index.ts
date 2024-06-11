import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getReviews: build.query<
			REVIEWS.GetReviewsResponse,
			REVIEWS.GetReviewsRequest
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
			REVIEWS.GetFeedbackStatisticsResponse,
			REVIEWS.GetFeedbackStatisticsRequest
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
			REVIEWS.PostForUsersCommitsResponse,
			REVIEWS.PostForUsersCommitsRequest
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
		})
	})
});

export const {
	useGetReviewsQuery,
	useApiFeedbackStatisticsQuery,
	usePostUsersCommitsMutation
} = api;
