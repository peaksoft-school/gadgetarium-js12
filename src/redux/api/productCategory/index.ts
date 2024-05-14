import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		categoryProduct: build.mutation({
			query: () => ({
				url: 'https://api-v2.elchocrud.pro/api/v1/2fa5b9e6990e49bc13134d6cc000be86/input_category_results',
				method: 'PATCH'
				// body
			}),
			invalidatesTags: ['productCategory']
		})
	})
});

export const { useCategoryProductMutation } = api;
