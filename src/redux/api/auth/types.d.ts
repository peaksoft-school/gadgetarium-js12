/* eslint-disable @typescript-eslint/no-unused-vars */
namespace AUTH {
	type PostLoginRequest = {
		email: string;
		password: string;
	};
	type PostLoginResponse = {
		token: string;
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
	};
}
