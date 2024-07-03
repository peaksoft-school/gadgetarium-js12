import { api as index } from '../../index';

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getInfoOrder: build.query<
			INFOGRAPHICS.GetOrderResponse,
			INFOGRAPHICS.GetOrderRequest
		>({
			query: () => ({
				url: '/api/order/info',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['infoGraphics']
		}),
		getInfoDayOrder: build.query<
			INFOGRAPHICS.GetInfoDayResponse,
			INFOGRAPHICS.GetInfoDayRequest
		>({
			query: ({forPeriod}) => ({
				url: `/api/order/info-amount?${forPeriod}`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['infoGraphics']
		}),
		getInfoMonthOrder: build.query<
    INFOGRAPHICS.GetInfoMonthResponse,
    INFOGRAPHICS.GetInfoMonthRequest
		>({
			query: () => ({
				url: '/api/order/info-amount',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['infoGraphics']
		}),
		getInfoYearOrder: build.query<
    INFOGRAPHICS.GetInfoYearResponse,
    INFOGRAPHICS.GetInfoYearRequest
		>({
			query: () => ({
				url: '/api/order/info-amount',
				method: 'GET',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			providesTags: ['infoGraphics']
		})
	})
});

export const {
	useGetInfoOrderQuery: useGetInfoOrder,
	useGetInfoDayOrderQuery: useGetInfoDay,
} = api;
