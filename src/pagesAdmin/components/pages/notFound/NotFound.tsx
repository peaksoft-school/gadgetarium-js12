import scss from './NotFound.module.scss';

const NotFound = () => {
	return (
		<div className={scss.NotFound}>
			<div className="container">
				<div className={scss.content}>
					<h1> ERROR 404 ADMIN</h1>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
