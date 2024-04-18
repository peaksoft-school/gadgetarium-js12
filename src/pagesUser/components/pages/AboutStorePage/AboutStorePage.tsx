import { useNavigate } from 'react-router-dom';
import scss from './AboutStorePage.module.scss';
import { useGetPhotoStoreQuery } from '@/src/redux/api/aboutStore';
import talasPhoto from '@/src/assets/photoIsTalas.png';
import issykKulPhoto from '@/src/assets/photoIsissyk-kul.png';
import bishkekPhoto from '@/src/assets/photoIsBishkek.png';
import jalalAbatPhoto from '@/src/assets/photoIsJalal-Abat.png';
import harynPhoto from '@/src/assets/photoIsNaryn.png';
import oshPhoto from '@/src/assets/photoIsOsh.png';
import batkenPhoto from '@/src/assets/photoIsBatken.png';
import { useState } from 'react';
import {
	BatkenIsRegionPhoto,
	BishkekIsRegionPhoto,
	HarynIsRegionPhoto,
	IssykKulIsRegionPhoto,
	JalalAbatIsRegionPhoto,
	OshIsRegionPhoto,
	TalasIsRegionPhoto
} from '@/src/utils/ArrayIsRegionPhoto';
// import Result from '../result/Result';
const AboutStorePage = () => {
	const [oshInfo, setOsnInfo] = useState<boolean>(false);
	const [bishkekInfo, setBishkekInfo] = useState<boolean>(false);
	const [harynInfo, setHarynInfo] = useState<boolean>(false);
	const [talasInfo, setTalasInfo] = useState<boolean>(false);
	const [batkenInfo, setBatkenInfo] = useState<boolean>(false);
	const [jalalAbatInfo, setJalalAbatInfo] = useState<boolean>(false);
	const [issykKulInfo, setIssykKulInfo] = useState<boolean>(false);
	const { data, isLoading } = useGetPhotoStoreQuery();
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
									{batkenInfo && (
										<div className={scss.containerMenuIsKyrgiztanRegions}>
											<h5>Баткен облусу!😍</h5>
											<div className={scss.contentsIsRegions}>
												{BatkenIsRegionPhoto.map((item) => (
													<>
														<img
															src={item.imgPhotoRegion}
															alt={item.text}
															key={item.id}
														/>
													</>
												))}
											</div>
										</div>
									)}
									{oshInfo && (
										<div className={scss.containerMenuIsKyrgiztanRegions}>
											<h5>Ош облусу!😍</h5>
											<div className={scss.contentsIsRegions}>
												{OshIsRegionPhoto.map((item) => (
													<img
														src={item.imgPhotoRegion}
														key={item.id}
														alt={item.text}
													/>
												))}
											</div>
										</div>
									)}
									{jalalAbatInfo && (
										<div className={scss.containerMenuIsKyrgiztanRegions}>
											<h5>Жалал-абат облусу!😍</h5>
											<div className={scss.contentsIsRegions}>
												{JalalAbatIsRegionPhoto.map((item) => (
													<img
														src={item.imgPhotoRegion}
														alt={item.text}
														key={item.id}
													/>
												))}
											</div>
										</div>
									)}
									{harynInfo && (
										<div className={scss.containerMenuIsKyrgiztanRegions}>
											<h5>Нарын облусу!😍</h5>
											<div className={scss.contentsIsRegions}>
												{HarynIsRegionPhoto.map((item) => (
													<img
														src={item.imgPhotoRegion}
														key={item.id}
														alt={item.text}
													/>
												))}
											</div>
										</div>
									)}
									{talasInfo && (
										<div className={scss.containerMenuIsKyrgiztanRegions}>
											<h5>Талас облусу!😍</h5>
											<div className={scss.contentsIsRegions}>
												{TalasIsRegionPhoto.map((item) => (
													<img
														src={item.imgPhotoRegion}
														key={item.id}
														alt={item.text}
													/>
												))}
											</div>
										</div>
									)}
									{bishkekInfo && (
										<div className={scss.containerMenuIsKyrgiztanRegions}>
											<h5>Чуй облусу!😍</h5>
											<div className={scss.contentsIsRegions}>
												{BishkekIsRegionPhoto.map((item) => (
													<img
														src={item.imgPhotoRegion}
														key={item.id}
														alt={item.text}
													/>
												))}
											</div>
										</div>
									)}
									{issykKulInfo && (
										<div className={scss.containerMenuIsKyrgiztanRegions}>
											<h5>Ыссык-кол облусу!😍</h5>
											<div className={scss.contentsIsRegions}>
												{IssykKulIsRegionPhoto.map((item) => (
													<img
														src={item.imgPhotoRegion}
														key={item.id}
														alt={item.text}
													/>
												))}
											</div>
										</div>
									)}
									<img
										className={scss.imgBatken}
										onMouseEnter={() => {
											setBatkenInfo(true);
											setOsnInfo(false);
											setTalasInfo(false);
											setJalalAbatInfo(false);
											setHarynInfo(false);
											setIssykKulInfo(false);
											setBishkekInfo(false);
										}}
										onMouseLeave={() => setBatkenInfo(false)}
										src={batkenPhoto}
										alt="batkenPhoto"
									/>
									<img
										className={scss.imgOsh}
										onMouseEnter={() => {
											setBatkenInfo(false);
											setOsnInfo(true);
											setTalasInfo(false);
											setJalalAbatInfo(false);
											setHarynInfo(false);
											setIssykKulInfo(false);
											setBishkekInfo(false);
										}}
										onMouseLeave={() => setOsnInfo(false)}
										src={oshPhoto}
										alt="oshPhoto"
									/>
									<img
										className={scss.imgNaryn}
										onMouseEnter={() => {
											setBatkenInfo(false);
											setOsnInfo(false);
											setTalasInfo(false);
											setJalalAbatInfo(false);
											setHarynInfo(true);
											setIssykKulInfo(false);
											setBishkekInfo(false);
										}}
										onMouseLeave={() => setHarynInfo(false)}
										src={harynPhoto}
										alt="harynPhoto"
									/>
									<img
										className={scss.imgJalalAbat}
										onMouseEnter={() => {
											setBatkenInfo(false);
											setOsnInfo(false);
											setTalasInfo(false);
											setJalalAbatInfo(true);
											setHarynInfo(false);
											setIssykKulInfo(false);
											setBishkekInfo(false);
										}}
										onMouseLeave={() => setJalalAbatInfo(false)}
										src={jalalAbatPhoto}
										alt="jalalAbatPhoto"
									/>
									<img
										className={scss.imgTalas}
										onMouseEnter={() => {
											setBatkenInfo(false);
											setOsnInfo(false);
											setTalasInfo(true);
											setJalalAbatInfo(false);
											setHarynInfo(false);
											setIssykKulInfo(false);
											setBishkekInfo(false);
										}}
										onMouseLeave={() => setTalasInfo(false)}
										src={talasPhoto}
										alt="talasPhoto"
									/>
									<img
										className={scss.imgBishkek}
										onMouseEnter={() => {
											setBatkenInfo(false);
											setOsnInfo(false);
											setTalasInfo(false);
											setJalalAbatInfo(false);
											setHarynInfo(false);
											setIssykKulInfo(false);
											setBishkekInfo(true);
										}}
										onMouseLeave={() => setBishkekInfo(false)}
										src={bishkekPhoto}
										alt="bishkekPhoto"
									/>
									<img
										className={scss.imgIssykKul}
										onMouseEnter={() => {
											setBatkenInfo(false);
											setOsnInfo(false);
											setTalasInfo(false);
											setJalalAbatInfo(false);
											setHarynInfo(false);
											setIssykKulInfo(true);
											setBishkekInfo(false);
										}}
										onMouseLeave={() => setIssykKulInfo(false)}
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

export default AboutStorePage;
