import React from 'react';



const cards=({name, role,imageUrl})=>
{

	return(
			<div className="bg-light-blue dib br3 pa2 ma2 grow bw2 shadow-5 tc ">
				<img alt="" src={imageUrl} height='150px' width='150px'/>
				<div>
					<h3>{name}</h3>
					<p>{role}</p>
				</div>
			</div>
		);
}
export default cards;