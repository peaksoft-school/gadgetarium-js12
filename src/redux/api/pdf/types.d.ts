/* eslint-disable @typescript-eslint/no-unused-vars */

type HttpResponse = {
	status: string;
	message: string;
};
namespace PDFAPI {
	type GetUserPostPDSRequest = string;
	type GetUserPostPDSResponse = {
		response: string;
	};

	type PostUploadRequest = {
		files: [];
	};
	type PostUploadResponse = {
		data: string[];
		// httpResponse: HttpResponse;
	};

	type PostS3UploadResponse = {
		data: string;
		httpResponse: {
			status: string;
			message: string;
		}
	}
}
