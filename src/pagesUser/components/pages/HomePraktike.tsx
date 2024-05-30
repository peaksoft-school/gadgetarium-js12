import { useSearchParams } from 'react-router-dom';

export const HomePraktike = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const handleSetParam = () => {
		setSearchParams({ name: 'John' });
		console.log(searchParams.toString(), 'searchParam url result');
		
	};

	const handleUpdateParam = () => {
		searchParams.set('age', '30');
		setSearchParams(searchParams);
	};

	const handleUpdate2Param = () => {
		// setSearchParams({ esen: 'Esentur' });
		searchParams.set('esen', 'Esentur');
		setSearchParams(searchParams);
	};

	const handleGetParam = () => {
		alert(searchParams.get('name'));
	};

	const handleDeleteParam = () => {
		searchParams.delete('name');
		setSearchParams(searchParams);
	};

	const handleDelete2KeyEsen = () => {
		searchParams.delete('esen');
		setSearchParams(searchParams);
	};

	const handleHasParam = () => {
		if (searchParams.has('esen')) {
			alert('Esen is key yes!');
		} else {
			alert('Esen is not found!');
		}
	};

	return (
		<div>
			<h1>Home</h1>
			<button onClick={handleSetParam}>Set Param</button>
			<button onClick={handleUpdateParam}>Update Param</button>
			<button onClick={handleUpdate2Param}>Update2 param</button>
			<button onClick={handleGetParam}>Get Param</button>
			<button onClick={handleDeleteParam}>Delete Param</button>
			<button onClick={handleDelete2KeyEsen}>Delete2 param is key esen</button>
			<button onClick={handleHasParam}>Results has method</button>
			<p>Current search params: {searchParams.toString()}</p>
		</div>
	);
};
