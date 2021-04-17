import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './UserSideBar.css'
import logo from '../../../../images/logoText.png'
function UserSideBar() {

	// useparams to change the menu style
	const { destination } = useParams();

	const [bookingStyle, setBookingStyle] = useState({});
	const [reviewStyle, setReviewStyle] = useState({});
	const [bookStyle, setBookStyle] = useState({});

	useEffect(() => {
		if (destination === 'review') {
			setReviewStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setBookingStyle({});
			setBookStyle({});
		}
		if (destination === 'book') {
			setBookStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setReviewStyle({});
			setBookingStyle({});
		}
		if (destination === 'bookingList') {
			setBookingStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setReviewStyle({});
			setBookStyle({});
		}
	}, [destination]);


	return (
		<div className='UserSideBar'>
			<Link to='/'><img src={logo} alt="" /></Link>
			<div className="menu">
				<Link style={bookStyle} to='/dashboard/book' >
					Book
				</Link>
				<Link style={bookingStyle} to='/dashboard/bookingList' >
					Booking List
				</Link>
				<Link style={reviewStyle} to='/dashboard/review'>
					Review
				</Link>
			</div>
		</div>
	)
}

export default UserSideBar;