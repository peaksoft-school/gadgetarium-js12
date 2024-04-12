/* eslint-disable @typescript-eslint/no-unused-vars */
namespace BasketProducts {
	type GetBasketProductsRequest = void;
	type GetBasketProductsResponse = {
		_id: number;
		image: string;
		producName: string;
		price: number;
		quantity: number | string;
		isFavorite: boolean;
		isInBasket: boolean;
		token: string;
		Rating: string;
		productCode: string;
		buyProduc: string;
	}[];
}
