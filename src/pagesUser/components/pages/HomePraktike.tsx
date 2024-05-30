import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export const HomePraktike = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchArray, setSearchArray] = useState(() => {
		const ages = searchParams.getAll('age');
		return ages.length ? ages : [];
	});

	const handleCheckboxChange = (value: string, checked: boolean) => {
		if (checked) {
			// Добавляем значение в параметры
			searchParams.append('age', value);
			setSearchArray((prev) => [...prev, value]);
		} else {
			// Удаляем значение из параметров
			const updatedArray = searchArray.filter((item) => item !== value);
			searchParams.delete('age');
			updatedArray.forEach((item) => searchParams.append('age', item));
			setSearchArray(updatedArray);
		}
		setSearchParams(searchParams);
	};

	const handleClearUrlParams = () => {
		searchParams.delete('age');
		setSearchParams(searchParams);
		setSearchArray(['']);
	};

	const handleResultsUrlParams = (pop: string) => {
		searchParams.append('results', pop);
		setSearchParams(searchParams);
	};

	return (
		<div>
			<h1>Home</h1>
			<input
				type="checkbox"
				style={{ marginLeft: '100px' }}
				onChange={(e) => handleCheckboxChange('input1', e.target.checked)}
				checked={searchArray.includes('input1')}
			/>
			<input
				type="checkbox"
				style={{ marginLeft: '100px' }}
				onChange={(e) => handleCheckboxChange('input2', e.target.checked)}
				checked={searchArray.includes('input2')}
			/>
			<input
				type="checkbox"
				style={{ marginLeft: '100px' }}
				onChange={(e) => handleCheckboxChange('input3', e.target.checked)}
				checked={searchArray.includes('input3')}
			/>
			<input
				type="checkbox"
				style={{ marginLeft: '100px' }}
				onChange={(e) => handleCheckboxChange('input4', e.target.checked)}
				checked={searchArray.includes('input4')}
			/>
			<p>Current search params: {searchParams.toString()}</p>
			<h1>{searchArray.toString()}</h1>
			<button onClick={handleClearUrlParams}>clear is url param</button>
			<button onClick={() => handleResultsUrlParams('esenturandamantur')}>add</button>
		</div>
	);
};
