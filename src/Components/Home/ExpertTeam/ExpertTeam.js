import React from 'react';

import './ExpertTeam.css';
import Expert from '../Expert/Expert';
import expert1 from '../../../images/expert1.png';
import expert2 from '../../../images/expert2.png';
import expert3 from '../../../images/expert3.png';
import expert4 from '../../../images/expert4.png';

function ExpertTeam() {
	const imageArray = [expert1, expert2, expert3, expert4]
	return (
		<div className='ExpertTeam'>
			<div className="header">
				<div className="headline">
					<h2>We have an expert team</h2>
					<h3>to serve you.</h3>
				</div>
				<div className="text">
					<p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Aliquid, id!</p>
				</div>
			</div>

			<div className="contents">
			{
				imageArray.map((image, index) => <Expert image={image} key={index} />)
			}
			</div>
		</div>
	)
}

export default ExpertTeam;