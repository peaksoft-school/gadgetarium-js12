/* eslint-disable @typescript-eslint/no-unused-vars */

type OrderPrice = {
	NumberOfGoods: number;
	YourDiscount: number;
	Sum: number;
	Total: number;
};

type BasketAmounts = {
	quantity: number;
	discountPrice: number;
	price: number;
	currentPrice: number;
};

interface GadgetResponse {
	id: number;
	image: string;
	nameOfGadget: string;
	memory: string;
	colour: string;
	article: number;
	quantity: number;
}

namespace BASKETPRODUCTS {
	type GetBasketProductsRequest = void;
	type GetBasketProductsResponse = Array<{
		id: number;
		image: string;
		nameOfGadget: string;
		price: number;
		quantity: number;
		rating: number;
		countOfRating: number;
		memory: string;
		colour: string;
		article: number;
		countOfGadget: number;
		likes: boolean;
	}>;

	type BasketProductsAllItemIdRequest = {
		id: number | null;
		NumberOfGoods?: number;
		YourDiscount?: number;
		Sum?: number;
		Total?: number;
	};
	type BasketProductsAllItemIdResponse = {
		id: number | null;
		NumberOfGoods?: number;
		YourDiscount?: number;
		Sum?: number;
		Total?: number;
	};

	type PutProductRequest = {
		id: number;
		basket: boolean;
	};
	type PutProductResponse = {
		id: number;
	};

	type BasketProductRequest = {
		id: number | null;
	};
	type BasketProductResponse = {
		id: number | null;
	};

	type ProductQuantityRequest = {
		id: number;
		buyProductQuantity: number;
		price?: number;
		NumberOfGoods?: number;
		YourDiscount?: number;
		Sum?: number;
		Total?: number;
	};
	type ProductQuantityResponse = {
		id: number;
		buyProductQuantity: number;
		price?: number;
		NumberOfGoods?: number;
		YourDiscount?: number;
		Sum?: number;
		Total?: number;
	};

	// type GetBasketOrderAmountsRequest = {
	// 		ids: number[];
	// 	};
	// 	type GetBasketOrderAmountsResponse = {
	// 		basketAmounts: BasketAmounts;
	// 		gadgetResponse: GadgetResponse[];
	// 	};
	type GetBasketOrderAmountsRequest = {
		ids: [];
	};

	type Basket = {
		quantity: number;
		discountPrice: number;
		price: number;
		currentPrice: number;
	};
	type GetBasketOrderAmountsResponse = {
		quantity: number;
		discountPrice: number;
		price: number;
		currentPrice: number;
	};
	type BasketDeleteRequest = {
		gadgetId: number;
	};
	type BasketDeleteResponse = {
		gadgetId: number;
	};

	type GetBasketOrderGadgetRequest = string[];

	type GetBasketOrderGadgetResponse = {
		basketAmounts: BasketAmounts;
		gadgetResponse: GadgetResponse[];
	};
}
