import { api as index } from '../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getGoodGadget: build.query<
			GOODSSTORE.GetGoodsResponse,
			GOODSSTORE.GetGoodsRequest
		>({
			query: ({
				page,
				size,
				discount,
				endDate,
				getType,
				keyword,
				sort,
				startDate
			}) => ({
				url: `/api/gadget?${page}&${size}&${discount}&${getType}&${keyword}&${endDate}&${sort}&${startDate}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['adminGoods']
		}),

		deleteGoodsGadget: build.mutation<
			GOODSSTORE.DeleteGoodsGadgetResponse,
			GOODSSTORE.DeleteGoodsGadgetRequest
		>({
			query: (subGadgetId) => ({
				url: `/api/gadget/${subGadgetId}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['adminGoods']
		}),

		getSingleGoodGadget: build.query<
			GOODSSTORE.GetSingleGoodsResponse,
			GOODSSTORE.GetSingleGoodsRequest
		>({
			query: (id) => ({
				url: `/api/gadget/by-id/${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['adminGoods']
		}),

		getCharacteristicsGoodGadget: build.query<
			GOODSSTORE.GetCharacteristicsGoodGadgetResponse,
			GOODSSTORE.GetCharacteristicsGoodGadgetRequest
		>({
			query: (id) => ({
				url: `/api/gadget/characteristics/${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['adminGoods']
		}),

		getDescriptionGoodGadget: build.query<
			GOODSSTORE.GetDescriptionGoodGadgetResponse,
			GOODSSTORE.GetDescriptionGoodGadgetRequest
		>({
			query: (id) => ({
				url: `/api/gadget/description/${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['adminGoods']
		}),

		getReviewGadgetGood: build.query<
			GOODSSTORE.GetReviewGadgetGoodResponse,
			GOODSSTORE.GetReviewGadgetGoodRequest
		>({
			query: (id) => ({
				url: `/api/gadget/reviews/${id}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['adminGoods']
		}),

		getGoodsDetailsGadget: build.query<
			GOODSSTORE.GetGoodsDetailsResponse,
			GOODSSTORE.GetGoodsDetailsRequest
		>({
			query: () => ({
				url: `/api/gadget/details`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['adminGoods']
		}),

		postGoodsBanner: build.mutation<
			GOODSSTORE.GetGoodsBannerResponse,
			GOODSSTORE.GetGoodsBannerRequest
		>({
			query: ({images}) => ({
				url: `/api/banner`,
				method: 'POST',
				body: { images },
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['adminGoods']
		}),

		postGoodsDiscount: build.mutation<
			GOODSSTORE.GetGoodsDiscountResponse,
			GOODSSTORE.GetGoodsDiscountRequest
		>({
			query: ({...spret}) => ({
				url: `/api/discount`,
				method: 'POST',
				body: spret,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['adminGoods']
		}),

		postNewslater: build.mutation<
			GOODSSTORE.PostNewslaterRequest,
			GOODSSTORE.PostNewslaterResponse
		>({
			query: (newNewslater) => ({
				url: `/api/news-letter`,
				method: 'POST',
				body: newNewslater,
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['adminGoods']
		})
	})
});

export const {
	useGetGoodGadgetQuery,
	useGetSingleGoodGadgetQuery: useGetSingleGoodGadgetQuery,
	useGetGoodsDetailsGadgetQuery: useGetGoodsDetailsGadgetQuery,
	useDeleteGoodsGadgetMutation,
	useGetCharacteristicsGoodGadgetQuery: useGetCharacteristicsGoodGadgetQuery,
	useGetDescriptionGoodGadgetQuery: useGetDescriptionGoodGadgetQuery,
	useGetReviewGadgetGoodQuery: useGetReviewGadgetGoodQuery,
	usePostGoodsBannerMutation,
	usePostGoodsDiscountMutation,
	usePostNewslaterMutation
} = api;
