import React from 'react';

import './Partners.css';
import slack from '../../../images/slack.png';
import google from '../../../images/google.png';
import linkedin from '../../../images/linkedin.jpg';
import figma from '../../../images/figma.png';
import sketch from '../../../images/sketch.png';
import envato from '../../../images/envato.png';

function Partners() {
	return (
		<div className='Partners'>
			<div className="mapHolder">
				<h1>80<sup>+</sup></h1>
				<p>Partners in world wide</p>
			</div>

			<div className="logoHolder">
				<img src={ slack } alt="" />
				<img src={ google } alt="" />
				<img src={ linkedin } alt="" />
				<img src={ figma } alt="" />
				<img src={ sketch } alt="" />
				<img src={ envato } alt="" />
			</div>
		</div>
	)
}

export default Partners