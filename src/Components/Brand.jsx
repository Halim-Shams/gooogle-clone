import React from 'react';

const Brand = ({fontMd, fontSm, font}) => {
	return (
		<p
			className={`${fontMd ? fontMd : 'md:text-8xl'} ${
				font ? font : 'text-7xl'
			} ${fontSm ? fontSm : null} font-bold text-yellow-400`}>
			Seek<span className='text-gray-600 font-thin'>_</span>
		</p>
	);
};

export default Brand;
