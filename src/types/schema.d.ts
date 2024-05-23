type UserAdmin = 'ADMIN' | 'USER';

type userAndAdminId = string | number;

type Register = {
	id: userAndAdminId;
	name: string;
	lastName: string;
	phoneNumber: string | number;
	email: string;
	password: string;
	confirmThePassword: string;
	role: UserAdmin;
};

type Login = {
	token: string;
	authority: boolean;
};

type loginAndRegisterId = string | number;

type Register = {
	id: loginAndRegisterId;
	email: string;
	password: string;
	role: UserAdmin;
	lastName: string;
	firsName: string;
	phoneNumber: number | string;
	confirmThePassword: string;
};

type Login = {
	token: string;
	authority: boolean;
};

type LoginForms = {
	email: string;
	password: string;
};

type RegisterForms = {
	email: string;
	password: string;
	lastName: string;
	firstName: string;
	phoneNumber: string;
	address: string;
	confirmThePassword: string;
};

type ContactsPagesFormTypes = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: number | string;
	message: string;
	status?: string | undefined;
};


type FiltredTypesProducts = {
	_id: number;
	price: number;
	image: string;
	producName: string;
	isFavorite: boolean;
	isInBasket: boolean;
	previousPrice: number;
	Rating: string;
	buyProduc: string;
	newProduct: string;
	isResult: string;
};
[];
