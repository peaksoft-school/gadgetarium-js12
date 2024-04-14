type UserAdmin = 'ADMIN' | 'USER';

type loginAndRegisterId = string | number;

type Register = {
  id: loginAndRegisterId;
  email: string;
  password: string;
  role: UserAdmin;
  lastName: string;
  firsName: string;
  phoneNumber: number | string;
  confirmThePassword: string
}

type Login = {
  token: string;
  authority: boolean;
}

type LoginForms = {
	email: string;
	password: string;
}

type RegisterForms = {
  email: string;
  password: string;
  lastName: string;
  firsName: string;
  phoneNumber: string;
  confirmThePassword: string
}

type ForgotPasswordForms = {
  code: string | number;
  password: string;
  confirmThePassword: string;
}