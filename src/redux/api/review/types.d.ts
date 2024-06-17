/* eslint-disable @typescript-eslint/no-unused-vars */
interface RatingCounts {
	1: number;
	2: number;
	3: number;
	4: number;
	5: number;
}

type FeedbackResponseList = {
	id: number;
	gadgetImage: string;
	subCategoryName: string;
	nameOfGadget: string;
	article: number;
	comment: string;
	feedbackImages: string[];
	dateAndTime: string;
	rating: number;
	fullNameUser: string;
	emailUser: string;
	responseAdmin: null | string;
};

type IReview = {
	totalRatings: 0;
	unanswered: 0;
	ratingCounts: {
		additionalProp1: 0;
		additionalProp2: 0;
		additionalProp3: 0;
	};
	feedbackResponseList: [
		{
			id: number;
			gadgetImage: string;
			subCategoryName: string;
			nameOfGadget: string;
			article: number;
			comment: string;
			feedbackImages: [string];
			dateAndTime: string;
			rating: 0;
			fullNameUser: string;
			emailUser: string;
			responseAdmin: string;
		}
	];
};

namespace REVIEWSTORE {
	type IReview = {
		totalRatings: 0;
		unanswered: 0;
		ratingCounts: {
			additionalProp1: 0;
			additionalProp2: 0;
			additionalProp3: 0;
		};
		feedbackResponseList: [
			{
				id: number;
				gadgetImage: string;
				subCategoryName: string;
				nameOfGadget: string;
				article: number;
				comment: string;
				feedbackImages: [string];
				dateAndTime: string;
				rating: 0;
				fullNameUser: string;
				emailUser: string;
				responseAdmin: string;
			}
		];
	};

	type GetReviewResponse = {
		totalRatings: number;
		unanswered: number;
		ratingCounts: RatingCounts;
		feedbackResponseList: FeedbackResponseList[];
	};
	type GetReviewRequest = {
		feedbackType: string;
	};
	type PostReviewRequest = {
		id: number;
		responseAdmin: string;
	};
	type PostReviewResponse = {
		id: number;
		responseAdmin: string;
	};
	type PatchReviewRequest = {
		id: number;
		responseAdmin: string;
	};
	type PatchReviewResponse = {
		id: number;
		responseAdmin: string;
	};
	type DeleteReviewRequest = number;
	type DeleteReviewResponse = {
		id: number;
		responseAdmin: string;
	};

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

	type EditUserCommitRequest = {
		feedId: number;
		grade: number;
		comment: string;
		images: string[];
	};
	type EditUserCommitResponse = {
		feedId: number;
		grade: number;
		comment: string;
		images: string[];
	};

	type GetReviewResponse = IReview[];
	type GetReviewRequest = string;
	type PostReviewRequest = IReview;
	type PostReviewResponse = IReview;

	type GetReviewRequest = {
		feedbackType: string;
	};

	type GetReviewResponse = IReview[];
}

type MessageType = {
	[id: number]: string;
};
