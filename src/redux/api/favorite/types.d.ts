/* eslint-disable @typescript-eslint/no-unused-vars */
namespace FAVORITEPRODUCTS {
	type GetFavoriteProductsRequest = void;
	type GetFavoriteProductsResponse = {
		// percent: any;
		id: number;
		subGadgetId: number;
		image: string;
		category: string;
		percent: number;
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
		subGadgetId: number;
		newProduct: boolean;
		recommend: boolean;
	}[];
	type PutFavoriteProductRequest = number;
	// type PutFavoriteProductRequest = {
	// 	id: number;
	// 	likes: boolean;
	// 	productId: number;
	// 	subGadgetId?: number;
	// };
	type PutFavoriteProductResponse = {
		status: string;
		message: string;
	};

	type AddAllFavoriteProductsRequest = {
		subGadgetIds: string[];
	}
	type AddAllFavoriteProductsResponse = {
		status: string;
		message: string;
	}
}
