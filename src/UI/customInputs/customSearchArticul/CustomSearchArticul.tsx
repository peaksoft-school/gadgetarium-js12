import { SearchIcon } from '@/src/assets/icons';
import scss from './CustomSearchArticul.module.scss';

const CustomSearchArticul = () => {
	return (
		<div className={scss.serachArticul}>
			<input
				className={scss.serachArticulInput}
				type="text"
				placeholder="Поиск по артикулу или ..."
			/>
			<div className={scss.searchIcon}>
				<SearchIcon />
			</div>
		</div>
	);
};

export default CustomSearchArticul;
