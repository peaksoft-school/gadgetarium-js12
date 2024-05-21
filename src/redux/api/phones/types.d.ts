/* eslint-disable @typescript-eslint/no-unused-vars */
type Responses = {
	id: number;
	image: string;
	quantity: number;
	brandNameOfGadget: string;
	memory: string;
	colour: string;
	rating: number;
	countOfRating: number;
	price: number;
	currentPrice: number;
	percent: number;
};

namespace FILTREDPRODUCTS {
	type GetFiltredProductsRequest = void;
	type GetFiltredProductsResponse = {
		sort: null | string;
		discount: null | string;
		memory: null | string;
		ram: null | string;
		costFrom: null | number;
		costUpTo: null | number;
		colour: null | string;
		brand: null | string;
		page: null | number;
		size: null | number;
		responses: Responses[];
	};
}