/* eslint-disable @typescript-eslint/no-unused-vars */

namespace CARTPRODUCT {
	type GetCardProductRequest = string;
	type GetCardProductResponse = {
		id: number;
		brandLogo: string;
		images: [];
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
		likes: boolean;
		basket: boolean;
	};
}
