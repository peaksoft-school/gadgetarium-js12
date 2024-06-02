/* eslint-disable @typescript-eslint/no-unused-vars */
namespace GETPRODUCTCOLORSAPI {
	type GetCardProductColorsRequest = string;
	type GetCardProductColorsResponse = string[];

	type getTheResultingGadgetIsSelectedByColorRequest = {
		colour?: string;
		id?: string;
	};
	type getTheResultingGadgetIsSelectedByColorResponse = {
		gadgetId: number;
		subGadgetId: number;
		brandLogo: string;
		images: string[];
		nameOfGadget: string;
		quantity: number;
		articleNumber: number;
		rating: number;
		percent: number;
		newProduct: boolean;
		recommend: boolean;
		price: number;
		currentPrice: number;
		mainColour: string;
		releaseDate: string;
		warranty: number;
		memory: string;
		ram: string;
		countSim: number;
		uniField: string[];
		likes: boolean;
		basket: boolean;
		pdfUrl: string;
	};
}
