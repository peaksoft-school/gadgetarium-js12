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
		id: ProductsId;
		price: number;
		image: string;
		quantity: number;
		productName: string;
		brand: string;
		isResult: string;
		isFavorite: boolean;
		isInBasket: boolean;
		isComparison: boolean;
		previousPrice: number;
		Rating: string;
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
		id: ProductsId;
		price: number;
		image: string;
		productName: string;
		isFavorite: boolean;
		brand: string;
		isInBasket: boolean;
		previousPrice: number;
		quantity: number;
		Rating: string;
		buyProduc: string;
		isResult?: string;
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
	};

	type GetProductDetailsRequest = void;
	type GetProductDetailsResponse = {
		_id: number;
		price: number;
		productName: string;
		SIMCards: number;
		image: string;
		quantity: number;
		colors: string;
		ram: number;
		memory: number;
	}[];

	type EditAdminCommitRequest = {
		_id: number;
		reviews: Reviews;
	};
	type EditAdminCommitResponse = {
		_id: number;
		reviews: Reviews;
	};

	type ProductPatchForQuantityRequest = {
		id: number;
		quantity: number;
	}
	type ProductPatchForQuantityResponse = {
		id: number;
		quantity: number;
	}
}

namespace PRODUCTSTORE {
	type GetProductsRequest = void;
	type GetProductsResponse = {
		_id: number;
		price: number;
		image: string;
		productName: string;
		isFavorite: boolean;
		isInBasket: boolean;
		previousPrice: number;
		Rating: string;
		buyProduc: string;
		newProduct: string;
		isResult: string;
	}[];
}
