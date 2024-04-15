import { IconSearch } from '@tabler/icons-react';
import scss from './CustomSearch.module.scss';
import { useState } from 'react';

const CustomSearch = () => {
	const [searchInput, setSearchInput] = useState(false);
	const handleFocus = () => {
		setSearchInput(true);
	};
	const handleBlur = () => {
		setSearchInput(false);
	};
	return (
		<div className={scss.SearchInputs}>
			<input
				className={scss.inputSearch}
				type="text"
				placeholder="Поиск по каталогу магазина"
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			<div
				className={`${scss.searchIcon} ${searchInput ? scss.searchFocus : ''}`}
			>
				<IconSearch />
			</div>
		</div>
	);
};

export default CustomSearch;
