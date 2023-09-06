import React from 'react';

const CategoryItem = ({category}) => {
	return (
		<a
			href='#all'
			className={`border rounded-full px-4 py-2 sm:text-base hover:bg-yellow-500/10 transition-colors text-sm`}>
			{category}
		</a>
	);
};

export default CategoryItem;
