import React from 'react';

const Navigation=({onRoute})=>{
	return(
			<nav align='right'>
				<p onClick={()=>onRoute('signedOut')} className='fa3 link dim underline  pointer black pa3'>
					Sign Out
				</p>
			</nav>
		);
}
export default Navigation;