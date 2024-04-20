import { useNavigate } from 'react-router-dom';
import scss from './About.module.scss';
import { useGetPhotoStoreQuery } from '@/src/redux/api/about';
import talasPhoto from '@/src/assets/images/photoIsTalas.png'
import issykKulPhoto from '@/src/assets/images/photoIsissyk-kul.png';
import bishkekPhoto from '@/src/assets/images/photoIsBishkek.png';
import jalalAbatPhoto from '@/src/assets/images/photoIsJalal-Abat.png';
import harynPhoto from '@/src/assets/images/photoIsNaryn.png';
import oshPhoto from '@/src/assets/images/photoIsOsh.png';
import batkenPhoto from '@/src/assets/images/photoIsBatken.png';
import {  PhotoSlider } from './PhotoSlider';
const About = () => {
	const { data, isLoading } = useGetPhotoStoreQuery();
console.log(data);

	const navigate = useNavigate();
	return (
		<section className={scss.AboutStorePage}>
			<div className="container">
				<div className={scss.content}>
					{isLoading ? (
						<h1>IsLoading...</h1>
					) : (
						<div className={scss.divContents}>
							<p onClick={() => navigate('/')}>
								Главная » <h2>О магазине</h2>
							</p>
							<div className={scss.nameStore}>
								<h3>О магазине</h3>
								<div></div>
							</div>
							<>
								<PhotoSlider />
							</>
							<div className={scss.contemtsDivForStorePage}>
								<h2>Магазин Gadgetarium </h2>
								<ul>
									<li>
										слаженная команда людей, любящих спорт и здоровый образ
										жизни знающих свое дело и ориентирующихся <br /> во всех
										нюансах фитнес оборудования;
									</li>
									<li>
										широкая номенклатура качественной продукции ведущих мировых
										брендов с огромным выбором товаров в <br /> наличии;
									</li>
									<li>
										{' '}
										склад запчастей для обеспечения качественного сервиса и
										бесперебойной работы
									</li>
									<li>
										{' '}
										оборудования; полный послепродажный сервис с информационной
										и технической поддержкой;
									</li>
									<li>
										строгое соблюдение всех обязательств перед партнерами;
									</li>
									<li>
										отличные цены и эксклюзивные условия для постоянных
										партнеров.
									</li>
								</ul>
							</div>
							<div className={scss.contentsDiv}>
								<h2>В чем причина нашего успеха?</h2>
								<div className={scss.storePageInfo}>
									<div>
										<p>
											Non ultricies sollicitudin nisi quisque. Morbi integer
											quis tincidunt vitae penatibus. Feugiat quis tincidunt
											volutpat <br /> scelerisque elit fermentum nullam rhoncus
											adipiscing. Sem tortor molestie odio. <br /> Adipiscing
											etiam vitae in semper sed eget nec aliquet aliquam. Morbi
											integer quis tincidunt vitae penatibus. Feugiat quis{' '}
											<br />
											tincidunt volutpat scelerisque elit fermentum nullam
											rhoncus adipiscing. Sem tortor molestie odio.Adipiscing
											etiam vitae <br /> in semper sed eget nec aliquet aliquam.
											Morbi integer quis tincidunt vitae penatibus. Feugiat quis
											tincidunt <br /> volutpat scelerisque elit fermentum
											nullam rhoncus adipiscing. Sem tortor molestie odio.
										</p>
									</div>
									<div>
										<p>
											Non ultricies sollicitudin nisi quisque. Morbi integer
											quis tincidunt vitae penatibus. Feugiat quis tincidunt
											volutpat <br /> scelerisque elit fermentum nullam rhoncus
											adipiscing. Sem tortor molestie odio. <br /> Adipiscing
											etiam vitae in semper sed eget nec aliquet aliquam. Morbi
											integer quis tincidunt vitae penatibus. Feugiat quis{' '}
											<br />
											tincidunt volutpat scelerisque elit fermentum nullam
											rhoncus adipiscing. Sem tortor molestie odio.Adipiscing
											etiam vitae <br /> in semper sed eget nec aliquet aliquam.
											Morbi integer quis tincidunt vitae penatibus. Feugiat quis
											tincidunt <br /> volutpat scelerisque elit fermentum
											nullam rhoncus adipiscing. Sem tortor molestie odio.
										</p>
									</div>
								</div>
							</div>
							<div className={scss.divContentAndCard}>
								<div className={scss.contentStoreInfo}>
									<h2>Мы сегодня – это:</h2>
									<div className={scss.textDiv1}>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Amet amet <br /> est orci volutpat placerat maecenas
											egestas augue ac. Tortor, sed <br /> magnis interdum
											massa. Id phasellus lectus dui nisl. Adipiscing etiam{' '}
											<br /> vitae in semper sed eget nec aliquet aliquam.
										</p>
									</div>
									<div className={scss.textDiv1}>
										<p>
											Non ultricies sollicitudin nisi quisque. Morbi integer
											quis <br /> tincidunt vitae penatibus. Feugiat quis
											tincidunt volutpat scelerisque elit <br /> fermentum
											nullam rhoncus adipiscing. Sem tortor molestie odio.
											Adipiscing <br /> etiam vitae in semper sed eget nec
											aliquet aliquam. Morbi integer quis <br /> tincidunt vitae
											penatibus. Feugiat quis tincidunt volutpat scelerisque
											elit <br /> fermentum nullam rhoncus adipiscing. Sem
											tortor molestie odio.
										</p>
									</div>
								</div>
								<div className={scss.divPhotoIsKyrgyztan}>
						
									<img
										className={scss.imgBatken}
										src={batkenPhoto}
										alt="batkenPhoto"
									/>
									<img
										className={scss.imgOsh}
									
										src={oshPhoto}
										alt="oshPhoto"
									/>
									<img
										className={scss.imgNaryn}
							
										src={harynPhoto}
										alt="harynPhoto"
									/>
									<img
										className={scss.imgJalalAbat}
									
										src={jalalAbatPhoto}
										alt="jalalAbatPhoto"
									/>
									<img
										className={scss.imgTalas}
								
										src={talasPhoto}
										alt="talasPhoto"
									/>
									<img
										className={scss.imgBishkek}
									
										src={bishkekPhoto}
										alt="bishkekPhoto"
									/>
									<img
										className={scss.imgIssykKul}
							
										src={issykKulPhoto}
										alt="issykKulPhoto"
									/>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default About;
