/* eslint-disable @typescript-eslint/no-unused-vars */

// type ComparisonProduct = {
// 	image: string;
// 	productName: string;
// 	price: number;
// 	quantity: number | string;
// 	isFavorite: boolean;
// 	isInBasket: boolean;
// 	isComparison: boolean;
// 	token: string;
// 	Rating: string;
// 	productCode: string;
// 	buyProduc: string;
// 	brand: string;
// 	screen: string;
// 	color: string;
// 	os: string;
// 	memory: string;
// 	ram: string;
// 	weight: string;
// 	sim: string;
// }
namespace COMPARISONPRODUCTS {
	type GetComparisonProductsRequest = void;
	type GetComparisonProductsResponse = {
		id: number;
		images: [];
		nameOfGadget: string;
		mainColor: string;
		memory: string;
		price: number
	}[];
	type PutComparisonProductRequest = {
		id: number;
		// isComparison: boolean;
	};
	type PutComparisonProductResponse = {
		id: number;
		// isComparison: boolean;
	};

	type ComparisonResultsRequest = {
		// _id: number;
		isDifference: boolean;
	}
	type ComparisonResultsResponse = {
		// _id: number;
		isDifference: boolean;
	}

	type CategoryProductsRequest = {
		categoryProducts: string;
	}
	type CategoryProductsResponse = {
		categoryProducts: string;
	}
}
