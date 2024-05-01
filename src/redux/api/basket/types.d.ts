/* eslint-disable @typescript-eslint/no-unused-vars */
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
	}[];
	type PutProductRequest = {
		id: number;
		isInBasket: boolean;
	};
	type PutProductResponse = {
		id: number;
		isInBasket: boolean;
	};
}
