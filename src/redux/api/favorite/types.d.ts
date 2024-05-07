/* eslint-disable @typescript-eslint/no-unused-vars */
namespace FAVORITEPRODUCTS {
	type GetFavoriteProductsRequest = void;
	type GetFavoriteProductsResponse = {
		_id: number;
		image: string;
		productName: string;
		price: number;
		sale?: string;
		stock?: string;
		quantity?: number | string;
		isFavorite: boolean;
		isComparison: boolean;
		isInBasket: boolean;
		token: string;
		Rating: number;
		productCode?: string;
		buyProduc?: string;
		oldPrice?: number;
	}[];
	type PutFavoriteProductRequest = {
		_id: number;
		isFavorite: boolean;
	};
	type PutFavoriteProductResponse = {
		_id: number;
		isFavorite: boolean;
	};
}
