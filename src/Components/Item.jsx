import React from 'react';

const Item = () => {
	return (
		<div className='rounded-md w-full group/site shadow-sm hover:shadow hover:bg-yellow-500/5 transition-all flex flex-col gap-2 px-3 py-2'>
			<a href='#' className='flex items-center gap-2'>
				<img className='rounded-full w-7 h-7 bg-gray-200' src='' alt='' />
				<div className='text-sm font-light'>
					<p className='font-normal text-base'>Wikipedia</p>
					<p className='text-gray-500'>https://en.wikipedia.org/weki/halim</p>
				</div>
			</a>
			<div className='flex flex-col gap-1'>
				<a
					className='text-blue-500 text-xl group-hover/site:underline'
					href='#'>
					Halim
				</a>
				<p className='text-gray-700'>
					Halim or Haleem is an Arabic masculine given name which means gentle,
					forbearing, mild, patient, understanding, indulgent, slow to anger.
				</p>
			</div>
		</div>
	);
};

export default Item;
