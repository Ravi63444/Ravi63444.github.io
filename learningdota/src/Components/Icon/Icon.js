import React from 'react';
import logo from './dota.png'
import Tilt from 'react-tilt'
import './Icon.css'
const Icon=()=>{
	return(
			<div className='center'>
				<Tilt className="Tilt center" options={{ max : 70 }} style={{ height: 150, width: 150 }} >
				 	<div className="Tilt-inner"> 
				 		<img alt='' src={logo} width='150px' height='150px'/>
				 	 </div>
				</Tilt>	
				
			</div>
		);
}

export default Icon;