/* eslint-disable @typescript-eslint/no-unused-vars */


interface Characteristics {
	values: string;
	values_key: string;
}

interface UniqueCharacteristics {
	values: string;
	values_key: string;
}


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
		gadgetId: number;
		subGadgetId: number;
		image: string;
		nameOfGadget: string;
		memory: string;
		color: string;
		price: number;
		nameOfGadgetCompare: string;
		colorCompare: string;
		brandCompare: string;
		memoryCompare: string;
		ramCompare: string;
		simCompare: number;
		warrantyCompare: string;
		phoneCount: number;
		laptopCount: number;
		watchCount: number;
		basket: boolean;
	}[];
}
