// import React, { useEffect, useState } from 'react';
// import colorList from 'color-name-list';

// interface ColorNameComponentTypes {
// 	colorHash: string;
// }

// const ColorNameComponent: React.FC<ColorNameComponentTypes> = ({
// 	colorHash
// }) => {
// 	const [colorName, setColorName] = useState<string>('');
// 	const [colorHex, setColorHex] = useState<string>('');

// 	useEffect(() => {
// 		console.log('colorList:', colorList); // Проверим, что импортируется
// 	}, []);

// 	const handleInputChange = () => {
// 		const colorArray = Array.isArray(colorList)
// 			? colorList
// 			: Object.values(colorList);
// 		const color = colorArray.find(
// 			(color: any) =>
// 				color.hex && color.hex.toLowerCase() === colorHash.toLowerCase()
// 		);
// 		if (color) {
// 			setColorName(color.name);
// 			setColorHex(color.hex);
// 		} else {
// 			setColorName('Неизвестный цвет');
// 			setColorHex('');
// 		}
// 	};

// 	useEffect(() => {
// 		handleInputChange();
// 	}, [colorHash]);

// 	return (
// 		<div>
// 			{colorHash && (
// 				<div>
// 					<p>Цвет: {colorName}</p>
// 					<p>HEX: {colorHex}</p>
// 					<div
// 						style={{
// 							backgroundColor: colorHex,
// 							width: '100px',
// 							height: '100px'
// 						}}
// 					></div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default ColorNameComponent;
