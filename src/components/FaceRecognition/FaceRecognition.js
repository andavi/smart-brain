import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img 
					id='inputimage'
					src={imageUrl} 
					alt='' 
					height='auto' 
					style={{maxWidth: '500px'}}
				/>
			</div>
		</div>
	);
}

export default FaceRecognition;