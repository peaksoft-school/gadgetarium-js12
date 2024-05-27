namespace FAVORITESTORE {
  type IFavorite = {
    _id: number;
    image: string;
    productName: string;
    rating: string;
    ratingNumber: string;
    price: string;
  }

  type GetFavoritesResponse = IFavorite[];
  type GetFavoritesRequest = string;
  type PostFavoriteRequest = IFavorite;
  type PostFavoriteResponse = IFavorite;
}