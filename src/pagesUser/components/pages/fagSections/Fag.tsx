/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import scss from './Fag.module.scss';
import { useNavigate } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';

type ArrayTextTypes = {
	text: string;
	text2: string;
	text3: string;
	text4: string;
};

const ArrayText: ArrayTextTypes[] = [
	{
		text: 'Urna aliquet dignissim pharetra consectetur commodo pellentesque at tellus. Odio eget scelerisque faucibus ut. Cras amet, diam vel, sollicitudin gravida quis augue.',
		text2:
			'Bibendum et nulla accumsan sollicitudin aliquet velit viverra risus. Eget molestie enim quisque sodales habitant nulla tincidunt. Ullamcorper tincidunt purus sed facilisis.',
		text3:
			'	Ullamcorper aliquam gravida aliquet felis iaculis urna diam dui id. Consectetur in sagittis, sagittis, diam fames ac morbi convallis. Convallis vitae vel luctus erat tempus. Proin feugiat nisl egestas neque facilisi porta ipsum. At',
		text4:
			'		diam ut diam euismod sit fames tellus amet. In tortor placerat dictum faucibus id. Amet facilisis blandit dignissim sed nisl fermentum molestie pretium non.'
	}
];
const Fag = () => {
	const [openMenu1, setOpenMenu1] = useState<boolean>(false);
	const [openMenu2, setOpenMenu2] = useState<boolean>(false);
	const [openMenu3, setOpenMenu3] = useState<boolean>(false);
	const [openMenu4, setOpenMenu4] = useState<boolean>(false);
	const [openMenu5, setOpenMenu5] = useState<boolean>(false);
	const navigate = useNavigate();
	const handleOpenMenu = (
		valueBoolean: React.Dispatch<React.SetStateAction<boolean>>,
		value: boolean
	): void => {
		setTimeout(() => {
			valueBoolean(!value);
		}, 355);
	};

	const handleOpenMenuResult2 = (
		valueBoolean: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		setTimeout(() => {
			valueBoolean(false);
		}, 355);
	};
	const handleOpenMenuResult3 = (
		valueBoolean: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		setTimeout(() => {
			valueBoolean(false);
		}, 355);
	};
	const handleOpenMenuResult4 = (
		valueBoolean: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		setTimeout(() => {
			valueBoolean(false);
		}, 355);
	};
	const handleOpenMenuResult5 = (
		valueBoolean: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		setTimeout(() => {
			valueBoolean(false);
		}, 355);
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
							<div
								className={scss.containerMenu}
								onClick={() => {
									handleOpenMenu(setOpenMenu1, openMenu1);
									handleOpenMenuResult2(setOpenMenu2);
									handleOpenMenuResult3(setOpenMenu3);
									handleOpenMenuResult4(setOpenMenu4);
									handleOpenMenuResult5(setOpenMenu5);
								}}
							>
								<div className={scss.MainContent}>
									<div className={scss.content1}>
										<div
											className={
												openMenu1
													? `${scss.nooActiveDiv} ${scss.activeDiv}`
													: `${scss.nooActiveDiv}`
											}
										>
											<p>1</p>
										</div>
										<h3>Как можно оплатить заказ?</h3>
									</div>
									<div
										className={
											openMenu1
												? `${scss.iconNooActive} ${scss.iconActive}`
												: `${scss.iconNooActive}`
										}
									>
										<IconArrowRight style={{ color: 'rgb(203, 17, 171)' }} />
									</div>
								</div>
								<div
									className={
										openMenu1
											? `${scss.divOpenMenuTexts} ${scss.divActive}`
											: `${scss.divOpenMenuTexts}`
									}
								>
									{ArrayText.map((item, index) => (
										<>
											<p key={index}>{item.text}</p>
											<p key={index}>{item.text2}</p>
											<p key={index}>{item.text3}</p>
											<p key={index}>{item.text4}</p>
										</>
									))}
								</div>
							</div>
							<div
								className={scss.containerMenu}
								onClick={() => {
									handleOpenMenu(setOpenMenu2, openMenu2);
									handleOpenMenuResult2(setOpenMenu1);
									handleOpenMenuResult3(setOpenMenu3);
									handleOpenMenuResult4(setOpenMenu5);
									handleOpenMenuResult5(setOpenMenu4);
								}}
							>
								<div className={scss.MainContent}>
									<div className={scss.content1}>
										<div
											className={
												openMenu2
													? `${scss.nooActiveDiv} ${scss.activeDiv}`
													: `${scss.nooActiveDiv}`
											}
										>
											<p>2</p>
										</div>
										<h3>Какой мининимальный заказ?</h3>
									</div>
									<div
										className={
											openMenu2
												? `${scss.iconNooActive} ${scss.iconActive}`
												: `${scss.iconNooActive}`
										}
									>
										<IconArrowRight style={{ color: 'rgb(203, 17, 171)' }} />
									</div>
								</div>

								<div
									className={
										openMenu2
											? `${scss.divOpenMenuTexts} ${scss.divActive}`
											: `${scss.divOpenMenuTexts}`
									}
								>
									{ArrayText.map((item, index) => (
										<>
											<p key={index}>{item.text}</p>
											<p key={index}>{item.text2}</p>
											<p key={index}>{item.text3}</p>
											<p key={index}>{item.text4}</p>
										</>
									))}
								</div>
							</div>
							<div
								className={scss.containerMenu}
								onClick={() => {
									handleOpenMenu(setOpenMenu3, openMenu3);
									handleOpenMenuResult2(setOpenMenu1);
									handleOpenMenuResult3(setOpenMenu2);
									handleOpenMenuResult4(setOpenMenu5);
									handleOpenMenuResult5(setOpenMenu4);
								}}
							>
								<div className={scss.MainContent}>
									<div className={scss.content1}>
										<div
											className={
												openMenu3
													? `${scss.nooActiveDiv} ${scss.activeDiv}`
													: `${scss.nooActiveDiv}`
											}
										>
											<p>3</p>
										</div>
										<h3>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit?
										</h3>
									</div>
									<div
										className={
											openMenu3
												? `${scss.iconNooActive} ${scss.iconActive}`
												: `${scss.iconNooActive}`
										}
									>
										<IconArrowRight style={{ color: 'rgb(203, 17, 171)' }} />
									</div>
								</div>

								<div
									className={
										openMenu3
											? `${scss.divOpenMenuTexts} ${scss.divActive}`
											: `${scss.divOpenMenuTexts}`
									}
								>
									{ArrayText.map((item, index) => (
										<>
											<p key={index}>{item.text}</p>
											<p key={index}>{item.text2}</p>
											<p key={index}>{item.text3}</p>
											<p key={index}>{item.text4}</p>
										</>
									))}
								</div>
							</div>
							<div
								className={scss.containerMenu}
								onClick={() => {
									handleOpenMenu(setOpenMenu4, openMenu4);
									handleOpenMenuResult2(setOpenMenu1);
									handleOpenMenuResult3(setOpenMenu3);
									handleOpenMenuResult4(setOpenMenu5);
									handleOpenMenuResult5(setOpenMenu2);
								}}
							>
								<div className={scss.MainContent}>
									<div className={scss.content1}>
										<div
											className={
												openMenu4
													? `${scss.nooActiveDiv} ${scss.activeDiv}`
													: `${scss.nooActiveDiv}`
											}
										>
											<p>4</p>
										</div>
										<h3>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit?
										</h3>
									</div>
									<div
										className={
											openMenu4
												? `${scss.iconNooActive} ${scss.iconActive}`
												: `${scss.iconNooActive}`
										}
									>
										<IconArrowRight style={{ color: 'rgb(203, 17, 171)' }} />
									</div>
								</div>

								<div
									className={
										openMenu4
											? `${scss.divOpenMenuTexts} ${scss.divActive}`
											: `${scss.divOpenMenuTexts}`
									}
								>
									{ArrayText.map((item, index) => (
										<>
											<p key={index}>{item.text}</p>
											<p key={index}>{item.text2}</p>
											<p key={index}>{item.text3}</p>
											<p key={index}>{item.text4}</p>
										</>
									))}
								</div>
							</div>
							<div
								className={scss.containerMenu}
								onClick={() => {
									handleOpenMenu(setOpenMenu5, openMenu5);
									handleOpenMenuResult2(setOpenMenu1);
									handleOpenMenuResult3(setOpenMenu3);
									handleOpenMenuResult4(setOpenMenu2);
									handleOpenMenuResult5(setOpenMenu4);
								}}
							>
								<div className={scss.MainContent}>
									<div className={scss.content1}>
										<div
											className={
												openMenu5
													? `${scss.nooActiveDiv} ${scss.activeDiv}`
													: `${scss.nooActiveDiv}`
											}
										>
											<p>5</p>
										</div>
										<h3>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit?
										</h3>
									</div>
									<div
										className={
											openMenu5
												? `${scss.iconNooActive} ${scss.iconActive}`
												: `${scss.iconNooActive}`
										}
									>
										<IconArrowRight style={{ color: 'rgb(203, 17, 171)' }} />
									</div>
								</div>
								{openMenu5 && (
									<div
										className={
											openMenu5
												? `${scss.divOpenMenuTexts} ${scss.divActive}`
												: `${scss.divOpenMenuTexts}`
										}
									>
										{ArrayText.map((item, index) => (
											<>
												<p key={index}>{item.text}</p>
												<p key={index}>{item.text2}</p>
												<p key={index}>{item.text3}</p>
												<p key={index}>{item.text4}</p>
											</>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Fag;
