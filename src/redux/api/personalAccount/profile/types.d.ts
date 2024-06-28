/* eslint-disable @typescript-eslint/no-unused-vars */
namespace PROFILESTORE {
	type GetProfileRequest = object;
	type GetProfileResponse = {
		id: number | undefined;
		firsName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		address: string;
		password: string;
		image: string;
	};
	type IProfile = {
		oldPassword: string;
		newPassword: string;
		confirmationPassword: string;
	};

	type IInformation = {
		userName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		address: string;
	};

	type IImage = {
		image: string;
	};

	type PostProfilePasswordResponse = IProfile[];
	type PostProfilePasswordRequest = IProfile;

	type PostProfileInformationResponse = IInformation[];
	type PostProfileInformationRequest = IInformation;

	type PutProfileImageResponse = IImage;
	type PutProfileImageRequest = IImage;
}
