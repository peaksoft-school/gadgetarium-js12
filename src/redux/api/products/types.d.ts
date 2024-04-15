/* eslint-disable @typescript-eslint/no-unused-vars */

type ProductsId = number
namespace ProductsStore {
	type GetProductsRequest = void;
	type GetProductsResponse = {
		_id: ProductsId;
		price: number;
		image: string;
		producName: string;
		isFavorite: boolean;
		isInBasket: boolean;
		previousPrice: number;
		Rating: string;
		buyProduc: string;
		newProduct: string;
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
		newProduct: string;
	}
}
