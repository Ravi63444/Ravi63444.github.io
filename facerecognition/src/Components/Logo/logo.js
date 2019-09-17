import React from 'react';
import Tilt from 'react-tilt';

import logo from './logo.png'
import './logo.css'
const Logo=()=>{
	return(
			<div>
			<center>
				<Tilt className="Tilt " options={{ max : 75 }} style={{ height: 150, width: 150 }} >
				 	<div className="Tilt-inner "> 
				 		<img alt='logo' src={logo}/>
				 	</div>
				</Tilt>
				</center>
			</div>
		);
}
export default Logo;