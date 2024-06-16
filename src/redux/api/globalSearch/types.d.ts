/* eslint-disable @typescript-eslint/no-unused-vars */
namespace GLOBALSEARCH {
	type GetGlobalSearchResponse = {
    id: number;
		image: string;
		brandNameOfGadget: string;
		price: number;
		quantity: number;
		rating: number;
		countOfRating: number;
		memory: string;
		colour: string;
		article: number;
		countOfGadget: number;
		likes: boolean;
  }[];
	type GetGlobalSearchRequest = {
		request: string;
	};
}
