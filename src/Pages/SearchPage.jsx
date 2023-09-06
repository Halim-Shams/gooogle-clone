import React from 'react';
import {useContextGlobal} from '../context';
import Brand from '../Components/Brand';
import Search from '../Components/Search';
import useSeek from '../useSeek';
import response from '../response';
import CategoryItem from '../Components/CategoryItem';
import Item from '../Components/Item';

const SearchPage = () => {
	const [{term}, dispatch] = useContextGlobal();
	// const {data} = useSeek(term);
	const data = response;
	// console.log(data);
	return (
		<div>
			<div className='flex flex-col items-center gap-2 pt-2 xs:flex-row xs:gap-4 sm:gap-6 md:gap-10 xs:items-start xs:px-6 xs:pt-6 pb-6 border-b px-6 xs:p-0 xs:pb-6'>
				<Brand font='text-[46px]' fontSm='sm:text-5xl' fontMd='md:text-6xl' />
				<div className='flex flex-col gap-4 w-full pt-3'>
					<Search rounded wFull />
					<div className='flex gap-2 items-center'>
						<CategoryItem category='All' />
						<CategoryItem category='Images' />
						<CategoryItem category='Videos' />
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-4 px-5 sm:pl-32 md:pl-48 lg:pl-56 py-10 w-full lg:w-10/12 xl:w-9/12'>
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</div>
		</div>
	);
};

export default SearchPage;
