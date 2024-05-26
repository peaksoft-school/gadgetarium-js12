/* eslint-disable @typescript-eslint/no-unused-vars */
namespace REVIEWS {
	type GetReviewsRequest = string;
	type GetReviewsResponse = {
		id: number;
		image: string;
		fullName: string;
		dateTime: string;
		rating: number;
		description: string;
		responseAdmin: string;
	}[];
}
