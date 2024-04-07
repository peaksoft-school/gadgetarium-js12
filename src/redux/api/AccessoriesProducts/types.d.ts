/* eslint-disable @typescript-eslint/no-unused-vars */
namespace AccessoriesProducts {
  type GetAccessoriesProductsRequest = void;
  type GetAccessoriesProductsResponse = {
    _id: number;
    price: number;
    producName: string;
    image: string;
    Rating: string;
  }[];
}