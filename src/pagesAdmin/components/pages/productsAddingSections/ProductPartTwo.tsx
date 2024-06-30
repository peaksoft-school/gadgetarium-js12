/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import scss from './ProductPartTwo.module.scss';
import React, { useEffect, useState } from 'react';
import {
	useGadgetByIdSetPriceMutation,
	useGadgetByIdSetQuantityMutation,
	useGadgetGetNewProductsQuery,
	useSetAllProductsPriceAndQuantityMutation,
	useSetPriceAndQuantityNewProductsMutation
} from '@/src/redux/api/addProductApi';
import { Input } from 'antd';

interface ArrayTypes {
	price: number | string;
	quantity: number | string;
}

const ProductPartTwo = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const {
		data: products = [],
		isLoading,
		refetch
	} = useGadgetGetNewProductsQuery([searchParams.toString()]);
	console.log(products, 'array is result');
	const [setPriceById] = useGadgetByIdSetPriceMutation();
	const [setAllProductsPriceAndQuantity] =
		useSetAllProductsPriceAndQuantityMutation();
	const [setQuantityById] = useGadgetByIdSetQuantityMutation();
	const navigate = useNavigate();
	const [price, setPrice] = useState('');
	const [priceItemIdInput, setPriceItemIdInput] = useState<number | null>(null);
	const [quantityItemIdInput, setQuantityItemIdInput] = useState<number | null>(
		null
	);
	const [setPriceNadQuantityProductsApi] =
		useSetPriceAndQuantityNewProductsMutation();
	const [array, setArray] = useState<ArrayTypes[]>([]);
	const [gadgetIds, setGadgetIds] = useState<number[]>([]);
	const [priceIds, setPriceIds] = useState<number[]>([]);

	useEffect(() => {
		// Создаем новый массив в зависимости от длины products
		const newArray = products.map((product) => ({
			price: product.price ?? 0,
			quantity: product.quantity ?? 0
		}));
		setArray(newArray);
	}, [products]);
	console.log(array, 'text');

	const [quantity, setQuantity] = useState('');
	const [priceInputValueById, setPriceInputValueById] = useState('');
	const [quantityInputValueById, setQuantityInputValueById] = useState('');
	useEffect(() => {
		if (products.length > 0) {
			localStorage.setItem('gadgetId', JSON.stringify(products[0].gadgetId));
		}
	}, [products]);
	const handlePatchNewPrice = async () => {
		searchParams.set('price', price);
		searchParams.set('quantity', quantity);
		setSearchParams(searchParams);
		navigate(
			`/admin/product-adding/part-2?${window.location.search.substring(1)}`
		);
		if (price === '' && quantity === '') {
			console.log('Please enter a valid price');
		} else {
			if (products && products.length > 0) {
				try {
					await setAllProductsPriceAndQuantity({
						ids: [String(searchParams)],
						price: searchParams.get('price')
							? Number(`price=${searchParams.get('price')}`)
							: 0,
						quantity: searchParams.get('quantity')
							? `quantity=${searchParams.get('quantity')}`
							: ''
					});
					// searchParams.delete('ids');
					searchParams.delete('quantity');
					searchParams.delete('price');
					setSearchParams(searchParams);
					setPrice('');
					setQuantity('');
					refetch();
				} catch (error) {
					console.error(error);
				}
			}
		}
	};
	useEffect(() => {
		if (products.length > 0) {
			localStorage.setItem('gadgetId', JSON.stringify(products[0].gadgetId));
		}
	}, [products]);
	const handleByIdProductPriceNew = async (id: string) => {
		searchParams.set('price', priceInputValueById);
		searchParams.delete('ids');
		setSearchParams(searchParams);
		if (priceInputValueById === '') return;
		else {
			try {
				await setPriceById({
					id: Number(id),
					price: searchParams.toString()
				});
				setPriceInputValueById('');
				setPriceItemIdInput(null);
			} catch (error) {
				console.error(error);
			}
		}
	};

	const changeArrayValues = (
		index: number,
		key: keyof ArrayTypes,
		value: string
	) => {
		setArray((prevValue) =>
			prevValue.map((priceAndQuantity, ids) =>
				ids === index ? { ...priceAndQuantity, [key]: value } : priceAndQuantity
			)
		);
	};
	const areAllFieldsFilled = () => {
		return array.every(
			(product) => product.price !== '' || 0 && product.quantity !== '' || 0
		);
	};

	const isAnyFieldEmptyOrZero = array.some(
		(value) =>
			value.price === '' ||
			value.quantity === '' ||
			value.price === 0 ||
			value.quantity === 0
	);

	const handleByIdProductQuantityNew = async (id: string) => {
		searchParams.set('quantity', quantityInputValueById);
		searchParams.delete('ids');
		setSearchParams(searchParams);
		if (quantityInputValueById === '') return;
		else {
			try {
				await setQuantityById({
					id: Number(id),
					quantity: searchParams.toString()
				});
				setQuantityInputValueById('');
				setQuantityItemIdInput(null);
			} catch (error) {
				console.error(error);
			}
		}
	};

	// useEffect(() => {
	// 	if (products.length === 0) {
	// 		return navigate('/admin/product-adding/part-3');
	// 	}
	// }, []);

	const changeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuantity(event.target.value);
	};

	const handleItemIdPriceInputActive = (id: number) => {
		if (!priceIds.includes(id)) {
			setPriceIds((prev) => [...prev, id]);
		} else {
			const filtred = priceIds.filter((c) => c !== id);
			setPriceIds(filtred);
		}
	};
	const handleItemIdQuantityInputActive = (id: number) => {
		if (!gadgetIds.includes(id)) {
			setGadgetIds((prev) => [...prev, id]);
		} else {
			const filtred = gadgetIds.filter((c) => c !== id);
			setGadgetIds(filtred);
		}
	};

	const handleOpenInputsNooActive = () => {
		// if (priceItemIdInput) {
		// 	setPriceItemIdInput(null);
		// }
		// if (quantityItemIdInput) {
		// 	setQuantityItemIdInput(null);
		// }
	};
	const handleAddPriceAndQuantityForProducts = async () => {
		const productsQuantutyAndPrice = array.map((product, index) => ({
			id: products[index].subGadgetId,
			price: Number(product.price),
			quantity: Number(product.quantity)
		}));
		console.log(productsQuantutyAndPrice, 'array price and quantity');

		try {
			await setPriceNadQuantityProductsApi(productsQuantutyAndPrice);
			navigate('/admin/product-adding/part-3');
		} catch (error) {
			console.error(error);
		}
	};



	console.log(products);
	return (
		<section className={scss.product}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.page_content_1}>
						<p className={scss.navigation_p}>
							<Link to={'/admin'}>
								<p>Товары »</p>
							</Link>{' '}
							<h3>Установка цены и количества товара</h3>
						</p>
						<div className={scss.border_div}>
							<h3>Установка цены и количества товара</h3>
							<div></div>
						</div>
					</div>

					<div
						className={scss.page_content_2}
						onClick={handleOpenInputsNooActive}
					>
						<div className={scss.nav_div}>
							<div className={scss.nav_one}>
								<h3>1</h3>
								<p>Добавление товара</p>
							</div>
							<div className={scss.line}></div>
							<div className={scss.nav_two}>
								<h3>2</h3>
								<p>Установка цены и количества товара</p>
							</div>
							<div className={scss.line}></div>
							<div className={scss.nav_three}>
								<h3>3</h3>
								<p>Описание и обзор</p>
							</div>
						</div>

						<div className={scss.price_div}>
							<div className={scss.price_and_quantity_labels}>
								<p>Общая цена</p>
								<p>Общая Кол-во товара</p>
							</div>
							<div className={scss.buttons_div}>
								<input
									type="number"
									value={price}
									onChange={(e) => setPrice(e.target.value)}
									// onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
									// 	if (e.key === 'Enter') {
									// 		products.map((el) => handlePatchNewPrice(el.subGadgetId));
									// 	}
									// }}
								/>
								<input
									type="number"
									value={quantity}
									onChange={changeQuantity}
									// onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
									// 	if (e.key === 'Enter') {
									// 		products.map((el) => handlePatchNewPrice(el.subGadgetId));
									// 	}
									// }}
								/>
								<button onClick={handlePatchNewPrice}>Установить цену</button>
							</div>
						</div>

						<div className={scss.full_table_div}>
							<div className={scss.table_div}>
								<div className={scss.col_one}>
									<p>Бренд</p>
									<p>Цвет</p>
									<p>Объем памяти</p>
									<p>Оперативная память</p>
									<p>Кол-во SIM-карт</p>
									<p>Дата выпуска</p>
								</div>
								<div className={scss.col_two}>
									<p>Кол-во товара</p>
									<p>Цена</p>
								</div>
							</div>

							<div className={scss.products_list_div}>
								{isLoading ? (
									<h3>Loading...</h3>
								) : (
									<>
										{products?.map((e, index) => (
											<div key={index} className={scss.products_list}>
												<div className={scss.col_one}>
													<p className={scss.brand_e}>{e.brandName}</p>
													<p className={scss.colour_e}>{e.mainColour}</p>
													<p className={scss.gb_e}>{e.memory}</p>
													<p className={scss.ram_e}>{e.ram}</p>
													<p className={scss.sim_e}>{e.countSim}</p>
													<p className={scss.date_e}>{e.releaseDate}</p>
													{/* {e.releaseDate &&
														e.releaseDate.map((el, index) => (
															<p className={scss.date_e} key={index + 1}>
																{el}
															</p>
														))} */}
												</div>
												<div className={scss.col_two}>
													{gadgetIds.includes(e.subGadgetId) ? (
														<Input
															className={scss.input_for_price_and_quantity}
															value={array[index].quantity}
															onChange={(
																e: React.ChangeEvent<HTMLInputElement>
															) =>
																changeArrayValues(
																	index,
																	'quantity',
																	e.target.value
																)
															}
															onKeyPress={(
																event: React.KeyboardEvent<HTMLInputElement>
															) => {
																if (event.key === 'Enter') {
																	handleByIdProductQuantityNew(
																		e.subGadgetId.toString()
																	);
																}
															}}
														/>
													) : (
														<p
															onClick={() =>
																handleItemIdQuantityInputActive(e.subGadgetId)
															}
															className={scss.product_e}
														>
															{e.quantity === 0 ? 0 : e.quantity}
														</p>
													)}
													{priceIds.includes(e.subGadgetId) ? (
														<Input
															className={scss.input_for_price_and_quantity}
															value={array[index].price}
															onChange={(
																e: React.ChangeEvent<HTMLInputElement>
															) =>
																changeArrayValues(
																	index,
																	'price',
																	e.target.value
																)
															}
															onKeyPress={(
																event: React.KeyboardEvent<HTMLInputElement>
															) => {
																if (event.key === 'Enter') {
																	handleByIdProductPriceNew(
																		e.subGadgetId.toString()
																	);
																}
															}}
														/>
													) : (
														<p
															onClick={() =>
																handleItemIdPriceInputActive(e.subGadgetId)
															}
															className={scss.price_e}
														>
															{e.price === null ? 0 : e.price} c
														</p>
													)}
												</div>
											</div>
										))}
									</>
								)}
							</div>
							{!isAnyFieldEmptyOrZero && areAllFieldsFilled() && (
								<div className={scss.button}>
									<button onClick={handleAddPriceAndQuantityForProducts}>
										Далее
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductPartTwo;
