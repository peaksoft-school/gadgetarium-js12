/* eslint-disable @typescript-eslint/no-unused-vars */
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
			query: (newData) => {
				const { confirmThePassword, ...validData } = newData;
				return {
					url: '/api/auth/sign-up',
					method: 'POST',
					body: validData
				};
			},
			invalidatesTags: ['auth']
		}),
		postForgot: build.mutation<
			AUTH.PostForgotEmailResponse,
			AUTH.PostForgotEmailRequest
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
			query: ({confirmPassword, password, token}) => ({
				url: `/api/reset?token=${encodeURIComponent(token)}&password=${encodeURIComponent(password)}&confirmPassword=${encodeURIComponent(confirmPassword)}`,
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
