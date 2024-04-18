/* eslint-disable @typescript-eslint/no-unused-vars */
type RegisterId = string | number;

namespace REGISTER {
	type PostRegisterRequest = {
		email: string;
		password: string;
		// role: UserAdmin;
		lastName: string;
		firsName: string;
		phoneNumber: number | string;
		confirmThePassword: string;
	};

	type PostRegisterResponse = {
		id: RegisterId;
		register: Register;
	};
}
