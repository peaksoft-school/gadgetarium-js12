/* eslint-disable @typescript-eslint/no-unused-vars */
type CountList = {
  colorName: string;
  colorQuantity: string;
}
namespace COLORSAPI {
  type getColorsApiRequest = void;
  type getColorsApiResponse = {
    countList: CountList[];
  }
}