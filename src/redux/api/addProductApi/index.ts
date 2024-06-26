import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		postAddProductApi: build.mutation<
			ADDPRODUCTAPI.PostAddProductResponse,
			ADDPRODUCTAPI.PostAddProductRequest
		>({
			query: ({
				subCategoryId,
				brandId,
				dateOfIssue,
				nameOfGadget,
				productsRequests,
				warranty
			}) => ({
				url: `/api/gadget/${subCategoryId}/${brandId}`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: { dateOfIssue, nameOfGadget, productsRequests, warranty }
			}),
			invalidatesTags: ['addProductApi']
		}),
		gadgetByIdSetQuantity: build.mutation<
			ADDPRODUCTAPI.GadgetSetQuantityByIdResponse,
			ADDPRODUCTAPI.GadgetSetQuantityByIdRequest
		>({
			query: ({ id, quantity }) => ({
				url: `/api/gadget/${id}/set-quantity?${quantity}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['addProductApi']
		}),
		gadgetByIdSetPrice: build.mutation<
			ADDPRODUCTAPI.GadgetSetPriceByIdResponse,
			ADDPRODUCTAPI.GadgetSetPriceByIdRequest
		>({
			query: ({ id, price }) => ({
				url: `/api/gadget/${id}/set-price?${price}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['addProductApi']
		}),
		gadgetSetDocument: build.mutation<
			ADDPRODUCTAPI.gadgetSetDocumentResponse,
			ADDPRODUCTAPI.gadgetSetDocumentRequest
		>({
			query: ({ subGadgetId, description, pdf, videoUrl }) => ({
				url: `/api/gadget/set-document/${subGadgetId}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: { description, pdf, videoUrl }
			}),
			invalidatesTags: ['addProductApi']
		}),
		setAllProductsPriceAndQuantity: build.mutation<
			ADDPRODUCTAPI.setAllProductsPriceAndQuantityResponse,
			ADDPRODUCTAPI.setAllProductsPriceAndQuantityRequest
		>({
			query: ({ price, quantity, ids }) => ({
				url: `/api/gadget/set-all-price?${price}&${quantity}&${ids}`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['addProductApi']
		}),
		gadgetGetNewProducts: build.query<
			ADDPRODUCTAPI.getNewProductsResponse,
			ADDPRODUCTAPI.getNewProductsRequest
		>({
			query: (ids) => ({
				url: `/api/gadget/get-new?${ids}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['addProductApi']
		}),
		setPriceAndQuantityNewProducts: build.mutation<
			ADDPRODUCTAPI.setPriceAndQuantityNewProductsResponse,
			ADDPRODUCTAPI.setPriceAndQuantityNewProductsRequest
		>({
			query: (DATA) => ({
				url: `/api/gadget/price-quantity`,
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body:  DATA 
			})
		})
	})
});

export const {
	usePostAddProductApiMutation,
	useGadgetByIdSetQuantityMutation,
	useGadgetByIdSetPriceMutation,
	useGadgetSetDocumentMutation,
	useSetAllProductsPriceAndQuantityMutation,
	useGadgetGetNewProductsQuery,
	useSetPriceAndQuantityNewProductsMutation
} = api;
