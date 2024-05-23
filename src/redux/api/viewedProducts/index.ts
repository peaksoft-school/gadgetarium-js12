import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getViewedProducts: build.query<
			VIEWEDPRODUCTS.GetViewedProductsResponse,
			VIEWEDPRODUCTS.GetViewedProductsRequest
		>({
			query: () => ({
				url: 'https://api-v2.elchocrud.pro/api/v1/dcb39e9f1ace891cbfa41add7fec551a/ViewedProducts',
				method: 'GET'
			}),
			providesTags: ['viewedProducts']
		})
	})
});

export const { useGetViewedProductsQuery } = api;
