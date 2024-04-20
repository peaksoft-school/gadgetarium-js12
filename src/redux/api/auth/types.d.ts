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
		email: string;
		password: string;
		lastName: string;
		firsName: string;
		phoneNumber: number | string;
		confirmThePassword: string;
	};
	type PostRegisterResponse = {
		id: string | number;
		register: Register;
	};
}
