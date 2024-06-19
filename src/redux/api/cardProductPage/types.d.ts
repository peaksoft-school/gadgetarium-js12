/* eslint-disable @typescript-eslint/no-unused-vars */

namespace CARTPRODUCT {
	type GetCardProductRequest = {
		id: number;
		color?: string;
		memory?: string;
		quantity?: string;
	};
	type GetCardProductResponse = {
		gadgetId: number;
		brandLogo: string;
		images: [];
		subGadgetId: number;
		nameOfGadget: string;
		quantity: number;
		articleNumber: number;
		rating: number;
		percent: number;
		price: number;
		currentPrice: number;
		mainColour: string;
		releaseDate: string;
		warranty: number;
		memory: string;
		countSim: number;
		ram: string;
		recommend: boolean;
		likes: boolean;
		newProduct: boolean;
		basket: boolean;
		pdfUrl: string;
		uniField: [];
	};
}
