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
	type PostPaymentRequest = {
		cart: Array<{ id: string; quantity: number }>;
	};
	type PostPaymentResponse = {
		id: string;
		details?: Array<{ issue: string; description: string }>;
		debug_id?: string;
	};
	type TestCreateRequest = {
		token: string;
		orderId: number | undefined;
		paymentId: string;
	};

	type GetOrderIdRequest = void;
	type GetOrderIdResponse = {
		orderId: number;
	};
	type PostConfirmPayRequest = {
		dataPay: {
			paymentId: string;
		};
	};
	type PostConfirmPayResponse = {
		paymentId: string;
	};

	type GetReviewRequest = number;
	type GetReviewResponse = {
		id: number;
		price: number;
		delivery: string;
		payment: string;
		orderId: number;
	};
	type GetPayDecorRequest = number;
	type GetPayDecorResponse = {
		number: number;
		createAd: string;
		email: string;
	};
}
