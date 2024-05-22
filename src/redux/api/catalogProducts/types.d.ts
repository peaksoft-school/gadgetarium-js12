/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
namespace CATALOGAPI {
	type GetCatalogRequest = void;
	type GetCatalogResponse = {
		id: number;
		categoryName: string;
	}[];

	type SubCategoriesRequest = any;
	type SubCategoriesResponse = {
		id: number;
		categoryName: string;
	}[];
}
