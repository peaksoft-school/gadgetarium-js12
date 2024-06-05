/* eslint-disable @typescript-eslint/no-unused-vars */
namespace COMPARISONPRODUCTS {
	type GetComparisonProductsRequest = void;
	type GetComparisonProductsResponse = {
		images: [];
		category: string;
		brandName: string;
		nameOfGadget: string;
		id: number;
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
	type PatchComparisonProductRequest = number;
	type PatchComparisonProductResponse = {
		subGadgetId: number;
		// status: string;
		// message: string;
	};
}
