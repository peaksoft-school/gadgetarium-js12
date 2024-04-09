// import { ProductsStore } from '@/src/UI/productsStore/ProductsStore';
import scss from './CategoryProduct.module.scss';
import { NavbarProducts } from './NavbarProducts';

const CategoryProduct = () => {
	return (
		<div className={scss.CategoryProduct}>
			<div className="container">
				<div className={scss.content}>
					<nav>
						<NavbarProducts />
					</nav>
					{/* <ProductsStore /> */}
				</div>
			</div>
		</div>
	);
};

export default CategoryProduct;
