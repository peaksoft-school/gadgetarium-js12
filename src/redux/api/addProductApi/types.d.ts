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
		subCategoryId: number;
		brandId: number;
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
		price: string;
	};
	type GadgetSetPriceByIdResponse = {
		id: number;
		quantity: string;
	};

	type gadgetSetDocumentRequest = {
		subGadgetId?: number;
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
		ids: string[];
	};
	type setAllProductsPriceAndQuantityResponse = {
		price?: number;
		quantity?: string;
		ids?: number[];
	};

	type getNewProductsRequest = void;
	type getNewProductsResponse = {
		subGadgetId: number;
		gadgetId: number;
		brandName: string;
		mainColour: string;
		memory: string;
		ram: string;
		countSim: number;
		releaseDate: [];
		price: number;
		gadgetId: number;
		quantity: number;
	}[];
}
