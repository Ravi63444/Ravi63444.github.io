import React from 'react';
import './ImageURL.css'


const ImageURL=({onChange,onButtonClick})=>{
	return(
			<div >
				<p>
					This will detect the face out of image. Give it a try!!
				</p>
				<div className='w-70 center br2 shadow-2 pa4 ' >
					<div className='w-70 center br2 shadow-2'>
						<input type='text' 
							className='w-70 pa2 ' 
							onChange={onChange} />
						<button 
							className='grow w-30 pa2 white ph3 bg-light-purple'
							onClick={onButtonClick}>SUBMIT</button>
					</div>
				</div>

			</div>
		);
}
export default ImageURL;