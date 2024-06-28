/* eslint-disable @typescript-eslint/no-unused-vars */
type PaginationGadgets = {
	gadgetId: number;
	subGadgetId: number;
	images: string;
	article: number;
	nameOfGadget: string;
	createdAt: string;
	// releaseDate: string,
	quantity: number;
	price: number;
	percent: number;
	currentPrice: number;
};

namespace GOODSSTORE {
	type IGood = {
		sort: string;
		discount: string;
		page: 0;
		size: 0;
		paginationGadgets: [
			{
				id: 0;
				images: string;
				article: 0;
				nameOfGadget: string;
				releaseDate: string;
				quantity: 0;
				price: 0;
				percent: 0;
				currentPrice: 0;
			}
		];
	};

	type GetGoodsResponse = {
		sort: string;
		discount: string;
		page: number;
		size: number;
		paginationGadgets: PaginationGadgets[];
		startDate: string;
		endDate: string;
		keyword: string;
		allProduct: number;
		onSale: number;
		inFavorites: number;
		inBasket: number;
	};
	type GetGoodsRequest = {
		sort: string;
		discount: string;
		page: string;
		size: string;
		getType: string;
		keyword: string;
		startDate: string;
		endDate: string;
	};

	type GetSingleGoodsResponse = {
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
	type GetSingleGoodsRequest = {
		id: number;
		color: string;
		memory: string;
		quantity: number;
	};

	type GetGoodsDetailsResponse = {
		gadgetId: number;
    subGadgetId: number,
		image: string;
		nameOfGadget: string;
		colour: string;
		countSim: number,
		ram: string;
		memory: string;
		quantity: number,
    price: number;
	}[];
	type GetGoodsDetailsRequest = string;

	type DeleteGoodsGadgetResponse = {
		subGadgetId: number;
	};
	type DeleteGoodsGadgetRequest = number;

	type GetCharacteristicsGoodGadgetRequest = {
		id: number;
	};
	type GetCharacteristicsGoodGadgetResponse = {
		id: 0;
		mainCharacteristics: {
			additionalProp1: {
				additionalProp1: string;
				additionalProp2: string;
				additionalProp3: string;
			};
			additionalProp2: {
				additionalProp1: string;
				additionalProp2: string;
				additionalProp3: string;
			};
			additionalProp3: {
				additionalProp1: string;
				additionalProp2: string;
				additionalProp3: string;
			};
		};
	};

	type GetDescriptionGoodGadgetRequest = {
		id: number;
	};
	type GetDescriptionGoodGadgetResponse = {
		id: number;
		videoUrl: string;
		description: string;
	};

	type GetReviewGadgetGoodRequest = {
		id: number;
		page: number;
		size: number;
	};
	type GetReviewGadgetGoodResponse = {
		id: number;
		image: string;
		fullName: string;
		dateTime: string;
		rating: number;
		description: string;
		responseAdmin: string;
	};

	type GetGoodsBannerRequest = {
		images: string[];
	};

	type GetGoodsBannerResponse = {
		images: string[];
		id: number;
	};

	type GetGoodsDiscountRequest = {
		gadgetId: number[];
		discountSize: number;
		startDay: string;
		endDay: string;
	};
	type GetGoodsDiscountResponse = {
    httpStatus: string;
    message: string;
  };

	type PostNewslaterResponse = string;
	type PostNewslaterRequest = {
		image: string;
		nameOfNewsLetter: string;
		description: string;
		startDateOfDiscount: string;
		endDateOfDiscount: string;
	};
}
