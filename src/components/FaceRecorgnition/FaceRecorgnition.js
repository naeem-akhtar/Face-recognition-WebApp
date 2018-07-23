import React from 'react';
import './FaceRecorgnition.css';

const FaceRecorgnition = ( {box, imageUrl} ) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img 
					id='inputImage'
					alt=''
					src={imageUrl}
					width='500px'
					height='auto'
				/>
				<div
					className='bounding-box'
					style={{top: box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}
				>
				</div>
		</div>
		</div>
	);
}

export default FaceRecorgnition;