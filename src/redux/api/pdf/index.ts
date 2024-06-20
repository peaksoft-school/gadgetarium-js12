import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getUserPostPDS: build.query<
			PDFAPI.GetUserPostPDSResponse,
			PDFAPI.GetUserPostPDSRequest
		>({
			query: (key) => ({
				url: `/api/s3?${key}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['pdfApi']
		}),
		postUpload: build.mutation<PDFAPI.PostUploadResponse, FormData>({
			query: (formData) => ({
				url: `/api/s3/upload`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: formData
			}),
			invalidatesTags: ['pdfApi']
		}),
		postS3Upload: build.mutation<PDFAPI.PostS3UploadResponse, FormData>({
			query: (file) => ({
				url: `/api/s3`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: file
			}),
			invalidatesTags: ['pdfApi']
		})
	})
});

export const {
	useGetUserPostPDSQuery,
	usePostUploadMutation,
	usePostS3UploadMutation
} = api;
