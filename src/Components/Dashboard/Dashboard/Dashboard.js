import React from 'react'
import { useParams } from 'react-router-dom';
import './Dashboard.css'
import AdminSideBar from '../Admin/AdminSideBar/AdminSideBar'
import AdminDashboard from '../Admin/AdminDashboard/AdminDashboard'
function Dashboard() {
	// useParams for finding destination
	// const { destination } = useParams();

	return (
		<div className='Dashboard'>
			<div className='SidebarHolder'>
				<AdminSideBar />
			</div>
			<div className='DashboardHolder'>
				<AdminDashboard />
			</div>
		</div>
	)
}

export default Dashboard;