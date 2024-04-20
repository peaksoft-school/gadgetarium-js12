import React, { useState } from 'react';
import { useGetAccessoriesQuery } from '@/src/redux/api/AccessoriesProducts/AccessoriesProducts';
import scss from './Accessories.module.scss';
import logo from '@/src/assets/Group 1619.png';
import logo2 from '@/src/assets/Frame 153.png';

const Accessories = () => {
	const { data: accessoriesProducts = [], isLoading } =
		useGetAccessoriesQuery();
	const [displayIndexCount, setDisplayIndexCount] = useState(5);

	const handleShowMore = () => {
		setDisplayIndexCount((prevCount) => prevCount + 5);
	};

	return (
		<div className={scss.divAccessories}>
			<>
				{isLoading ? (
					<>
						<h1>IsLoading...</h1>
					</>
				) : (
					accessoriesProducts.slice(0, displayIndexCount).map((item) => (
						<div className={scss.divAccessoriesProduct} key={item._id}>
							<img className={scss.img} src={logo} alt={item.producName} />
							<div className={scss.productsDiv}>
								<p>{item.producName}</p>
								<p className={scss.p}>
									Рейтинг <img src={logo2} alt={item.producName} />{' '}
									{item.Rating}
								</p>
								<h2>{item.price}</h2>
							</div>
						</div>
					))
				)}
			</>
			{accessoriesProducts.length > displayIndexCount && (
				<button onClick={handleShowMore}>Показать ещё</button>
			)}
		</div>
	);
};

export default Accessories;
