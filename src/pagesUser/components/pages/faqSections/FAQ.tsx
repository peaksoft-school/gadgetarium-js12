/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import scss from './FAQ.module.scss';
import { useNavigate } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';

const faqData = [
	{
		question: 'Как можно оплатить заказ?',
		answer: [
			'Вы можете оплатить ваш заказ в проекте Gadgetarium следующими способами:',
			'Оплата картой онлайн: Вы можете использовать вашу банковскую карту для моментальной онлайн-оплаты нашего товара.',
			'	Наличными при получении: Вы можете оплатить заказ наличными деньгами, когда получите его. Этот способ оплаты доступен для самовывоза из магазина и при доставке по городу.',
			'Оплата картой при получении: Если вы предпочитаете оплату банковской картой, вы можете сделать это при получении заказа. Этот вариант также доступен для самовывоза из магазина и при доставке.',
			'	Помимо этого, мы также предоставляем удобные варианты доставки в городе Бишкек и регионах. В городе доставка стоит 200 сомов, но при покупке свыше 10 000 сомов она бесплатна.',
			'Примечание: Предоплата не требуется, что делает процесс заказа удобным и безопасным для наших клиентов.'
		]
	},
	{
		question: 'Какой минимальный заказ?',
		answer: [
			'Минимальный заказ не установлен. Вы можете делать заказы на любую сумму, которая соответствует',
			'вашим потребностям и предпочтениям. Мы не накладываем ограничений на минимальную сумму',
			'заказа, чтобы сделать покупки у нас максимально удобными для наших клиентов.'
		]
	},
	{
		question:
			'Moгy ли я вернуть или обменять товар, если он не удовлетворяет моим ожиданиям?',
		answer: [
			'Да, конечно. Если вы обнаружите какие-либо дефекты или неудовлетворительное качество товара,',
			'свяжитесь с нашей службой поддержки клиентов в течение 14 дней после получения заказа. Мы',
			'рассмотрим ваш запрос на возврат или обмен и предоставим вам необходимую помощь. Убедитесь, что',
			' товар остается в исходной упаковке и имеет все заводские ярлыки.'
		]
	},
	{
		question: 'Каковы сроки доставки заказов?',
		answer: [
			'Мы стремимся обеспечить быструю доставку вашего заказа. Время доставки может варьироваться в ',
			'зависимости от вашего местоположения. В городе Бишкек мы обычно доставляем заказы в течение 1-2',
			'рабочих дней. Для регионов Кыргызстана сроки могут быть немного дольше. Мы также предоставляем',
			' бесплатную доставку при покупках свыше 10 000 сомов.'
		]
	},
	{
		question: 'Как связаться c вашей службой поддержки клиентов?',
		answer: [
			'Вы можете связаться c нашей службой поддержки клиентов по следующим контактам:',
			'Телефон: +996 (500) 34 44 33',
			'Электронная почта: gadgetarium.kg',
			'Наши специалисты готовы ответить на ваши вопросы и предоставить необходимую помощь c понедельника по пятницу c 10:00 до 21:00.'
		]
	}
];

const FAQ = () => {
	const [openMenu, setOpenMenu] = useState<number | null>(null);
	const navigate = useNavigate();

	const handleOpenMenu = (index: number) => {
		setOpenMenu(openMenu === index ? null : index);
	};

	return (
		<section className={scss.FAQPage}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.pageContent1}>
						<p onClick={() => navigate('/')}>
							Главная » <h3>FAG</h3>
						</p>
						<div className={scss.divTextAndBorderDiv}>
							<h3>FAG</h3>
							<div></div>
						</div>
					</div>
					<div className={scss.pageContent2}>
						<h3>Часто задаваемые вопросы</h3>
						<div className={scss.openMenuDiv}>
							{faqData.map((item, index) => (
								<div
									key={index}
									className={scss.containerMenu}
									onClick={() => handleOpenMenu(index)}
								>
									<div className={scss.MainContent}>
										<div className={scss.content1}>
											<div
												className={
													openMenu === index
														? `${scss.nooActiveDiv} ${scss.activeDiv}`
														: `${scss.nooActiveDiv}`
												}
											>
												<p>{index + 1}</p>
											</div>
											<h3>{item.question}</h3>
										</div>
										<div
											className={
												openMenu === index
													? `${scss.iconNooActive} ${scss.iconActive}`
													: `${scss.iconNooActive}`
											}
										>
											<IconArrowRight style={{ color: 'rgb(203, 17, 171)' }} />
										</div>
									</div>
									<div
										className={
											openMenu === index
												? `${scss.divOpenMenuTexts} ${scss.divActive}`
												: `${scss.divOpenMenuTexts}`
										}
									>
										{item.answer.map((text, idx) => (
											<p key={idx}>{text}</p>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
