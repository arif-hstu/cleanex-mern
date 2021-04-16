import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import insta1 from '../../../images/insta1.jpeg'
import insta2 from '../../../images/insta2.jpeg'
import insta3 from '../../../images/insta3.jpeg'
import insta4 from '../../../images/insta4.jpeg'
import insta5 from '../../../images/insta5.jpeg'
import insta6 from '../../../images/insta6.jpeg'

import './Footer.css';

function Footer() {
	return (
		<>
			<div className='Footer'>
				<div className="about">
					<h4>We are <span className='highlight'>Cleanex!</span></h4>
					<p>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
					<h6>Open Hours:</h6>
					<p>Sat-Thurs: 8 am - 5 pm. <br />Friday: CLOSED</p>
				</div>

				<div className="newsletter">
					<h4>Newsletter</h4>
					<p>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
					<div className="socialIcons">
						<FontAwesomeIcon icon={faFacebookF} />
						<FontAwesomeIcon icon={faTwitter} />
						<FontAwesomeIcon icon={faYoutube} />
						<FontAwesomeIcon icon={faInstagram} />
					</div>
				</div>

				<div className="officialInfo">
					<h4>Official Info:</h4>
					<div className="contact">
						<div>
							<FontAwesomeIcon icon={faMapMarker} /> <p>Suihari, Dinajpur Sadar, Dinajpur,Dinajpur</p><br />
						</div>
						<div>
							<FontAwesomeIcon icon={faPhone} /> <p>Suihari, Dinajpur Sadar, Dinajpur,Dinajpur</p><br />
						</div>
						<div>
							<FontAwesomeIcon icon={faEnvelope} /> <p>Suihari, Dinajpur Sadar, Dinajpur,Dinajpur</p><br />
						</div>
					</div>
				</div>

				<div className="social">
					<h4>Instagram</h4>
					<div className="contact">
						<img src={insta1} alt="" />
						<img src={insta2} alt="" />
						<img src={insta3} alt="" />
						<img src={insta4} alt="" />
						<img src={insta5} alt="" />
						<img src={insta6} alt="" />
					</div>
				</div>
			</div>
			<div className="copyrightBar">
				<p>2021 All rights reserved by Md Arifur Rahman</p>
			</div>
		</>
	)
}

export default Footer;