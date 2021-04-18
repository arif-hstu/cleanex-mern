import React, { useEffect, useState } from 'react';

import ReviewCard from '../ReviewCard/ReviewCard';

import './Review.css';

function Review() {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch('https://cleanex.herokuapp.com/reviews?count=3')
			.then(res => res.json())
			.then(data => setReviews(data));
	}, [])

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
			{
				reviews.map((rv, index) => <ReviewCard key={index} review={rv}/>)
			}
			</div>
		</div>
	)
}

export default Review;