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
		})
	})
});

export const { usePostLoginMutation, usePostRegisterMutation } = api;
