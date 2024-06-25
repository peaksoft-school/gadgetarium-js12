/* eslint-disable @typescript-eslint/no-unused-vars */

namespace ORDERPRODUCT {
	type GetBasketProductsRequest = object;
	type GetBasketProductsResponse = {
		firsName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		address: string;
	};

	type PostBasketProductsRequest = {
		subGadgetId?: string[];
		deliveryType?: boolean | string;
		firstName?: string;
		lastName?: string;
		email?: string;
		phoneNumber?: string;
		deliveryAddress?: string;
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
