import { api as index } from '../../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProfiles: build.query<
			PROFILESTORE.GetProfileResponse,
			PROFILESTORE.GetProfileRequest
		>({
			query: () => ({
				url: '/api/personal/get-profile',
				method: 'GET',
				// body: products,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
		}),
		patchProfilesPassword: build.mutation<
			PROFILESTORE.PostProfilePasswordResponse,
			PROFILESTORE.PostProfilePasswordRequest
		>({
			query: (products) => ({
				url: '/api/personal/change-password',
				method: 'PATCH',
				body: products,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
		}),

		postProfilesInformationQuery: build.mutation<
			PROFILESTORE.PostProfileInformationResponse,
			PROFILESTORE.PostProfileInformationRequest
		>({
			query: (products) => ({
				url: '/api/personal/edit-profile',
				method: 'POST',
				body: products,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
		}),

		putProfilesImageQuery: build.mutation<
			PROFILESTORE.PutProfileImageResponse,
			// PROFILESTORE.PutProfileImageRequest
			FormData
		>({
			query: (products) => ({
				url: '/api/personal/add-image',
				method: 'PATCH',
				body: products,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
		})
	})
});

export const {
	usePatchProfilesPasswordMutation,
	usePostProfilesInformationQueryMutation,
	usePutProfilesImageQueryMutation,
	useGetProfilesQuery
} = api;
