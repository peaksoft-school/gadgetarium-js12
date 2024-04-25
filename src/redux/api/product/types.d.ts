/* eslint-disable @typescript-eslint/no-unused-vars */
namespace PRODUCTSTORE {
	type GetProductsRequest = void;
	type GetProductsResponse = {
		_id: number;
		price: number;
		image: string;
		productName: string;
		isFavorite: boolean;
		isInBasket: boolean;
		isComparison: boolean;
		previousPrice: number;
		Rating: string;
		buyProduc: string;
		newProduct: string;
		isResult: string;
	}[];
}
