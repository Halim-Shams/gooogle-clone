import React, {useState} from 'react';
import {typeActions} from '../reducer';
import {useNavigate} from 'react-router-dom';
import {BiSearch, BiMicrophone} from 'react-icons/bi';
import {useContextGlobal} from '../context';

const Search = ({rounded, wFull}) => {
	const navigate = useNavigate();
	const [input, setInput] = useState('');
	const [{}, dispatch] = useContextGlobal();

	const handleSearch = (e) => {
		e.preventDefault();
		navigate('/search');
		dispatch({
			type: typeActions.SET_SEARCH_TERM,
			term: input,
		});
	};

	return (
		<form
			onSubmit={handleSearch}
			className={`flex relative ${
				wFull
					? 'w-full md:w-10/12 lg:w-8/12 xl:w-7/12'
					: 'w-9/12 lg:w-8/12 xl:w-7/12'
			}`}>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				type='text'
				className={`w-full md:text-lg outline-none focus:border-yellow-400 py-2 px-6 border ${
					rounded ? 'rounded-full' : 'rounded-md'
				} shadow hover:shadow-lg focus:shadow-xl transition-all`}
				placeholder='Search...'
			/>
			<div className='flex items-center gap-2 absolute right-5 top-[28%]'>
				<BiSearch className='text-gray-400 text-lg md:text-xl hover:text-yellow-400 hover:cursor-pointer transition-colors' />
				<BiMicrophone className='text-gray-400 text-lg md:text-xl hover:text-gray-600 hover:cursor-pointer transition-colors' />
			</div>
		</form>
	);
};

export default Search;
