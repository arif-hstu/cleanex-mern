import React from 'react';

import './ReviewCard.css';

import reviewer1 from '../../../images/reviewer1.jpg';

function ReviewCard() {
	const reviewerImageStyle = {
		background: `url(${reviewer1})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		clipPath: 'ellipse(50% 50% at 50% 50%)'
}

return (
	<div className='ReviewCard'>
		<div className="review">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis incidunt dolorum</p>
		</div>
		<div className="reviewer">
			<div style={reviewerImageStyle} className="image">

			</div>

			<div className="designation">
				<p>Farhan Rioq</p>
				<p>Agent Manager</p>
			</div>
		</div>
	</div>
)
}

export default ReviewCard;