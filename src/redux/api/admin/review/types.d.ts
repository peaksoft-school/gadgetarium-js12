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
		responseAdmin: string
	};
}
