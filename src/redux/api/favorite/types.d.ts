/* eslint-disable @typescript-eslint/no-unused-vars */
namespace FAVORITEPRODUCTS {
	type GetFavoriteProductsRequest = void;
	type GetFavoriteProductsResponse = {
		gadgetId: number;
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
		gadgetId: number;
		// isFavorite: boolean;
	};
	type PutFavoriteProductResponse = {
		gadgetId: number;
		// isFavorite: boolean;
	};
}
