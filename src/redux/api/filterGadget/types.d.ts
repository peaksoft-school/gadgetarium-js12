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
	likes: boolean;
	compression: boolean;
	basked: boolean;
};

namespace FILTREDPRODUCTS {
	type GetFiltredProductsRequest = {
		id?: number;
		brand?: string[];
		sort?: string;
		discount?: string;
		colour?: string[];
		costFrom?: number;
		costUpTo?: number;
		page?: number;
		size?: number;
		memory?: string[];
		ram?: string[];
	}
	type GetFiltredProductsResponse = {
		id: number;
		sort: null | string;
		discount: null | string;
		memory: null | string[];
		ram: null | string[];
		costFrom: null | number;
		costUpTo: null | number;
		colour: string[];
		brand: string[];
		page: null | number;
		size: null | number;
		responses: Responses[];
	};
}
