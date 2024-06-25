type PaginationGadgets = {
	id: 0;
	images: string;
	article: 0;
	nameOfGadget: string;
	releaseDate: string;
	quantity: 0;
	price: 0;
	percent: 0;
	currentPrice: 0;
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
	};
	type GetGoodsRequest = {
		sort: string;
		discount: string;
		page: number;
		size: number;
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
		id: 0;
		image: string;
		nameOfGadget: string;
		colour: string;
		countSim: 0;
		ram: string;
		memory: string;
		quantity: 0;
		price: 0;
	};
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

	type GetGoodsBannerRequest = string;

	type GetGoodsBannerResponse = {
		id: number;
		images: [];
	};

	type GetGoodsDiscountRequest = string;
	type GetGoodsDiscountResponse = {
		gadgetId: [];
		discountSize: number;
		startDay: string;
		endDay: string;
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
