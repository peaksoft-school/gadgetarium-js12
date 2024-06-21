/* eslint-disable @typescript-eslint/no-unused-vars */

type Коммуникации = {
	'2G сети': string;
	'3G сети': string;
	'4G сети': string;
	DisplayPort: string;
	GPS: string;
	'LTE Cat*': string;
	'NFC*': string;
	'Версия Bluetooth': string;
	'Версия USB': string;
	'Версия Wi-Fi': string;
	'Гибридный слот': string;
	'Инфракрасный порт': string;
	'Поддержка 5G': string;
	'Поддержка eSIM*': string;
	'Тип SIM': string;
	'Тип USB': string;
	'Функции Bluetooth': string;
	'Функции USB': string;
	'Функции Wi-Fi': string;
};

interface ОсновнаяКамера {
	Bokeh: string;
	Preview: string;
	Zoom: string;
	Автофокус: string;
	Апертура: string;
	Вспышка: string;
	'Запись 4K видео': string;
	'Запись 8K видео': string;
	'Запись 1080p видео': string;
	Зум: string;
	'Количество объективов': string;
	Матрица: string;
	Особенности: string;
	Примеры: string;
	'Размер пикселя': string;
	'Размер сенсора': string;
	'Разрешение фото': string;
	Сенсор: string;
	Стабилизация: string;
	'Угол широкоугольного объектива': string;
	'Фокусное расстояние': string;
}

type Другое = {
	'Дата выхода': string;
	'Дата начала продаж': string;
	'Зарядное устройство из коробки': string;
	Класс: string;
	'Сенсоры и датчики': string;
	'Уровень излучения SAR для головы': string;
	'Уровень излучения SAR для тела': string;
};

interface Батарея {
	'Беспроводная зарядка': string;
	'Быстрая зарядка': string;
	'Веб-серфинг': string;
	'Время полной зарядки': string;
	Игры: string;
	'Макс. мощность зарядки': string;
	Объем: string;
	'Просмотр видео': string;
	'Реверсивная зарядка': string;
	'Режим ожидания': string;
	Съемный: string;
	'Тип аккумулятора': string;
}

interface Экран {
	'Адаптивная частота обновления': string;
	'Время отклика': string;
	'Защита дисплея': string;
	Контрастность: string;
	'Макс. заявленная яркость': string;
	'Макс. заявленная яркость в HDR': string;
	Особенности: string;
	'Плотность пикселей': string;
	'Поддержка HDR': string;
	Размер: string;
	Разрешение: string;
	'Соотношение сторон': string;
	'Соотношение экрана к корпусу': string;
	Тип: string;
	'Цветовой охват sRGB': string;
	'Частота обновления': string;
	'ШИМ (PWM)': string;
}

type Память = {
	'Карта памяти': string;
	'Количество каналов': string;
	'Объем ОЗУ': string;
	'Объем накопителя': string;
	'Тип накопителя': string;
	'Тип памяти': string;
	'Частота памяти': string;
};

type Производительность = {
	CPU: string;
	'CPU-ядер': string;
	FLOPS: string;
	GPU: string;
	'GPU-ядер': string;
	'Graphics score': string;
	'Graphics test': string;
	Memory: string;
	Stability: string;
	'Total score': string;
	UX: string;
	Архитектура: string;
	Графика: string;
	'Макс. частота': string;
	'Нейронный процессор': string;
	'Пиковая температура корпуса': string;
	Производство: string;
	'Размер транзистора': string;
	'Частота GPU': string;
	Чипсет: string;
};

interface ФронтальнаяКамера {
	Автофокус: string;
	Апертура: string;
	'Датчик глубины (TOF 3D)': string;
	'Количество мегапикселей': string;
	'Размер пикселя': string;
	'Размер сенсора': string;
	'Разрешение видео': string;
	'Разрешение фото': string;
	Сенсор: string;
	Стабилизация: string;
	'Фокусное расстояние': string;
}

type ДизайнИКорпус = {
	Вес: string;
	Водонепроницаемость: string;
	Высота: string;
	'Доступные цвета': string;
	'Материал задней панели': string;
	'Материал рамки': string;
	'Сканер отпечатков пальцев': string;
	Толщина: string;
	Ширина: string;
};

interface ПрограммноеОбеспечение {
	'Операционная система': string;
	'Размер системы из коробки': string;
}

type Звук = {
	'3.5 мм аудио порт': string;
	'Dolby Atmos': string;
	'FM-Радио': string;
	Динамики: string;
};

interface MainCharacteristics {
	Коммуникации: Коммуникации;
	'Основная камера': ОсновнаяКамера;
	Другое: Другое;
	Батарея: Батарея;
	Экран: Экран;
	Память: Память;
	Производительность: Производительность;
	'Фронтальная камера': ФронтальнаяКамера;
	'Дизайн и корпус': ДизайнИКорпус;
	'Программное обеспечение': ПрограммноеОбеспечение;
	Звук: Звук;
}

namespace CHARACTERISTICS {
	type GetCharacteristicsRequest = string;
	type GetCharacteristicsResponse = {
		id: number;
		mainCharacteristics: MainCharacteristics;
	};
}
