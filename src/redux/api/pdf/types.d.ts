/* eslint-disable @typescript-eslint/no-unused-vars */

type HttpResponse = {
	status: string;
	message: string;
};
namespace PDFAPI {
	type GetUserPostPDSRequest = string;
	type GetUserPostPDSResponse = string;

	type PostUploadRequest = {
		files : [];
	};
	type PostUploadResponse = {
		data: [];
		httpResponse: HttpResponse;
	};
}
