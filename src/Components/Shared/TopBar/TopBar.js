import React from 'react';
import { Link } from 'react-router-dom';

import './TopBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
	return (
		<div className='TopBar'>
			<div className="brandIcons">
				<FontAwesomeIcon icon={faFacebookF} />
				<FontAwesomeIcon icon={faTwitter} />
				<FontAwesomeIcon icon={faYoutube} />
				<FontAwesomeIcon icon={faInstagram} />
			</div>

			<div className="topBarContact">
				<div className="contact">
					<FontAwesomeIcon icon={faEnvelope} />
					<Link to='/contact'>contact@cleanex.com</Link>
				</div>
				<Link to='/support'>Support</Link>
				<Link to='/Career'>Career</Link>
			</div>
		</div>
	)
}

export default TopBar;