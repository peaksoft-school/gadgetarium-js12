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
			providesTags: ['reviewsApi'],
		})
	})
});

export const { useGetReviewsQuery } = api;
