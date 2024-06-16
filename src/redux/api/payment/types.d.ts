/* eslint-disable @typescript-eslint/no-unused-vars */

namespace PAYMENTPRODUCT {
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

	type PatchPaymentProductsRequest = {
		orderId: number;
		payment: string;
	};
	type PatchPaymentProductsResponse = {
		orderId: number;
		payment: string;
	};
}
