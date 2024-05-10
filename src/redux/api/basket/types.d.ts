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
		productName: string;
		price: number;
		quantity: number | string;
		isFavorite: boolean;
		isInBasket: boolean;
		isComparison: boolean;
		token: string;
		Rating: string;
		productCode: number;
		buyProduct: string;
		buyProductQuantity: number;
		orderPrice: OrderPrice;
		isChecked: boolean;
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
		_id: number;
		isInBasket: boolean;
	};
	type PutProductResponse = {
		_id: number;
		isInBasket: boolean;
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
