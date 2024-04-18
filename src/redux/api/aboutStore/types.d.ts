/* eslint-disable @typescript-eslint/no-unused-vars */
type Image = string;
type ID = number
namespace ForStore {
  type GetStoreRequest = string;
  type GetStoreResponse = {
    item: Key | null | undefined;
    _id: ID;
    photoSliderStore: Image;
  }[]
}