import scss from './SupHeader.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IconGadgetarium } from '@/src/assets/icons';
import AuthDropdown from '@/src/ui/authDropdown/AuthDropdown.tsx';
import { userLinks } from '@/src/routes';
const SupHeader = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const top = () => {
		navigate('/');
		window.scrollTo(0, 0);
	};

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div onClick={top}>
						<IconGadgetarium />
					</div>
					<nav className={scss.nav}>
						<ul>
							{userLinks.map((item, index) => (
								<li key={index + 1}>
									<Link
										className={
											pathname === item.link
												? `${scss.link} ${scss.active}`
												: `${scss.link}`
										} 
										to={item.link}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className={scss.profile}>
						<a href="#">+996 (504) 80 10 88</a>
						<AuthDropdown />
					</div>
				</div>
			</div>
		</header>
	);
};

export default SupHeader;
