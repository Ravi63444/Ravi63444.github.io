import React from 'react';

import Cards from '../Cards/Cards'

const CardList=({hero})=>
{
	const cardComponent= hero.map((user,i)=>{
		return <Cards key={hero[i].id} name={hero[i].name} role={hero[i].Role} imageUrl={hero[i].imageUrl} />
	});
	return(
		<div>
			{cardComponent}
		</div>
		);
}
export default CardList;