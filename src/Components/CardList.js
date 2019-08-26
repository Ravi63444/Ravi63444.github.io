import React from 'react';
import Card from './Card';
const CardList = ({robots}) =>
{
	const a=robots.map((user,i)=>{
		return <Card key={i} name={robots[i].name} email={robots[i].email}/>
		})
	
	return (<div>
		{a}</div>
		);
			
	
}
export default CardList;