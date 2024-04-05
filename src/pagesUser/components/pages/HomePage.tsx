import AddBasketButton from '@/src/UI/customButtons/AddBasketButton';
import CancelButton from '@/src/UI/customButtons/CancelButton';
import ContinueShoppingButton from '@/src/UI/customButtons/ContinueShoppingButton';
import LogOutButton from '@/src/UI/customButtons/LogOutButton';
import ShowMoreButton from '@/src/UI/customButtons/ShowMoreButton';

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
