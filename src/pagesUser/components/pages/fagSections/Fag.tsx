import { useState } from 'react';
import scss from './Fag.module.scss';
import { useNavigate } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';

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
									onClick={() => handleOpenMenu(setOpenMenu1, openMenu1)}
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
										<IconArrowRight />
									</div>
								</div>
								<div
									className={
										openMenu1
											? `${scss.divOpenMenuTexts} ${scss.divActive}`
											: `${scss.divOpenMenuTexts}`
									}
								>
									<p>
										Urna aliquet dignissim pharetra consectetur commodo
										pellentesque at tellus. Odio eget scelerisque faucibus ut.
										Cras amet, diam vel, sollicitudin gravida quis augue.
									</p>
									<p>
										{' '}
										Bibendum et nulla accumsan sollicitudin aliquet velit
										viverra risus. Eget molestie enim quisque sodales habitant
										nulla tincidunt. Ullamcorper tincidunt purus sed facilisis.
									</p>
									<p>
										{' '}
										Ullamcorper aliquam gravida aliquet felis iaculis urna diam
										dui id. Consectetur in sagittis, sagittis, diam fames ac
										morbi convallis. Convallis vitae vel luctus erat tempus.
										Proin feugiat nisl egestas neque facilisi porta ipsum. At
									</p>
									<p>
										{' '}
										diam ut diam euismod sit fames tellus amet. In tortor
										placerat dictum faucibus id. Amet facilisis blandit
										dignissim sed nisl fermentum molestie pretium non.
									</p>
								</div>
							</div>
							<div className={scss.containerMenu}>
								<div
									onClick={() => handleOpenMenu(setOpenMenu2, openMenu2)}
									className={scss.MainContent}
								>
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
										<IconArrowRight />
									</div>
								</div>

								<div
									className={
										openMenu2
											? `${scss.divOpenMenuTexts} ${scss.divActive}`
											: `${scss.divOpenMenuTexts}`
									}
								>
									<p>
										Urna aliquet dignissim pharetra consectetur commodo
										pellentesque at tellus. Odio eget scelerisque faucibus ut.
										Cras amet, diam vel, sollicitudin gravida quis augue.
									</p>
									<p>
										{' '}
										Bibendum et nulla accumsan sollicitudin aliquet velit
										viverra risus. Eget molestie enim quisque sodales habitant
										nulla tincidunt. Ullamcorper tincidunt purus sed facilisis.
									</p>
									<p>
										{' '}
										Ullamcorper aliquam gravida aliquet felis iaculis urna diam
										dui id. Consectetur in sagittis, sagittis, diam fames ac
										morbi convallis. Convallis vitae vel luctus erat tempus.
										Proin feugiat nisl egestas neque facilisi porta ipsum. At
									</p>
									<p>
										{' '}
										diam ut diam euismod sit fames tellus amet. In tortor
										placerat dictum faucibus id. Amet facilisis blandit
										dignissim sed nisl fermentum molestie pretium non.
									</p>
								</div>
							</div>
							<div className={scss.containerMenu}>
								<div
									onClick={() => handleOpenMenu(setOpenMenu3, openMenu3)}
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
										<IconArrowRight />
									</div>
								</div>

								<div
									className={
										openMenu3
											? `${scss.divOpenMenuTexts} ${scss.divActive}`
											: `${scss.divOpenMenuTexts}`
									}
								>
									<p>
										Urna aliquet dignissim pharetra consectetur commodo
										pellentesque at tellus. Odio eget scelerisque faucibus ut.
										Cras amet, diam vel, sollicitudin gravida quis augue.
									</p>
									<p>
										{' '}
										Bibendum et nulla accumsan sollicitudin aliquet velit
										viverra risus. Eget molestie enim quisque sodales habitant
										nulla tincidunt. Ullamcorper tincidunt purus sed facilisis.
									</p>
									<p>
										{' '}
										Ullamcorper aliquam gravida aliquet felis iaculis urna diam
										dui id. Consectetur in sagittis, sagittis, diam fames ac
										morbi convallis. Convallis vitae vel luctus erat tempus.
										Proin feugiat nisl egestas neque facilisi porta ipsum. At
									</p>
									<p>
										{' '}
										diam ut diam euismod sit fames tellus amet. In tortor
										placerat dictum faucibus id. Amet facilisis blandit
										dignissim sed nisl fermentum molestie pretium non.
									</p>
								</div>
							</div>
							<div className={scss.containerMenu}>
								<div
									onClick={() => handleOpenMenu(setOpenMenu4, openMenu4)}
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
										<IconArrowRight />
									</div>
								</div>

								<div
									className={
										openMenu4
											? `${scss.divOpenMenuTexts} ${scss.divActive}`
											: `${scss.divOpenMenuTexts}`
									}
								>
									<p>
										Urna aliquet dignissim pharetra consectetur commodo
										pellentesque at tellus. Odio eget scelerisque faucibus ut.
										Cras amet, diam vel, sollicitudin gravida quis augue.
									</p>
									<p>
										{' '}
										Bibendum et nulla accumsan sollicitudin aliquet velit
										viverra risus. Eget molestie enim quisque sodales habitant
										nulla tincidunt. Ullamcorper tincidunt purus sed facilisis.
									</p>
									<p>
										{' '}
										Ullamcorper aliquam gravida aliquet felis iaculis urna diam
										dui id. Consectetur in sagittis, sagittis, diam fames ac
										morbi convallis. Convallis vitae vel luctus erat tempus.
										Proin feugiat nisl egestas neque facilisi porta ipsum. At
									</p>
									<p>
										{' '}
										diam ut diam euismod sit fames tellus amet. In tortor
										placerat dictum faucibus id. Amet facilisis blandit
										dignissim sed nisl fermentum molestie pretium non.
									</p>
								</div>
							</div>
							<div className={scss.containerMenu}>
								<div
									onClick={() => handleOpenMenu(setOpenMenu5, openMenu5)}
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
										<IconArrowRight />
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
										<p>
											Urna aliquet dignissim pharetra consectetur commodo
											pellentesque at tellus. Odio eget scelerisque faucibus ut.
											Cras amet, diam vel, sollicitudin gravida quis augue.
										</p>
										<p>
											{' '}
											Bibendum et nulla accumsan sollicitudin aliquet velit
											viverra risus. Eget molestie enim quisque sodales habitant
											nulla tincidunt. Ullamcorper tincidunt purus sed
											facilisis.
										</p>
										<p>
											{' '}
											Ullamcorper aliquam gravida aliquet felis iaculis urna
											diam dui id. Consectetur in sagittis, sagittis, diam fames
											ac morbi convallis. Convallis vitae vel luctus erat
											tempus. Proin feugiat nisl egestas neque facilisi porta
											ipsum. At
										</p>
										<p>
											{' '}
											diam ut diam euismod sit fames tellus amet. In tortor
											placerat dictum faucibus id. Amet facilisis blandit
											dignissim sed nisl fermentum molestie pretium non.
										</p>
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
