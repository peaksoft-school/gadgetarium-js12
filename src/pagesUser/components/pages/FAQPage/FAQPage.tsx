import { useState } from 'react';
import scss from './FAQPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { IconStateLeft } from '@/src/assets/icons';
import { FAQPageTexts } from '@/src/utils/ArrayIsFAQPageTexts';

const FAQPage = () => {
	const [openMenu1, setOpenMenu1] = useState<boolean>(false);
	const [openMenu2, setOpenMenu2] = useState<boolean>(false);
	const [openMenu3, setOpenMenu3] = useState<boolean>(false);
	const [openMenu4, setOpenMenu4] = useState<boolean>(false);
	const [openMenu5, setOpenMenu5] = useState<boolean>(false);
	const navigate = useNavigate();
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
							<div className={scss.containerMenu}>
								<div
									onClick={() => setOpenMenu1(!openMenu1)}
									className={scss.MainContent}
								>
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
										<IconStateLeft />
									</div>
								</div>
								{openMenu1 && (
									<div className={scss.divOpenMenuTexts}>
										<p key={FAQPageTexts.id}>{FAQPageTexts.text}</p>
									</div>
								)}
							</div>
							<div className={scss.containerMenu}>
								<div
									onClick={() => setOpenMenu2(!openMenu2)}
									className={scss.MainContent}
								>
									<div className={scss.content1}>
										<div
											className={
												openMenu1
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
										<IconStateLeft />
									</div>
								</div>
								{openMenu2 && (
									<div>
										<p key={FAQPageTexts.id}>{FAQPageTexts.text}</p>
									</div>
								)}
							</div>
							<div className={scss.containerMenu}>
								<div
									onClick={() => setOpenMenu3(!openMenu3)}
									className={scss.MainContent}
								>
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
										<IconStateLeft />
									</div>
								</div>
								{openMenu3 && (
									<div>
										<p key={FAQPageTexts.id}>{FAQPageTexts.text}</p>
									</div>
								)}
							</div>
							<div className={scss.containerMenu}>
								<div
									onClick={() => setOpenMenu4(!openMenu4)}
									className={scss.MainContent}
								>
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
										<IconStateLeft />
									</div>
								</div>
								{openMenu4 && (
									<div>
										<p key={FAQPageTexts.id}>{FAQPageTexts.text}</p>
									</div>
								)}
							</div>
							<div className={scss.containerMenu}>
								<div
									onClick={() => setOpenMenu5(!openMenu5)}
									className={scss.MainContent}
								>
									<div className={scss.content1}>
										<div
											className={
												openMenu5
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
											openMenu5
												? `${scss.iconNooActive} ${scss.iconActive}`
												: `${scss.iconNooActive}`
										}
									>
										<IconStateLeft />
									</div>
								</div>
								{openMenu5 && (
									<div>
										<p key={FAQPageTexts.id}>{FAQPageTexts.text}</p>
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

export default FAQPage;
