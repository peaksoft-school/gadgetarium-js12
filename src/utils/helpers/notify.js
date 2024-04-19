export const notify = (message, linkText, link) => {
	toast(
		<div>
			<IconG />
			{message}
			<Link to={link} style={{ color: '#cb11ab' }}>
				{linkText}
			</Link>
		</div>,
		{
			position: 'bottom-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
			transition: Zoom
		}
	);
};
