import { api as index } from '../index.ts';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		postLogin: build.mutation<AUTH.PostLoginResponse, AUTH.PostLoginRequest>({
			query: (newData) => ({
				url: '/api/auth/sign-in',
				method: 'POST',
				body: newData
			}),
			invalidatesTags: ['auth']
		}),
		postRegister: build.mutation<
			AUTH.PostRegisterResponse,
			AUTH.PostRegisterRequest
		>({
			query: (newData) => ({
				url: '/api/auth/sign-up',
				method: 'POST',
				body: newData
			}),
			invalidatesTags: ['auth']
		}),
		postForgot: build.mutation<
			AUTH.PostForgotEmailResponse,
			AUTH.POstForgotEmailRequest
		>({
			query: (newData) => ({
				url: `/api/reset?email=${newData.email}`,
				method: 'POST'
			}),
			invalidatesTags: ['auth']
		}),
		postGoogle: build.mutation<AUTH.PostGoogleResponse, AUTH.PostGoogleRequest>(
			{
				query: (data) => ({
					url: `/api/auth/google?idToken=${encodeURIComponent(data.idToken)}`,
					method: 'POST'
				}),
				invalidatesTags: ['auth']
			}
		),
		patchNewPassword: build.mutation<
			AUTH.PatchNewPasswordResponse,
			AUTH.PatchNewPasswordRequest
		>({
			query: (data) => ({
				url: `/api/reset?token=${encodeURIComponent(data.token)}&password=${encodeURIComponent(data.password)}&confirmPassword=${encodeURIComponent(data.confirmPassword)}`,
				method: 'PATCH'
			}),
			invalidatesTags: ['auth']
		})
	})
});

export const {
	usePostLoginMutation,
	usePostRegisterMutation,
	usePostForgotMutation,
	usePostGoogleMutation,
	usePatchNewPasswordMutation
} = api;
