/* eslint-disable @typescript-eslint/no-unused-vars */
namespace INFOGRAPHICS {
	type IInfoGraphics = {
		buyPrice: number;
		buyCount: number;
		orderPrice: number;
		orderCount: number;
	};

	type GetOrderResponse = {
		buyPrice: number;
		buyCount: number;
		orderPrice: number;
		orderCount: number;
	}
	type GetOrderRequest = void;

	type IInfoGraphicsAmountDay = {
		currentPeriod: number;
		previousPeriod: number;
	};

	type GetInfoDayResponse = {
		currentPeriod: number;
		previousPeriod: number;
	};
	type GetInfoDayRequest = {
		forPeriod: string;
	};

	type IInfoGraphicsAmountMonth = {
		currentPeriod: number;
		previousPeriod: number;
	};

	type GetInfoMonthResponse = {
		currentPeriod: number;
		previousPeriod: number;
	};

	type GetInfoMonthRequest = string;

	type IInfoGraphicsAmountYear = {
		currentPeriod: number;
		previousPeriod: number;
	};

	type GetInfoYearResponse = {
		currentPeriod: number;
		previousPeriod: number;
	};

	type GetInfoYearRequest = string;
}
