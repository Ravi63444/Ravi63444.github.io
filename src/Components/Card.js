import React from 'react';

const Card = (prop)=>
{
	return(
			<div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc 
			 ">
				<img alt="Robot" src={`https://robohash.org/${prop.name}?200*200`}/>
				<div>
					<h1>{prop.name}</h1>
					<p>{prop.email}</p>
				</div>
			</div>

		);
}
export default Card;