/* eslint-disable @typescript-eslint/no-unused-vars */
namespace UPDATEIMAGEAPI {
	type UpdateImageRequest = {
		subGadgetId: number;
		oldKey: string;
		oldImage: string;
		newImage: string;
	};
	type UpdateImageResponse = {
		status: string;
		message: string;
	};
}
