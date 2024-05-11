import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProducts: build.query<
			PRODUCTSTORE.GetProductsResponse,
			PRODUCTSTORE.GetProductsRequest
		>({
			query: () => ({
				url: 'https://c7c9df01cc80687d.mokky.dev/basket_products',
				method: 'GET'
			}),
			providesTags: ['product']
		}),
		getProductsItemId: build.query<
			PRODUCTSTORE.GetProductsItemIdResponse,
			PRODUCTSTORE.GetProductsItemIdRequest
		>({
			query: (_id) => ({
				url: `https://c7c9df01cc80687d.mokky.dev/basket_products/${_id}`,
				method: 'GET'
			}),
			providesTags: ['product']
		}),
		getProductDetails: build.query<
			PRODUCTSTORE.GetProductDetailsResponse,
			PRODUCTSTORE.GetProductDetailsRequest
		>({
			query: () => ({
				url: 'https://api-v2.elchocrud.pro/api/v1/9079be8a19906fc7980bf21d375a1872/product_colors',
				method: 'GET'
			}),
			providesTags: ['product']
		}),
		EditAdminCommit: build.mutation<
			PRODUCTSTORE.EditAdminCommitResponse,
			PRODUCTSTORE.EditAdminCommitRequest
		>({
			query: ({ _id, reviews }) => ({
				url: `https://c7c9df01cc80687d.mokky.dev/basket_products/${_id}`,
				method: 'PATCH',
				body: { reviews }
			}),
			invalidatesTags: ['product']
		}),
		deleteProducts: build.mutation({
			query: (id) => ({
				url: `https://c7c9df01cc80687d.mokky.dev/basket_products/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['product']
		})
	})
});

export const {
	useGetProductsQuery,
	useGetProductsItemIdQuery,
	useGetProductDetailsQuery,
	useEditAdminCommitMutation,
	useDeleteProductsMutation
} = api;
