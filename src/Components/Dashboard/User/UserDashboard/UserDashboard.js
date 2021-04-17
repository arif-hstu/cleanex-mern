import React from 'react';
import { useParams } from 'react-router-dom';
import './UserDashboard.css';
import DashboardHeader from '../../DashboardShared/DashboardHeader/DashboardHeader';

import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';

function UserDashboard() {
	const { destination } = useParams();

	return (
		<div className='AdminDashboard'>
			<DashboardHeader />
			{
				destination === 'book' && <Book />
			}
			{
				destination === 'bookingList' && <BookingList />
			}
			{
				destination === 'review' && <Review />
			}
		</div>
	)
}

export default UserDashboard;
