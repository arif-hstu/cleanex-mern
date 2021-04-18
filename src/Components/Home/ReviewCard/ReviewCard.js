import React from 'react';

import './ReviewCard.css';

import fakeProfile from '../../../images/fakeProfile.png';

function ReviewCard({review}) {
	const reviewerImageStyle = {
		background: `url(${review.reviewerImg || fakeProfile})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		clipPath: 'ellipse(50% 50% at 50% 50%)'
}

return (
	<div className='ReviewCard'>
		<div className="review">
			<p>{review.review}</p>
		</div>
		<div className="reviewer">
			<div style={reviewerImageStyle} className="image">

			</div>

			<div className="designation">
				<p>{review.reviewerName}</p>
				<p>{review.designation}</p>
			</div>
		</div>
	</div>
)
}

export default ReviewCard;