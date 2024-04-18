/* eslint-disable @typescript-eslint/no-unused-vars */
namespace ProductsStore {
  type GetProductsRequest = void;
  type GetProductsResponse = {
    _id: number;
    price: number;
    image: string;
    producName: string;
    isFavorite: boolean;
    isInBasket: boolean;
    previousPrice: number;
    Rating: string;
    buyProduc: string;
    newProduct: string;
    isResult: string;
  }[];
}