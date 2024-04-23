import { useState } from 'react';
import scss from './FAQ.module.scss';
import { useNavigate } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';

const faqData = [
	{
		question: 'Как можно оплатить заказ?',
		answer: [
			'Urna aliquet dignissim pharetra consectetur commodo pellentesque at tellus. Odio eget scelerisque faucibus ut. Cras amet, diam vel, sollicitudin gravida quis augue.',
			'Bibendum et nulla accumsan sollicitudin aliquet velit viverra risus. Eget molestie enim quisque sodales habitant nulla tincidunt. Ullamcorper tincidunt purus sed facilisis.',
			'Ullamcorper aliquam gravida aliquet felis iaculis urna diam dui id. Consectetur in sagittis, sagittis, diam fames ac morbi convallis. Convallis vitae vel luctus erat tempus. Proin feugiat nisl egestas neque facilisi porta ipsum. At',
			'diam ut diam euismod sit fames tellus amet. In tortor placerat dictum faucibus id. Amet facilisis blandit dignissim sed nisl fermentum molestie pretium non.'
		]
	},
	{
		question: 'Какой минимальный заказ?',
		answer: [
			'Urna aliquet dignissim pharetra consectetur commodo pellentesque at tellus. Odio eget scelerisque faucibus ut. Cras amet, diam vel, sollicitudin gravida quis augue.',
			'Bibendum et nulla accumsan sollicitudin aliquet velit viverra risus. Eget molestie enim quisque sodales habitant nulla tincidunt. Ullamcorper tincidunt purus sed facilisis.',
			'Ullamcorper aliquam gravida aliquet felis iaculis urna diam dui id. Consectetur in sagittis, sagittis, diam fames ac morbi convallis. Convallis vitae vel luctus erat tempus. Proin feugiat nisl egestas neque facilisi porta ipsum. At',
			'diam ut diam euismod sit fames tellus amet. In tortor placerat dictum faucibus id. Amet facilisis blandit dignissim sed nisl fermentum molestie pretium non.'
		]
	},
	{
		question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
		answer: [
			'Urna aliquet dignissim pharetra consectetur commodo pellentesque at tellus. Odio eget scelerisque faucibus ut. Cras amet, diam vel, sollicitudin gravida quis augue.',
			'Bibendum et nulla accumsan sollicitudin aliquet velit viverra risus. Eget molestie enim quisque sodales habitant nulla tincidunt. Ullamcorper tincidunt purus sed facilisis.',
			'Ullamcorper aliquam gravida aliquet felis iaculis urna diam dui id. Consectetur in sagittis, sagittis, diam fames ac morbi convallis. Convallis vitae vel luctus erat tempus. Proin feugiat nisl egestas neque facilisi porta ipsum. At',
			'diam ut diam euismod sit fames tellus amet. In tortor placerat dictum faucibus id. Amet facilisis blandit dignissim sed nisl fermentum molestie pretium non.'
		]
	},
	{
		question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
		answer: [
			'Urna aliquet dignissim pharetra consectetur commodo pellentesque at tellus. Odio eget scelerisque faucibus ut. Cras amet, diam vel, sollicitudin gravida quis augue.',
			'Bibendum et nulla accumsan sollicitudin aliquet velit viverra risus. Eget molestie enim quisque sodales habitant nulla tincidunt. Ullamcorper tincidunt purus sed facilisis.',
			'Ullamcorper aliquam gravida aliquet felis iaculis urna diam dui id. Consectetur in sagittis, sagittis, diam fames ac morbi convallis. Convallis vitae vel luctus erat tempus. Proin feugiat nisl egestas neque facilisi porta ipsum. At',
			'diam ut diam euismod sit fames tellus amet. In tortor placerat dictum faucibus id. Amet facilisis blandit dignissim sed nisl fermentum molestie pretium non.'
		]
	},
	{
		question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
		answer: [
			'Urna aliquet dignissim pharetra consectetur commodo pellentesque at tellus. Odio eget scelerisque faucibus ut. Cras amet, diam vel, sollicitudin gravida quis augue.',
			'Bibendum et nulla accumsan sollicitudin aliquet velit viverra risus. Eget molestie enim quisque sodales habitant nulla tincidunt. Ullamcorper tincidunt purus sed facilisis.',
			'Ullamcorper aliquam gravida aliquet felis iaculis urna diam dui id. Consectetur in sagittis, sagittis, diam fames ac morbi convallis. Convallis vitae vel luctus erat tempus. Proin feugiat nisl egestas neque facilisi porta ipsum. At',
			'diam ut diam euismod sit fames tellus amet. In tortor placerat dictum faucibus id. Amet facilisis blandit dignissim sed nisl fermentum molestie pretium non.'
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
