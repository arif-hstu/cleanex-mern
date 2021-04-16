import React from 'react';

import './ExpertTeam.css';
import Expert from '../Expert/Expert';

function ExpertTeam() {
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
				<Expert />
				<Expert />
				<Expert />
				<Expert />
			</div>
		</div>
	)
}

export default ExpertTeam;