/* eslint-disable @typescript-eslint/no-unused-vars */
namespace FAVORITEPRODUCTS {
	type GetFavoriteProductsRequest = void;
	type GetFavoriteProductsResponse = {
		id: number;
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
		id: number;
		// isFavorite: boolean;
	};
	type PutFavoriteProductResponse = {
		id: number;
		// isFavorite: boolean;
	};
}
