import React, { useContext } from 'react'
import './DashboardHeader.css'
import { AdminContext } from '../../../../App';
import { UserContext } from '../../../../App';

function DashboardHeader() {
	// consume context from app
	const [isAdmin, setIsAdmin] = useContext(AdminContext);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	return (
		<div className='DashboardHeader'>
			<h3>
				{
					isAdmin ?
						'Admin Dashboard' :
						'User Dashboard'
				}
			</h3>
			<h4>
				{
					loggedInUser.displayName ?
						loggedInUser.displayName :
						loggedInUser.email

				}
			</h4>
		</div>
	)
}

export default DashboardHeader;
