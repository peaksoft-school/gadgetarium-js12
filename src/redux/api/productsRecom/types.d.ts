/* eslint-disable @typescript-eslint/no-unused-vars */
interface Root {
	page: number;
	size: number;
	mainPages: ProductsRecom[];
}

interface ProductsRecom {
	id: number;
	percent: number;
	image: string;
	quantity: number;
	nameOfGadget: string;
	memory: string;
	colour: string;
	rating: number;
	count: number;
	price: number;
	currentPrice: number;
}

type MainPages = {
	id: number;
	percent: number;
	image: string;
	quantity: number;
	nameOfGadget: string;
	memory: string;
	colour: string;
	rating: number;
	count: number;
	price: number;
	likes: boolean;
	comparison: boolean;
	basket: boolean;
	currentPrice: number;
	subGadgetId: number;
	newProduct: boolean;
	recommend: boolean;
};

namespace PRODUCTRECOM {
	type GetProductsRecomRequest = {
		page?: string;
		size?: string;
	};
	type GetProductsRecomResponse = {
		page: number;
		size: number;
		mainPages: MainPages[];
	};
}
