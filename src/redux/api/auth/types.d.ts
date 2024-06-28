/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
namespace AUTH {
	type PostLoginRequest = {
		email: string;
		password: string;
	};
	type PostLoginResponse = {
		id: number;
		role: string;
		token: string;
		data: {
			role: string;
			token: string;
			httpStatus: string;
			password: string;
		};
		response: {
			httpStatus: string;
			message: string;
			status: string;
		};
		error: {
			data: {
				httpStatus: string;
				password: string;
				message: string;
			};
			status: number;
		};
	};

	type PostRegisterRequest = {
		firstName: string;
		lastName: string;
		email: string;
		password: string;
		address?: string;
		phoneNumber?: string;
		image?: string;
		confirmThePassword: string;
	};
	type PostRegisterResponse = {
		id: string | number;
		register: Register;
		token: string;
	};
	type PostForgotEmailRequest = {
		email: string;
	};
	type PostForgotEmailResponse = {
		token: string;
		email: string;
		success: string;
		message: string;
	};
	type PostGoogleRequest = {
		idToken: string;
	};
	type PostGoogleResponse = {
		idToken: string;
		token: string;
		email: string;
	};
	type PatchNewPasswordRequest = {
		// token(token: any): unknown;
		// idToken: string;
		token: string;
		password: string;
		confirmPassword: string;
	};
	type PatchNewPasswordResponse = {
		token: string;
		password: string;
		confirmPassword: string;
	};
}
