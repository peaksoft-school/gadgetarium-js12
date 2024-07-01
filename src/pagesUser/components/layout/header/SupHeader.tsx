import scss from './SupHeader.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IconGadgetarium } from '@/src/assets/icons';
import AuthDropdown from '@/src/ui/authDropdown/AuthDropdown.tsx';
import { userLinks } from '@/src/routes';
import { useGetProfilesQuery } from '@/src/redux/api/personalAccount/profile';
import { useEffect, useState } from 'react';

const SupHeader = () => {
	const { data: profileData, refetch } = useGetProfilesQuery({});
	const [phoneNumber, setPhoneNumber] = useState<string | undefined>(
		profileData?.phoneNumber
	);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		refetch();
	}, []);

	useEffect(() => {
		if (profileData) {
			setPhoneNumber(profileData.phoneNumber);
		}
	}, [profileData]);

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
						<p>{phoneNumber}</p>
						<AuthDropdown />
					</div>
				</div>
			</div>
		</header>
	);
};

export default SupHeader;
