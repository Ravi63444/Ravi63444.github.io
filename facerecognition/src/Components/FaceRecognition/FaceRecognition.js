import React from 'react';

import  './FaceRecognition.css'

const FaceRecognition=({imageInput,box})=>{
	return(
			<div  className='img1'>
				<div className='absolute mt2' >
					<img  id='face' alt='' src={imageInput} width='400px' height='auto'/>
					<div className='bounding-box' 
					style={{top:box.topRow, bottom:box.bottomRow, left:box.leftCol,right:box.rightCol }}>
					</div>
				</div>
			</div>
		);
}
export default FaceRecognition;