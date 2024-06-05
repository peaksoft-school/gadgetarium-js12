/* eslint-disable @typescript-eslint/no-unused-vars */
namespace FAVORITEPRODUCTS {
	type GetFavoriteProductsRequest = void;
	type GetFavoriteProductsResponse = {
		id: number;
		image: string;
		category: string;
		brandName: string;
		nameOfGadget: string;
		memory: string;
		color: string;
		rating: number;
		price: number;
		currentPrice: number;
		likes: boolean;
		comparison: boolean;
		basket: boolean;
		currentPrice: number;
		subGadgetId: number;
		newProduct: boolean;
		recommend: boolean;
	}[];
	type PutFavoriteProductRequest = number;
	type PutFavoriteProductResponse = {
		status: string;
		message: string;
	};
}
