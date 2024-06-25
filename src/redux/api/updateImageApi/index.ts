import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		deleteByIdGadgetApi: build.mutation<
			UPDATEIMAGEAPI.UpdateImageResponse,
			UPDATEIMAGEAPI.UpdateImageRequest
		>({
			query: ({ subGadgetId, ...res }) => ({
				url: `/api/gadget/update-image/${subGadgetId}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')} `
				},
				body: res
			}),
			invalidatesTags: ['updateImageApi']
		})
	})
});

export const { useDeleteByIdGadgetApiMutation } = api;
