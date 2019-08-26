import React from 'react';


const SearchBox=({sc})=>
{
	return (
		<div className="pa2">
			<input className="pa3 ba b--green bg-lightest-blue" 
			type="search" 
			placeholder="Search Robots"
			onChange={sc}/>
			
		</div>
	);
}
export default SearchBox;