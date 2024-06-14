/* eslint-disable @typescript-eslint/no-unused-vars */
namespace FAVORITEPRODUCTS {
	type GetFavoriteProductsRequest = void;
	type GetFavoriteProductsResponse = {
		id: number;
		subGadgetId: number;
		image: string;
		category: string;
		brandName: string;
		nameOfGadget: string;
		memory: string;
		color: string;
		rating: number;
		price: number;
		currentPrice: number;
		likes: number;
		comparison: boolean;
		basket: boolean;
		currentPrice: number;
		subGadgetId: number;
		newProduct: boolean;
		recommend: boolean;
	}[];
	type PutFavoriteProductRequest = {
		subGadgetId: number;
	};
	type PutFavoriteProductResponse = {
		status: string;
		message: string;
		subGadgetId: number;
	};
}
