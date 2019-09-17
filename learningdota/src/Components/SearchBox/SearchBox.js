import React from 'react';


const SearchBox=({onSearchChange})=>{
	return(
			<div className="pa2 center">
					<input className="pa3 w-40 ba b--green bg-lightest-blue" 
					type="search" 
					placeholder="Search Hero"
					onChange={onSearchChange}
					/>
			
			</div>
		);
}
export default SearchBox;