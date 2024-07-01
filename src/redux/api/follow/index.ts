import { api as index } from '..';
const api = index.injectEndpoints({
	endpoints: (build) => ({
		postFollow: build.mutation<
			POSTFOLLOW.PostFollowResponse,
			POSTFOLLOW.PostFollowRequest
		>({
			query: (email) => ({
				url: `/api/news-letter/follow`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: email
			}),
			invalidatesTags: ['follow']
		}),
		postNewsLetterContactUs: build.mutation<
			POSTFOLLOW.postNewsLetterContactUsResponse,
			POSTFOLLOW.postNewsLetterContactUsRequest
		>({
			query: ({...spret}) => ({
				url: `/api/news-letter/contact-us`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token') || ''}`
				},
				body: spret
			}),
			invalidatesTags: ['follow']
		})
	})
});
export const { usePostFollowMutation, usePostNewsLetterContactUsMutation } =
	api;
