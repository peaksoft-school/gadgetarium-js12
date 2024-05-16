import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getBasket: build.query<
			BASKETPRODUCTS.GetBasketProductsResponse,
			BASKETPRODUCTS.GetBasketProductsRequest
		>({
			query: () => ({
				url: 'https://c7c9df01cc80687d.mokky.dev/basket',
				method: 'GET'
			}),
			providesTags: ['basket']
		}),
		basketPutProduct: build.mutation<
			BASKETPRODUCTS.PutProductResponse,
			BASKETPRODUCTS.PutProductRequest
		>({
			query: ({ _id, isInBasket }) => ({
				url: `https://c7c9df01cc80687d.mokky.dev/basket/${_id}`,
				method: 'PATCH',
				body: { isInBasket }
			}),
			invalidatesTags: ['basket']
		}),
		basketProductDeleteAll: build.mutation<
			BASKETPRODUCTS.BasketProductsAllItemIdResponse,
			BASKETPRODUCTS.BasketProductsAllItemIdRequest
		>({
			query: ({ id, YourDiscount, Total, Sum, NumberOfGoods }) => ({
				url: `https://c7c9df01cc80687d.mokky.dev/basket/${id}`,
				method: 'PATCH',
				body: { YourDiscount, Total, Sum, NumberOfGoods }
			}),
			invalidatesTags: ['basket']
		}),
		basketProduct: build.mutation<
			BASKETPRODUCTS.BasketProductResponse,
			BASKETPRODUCTS.BasketProductRequest
		>({
			query: ({ id }) => ({
				url: `https://c7c9df01cc80687d.mokky.dev/basket/${id}`,
				method: 'PATCH'
			}),
			invalidatesTags: ['basket']
		}),
		basketProductResultQuantity: build.mutation<
			BASKETPRODUCTS.ProductQuantityResponse,
			BASKETPRODUCTS.ProductQuantityRequest
		>({
			query: ({ id, buyProductQuantity }) => ({
				url: `https://c7c9df01cc80687d.mokky.dev/basket/${id}`,
				method: 'PATCH',
				body: {buyProductQuantity}
			}),
			invalidatesTags: ['basket']
		})
	})
});

export const {
	useGetBasketQuery,
	useBasketPutProductMutation,
	useBasketProductDeleteAllMutation,
	useBasketProductMutation,
	useBasketProductResultQuantityMutation
} = api;
