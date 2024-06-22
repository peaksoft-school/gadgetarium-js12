/* eslint-disable @typescript-eslint/no-unused-vars */
namespace EDITPRODUCTBYID {
	type EditProductByIdRequest = {
		subGadgetId: number;
		quantity: number;
		price: number;
		colour: string;
		countSim: number;
		memory: string;
		ram: string;
		images: string[];
		materialBracelet?: string;
		materialBody?: string;
		sizeWatch?: string;
		dumas?: string;
		genderWatch?: string;
		waterproof?: string;
		wireless?: string;
		shapeBody?: string;
	};
	type EditProductByIdResponse = {
		status: string;
		message: string;
	};
}
