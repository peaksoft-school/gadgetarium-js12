import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		postAddProductApi: build.mutation<
			ADDPRODUCTAPI.PostAddProductResponse,
			ADDPRODUCTAPI.PostAddProductRequest
		>({
			query: ({ subCategoryId, brandId }) => ({
				url: `/api/gadget/${subCategoryId}/${brandId}`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['addProductApi']
		})
	})
});

export const { usePostAddProductApiMutation } = api;
