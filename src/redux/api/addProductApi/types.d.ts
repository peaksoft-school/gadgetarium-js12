/* eslint-disable @typescript-eslint/no-unused-vars */
interface ProductsRequests {
	mainColour: string;
	memory: string;
	ram: string;
	countSim: number;
	images: string[];
	materialBracelet: string;
	materialBody: string;
	sizeWatch: string;
	dumas: string;
	genderWatch: string;
	waterproof: string;
	wireless: string;
	shapeBody: string;
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
}
