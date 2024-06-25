import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getCatalogProducts: build.query<
			CATALOGAPI.GetCatalogResponse,
			CATALOGAPI.GetCatalogRequest
		>({
			query: () => ({
				url: '/api/gadget/categories',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token') || ''}`
				}
			}),
			providesTags: ['catalogApi']
		}),
		subCategories: build.query<
			CATALOGAPI.SubCategoriesResponse,
			CATALOGAPI.SubCategoriesRequest
		>({
			query: (id) => ({
				url: `/api/gadget/${id}/sub-categories`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token') || ''}`
				}
			}),
			providesTags: ['catalogApi']
		})
	})
});

export const { useGetCatalogProductsQuery, useSubCategoriesQuery } = api;
