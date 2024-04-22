/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import scss from './MapComponent.module.scss';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
type Coordinates = [number, number];

export const MapComponent = () => {
	const [clickedCoordinates, setClickedCoordinates] =
		useState<Coordinates | null>(null);
	const [_, setIsMouseDown] = useState<boolean>(false);

	const handleMouseDown = () => {
		setIsMouseDown(true);
	};

	const handleMouseUp = () => {
		setIsMouseDown(false);
	};

	// const handleMapClick = (event: React.PropsWithChildren<MouseEvent>) => {
	// 	const clickedCoords: Coordinates = event.get('coords') as Coordinates;
	// 	setClickedCoordinates(clickedCoords);
	// };

	const handleMapClick = (event: any) => {
		const clickedCoords: Coordinates = event.get('coords') as Coordinates;
		setClickedCoordinates(clickedCoords);
	};

	useEffect(() => {
		if (!navigator.geolocation) {
			throw new Error('Геолокация не поддерживается вашим браузером.');
		} else {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setClickedCoordinates([latitude, longitude]);
				},
				(error) => {
					throw new Error(error.message);
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
		<div
			className={scss.Container}
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
								hintContent: 'Ваше местоположение',
								balloonContent: 'Вы находитесь здесь'
							}}
							options={{
								preset: 'islands#redIcon'
							}}
						/>
					)}
				</Map>
			</YMaps>
		</div>
	);
};
