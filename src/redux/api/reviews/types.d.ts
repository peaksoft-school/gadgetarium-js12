/* eslint-disable @typescript-eslint/no-unused-vars */

interface RatingCounts {
	1: number;
	2: number;
	3: number;
	4: number;
	5: number;
}
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

	type GetFeedbackStatisticsRequest = {
		id: number;
	};
	type GetFeedbackStatisticsResponse = {
		overallRating: number;
		quantityFeedbacks: number;
		ratingCounts: RatingCounts;
	};
	type PostForUsersCommitsRequest = {
		id: number
	}
	type PostForUsersCommitsResponse = {
		id: number
	}
}
