/* eslint-disable @typescript-eslint/no-unused-vars */


type userAndAdminId = string | number;
namespace REGISTER {
  type PostRegisterRequest = {
		name: string;
		lastName: string;
		phoneNumber: string | number;
    role: UserAdmin
		email: string;
		password: string;
		confirmThePassword: string;
	};
	type PostRegisterResponse = {
		success: boolean;
		register: Register;
	};

}