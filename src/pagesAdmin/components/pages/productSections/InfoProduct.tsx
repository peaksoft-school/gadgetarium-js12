// /* eslint-disable @typescript-eslint/no-unused-vars */
// import scss from './InfoProduct.module.scss';
// import { ReactNode, useState } from 'react';
// // import { Tabs } from 'antd';
// // import type { TabsProps } from 'antd';
// import { CharacteristicsPage } from './CharacteristicsPage';
// import DescriptionPage from './DescriptionPage';
// import ReviewsPage from './ReviewsPage';
// import { IconBurgerMenu } from '@/src/assets/icons';

// interface ComponentsTypesArray {
// 	children: ReactNode;
// 	id: number;
// }

// const ComponentArray: ComponentsTypesArray[] = [
// 	{
// 		id: 1,
// 		children: <DescriptionPage />
// 	},
// 	{
// 		id: 2,
// 		children: <CharacteristicsPage />
// 	},
// 	{
// 		id: 3,
// 		children: <ReviewsPage />
// 	}
// ];
// console.log(ComponentArray);

// const InfoProduct = () => {
// 	const [component, setComponent] = useState<number>(1);
// 	const [result, setResult] = useState<number>(0);

// 	return (
// 		<div className={scss.ContainerInfoProduct}>
// 			<div className="container">
// 				<div className={scss.content}>
// 					<div className={scss.navbar_product_info_buttons}>
// 						<nav>
// 							<ul>
// 								<p
// 									className={
// 										component === 1
// 											? `${scss.nooActive} ${scss.active}`
// 											: `${scss.nooActive}`
// 									}
// 									onClick={() => {
// 										setComponent(1);
// 										setResult(0);
// 									}}
// 								>
// 									Описание
// 								</p>
// 								<div
// 									className={
// 										component === 1
// 											? `${scss.nooActiveDiv} ${scss.activeDiv}`
// 											: `${scss.nooActiveDiv}`
// 									}
// 								></div>
// 							</ul>
// 							<ul>
// 								<p
// 									className={
// 										component === 2
// 											? `${scss.nooActive} ${scss.active}`
// 											: `${scss.nooActive}`
// 									}
// 									onClick={() => {
// 										setComponent(2);
// 										setResult(1);
// 									}}
// 								>
// 									Характеристики
// 								</p>
// 								<div
// 									className={
// 										component === 2
// 											? `${scss.nooActiveDiv} ${scss.activeDiv}`
// 											: `${scss.nooActiveDiv}`
// 									}
// 								></div>
// 							</ul>
// 							<ul>
// 								<p
// 									className={
// 										component === 3
// 											? `${scss.nooActive} ${scss.active}`
// 											: `${scss.nooActive}`
// 									}
// 									onClick={() => {
// 										setComponent(3);
// 										setResult(2);
// 									}}
// 								>
// 									Отзывы
// 								</p>
// 								<div
// 									className={
// 										component === 3
// 											? `${scss.nooActiveDiv} ${scss.activeDiv}`
// 											: `${scss.nooActiveDiv}`
// 									}
// 								></div>
// 							</ul>
// 						</nav>

// 						<div className={scss.document_content_div}>
// 							<IconBurgerMenu />
// 							<p>Скачать документ.pdf</p>
// 						</div>
// 					</div>
// 					{ComponentArray.slice(result, component).map((item) => (
// 						<div key={item.id}>{item.children}</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default InfoProduct;
