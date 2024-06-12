/* eslint-disable @typescript-eslint/no-unused-vars */

interface RatingCounts {
	1: number;
	2: number;
	3: number;
	4: number;
	5: number;
}
namespace REVIEWS {
	type GetReviewsRequest = {
		id: string;
		page: string;
		size: string;
	};
	type GetReviewsResponse = {
		id: number;
		image: string;
		fullName: string;
		dateTime: string;
		rating: number;
		description: string;
		responseAdmin: string | null;
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
		gadgetId: number;
		grade: number;
		comment: string;
		images: string[];
	};
	type PostForUsersCommitsResponse = {
		gadgetId: number;
		grade: number;
		comment: string;
		images: string[];
	};
}
