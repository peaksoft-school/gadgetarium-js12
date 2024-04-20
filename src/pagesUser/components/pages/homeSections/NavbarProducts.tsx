import scss from './NavbarProducts.module.scss';
import React, { useEffect, useState } from 'react';
import icon from '@/src/assets/Vector.svg';
import { Slider } from 'antd';
import { useGetProductsQuery } from '@/src/redux/api/product';
import { FiltredTypesProducts } from '@/src/types/typesProducts';

import { Checkbox } from 'antd';
function getGradientColor(percentage: number) {
	const startColor = [203, 17, 171];
	const endColor = [203, 17, 171];

	const midColor = startColor.map((start, i) => {
		const end = endColor[i];
		const delta = end - start;
		return (start + delta * percentage).toFixed(0);
	});

	return `rgb(${midColor.join(',')})`;
}

type NavbarProductsProps = {
	setArrayProducts: (values: FiltredTypesProducts[]) => void;
	setButtonBrand: (value: boolean) => void;
	setButtonBrand2: (value: boolean) => void;
	setButtonBrand3: (value: boolean) => void;
	setButtonBrand4: (value: boolean) => void;
	setButtonBrand5: (value: boolean) => void;
};

export const NavbarProducts: React.FC<NavbarProductsProps> = ({
	setArrayProducts,
	setButtonBrand,
	setButtonBrand2,
	setButtonBrand3,
	setButtonBrand4,
	setButtonBrand5
}) => {
	const [isBrand, setIsBrand] = useState<boolean>(false);
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const [memory, setMemory] = useState<boolean>(false);
	const [memoryMore, setMemoryMore] = useState<boolean>(false);
	const [color, setColor] = useState<boolean>(false);
	const [ramCapacity, setRamCapacity] = useState<boolean>(false);

	const [value, setValue] = React.useState([0, 10, 20]);

	const { data: Products = [] } = useGetProductsQuery();

	const start = value[0] / 100;
	const end = value[value.length - 1] / 100;
	useEffect(() => {}, []);

	function resultFiltredProduct() {
		const filtred1 = Products.filter((item) => item.isResult === 'apple');
		setArrayProducts(filtred1);
		setButtonBrand(true);
	}
	function resultFiltredProduct2() {
		const filtred2 = Products.filter((item) => item.isResult === 'samsung');
		setArrayProducts(filtred2);
		setButtonBrand2(true);
	}
	function resultFiltredProduct3() {
		const filtred3 = Products.filter((item) => item.isResult === 'huawei');
		setArrayProducts(filtred3);
		setButtonBrand3(true);
	}
	function resultFiltredProduct4() {
		const filtred4 = Products.filter((item) => item.isResult === 'honor');
		setArrayProducts(filtred4);
		setButtonBrand4(true);
	}
	function resultFiltredProduct5() {
		const filtred5 = Products.filter((item) => item.isResult === 'xiaomi');
		setArrayProducts(filtred5);
		setButtonBrand5(true);
	}

	const allProductsArrayResult = () => {
		setArrayProducts(Products);
		setButtonBrand5(false);
		setButtonBrand(false);
		setButtonBrand2(false);
		setButtonBrand3(false);
		setButtonBrand4(false);
	};

	useEffect(() => {
		// const filtred1 = Products.filter((item) => item.isResult === 'apple');
	}, []);

	return (
		<>
			<>
				<>
					<nav className={scss.divNavBar}>
						<p>Сбросить все фильтры</p>
						<div></div>
						<div
							className={scss.divResult}
							onClick={() => setIsBrand(!isBrand)}
						>
							Категория
							{isBrand === true ? (
								<img className={scss.imgActive} src={icon} alt="" />
							) : (
								<img
									src={icon}
									style={{ transition: 'all 0.7s ease' }}
									alt="icon"
								/>
							)}
						</div>
						{isBrand ? (
							<>
								<div className={scss.divCheckbox}>
									<div
										className={scss.inputsDiv}
										onClick={resultFiltredProduct}
									>
										<Checkbox
											style={{
												width: '20px',
												height: '20px',
												background: 'pink',
												color: 'pink'
											}}
											defaultChecked
											type="checkbox"
										/>

										<label htmlFor="checkbox_1" className={scss.checkbox_label}>
											Apple
										</label>
									</div>
									<div
										className={scss.inputsDiv}
										onClick={resultFiltredProduct2}
									>
										<Checkbox
											style={{
												width: '20px',
												height: '20px',
												background: 'pink',
												color: 'pink'
											}}
											defaultChecked
											type="checkbox"
										/>
										<label htmlFor="checkbox_2" className={scss.checkbox_label}>
											Samsung
										</label>
									</div>
									<div
										className={scss.inputsDiv}
										onClick={resultFiltredProduct3}
									>
										<Checkbox
											style={{
												width: '20px',
												height: '20px',
												background: 'pink',
												color: 'pink'
											}}
											defaultChecked
											type="checkbox"
										/>
										<label htmlFor="checkbox_3" className={scss.checkbox_label}>
											Huawei
										</label>
									</div>
									<div
										className={scss.inputsDiv}
										onClick={resultFiltredProduct4}
									>
										<Checkbox
											style={{
												width: '20px',
												height: '20px',
												background: 'pink',
												color: 'pink'
											}}
											defaultChecked
											type="checkbox"
										/>
										<label htmlFor="checkbox_4" className={scss.checkbox_label}>
											Honor
										</label>
									</div>
									<div
										className={scss.inputsDiv}
										onClick={resultFiltredProduct5}
									>
										<Checkbox
											style={{
												width: '20px',
												height: '20px',
												background: 'pink',
												color: 'pink'
											}}
											defaultChecked
											type="checkbox"
										/>
										<label
											htmlFor="checkbox_45"
											className={scss.checkbox_label}
										>
											Xiaomi
										</label>
									</div>
									<div
										className={scss.inputsDiv}
										onClick={allProductsArrayResult}
									>
										<Checkbox
											style={{
												width: '20px',
												height: '20px',
												background: 'pink',
												color: 'pink'
											}}
											defaultChecked
											type="checkbox"
										/>
										<label
											htmlFor="checkbox_46"
											className={scss.checkbox_label}
										>
											All
										</label>
									</div>
								</div>
							</>
						) : null}
						<div></div>
						<div
							className={scss.divResult}
							onClick={() => setIsOpenMenu(!isOpenMenu)}
						>
							Стоимость
							{isOpenMenu ? (
								<img className={scss.imgActive} src={icon} alt="icon" />
							) : (
								<img
									style={{ transition: 'all 0.7s ease' }}
									src={icon}
									alt="icon"
								/>
							)}
						</div>
						{isOpenMenu ? (
							<>
								<div className={scss.divMenu}>
									<div className={scss.divMenuPayloud}>
										<div className={scss.divMenuCard1}>
											<p>
												от <span>500</span>
											</p>
										</div>
										<div className={scss.divMenuCard2}>
											<p>
												от <span>250 000</span>
											</p>
										</div>
									</div>
									<Slider
										range
										defaultValue={value}
										onChange={setValue}
										styles={{
											track: {
												background: 'transparent'
											},
											tracks: {
												background: `linear-gradient(to right, ${getGradientColor(start)} 0%, ${getGradientColor(
													end
												)} 100%)`
											}
										}}
									/>
								</div>
							</>
						) : null}
						<div className={scss.divResult} onClick={() => setColor(!color)}>
							Цвет
							{color ? (
								<img className={scss.imgActive} src={icon} alt="icon" />
							) : (
								<img
									style={{ transition: 'all 0.7s ease' }}
									src={icon}
									alt="icon"
								/>
							)}
						</div>
						{color ? (
							<div className={scss.divCheckbox}>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_5" className={scss.checkbox_label}>
										Black <span>(14840)</span>
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_6" className={scss.checkbox_label}>
										Blue <span>(22544)</span>
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_7" className={scss.checkbox_label}>
										Gold <span>(3044)</span>
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_8" className={scss.checkbox_label}>
										Graphite <span>(2544)</span>
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_9" className={scss.checkbox_label}>
										Green <span>(7005)</span>
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_10" className={scss.checkbox_label}>
										Rose Gold <span>(2500)</span>
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_11" className={scss.checkbox_label}>
										Red <span>(2444)</span>
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_12" className={scss.checkbox_label}>
										Silver <span>(14000)</span>
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_13" className={scss.checkbox_label}>
										White <span>(5000)</span>
									</label>
								</div>
								<p onClick={() => setColor(false)}>
									<img src={icon} alt="icon" /> Скрыть
								</p>
							</div>
						) : null}
						<div className={scss.divResult} onClick={() => setMemory(!memory)}>
							Объем памяти (GB)
							{memory ? (
								<img src={icon} className={scss.imgActive} alt="icon" />
							) : (
								<img
									style={{ transition: 'all 0.7s ease' }}
									src={icon}
									alt="icon"
								/>
							)}
						</div>
						{memory ? (
							<div className={scss.divCheckbox}>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_14" className={scss.checkbox_label}>
										8
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_15" className={scss.checkbox_label}>
										16
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_16" className={scss.checkbox_label}>
										32
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_17" className={scss.checkbox_label}>
										64
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_18" className={scss.checkbox_label}>
										128
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_19" className={scss.checkbox_label}>
										256
									</label>
								</div>
								{memoryMore ? (
									<>
										<p onClick={() => setMemoryMore(false)}>
											<img className={scss.photoActive} src={icon} alt="icon" />{' '}
											Закрыт!
										</p>
									</>
								) : (
									<p onClick={() => setMemoryMore(true)}>
										<img
											className={scss.photoNooAvtive}
											src={icon}
											alt="icon"
										/>{' '}
										Еще 2
									</p>
								)}
								{memoryMore ? (
									<>
										<div className={scss.inputsDiv}>
											<Checkbox
												style={{
													width: '20px',
													height: '20px',
													background: 'pink',
													color: 'pink'
												}}
												defaultChecked
												type="checkbox"
											/>
											<label
												htmlFor="checkbox_20"
												className={scss.checkbox_label}
											>
												512
											</label>
										</div>
										<div className={scss.inputsDiv}>
											<Checkbox
												style={{
													width: '20px',
													height: '20px',
													background: 'pink',
													color: 'pink'
												}}
												defaultChecked
												type="checkbox"
											/>
											<label
												htmlFor="checkbox_21"
												className={scss.checkbox_label}
											>
												1024
											</label>
										</div>
									</>
								) : null}
							</div>
						) : null}
						<div
							className={scss.divResult}
							onClick={() => setRamCapacity(!ramCapacity)}
						>
							Объем оперативной памяти (GB)
							{ramCapacity ? (
								<img src={icon} className={scss.imgActive} alt="icon" />
							) : (
								<img
									style={{ transition: 'all 0.7s ease' }}
									src={icon}
									alt="icon"
								/>
							)}
						</div>
						{ramCapacity ? (
							<div className={scss.divCheckbox}>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_22" className={scss.checkbox_label}>
										3
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_23" className={scss.checkbox_label}>
										4
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_24" className={scss.checkbox_label}>
										6
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_25" className={scss.checkbox_label}>
										8
									</label>
								</div>
								<div className={scss.inputsDiv}>
									<Checkbox
										style={{
											width: '20px',
											height: '20px',
											background: 'pink',
											color: 'pink'
										}}
										defaultChecked
										type="checkbox"
									/>
									<label htmlFor="checkbox_26" className={scss.checkbox_label}>
										12
									</label>
								</div>
							</div>
						) : null}
					</nav>
					{/* </Affix> */}
				</>
			</>
		</>
	);
};
