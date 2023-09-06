import React, {useEffect, useState} from 'react';

const useSeek = (term) => {
	const URL = `https://www.googleapis.com/customsearch/v1?key=${
		import.meta.env.VITE_API_KEY
	}&cx=${import.meta.env.VITE_CONTEXT_KEY}&q=${term}`;
	const [data, setData] = useState(null);

	const fetchData = async () => {
		fetch(URL)
			.then((res) => res.json())
			.then((result) => {
				setData(result);
			});
	};

	useEffect(() => {
		fetchData();
	}, [term]);

	return {data};
};

export default useSeek;
