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
		})
	})
});

export const { useGetUserPostPDSQuery } = api;
