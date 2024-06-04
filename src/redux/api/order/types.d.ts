/* eslint-disable @typescript-eslint/no-unused-vars */

namespace ORDERPRODUCT {
	type GetBasketProductsRequest = {
		deliveryType: boolean;
	};
	type GetBasketProductsResponse = Array<{
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		deliveryAddress: string;
	}>;

	type PostBasketProductsRequest = {
		ids: [];
		deliveryType: boolean;
		firstName?: string;
		lastName?: string;
		email: string;
		phoneNumber: string;
		deliveryAddress: string;
	};
	type PostBasketProductsResponse = {
		subGadgetId: number;
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		deliveryAddress: string;
	};
}
