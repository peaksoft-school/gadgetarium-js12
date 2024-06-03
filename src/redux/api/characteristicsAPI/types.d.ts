/* eslint-disable @typescript-eslint/no-unused-vars */

type Коммуникации = {
	'Время полной зарядки': string;
	'Быстрая зарядка': string;
	Съемный: string;
	'Режим ожидания': string;
	Объем: string;
	'Беспроводная зарядка': string;
	'Тип аккумулятора': string;
	'Просмотр видео': string;
	Игры: string;
	'Макс. мощность зарядки': string;
	'Веб-серфинг': string;
	'Реверсивная зарядка': string;
};

interface ОсновнаяКамера {
	Разрешение: string;
	'Защита дисплея': string;
	'Макс. заявленная яркость в HDR': string;
	'Время отклика': string;
	'Поддержка HDR': string;
	'Цветовой охват sRGB': string;
	'Плотность пикселей': string;
	'Соотношение экрана к корпусу': string;
	'Соотношение сторон': string;
	Контрастность: string;
	'Адаптивная частота обновления': string;
	'Частота обновления': string;
	Тип: string;
	Размер: string;
	'ШИМ (PWM)': string;
	'Макс. заявленная яркость': string;
	Особенности: string;
}

type Другое = {
	'Сканер отпечатков пальцев': string;
	Толщина: string;
	Вес: string;
	'Доступные цвета': string;
	Водонепроницаемость: string;
	'Материал рамки': string;
	Высота: string;
	'Материал задней панели': string;
	Ширина: string;
};

interface Батарея {
	'Сенсоры и датчики': string;
	'Дата начала продаж': string;
	'Уровень излучения SAR для головы': string;
	'Уровень излучения SAR для тела': string;
	Класс: string;
	'Дата выхода': string;
}

interface Экран {
	'Разрешение фото': string;
	'Датчик глубины (TOF 3D)': string;
	'Размер сенсора': string;
	Автофокус: string;
	'Количество мегапикселей': string;
	Сенсор: string;
	Photo: string;
	Стабилизация: string;
	'Разрешение видео': string;
	'Размер пикселя': string;
	Video: string;
	Апертура: string;
	'Фокусное расстояние': string;
}

type Память = {
	'GPU-ядер': string;
	'Total score': string;
	Чипсет: string;
	'Частота GPU': string;
	UX: string;
	Stability: string;
	'Graphics test': string;
	Memory: string;
	CPU: string;
	Производство: string;
	GPU: string;
	Архитектура: string;
	'Размер транзистора': string;
	Графика: string;
	FLOPS: string;
	'Нейронный процессор': string;
	'CPU-ядер': string;
	'Пиковая температура корпуса': string;
	'Макс. частота': string;
	'Graphics score': string;
};

type Производительность = {
	'Версия Wi-Fi': string;
	'Функции USB': string;
	'Гибридный слот': string;
	GPS: string;
	'Количество SIM*': string;
	'Версия USB': string;
	'Поддержка eSIM*': string;
	'LTE Cat*': string;
	'2G сети': string;
	'Инфракрасный порт': string;
	'Поддержка 5G': string;
	'Версия Bluetooth': string;
	'Тип SIM': string;
	'4G сети': string;
	'Функции Wi-Fi': string;
	'Функции Bluetooth': string;
	'NFC*': string;
	'3G сети': string;
};

interface ФронтальнаяКамера {
	'FM-Радио': string;
	'Dolby Atmos': string;
	Динамики: string;
	'3.5 мм аудио порт': string;
}

type ДизайнИКорпус = {
	'Операционная система': string;
	'Размер системы из коробки': string;
};

interface ПрограммноеОбеспечение {
	'Тип памяти': string;
	'Карта памяти': string;
	'Частота памяти': string;
	'Тип накопителя': string;
	'Объем ОЗУ': string;
	'Количество каналов': string;
	'Объем накопителя': string;
}

type Звук = {
	'Разрешение фото': string;
	'Запись 8K видео': string;
	'Угол широкоугольного объектива': string;
	'Количество объективов': string;
	Автофокус: string;
	'Размер сенсора': string;
	Сенсор: string;
	Вспышка: string;
	Preview: string;
	Примеры: string;
	Стабилизация: string;
	Матрица: string;
	'Замедленная съемка': string;
	'Размер пикселя': string;
	'Запись 4K видео': string;
	Bokeh: string;
	Апертура: string;
	Zoom: string;
	'Запись 1080p видео': string;
	'Фокусное расстояние': string;
	Особенности: string;
	Зум: string;
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
