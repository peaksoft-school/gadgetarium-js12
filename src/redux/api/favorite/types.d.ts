/* eslint-disable @typescript-eslint/no-unused-vars */
namespace FAVORITEPRODUCTS {
	type GetFavoriteProductsRequest = void;
	type GetFavoriteProductsResponse = {
		id: number;
		image: string;
		productName: string;
		price: number;
		quantity: number | string;
		isFavorite: boolean;
		token: string;
		Rating: string;
		productCode: string;
		buyProduc: string;
	}[];
	type PutFavoriteProductRequest = {
		id: number;
		isFavorite: boolean;
	};
	type PutFavoriteProductResponse = {
		id: number;
		isFavorite: boolean;
	};
}
