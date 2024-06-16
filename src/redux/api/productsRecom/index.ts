import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProductsRecom: build.query<
			PRODUCTRECOM.GetProductsRecomResponse,
			PRODUCTRECOM.GetProductsRecomRequest
		>({
			query: ({ page, size }) => ({
				url: `/api/gadget/recommend?${page}&${size}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['productsRecom']
		})
	})
});

export const { useGetProductsRecomQuery } = api;
