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

	type GetReviewResponse = IReview[];
	type GetReviewRequest = {
		feedbackType: string;
	};
	type PostReviewRequest = IReview;
	type PostReviewResponse = IReview;
}
