import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getProductsColorsApi: build.query<
			GETPRODUCTCOLORSAPI.GetCardProductColorsResponse,
			GETPRODUCTCOLORSAPI.GetCardProductColorsRequest
		>({
			query: (id) => ({
				url: `/api/gadget/${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['cardProductsColorsApi']
		}),
		
	})
});

export const {
	useGetProductsColorsApiQuery
} = api;
