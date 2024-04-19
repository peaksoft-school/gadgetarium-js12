import { ProductsStore } from '@/src/ui/productsStore/ProductsStore';
import scss from './CategoryProduct.module.scss';
import { useState } from 'react';
import { NavbarProducts } from './NavbarProducts';
import { FiltredTypesProducts } from '@/src/types/typesProducts';
import { useNavigate } from 'react-router-dom';
import { IconXX } from '@/src/assets/icons';

const CategoryProduct = () => {
	const navigate = useNavigate();
	const [buttonBrand, setButtonBrand] = useState<boolean>(false);
	const [buttonBrand2, setButtonBrand2] = useState<boolean>(false);
	const [buttonBrand3, setButtonBrand3] = useState<boolean>(false);
	const [buttonBrand4, setButtonBrand4] = useState<boolean>(false);
	const [buttonBrand5, setButtonBrand5] = useState<boolean>(false);
	const [arrayProducts, setArrayProducts] = useState<FiltredTypesProducts[]>(
		[]
	);

	return (
		<div className={scss.CategoryProduct}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.divTexts}>
						<div className={scss.divContents}>
							<p className={scss.tagP} onClick={() => navigate('/')}>
								Главная »{' '}
							</p>
							<p>Смартфоны</p>
						</div>
						<h2>Cмартфоны</h2>
					</div>
					{/* <div className={scss.borderDiv}></div> */}
					<div className={scss.productInto}>
						<p>Найдено 167 Товаров</p>
						<div className={scss.buttonsDiv}>
							{buttonBrand ? (
								<button onClick={() => setButtonBrand(false)}>
									<span>Apple</span> <IconXX />
								</button>
							) : null}
							{buttonBrand2 ? (
								<button onClick={() => setButtonBrand2(false)}>
									<span>Samsung</span> <IconXX />
								</button>
							) : null}
							{buttonBrand3 ? (
								<button onClick={() => setButtonBrand3(false)}>
									<span>Huawei</span> <IconXX />
								</button>
							) : null}
							{buttonBrand4 ? (
								<button onClick={() => setButtonBrand4(false)}>
									<span>Honor</span> <IconXX />
								</button>
							) : null}
							{buttonBrand5 ? (
								<button onClick={() => setButtonBrand5(false)}>
									<span>Xiaomi</span> <IconXX />
								</button>
							) : null}
						</div>
					</div>
					<div className={scss.result}>
						<nav>
							<NavbarProducts
								setArrayProducts={setArrayProducts}
								setButtonBrand={setButtonBrand}
								setButtonBrand2={setButtonBrand2}
								setButtonBrand3={setButtonBrand3}
								setButtonBrand4={setButtonBrand4}
								setButtonBrand5={setButtonBrand5}
							/>
						</nav>
						<ProductsStore arrayProducts={arrayProducts} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryProduct;
