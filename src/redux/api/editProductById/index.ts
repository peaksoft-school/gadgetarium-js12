import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		editProductByIdApi: build.mutation<
			EDITPRODUCTBYID.EditProductByIdResponse,
			EDITPRODUCTBYID.EditProductByIdRequest
		>({
			query: ({ subGadgetId, ...res }) => ({
				url: `/api/gadget/update/${subGadgetId}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body:  res 
			}),
			invalidatesTags: ['editProductById']
		})
	})
});

export const { useEditProductByIdApiMutation } = api;
