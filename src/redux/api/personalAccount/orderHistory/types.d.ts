/* eslint-disable @typescript-eslint/no-unused-vars */
interface PrivateGadgetResponse {
	id: string;
	gadgetImage: string[];
	nameOfGadget: string;
	subCategoryName: string;
	rating: number;
	countRating: number;
	currentPrice: number;
}
namespace ORDERHISTORYSTORE {
	type IHistory = {
		orderId: number;
		id: string;
		date: string;
		orderNumber: string;
		statusDelivered: string;
		statusCancelled: string;
		statusProcessing: string;
		statusOnTheWay: string;
		total: string;
		client: string;
		firstName: string;
		lastName: string;
		region: string;
		address: string;
		phone: string;
		email: string;
		payment: string;
		city: string;
		discount: string;
		status: string;
		number: number;
		deliveryPrice: string;
		createdAt: string;
	};

	type GetOrderResponse = IHistory[];
	type GetOrderRequest = string;
	type PostOrderRequest = IHistory;
	type PostOrderResponse = IHistory[];

	type GetPersonalOrdersIdRequest = number;

	type GetPersonalOrdersIdResponse = {
		orderId: number;
		number: number;
		privateGadgetResponse: PrivateGadgetResponse[];
		status: string;
		clientFullName: string;
		userName: string;
		address: string;
		phoneNumber: string;
		email: string;
		discount: number;
		currentPrice: number;
		createdAt: string;
		payment: string;
		lastName: string;
	};
}
