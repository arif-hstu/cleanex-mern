import React from 'react';

import './TopBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function TopBar() {
	return (
		<div className='TopBar'>
			this <FontAwesomeIcon icon={faInstagram} />is topbar 2
		</div>
	)
}

export default TopBar;