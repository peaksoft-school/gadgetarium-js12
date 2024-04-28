/* eslint-disable @typescript-eslint/no-unused-vars */
namespace COMPARISONPRODUCTS {
	type GetComparisonProductsRequest = void;
	type GetComparisonProductsResponse = {
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
	type PutComparisonProductRequest = {
		_id: number;
		isComparison: boolean;
	};
	type PutComparisonProductResponse = {
		_id: number;
		isComparison: boolean;
	};
}
