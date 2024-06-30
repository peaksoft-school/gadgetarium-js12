/* eslint-disable @typescript-eslint/no-unused-vars */
namespace POSTFOLLOW {
	type PostFollowRequest = {
		email: string;
	};
	type PostFollowResponse = {
		email: string;
	};

	type postNewsLetterContactUsRequest = {
		firstname: string;
		lastname: string;
		email: string;
		phoneNumber: string | number;
		message: string;
	}
	type postNewsLetterContactUsResponse = {
		status: string;
		message: string;
	}
}
