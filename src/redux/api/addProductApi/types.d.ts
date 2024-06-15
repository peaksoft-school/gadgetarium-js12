/* eslint-disable @typescript-eslint/no-unused-vars */
interface ProductsRequests {
	mainColour?: string;
	memory?: string;
	ram?: string;
	countSim?: number;
	images?: string[];
	materialBracelet?: string;
	materialBody?: string;
	sizeWatch?: string;
	dumas?: string;
	genderWatch?: string;
	waterproof?: string;
	wireless?: string;
	shapeBody?: string;
}

namespace ADDPRODUCTAPI {
	type PostAddProductRequest = {
		subCategoryId?: number;
		brandId?: number;
		nameOfGadget: string;
		dateOfIssue: string;
		warranty: number;
		productsRequests: ProductsRequests[];
	};

	type PostAddProductResponse = {
		subCategoryId: number;
		brandId: number;
		nameOfGadget: string;
		dateOfIssue: string;
		warranty: number;
		productsRequests: ProductsRequests[];
	};

	type GadgetSetQuantityByIdRequest = {
		id: number;
		quantity: string;
	};
	type GadgetSetQuantityByIdResponse = {
		id: number;
		quantity: string;
	};

	type GadgetSetPriceByIdRequest = {
		id: number;
		price: number;
	};
	type GadgetSetPriceByIdResponse = {
		id: number;
		quantity: string;
	};

	type gadgetSetDocumentRequest = {
		gadgetId: number;
		pdf: string;
		videoUrl: string;
		description: string;
	};
	type gadgetSetDocumentResponse = {
		gadgetId?: number;
		pdf?: string;
		videoUrl?: string;
		description?: string;
	};

	type setAllProductsPriceAndQuantityRequest = {
		price: number;
		quantity: string;
		ids: number[];
	};
	type setAllProductsPriceAndQuantityResponse = {
		price?: number;
		quantity?: string;
		ids?: number[];
	};
}
