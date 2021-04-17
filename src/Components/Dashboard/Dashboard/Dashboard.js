import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';

import './Dashboard.css';

import { UserContext } from '../../../App';
import { AdminContext } from '../../../App';

import AdminSideBar from '../Admin/AdminSideBar/AdminSideBar';
import AdminDashboard from '../Admin/AdminDashboard/AdminDashboard';
import UserSideBar from '../User/UserSideBar/UserSideBar';
import UserDashboard from '../User/UserDashboard/UserDashboard';

function Dashboard() {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [isAdmin, setIsAdmin, admins, setAdmins] = useContext(AdminContext);

	return (
		<div className='Dashboard'>
			<div className='SidebarHolder'>
				{
					isAdmin === false ?
						<UserSideBar /> :
						<AdminSideBar />
				}
			</div>
			<div className='DashboardHolder'>
				{
					isAdmin === false ?
						<UserDashboard /> :
						<AdminDashboard /> 
				}
			</div>
		</div>
	)
}

export default Dashboard;