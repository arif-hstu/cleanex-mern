import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import './NavBar.css';
import logo from '../../../images/logoText.png';

import { AdminContext } from '../../../App';
import { UserContext } from '../../../App';

function NavBar() {
	const [isAdmin, setAdmin] = useContext(AdminContext);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	return (
		<div className='NavBar'>
			<div className="logoHolder">
				<img src={logo} alt="Cleanex" />
			</div>

			<div className="linkHolder">
				<div className="catagoryLink">
					<Link to='/residentialService'>Residential Service</Link>
					<Link to='/Business Service'>Business Service</Link>
				</div>

				<div className='menuLink'>
					<Link to='/residentialService'>Home</Link>
					<Link to='/Business Service'>Packages</Link>					<Link to='/residentialService'>Services</Link>
					<Link to='/Business Service'>Features</Link>					<Link to='/residentialService'>News</Link>
					<Link to='/Business Service'>News</Link>
					<Link to='/residentialService'>Contacts</Link>

					<div className="searchIcon">
						<FontAwesomeIcon icon={faSearch} />
					</div>
				</div>
			</div>

			<div className="contactInfo">
				<div className="info">
					<Link to={isAdmin ? '/dashboard/orderList' : '/dashboard/book'}>
						{loggedInUser.displayName ? 
							loggedInUser.displayName +' ' :
							loggedInUser.email ?
							loggedInUser.email + ' ' : 
							'Login '
						}

						<FontAwesomeIcon icon={faUser} />
					</Link>
				</div>
				<div className="contact">
					<FontAwesomeIcon icon={faPhone} />
					<div className="contactDetails">
						<small>CALL US NOW</small>
						<p>(+880)-1700-000-000</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar;