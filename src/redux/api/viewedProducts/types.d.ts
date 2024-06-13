/* eslint-disable @typescript-eslint/no-unused-vars */
namespace VIEWEDPRODUCTS {
	type GetViewedProductsRequest = void;
	type GetViewedProductsResponse = {
		id: number;
		discount: number;
		image: string;
		nameOfGadget: string;
		rating: number;
		countOfFeedback: number;
		price: number;
		currentPrice: number;
	}[];
}
