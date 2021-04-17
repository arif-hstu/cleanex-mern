import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './UserSideBar.css'
import logo from '../../../../images/logoText.png'
function UserSideBar() {

	// useparams to change the menu style
	const { destination } = useParams();

	const [addStyle, setAddStyle] = useState({});
	const [listStyle, setListStyle] = useState({});
	const [adminStyle, setAdminStyle] = useState({});
	const [manageStyle, setManageStyle] = useState({});

	useEffect(() => {
		if (destination === 'bookingList') {
			setListStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setAddStyle({});
			setAdminStyle({});
			setManageStyle({});
		}
		if (destination === 'review') {
			setAddStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setListStyle({});
			setAdminStyle({});
			setManageStyle({});
		}
		if (destination === 'book') {
			setManageStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setListStyle({});
			setAdminStyle({});
			setAddStyle({});
		} 
	}, [destination]);


	return (
		<div className='UserSideBar'>
			<Link to='/'><img src={logo} alt="" /></Link>
			<div className="menu">
				<Link style={ listStyle } to='/dashboard/bookingList' >
					Order List
				</Link>
				<Link style={ addStyle } to='/dashboard/review'>
					Add Service
				</Link>
				<Link style={ adminStyle } to='/dashboard/book' >
					Make Admin
				</Link>
			</div>
		</div>
	)
}

export default UserSideBar; 