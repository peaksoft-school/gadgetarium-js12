/* eslint-disable @typescript-eslint/no-unused-vars */

type OrderPrice = {
	NumberOfGoods: number;
	YourDiscount: number;
	Sum: number;
	Total: number;
};
namespace BASKETPRODUCTS {
	type GetBasketProductsRequest = void;
	type GetBasketProductsResponse = {
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
	}[];

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
		// isInBasket: boolean;
		quantity?: number;
	};
	type PutProductResponse = {
		id: number;
		// isInBasket: boolean;
		quantity?: number;
	};

	type BasketProductRequest = {
		id: number | null;
		NumberOfGoods?: number;
		YourDiscount?: number;
		Sum?: number;
		Total?: number;
	};
	type BasketProductResponse = {
		id: number | null;
		NumberOfGoods?: number;
		YourDiscount?: number;
		Sum?: number;
		Total?: number;
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
}
