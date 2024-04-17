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
	enginePower: string
	enginesType: string;
	speedAdjustment: string;
	runningBelt: string;
	runningBeltIncline: string
	runningBeltSize: string
	rearShaftDiameter: string
	trainingPrograms: string;
}

type MemoryAndProcessor = {
	TrackType: string;
	enginePower: string
	enginesType: string;
	speedAdjustment: string;
	runningBelt: string;
	runningBeltIncline: string
	runningBeltSize: string
	rearShaftDiameter: string
	trainingPrograms: string;
}

interface AdditionalFeatures {
	TrackType: string;
	enginePower: string
	enginesType: string;
	speedAdjustment: string;
	runningBelt: string;
	runningBeltIncline: string
	runningBeltSize: string
	rearShaftDiameter: string
	trainingPrograms: string;
}

interface User {
	userProfile: string;
	userName: string;
	Time: string;
	scoreRating: string;
	userCommit: string;
}

type Reviews = {
	user: User

}

interface DeliveryAndPayment {
	sum: number;
	sun2: number;
	sum3: number
}

namespace ProductsStore {
	type GetProductsRequest = void;
	type GetProductsResponse = {
		_id: ProductsId;
		price: number;
		image: string;
		producName: string;
		isResult: string;
		isFavorite: boolean;
		isInBasket: boolean;
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
		Description: Description
		Characteristics: Characteristics
		MemoryAndProcessor: MemoryAndProcessor
		AdditionalFeatures: AdditionalFeatures
		reviews: Reviews
		deliveryAndPayment: DeliveryAndPayment
	}[];
	type GetProductsItemIdRequest = string;
	type GetProductsItemIdResponse = {
		_id: ProductsId;
		price: number;
		image: string;
		producName: string;
		isFavorite: boolean;
		isInBasket: boolean;
		previousPrice: number;
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
		Description: Description
		Characteristics: Characteristics
		MemoryAndProcessor: MemoryAndProcessor
		AdditionalFeatures: AdditionalFeatures
		reviews: Reviews
		deliveryAndPayment: DeliveryAndPayment
	};
}
