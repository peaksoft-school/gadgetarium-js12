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
			query: (newData) => (
				console.log(newData),
				{
					url: `/api/reset?email=${newData.email}`,
					method: 'POST'
				}
			),
			invalidatesTags: ['auth']
		})
	})
});

export const {
	usePostLoginMutation,
	usePostRegisterMutation,
	usePostForgotMutation
} = api;
