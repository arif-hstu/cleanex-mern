import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './AdminSideBar.css'
import logo from '../../../../images/logoText.png'
function AdminSideBar() {

	// useparams to change the menu style
	const { destination } = useParams();

	const [addStyle, setAddStyle] = useState({});
	const [listStyle, setListStyle] = useState({});
	const [adminStyle, setAdminStyle] = useState({});
	const [manageStyle, setManageStyle] = useState({});

	useEffect(() => {
		if (destination === 'orderList') {
			setListStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setAddStyle({});
			setAdminStyle({});
			setManageStyle({});
		}
		if (destination === 'addService') {
			setAddStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setListStyle({});
			setAdminStyle({});
			setManageStyle({});
		}
		if (destination === 'manageService') {
			setManageStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setListStyle({});
			setAdminStyle({});
			setAddStyle({});
		} 
		if (destination === 'makeAdmin') {
			setAdminStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setListStyle({});
			setAddStyle({});
			setManageStyle({});
		}
	}, [destination]);


	return (
		<div className='AdminSideBar'>
			<Link to='/'><img src={logo} alt="" /></Link>
			<div className="menu">
				<Link style={ listStyle } to='/dashboard/orderList' >
					Order List
				</Link>
				<Link style={ addStyle } to='/dashboard/addService'>
					Add Service
				</Link>
				<Link style={ adminStyle } to='/dashboard/makeAdmin' >
					Make Admin
				</Link>
				<Link style={ manageStyle } to='/dashboard/manageService'>
					Manage Service
				</Link>
			</div>
		</div>
	)
}

export default AdminSideBar; //to Admin