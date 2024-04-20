import scss from './SupHeader.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { IconGadgetarium } from '@/src/assets/icons';

import { userLinks } from '@/src/routes';
import AuthDropdown from '@/src/UI/authDropdown/AuthDropdown';

const SupHeader = () => {
	const { pathname } = useLocation();

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<Link className={scss.logo} to="/">
						<IconGadgetarium className={scss.icon_gadgetarium} />
					</Link>
					<nav className={scss.nav}>
						<ul>
							{userLinks.map((item) => (
								<li>
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
