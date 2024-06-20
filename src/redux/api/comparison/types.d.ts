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

interface UniqueCharacteristics {
	values: string;
	values_key: string;
}

type SubGadgetResponses = {
	[x: string]: any;
	compareFieldResponse?: CompareFieldResponse;
	uniqueCharacteristics?: Characteristics[];
	uniFiled: [];
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

type CompareFieldResponse = {
	id: number;
	image: string;
	brandName: string;
	nameOfGadget: string;
	memory: string;
	mainColour: string;
	price: number;
	basket?: boolean;
};

interface SubGadgetResponses2 {}
namespace COMPARISONPRODUCTS {
	type GetComparisonProductsRequest = void;
	type GetComparisonProductsResponse = {
		id: number;
		// subGadgetId: number;
		images: string[];
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
	type PatchComparisonProductRequest = number;
	// type PatchComparisonProductRequest = {
	// 	// gadgetId: number;
	// 	productId: number;
	// 	subGadgetId: number;
	// };
	type PatchComparisonProductResponse = {
		subGadgetId: number;
		// status: string;
		// message: string;
	};

	type GetComparisonCompareRequest = {
		gadgetType?: string;
		isDifferences?: boolean | string;
	};
	type GetComparisonCompareResponse = {
		categoryCounts: CategoryCounts;
		subGadgetResponses: SubGadgetResponses[];
	};
}
