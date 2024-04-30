/* eslint-disable @typescript-eslint/no-unused-vars */
namespace BASKETPRODUCTS {
	type GetBasketProductsRequest = void;
	type GetBasketProductsResponse = {
		_id: number;
		image: string;
		productName: string;
		price: number;
		quantity: number | string;
		isFavorite: boolean;
		isInBasket: boolean;
		isComparison: boolean;
		token: string;
		Rating: string;
		productCode: string;
		buyProduc: string;
	}[];
	type PutProductRequest = {
		_id: number;
		isInBasket: boolean;
	};
	type PutProductResponse = {
		_id: number;
		isInBasket: boolean;
	};
}
