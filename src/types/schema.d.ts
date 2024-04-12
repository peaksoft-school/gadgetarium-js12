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