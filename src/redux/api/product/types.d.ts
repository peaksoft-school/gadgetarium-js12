/* eslint-disable @typescript-eslint/no-unused-vars */

type ProductsId = number;

type PhotosProducts = string;
namespace PRODUCTSTORE {
	type GetProductsRequest = void;
	type GetProductsResponse = {
		id: ProductsId;
		price: number;
		image: string;
		quantity: number;
		productName: string;
		brand: string;
		isResult: string;
		isFavorite: boolean;
		isInBasket: boolean;
		isComparison: boolean;
		previousPrice: number;
		Rating: string;
		buyProduc: string;
		newProduct: string;
		Screen?: string;
		colorProduct?: string;
		DateOfIssue?: string;
		operatingSystem?: string;
		Memory?: string;
		SIMCards?: string;
	}[];

	type GetProductDetailsRequest = void;
	type GetProductDetailsResponse = {
		_id: number;
		price: number;
		productName: string;
		SIMCards: number;
		image: string;
		quantity: number;
		colors: string;
		ram: number;
		memory: number;
	}[];

	type EditAdminCommitRequest = {
		_id: number;
		reviews: Reviews;
	};
	type EditAdminCommitResponse = {
		_id: number;
		reviews: Reviews;
	};

	type ProductPatchForQuantityRequest = {
		id: number;
		quantity: number;
	};
	type ProductPatchForQuantityResponse = {
		id: number;
		quantity: number;
	};
}

namespace PRODUCTSTORE {
	type GetProductsRequest = void;
	type GetProductsResponse = {
		_id: number;
		price: number;
		image: string;
		productName: string;
		isFavorite: boolean;
		isInBasket: boolean;
		previousPrice: number;
		Rating: string;
		buyProduc: string;
		newProduct: string;
		isResult: string;
	}[];
}
