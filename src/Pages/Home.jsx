import React from 'react';
import Brand from '../Components/Brand';
import Search from '../Components/Search';

const Home = () => {
	return (
		<div className='flex flex-col items-center gap-6 sm:gap-7 md:gap-8 mt-[18%] sm:mt-[20%] md:mt-[18%] lg:mt-[14%] xl:mt-[10%]'>
			<Brand />
			<Search />
		</div>
	);
};

export default Home;
