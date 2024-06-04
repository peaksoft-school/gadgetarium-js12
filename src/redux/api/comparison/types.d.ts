/* eslint-disable @typescript-eslint/no-unused-vars */
namespace COMPARISONPRODUCTS {
	type GetComparisonProductsRequest = void;
	type GetComparisonProductsResponse = {
		id: number;
		// subGadgetId: number;
		images: [];
		// category: string;
		// brandName: string;
		nameOfGadget: string;
		memory: string;
		mainColor: string;
		basket: boolean;
		// rating: number;
		price: number;
		// currentPrice: number;
		// likes: boolean;
		// comparison: boolean;
		// currentPrice: number;
		// subGadgetId: number;
		// newProduct: boolean;
		// recommend: boolean;
	}[];
	type PatchComparisonProductRequest = {
		gadgetId: number;
		subGadgetId: number;
	};
	type PatchComparisonProductResponse = {
		subGadgetId: number;
		// status: string;
		// message: string;
	};
}
