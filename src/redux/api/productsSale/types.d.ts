interface Root {
	page: number;
	size: number;
	mainPages: ProductsSale[];
}

interface ProductsSale {
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

namespace PRODUCTSALE {
	type GetProductsSaleRequest = void;
	type GetProductsSaleResponse = {
		page: number;
		size: number;
		mainPages: MainPages[];
	};
}
