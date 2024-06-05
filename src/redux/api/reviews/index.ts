import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getReviews: build.query<
			REVIEWS.GetReviewsResponse,
			REVIEWS.GetReviewsRequest
		>({
			query: (id) => ({
				url: `/api/gadget/reviews/${id}`,
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
			query: ({ id }) => ({
				url: `/api/feedback/${id}`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
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
