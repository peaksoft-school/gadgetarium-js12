import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getBasket: build.query<
			BASKETPRODUCTS.GetBasketProductsResponse,
			BASKETPRODUCTS.GetBasketProductsRequest
		>({
			query: () => ({
				url: '',
				method: 'GET'
			}),
			providesTags: ['basket']
		})
	})
});

export const { useGetBasketQuery } = api;
