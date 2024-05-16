/* eslint-disable @typescript-eslint/no-unused-vars */
namespace AUTH {
	type PostLoginRequest = {
		email: string;
		password: string;
	};
	type PostLoginResponse = {
		isAuth: Login;
	};

	type PostRegisterRequest = {
		firstName: string;
		lastName: string;
		phoneNumber: number | string;
		email: string;
		password: string;
		address: string;
	};
	type PostRegisterResponse = {
		id: string | number;
		register: Register;
	};
}
