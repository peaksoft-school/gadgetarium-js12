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
				url: 'https://76de117aa07ffb38.mokky.dev/filterProduct',
				method: 'GET'
			}),
			providesTags: ['phones']
		})
	})
});

export const { useGetPhonesQuery: useGetPhonesQuery } = api;