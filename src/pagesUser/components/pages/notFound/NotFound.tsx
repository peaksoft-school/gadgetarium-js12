import scss from './NotFound.module.scss';

const NotFound = () => {
	return (
		<div className={scss.NotFound}>
			<div className="container">
				<div className={scss.content}>
					<h1> ERROR 404 USER </h1>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
