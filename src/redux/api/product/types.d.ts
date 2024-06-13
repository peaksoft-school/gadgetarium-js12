/* eslint-disable @typescript-eslint/no-unused-vars */

type ProductsId = number;

interface Description {
	intoForTelephone?: string;
	MainTech?: string;
	intoText1?: string;
	intoText2?: string;
	intoText3?: string;
	intoText4?: string;
	TrackType?: string;
}

type Characteristics = {
	[x: string]: ReactNode;
	TrackType: string;
	enginePower: string;
	enginesType: string;
	speedAdjustment: string;
	runningBelt: string;
	runningBeltIncline: string;
	runningBeltSize: string;
	rearShaftDiameter: string;
	trainingPrograms: string;
};

type MemoryAndProcessor = {
	TrackType: string;
	enginePower: string;
	enginesType: string;
	speedAdjustment: string;
	runningBelt: string;
	runningBeltIncline: string;
	runningBeltSize: string;
	rearShaftDiameter: string;
	trainingPrograms: string;
};

interface AdditionalFeatures {
	TrackType: string;
	enginePower: string;
	enginesType: string;
	speedAdjustment: string;
	runningBelt: string;
	runningBeltIncline: string;
	runningBeltSize: string;
	rearShaftDiameter: string;
	trainingPrograms: string;
}

interface User {
	userProfile?: string;
	userName?: string;
	Time?: string;
	scoreRating?: string;
	userCommit?: string;
	adminCommit: string;
}

type Reviews = {
	user: User[];
};

interface DeliveryAndPayment {
	sum: number;
	sun2: number;
	sum3: number;
}

type PhotosProducts = string;
namespace PRODUCTSTORE {
	type GetProductsRequest = void;
	type GetProductsResponse = {
		id: number;
		percent: number;
		image: string;
		quantity: number;
		nameOfGadget: string;
		memory: string;
		colour: string;
		rating: number;
		count: number;
		price: number;
		likes: boolean;
		comparison: boolean;
		basket: boolean;
		currentPrice: number;
		subGadgetId: number;
		newProduct: boolean;
		recommend: boolean;
		currentPrice: number;
		buyProduc: string;
		newProduct: string;
		Screen?: string;
		colorProduct?: string;
		DateOfIssue?: string;
		operatingSystem?: string;
		Memory?: string;
		SIMCards?: string;
		WarrantyMonths?: string | number;
		CPU?: string;
		Weight?: number;
		image2?: string;
		image3?: string;
		image4?: string;
		image5?: string;
		image6?: string;
		photos: PhotosProducts[];
		Description: Description;
		Characteristics: Characteristics;
		MemoryAndProcessor: MemoryAndProcessor;
		AdditionalFeatures: AdditionalFeatures;
		reviews: Reviews;
		deliveryAndPayment: DeliveryAndPayment;
	}[];

	type GetProductsItemIdRequest = string;
	type GetProductsItemIdResponse = {
		id: number;
		percent: number;
		image: string;
		quantity: number;
		nameOfGadget: string;
		memory: string;
		colour: string;
		rating: number;
		count: number;
		price: number;
		likes: boolean;
		comparison: boolean;
		basket: boolean;
		currentPrice: number;
		subGadgetId: number;
		newProduct: boolean;
		recommend: boolean;
		currentPrice: number;
		isResult?: string;
		colorProduct?: string;
		DateOfIssue?: string;
		operatingSystem?: string;
		Screen?: string;
		Memory?: string;
		SIMCards?: string;
		WarrantyMonths?: string | number;
		CPU?: string;
		Weight?: number;
		image2?: string;
		image3?: string;
		image4?: string;
		image5?: string;
		image6?: string;
		photos: PhotosProducts[];

		Description: Description;
		Characteristics: Characteristics;
		MemoryAndProcessor: MemoryAndProcessor;
		AdditionalFeatures: AdditionalFeatures;
		reviews: Reviews;
		deliveryAndPayment: DeliveryAndPayment;
	};

	type GetProductDetailsRequest = void;
	type GetProductDetailsResponse = {
		id: number;
		percent: number;
		image: string;
		quantity: number;
		nameOfGadget: string;
		memory: string;
		colour: string;
		rating: number;
		count: number;
		price: number;
		likes: boolean;
		comparison: boolean;
		basket: boolean;
		currentPrice: number;
	}[];

	type EditAdminCommitRequest = {
		id: number;
		reviews: Reviews;
	};
	type EditAdminCommitResponse = {
		id: number;
		reviews: Reviews;
	};

	type ProductPatchForQuantityRequest = {
		id: number;
		quantity: number;
	};
	type ProductPatchForQuantityResponse = {
		id: number;
		quantity: number;
	};
}

namespace PRODUCTSTORE {
	type GetProductsRequest = void;
	type GetProductsResponse = {
		id: number;
		percent: number;
		image: string;
		quantity: number;
		nameOfGadget: string;
		memory: string;
		colour: string;
		rating: number;
		count: number;
		price: number;
		likes: boolean;
		comparison: boolean;
		basket: boolean;
		currentPrice: number;
	}[];
}
