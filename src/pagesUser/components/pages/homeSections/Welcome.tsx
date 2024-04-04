import scss from './Welcome.module.scss';
const Welcome = () => {
	return (
		<div className={scss.Welcome}>
			<div className="container">
				<div className={scss.content}>
					<h1>Welcome User!</h1>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
