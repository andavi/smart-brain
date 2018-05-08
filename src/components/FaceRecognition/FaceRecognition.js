import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img 
					className='br2'
					id='inputimage'
					src={imageUrl} 
					alt='' 
					height='auto' 
					style={{maxWidth: '500px'}}
				/>
				<div>
					{boxes.map((box, i) => <div 
						className='bounding-box'
						style={{
							top: box.topRow, 
							right: box.rightCol, 
							bottom: box.bottomRow, 
							left: box.leftCol}}
						key={i}
					></div>)}
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;