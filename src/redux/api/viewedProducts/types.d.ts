/* eslint-disable @typescript-eslint/no-unused-vars */
namespace VIEWEDPRODUCTS {
	type GetViewedProductsRequest = void;
	type GetViewedProductsResponse = {
		_id: number;
		image: string;
		productName: string;
		Rating: number;
		price: number;
	}[]
}
