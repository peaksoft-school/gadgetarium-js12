/* eslint-disable @typescript-eslint/no-unused-vars */
namespace BRANDAPI {
  type getBrandApiRequest = void;
  type getBrandApiResponse = {
    id: number;
    image: string;
    brandName: string;
  }[];

  type addBrandRequest = {
    brandName: string;
    file: string;
  }
  type addBrandResponse = {
    brandName?: string;
    file?: string;
  }
}