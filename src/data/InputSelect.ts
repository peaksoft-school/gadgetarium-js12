/* eslint-disable @typescript-eslint/no-unused-vars */
type OptionsTypes = {
	label: string;
	value: string;
};

interface ForBrandTypes {
	img: string;
	value: string;
	label: string
}

export  const options: OptionsTypes[] = [
	{
		label: 'Зарядные устройства',
		value: '1'
	},
	{
		label: 'Защита экрана',
		value: '2'
	},
	{
		label: 'Чехлы и корпусы',
		value: '3'
	},
	{
		label: 'Подставки',
		value: '4'
	},
	{
		label: 'Кабели и адаптеры',
		value: '5'
	},
	{
		label: 'Внешние аккумуляторы',
		value: '6'
	},
	{
		label: 'Ремешки для часов',
		value: '7'
	},
	{
		label: 'Ремешки для часов',
		value: '8'
	},
	{
		label: 'Ремешки для часов',
		value: '9'
	}
];

export const BrandSelect: ForBrandTypes[] = [
	{
		img: 'https://banner2.cleanpng.com/20180616/yox/kisspng-apple-logo-apple-logo-5b25941fc205b9.8465606115291894077947.jpg',
		value: '1',
		label: 'Apple',
	},
	{
		img: 'https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png',
		value: '2',
		label: 'Samsung',
	},
	{
		img: 'https://img1.freepng.ru/20181116/xai/kisspng-logo-huawei-font-brand-vector-graphics-5bee62a2972519.6465445315423494746191.jpg',
		value: '3',
		label: 'Huawei',
	},
	{
		img: 'https://1000logos.net/wp-content/uploads/2023/07/Honor-Logo.png',
		value: '4',
		label: 'Honor',
	},
	{
		img: 'https://xiaomistore.online/upload/CMax/bc6/p3y3dzh5ceqs9xmmnbisba66puhmbloa.svg',
		value: '5',
		label: 'Xiaomi',
	},
]