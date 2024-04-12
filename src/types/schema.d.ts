type UserAdmin = 'ADMIN' | 'USER';

type userAndAdminId = string | number;

type Register = {
  id: userAndAdminId;
  name: string;
  lastName: string;
  phoneNumber: string | number;
  email: string;
  password: string;
  confirmThePassword: string
  role: UserAdmin;
}

type Login = {
  // id: userAndAdminId;
  token: string;
  authority: boolean;
}

