import React from 'react'
import { useParams } from 'react-router-dom';

import './Dashboard.css';

import AdminSideBar from '../Admin/AdminSideBar/AdminSideBar';
import AdminDashboard from '../Admin/AdminDashboard/AdminDashboard';
import UserSideBar from '../User/UserSideBar/UserSideBar';
import UserDashboard from '../User/UserDashboard/UserDashboard';

function Dashboard() {
	// useParams for finding destination
	// const { destination } = useParams();

	let admin = false;

	return (
		<div className='Dashboard'>
			<div className='SidebarHolder'>
				{
					admin ?
						<AdminSideBar /> :
						<UserSideBar />
				}
			</div>
			<div className='DashboardHolder'>
				{
					admin ?
						<AdminDashboard /> :
						<UserDashboard />
				}
			</div>
		</div>
	)
}

export default Dashboard;