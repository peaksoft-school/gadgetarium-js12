/* eslint-disable @typescript-eslint/no-unused-vars */

type OrderPrice = {
	NumberOfGoods: number | string;
	YourDiscount: number | string;
	Sum: number | string;
	Total: number;
}
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
		buyProductQuantity: number
		orderPrice: OrderPrice
		isChecked: boolean;
	}[];

	type BasketProductsDeleteRequest = {
		isInBasket:boolean;
		// id: number
	}
	type BasketProductsDeleteResponse = {
		isInBasket:boolean;
		// id: number
	}
	type PutProductRequest = {
		id: number;
		isInBasket: boolean;
	};
	type PutProductResponse = {
		id: number;
		isInBasket: boolean;
	};
}
