import React from 'react';
import {BiSearch, BiMicrophone} from 'react-icons/bi';

const Search = () => {
	return (
		<form className='flex relative w-9/12 lg:w-8/12 xl:w-7/12'>
			<input
				type='text'
				className='w-full md:text-lg outline-none focus:border-yellow-400 py-2 px-4 border rounded-md shadow hover:shadow-lg focus:shadow-xl transition-all'
				placeholder='Search...'
			/>
			<div className='flex items-center gap-2 absolute right-3 top-[28%]'>
				<BiSearch className='text-gray-400 text-lg md:text-xl hover:text-yellow-400 hover:cursor-pointer transition-colors' />
				<BiMicrophone className='text-gray-400 text-lg md:text-xl hover:text-gray-600 hover:cursor-pointer transition-colors' />
			</div>
		</form>
	);
};

export default Search;
