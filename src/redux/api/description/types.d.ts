/* eslint-disable @typescript-eslint/no-unused-vars */
namespace DESCRIPTION {
	type GetDescriptionRequest = string;
	type GetDescriptionResponse = {
		id: number;
		videoUrl: string;
		description: string;
	};
}
