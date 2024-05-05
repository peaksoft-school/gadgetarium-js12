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
		id: number | number[];
		NumberOfGoods?: number;
		YourDiscount?: number;
		Sum?: number;
		Total?: number;
	};
	type BasketProductsAllItemIdResponse = {
		id: number | number[];
		NumberOfGoods?: number;
		YourDiscount?: number;
		Sum?: number;
		Total?: number;
	};
	type PutProductRequest = {
		id: number;
		isInBasket: boolean;
	};
	type PutProductResponse = {
		id: number;
		isInBasket: boolean;
	};
}
