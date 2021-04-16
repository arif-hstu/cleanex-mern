import React, { useContext } from 'react'
import './DashboardHeader.css'
// import { UserContext } from '../../App'

function DashboardHeader() {

	// consume context from app
	// const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	return (
		<div className='DashboardHeader'>
			<h3>Admin Dashboard</h3>
			<h4></h4>
		</div>
	)
}

export default DashboardHeader;

/*
Admin: {loggedInUser && loggedInUser.displayName}*/