/* eslint-disable @typescript-eslint/no-unused-vars */
interface Root {
	page: number;
	size: number;
	mainPages: ProductsNews[];
}

interface ProductsNews {
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
	subGadgetId: SetStateAction<string | number | null>;
	gadgetId: Key | null | undefined;
	gadgetId: number;
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

namespace PRODUCTNEW {
	type GetProductsNewsRequest = void;
	type GetProductsNewsResponse = {
		page: number;
		size: number;
		mainPages: MainPages[];
	};
}
