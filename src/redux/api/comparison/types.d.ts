/* eslint-disable @typescript-eslint/no-unused-vars */

interface CategoryCounts {
	'phone quantity': number;
	'WATCH quantity': number;
	'LAPTOP quantity': number;
}

interface Characteristics {
	values: string;
	values_key: string;
}

type SubGadgetResponses = {
	id: number;
	image: string;
	nameOfGadget: string;
	price: number;
	mainColour: string;
	brandName: string;
	memory: string;
	basket?: boolean;
	characteristics?: Characteristics[];
	uniqF?: [];
};
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

	type GetComparisonCompareRequest = {
		gadgetType?: string;
		isDifferences?: boolean  | string;
	};
	type GetComparisonCompareResponse = {
		categoryCounts: CategoryCounts;
		subGadgetResponses: SubGadgetResponses[];
	};
}
