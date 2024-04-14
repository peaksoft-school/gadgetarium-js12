import { useState } from 'react';
import scss from './CatalogMenu.module.scss';
import {
	IconCustomer,
	IconDesktop,
	IconMobile,
	IconStateRight1,
	IconWatchalt,
	IconCodNaPravacVetWhite
} from '@/src/assets/icons';

const CatalogMenu = () => {
	const [hover, setHover] = useState<boolean>(false);
	const [hover2, setHover2] = useState<boolean>(false);
	const [hover3, setHover3] = useState<boolean>(false);
	const [hover4, setHover4] = useState<boolean>(false);

	return (
		<div
			onClick={() => {
				setHover(false);
				setHover2(false);
				setHover3(false);
				setHover4(false);
			}}
			className={scss.CatalogMenu}
		>
			<div className={scss.content}>
				<>
					<button
						onMouseEnter={() => {
							setHover(true);
							setHover2(false);
							setHover3(false);
							setHover4(false);
						}}
					>
						<IconMobile />
						Смартфоны
						<div>
							{hover ? <IconCodNaPravacVetWhite /> : <IconStateRight1 />}
						</div>
					</button>
					<button
						onMouseEnter={() => {
							setHover2(true);
							setHover(false);
							setHover3(false);
							setHover4(false);
						}}
					>
						<IconDesktop />
						Ноутбуки и планшеты
						<div className={scss.div2}>
							{hover2 ? <IconCodNaPravacVetWhite /> : <IconStateRight1 />}
						</div>
					</button>
					<button
						onMouseEnter={() => {
							setHover3(true);
							setHover(false);
							setHover2(false);
							setHover4(false);
						}}
					>
						<IconWatchalt />
						Смарт-часы и браслеты
						<div className={scss.div3}>
							{hover3 ? <IconCodNaPravacVetWhite /> : <IconStateRight1 />}
						</div>
					</button>
					<button
						onMouseEnter={() => {
							setHover4(true);
							setHover(false);
							setHover2(false);
							setHover3(false);
						}}
					>
						<IconCustomer />
						Аксессуары
						<div>
							{hover4 ? <IconCodNaPravacVetWhite /> : <IconStateRight1 />}
						</div>
					</button>
				</>
				{hover ? (
					<div
						onMouseEnter={() => setHover(true)}
						className={scss.hoverResultContainer}
					>
						<div className={scss.divDisplay}>
							<h3>Смартфоны</h3>
							<p>Ремешки для часов</p>
							<p>Зарядные устройства</p>
							<p>Защита экрана</p>
							<p>Чехлы и корпусы</p>
							<p>Подставки</p>
							<p>Кабели и адаптеры</p>
							<p>Внешние аккумуляторы</p>
							<p>Наушники</p>
							<p>Карта памяти и накопители</p>
						</div>
					</div>
				) : null}
				{hover2 ? (
					<div className={scss.hoverResultContainer}>
						<div className={scss.divDisplay}>
							<h3>Ноутбуки и планшеты </h3>
							<p>Ремешки для часов</p>
							<p>Зарядные устройства</p>
							<p>Защита экрана</p>
							<p>Чехлы и корпусы</p>
							<p>Подставки</p>
							<p>Кабели и адаптеры</p>
							<p>Внешние аккумуляторы</p>
							<p>Наушники</p>
							<p>Карта памяти и накопители</p>
						</div>
					</div>
				) : null}
				{hover3 ? (
					<div className={scss.hoverResultContainer}>
						<div className={scss.divDisplay}>
							<h3>Смарт-часы и браслеты</h3>
							<p>Ремешки для часов</p>
							<p>Зарядные устройства</p>
							<p>Защита экрана</p>
							<p>Чехлы и корпусы</p>
							<p>Подставки</p>
							<p>Кабели и адаптеры</p>
							<p>Внешние аккумуляторы</p>
							<p>Наушники</p>
							<p>Карта памяти и накопители</p>
						</div>
					</div>
				) : null}
				{hover4 ? (
					<div className={scss.hoverResultContainer}>
						<div className={scss.divDisplay}>
							<h3>Аксессуары</h3>
							<p>Ремешки для часов</p>
							<p>Зарядные устройства</p>
							<p>Защита экрана</p>
							<p>Чехлы и корпусы</p>
							<p>Подставки</p>
							<p>Кабели и адаптеры</p>
							<p>Внешние аккумуляторы</p>
							<p>Наушники</p>
							<p>Карта памяти и накопители</p>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default CatalogMenu;
