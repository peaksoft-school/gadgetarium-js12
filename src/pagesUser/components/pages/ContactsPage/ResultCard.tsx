/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from '@mui/material';
import { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const MapComponent = () => {
	const [clickedCoordinates, setClickedCoordinates] = useState([
		42.875903, 74.628396
	]);
	const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

	const handleMouseDown = () => {
		setIsMouseDown(true);
	};

	const handleMouseUp = () => {
		setIsMouseDown(false);
	};
	const handleMapClick = (e: any) => {
		const clickedCoords = e.get('coords');
		setClickedCoordinates(clickedCoords);
	};

	useEffect(() => {
		if (!navigator.geolocation) {
			setError('Геолокация не поддерживается вашим браузером.');
		} else {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setClickedCoordinates([latitude, longitude]);
				},
				(error) => {
					setError(error.message);
				},
				{
					enableHighAccuracy: true,
					timeout: 5000,
					maximumAge: 0
				}
			);
		}
	}, []);

	return (
		<Container
			onMouseDown={isMouseDown}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			<YMaps>
				<Map
					defaultState={{
						center: [42.875903, 74.628396],
						zoom: 11
					}}
					width="100%"
					height="33.33vw"
					onClick={handleMapClick}
				>
					{clickedCoordinates && (
						<Placemark
							geometry={clickedCoordinates}
							properties={{
								hintContent: 'Ваше местоположение', // Подсказка при наведении на маркер
								balloonContent: 'Вы находитесь здесь' // Содержимое балуна (всплывающей подсказки)
							}}
							options={{
								preset: 'islands#redIcon' // Стиль маркера (синий флажок)
							}}
						/>
					)}
				</Map>
			</YMaps>
		</Container>
	);
};

const Container = styled('div')`
	/* margin-bottom: 7.5rem; */
	outline: 1px solid #c4c5c6;

	.ymaps-2-1-79-gototech {
		display: none;
	}
	.ymaps-2-1-79-map-copyrights-promo {
		display: none;
	}
	.ymaps-2-1-79-copyright__wrap {
		display: none;
	}
`;
function setError(message: string) {
  throw new Error('Function not implemented.');
}

