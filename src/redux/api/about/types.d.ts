/* eslint-disable @typescript-eslint/no-unused-vars */
type Image = string;
type ID = number
namespace FORSTORE {
  type GetStoreRequest = void;
  type GetStoreResponse = {
    item: Key | null | undefined;
    _id: ID;
    photoSliderStore: Image;
  }[]
}