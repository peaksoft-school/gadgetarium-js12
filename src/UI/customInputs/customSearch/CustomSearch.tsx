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
			<div className={scss.main_search}>
				<input
					className={scss.input_search}
					type="text"
					placeholder="Поиск по каталогу магазина"
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				<div
					className={`${scss.search_icon} ${searchInput ? scss.search_focus : ''}`}
				>
					<IconSearch />
				</div>
			</div>
		</div>
	);
};

export default CustomSearch;
