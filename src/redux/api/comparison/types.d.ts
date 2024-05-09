/* eslint-disable @typescript-eslint/no-unused-vars */
namespace COMPARISONPRODUCTS {
	type GetComparisonProductsRequest = void;
	type GetComparisonProductsResponse = {
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
		productCode: string;
		buyProduc: string;
	}[];
	type PutComparisonProductRequest = {
		id: number;
		isComparison: boolean;
	};
	type PutComparisonProductResponse = {
		id: number;
		isComparison: boolean;
	};
}
