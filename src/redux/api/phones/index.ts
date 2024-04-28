import { api as index } from '../index';

interface IPhone {
	_id: number;
	img: string;
	name: string;
	price: string;
	discount: string;
	oldPrice: string;
	quantity: string;
	rating: string;
	status: string;
	Image: string;
	Name: string;
	Price: string;
	Rating: string;
	Quantity: string;
}

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getPhones: build.query<IPhone[], number>({
			query: () => ({
				url: 'https://api.elchocrud.pro/api/v1/d3988f845a72a4ed787386c7ac879e78/products',
				method: 'GET'
			}),
			providesTags: ['phones']
		})
	})
});

export const { useGetPhonesQuery: useGetPhonesQuery } = api;