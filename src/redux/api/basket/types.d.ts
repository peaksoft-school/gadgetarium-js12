/* eslint-disable @typescript-eslint/no-unused-vars */

type OrderPrice = {
	NumberOfGoods: number;
	YourDiscount: number;
	Sum: number;
	Total: number;
};

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

	type GetBasketOrderAmountsRequest = void;
	type GetBasketOrderAmountsResponse = Array<{
		id: number;
		image: string;
		nameOfGadget: string;
		memory: string;
		colour: string;
		article: number;
		quantity: number;
		quantity: number;
		discountPrice: number;
		price: number;
		currentPrice: number;
		likes: boolean;
		comparison: boolean;
		basket: boolean;
		currentPrice: number;
		subGadgetId: number;
		newProduct: boolean;
		recommend: boolean;
	}>;
}
