import scss from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<p>Footer</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
