import AddBasketButton from '@/src/ui/customButtons/AddBasketButton';
import CancelButton from '@/src/ui/customButtons/CancelButton';
import ContinueShoppingButton from '@/src/ui/customButtons/ContinueShoppingButton';
import LogOutButton from '@/src/ui/customButtons/LogOutButton';
import ShowMoreButton from '@/src/ui/customButtons/ShowMoreButton';

const HomePage = () => {
	return (
		<>
			<ShowMoreButton children="Показать ещё" onClick={() => onclick}/>
			<ContinueShoppingButton children="Продолжить покупки" onClick={() => onclick}/>
			<CancelButton children="Отменить" onClick={() => onclick}/>
			<LogOutButton children="Выйти	" onClick={() => onclick}/>
			<AddBasketButton children="В корзину" onClick={() => onclick} />
		</>
	);
};

export default HomePage;
