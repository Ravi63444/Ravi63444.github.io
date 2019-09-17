import React from 'react';



const BackCard=({onClick,name})=>
{

	return(
			<div className="bg-light-blue dib br3 pa2 ma2 grow bw2 shadow-5 tc ">
				{name}
				<button onClick={onClick}>Click to flip</button>
				
			</div>
		);
}
export default BackCard;