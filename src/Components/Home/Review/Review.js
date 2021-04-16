import React from 'react';

import ReviewCard from '../ReviewCard/ReviewCard';

import './Review.css';

function Review() {
	return (
		<div className='Review'>
			<div className="header">
				<div className="headline">
					<h2>We are very happy for</h2>
					<h3>clients reviews.</h3>
				</div>
				<div className="text">
					<p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Aliquid, id!</p>
				</div>
			</div>

			<div className="cardHolder">
				<ReviewCard />
				<ReviewCard />
				<ReviewCard />
			</div>
		</div>
	)
}

export default Review;