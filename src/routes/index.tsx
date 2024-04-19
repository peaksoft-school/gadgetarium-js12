import {
	IconBuildingStore,
	IconDeviceLandlinePhone,
	IconHome,
	IconQuestionMark,
	IconTruckDelivery
} from '@tabler/icons-react';

export const userLinks = [
	{
		label: 'Главная',
		link: '/',
		icon: <IconHome />
	},
	{
		label: 'О магазине',
		link: '/aboutstore',
		icon: <IconBuildingStore />
	},
	{
		label: 'Доставка',
		link: '/delivery',
		icon: <IconTruckDelivery />
	},
	{
		label: 'FAQ',
		link: '/faq',
		icon: <IconQuestionMark />
	},
	{
		label: 'Контакты',
		link: '/contacts',
		icon: <IconDeviceLandlinePhone />
	}
];
