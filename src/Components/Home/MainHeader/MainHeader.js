import React from 'react';
import './MainHeader.css';

import NavBar from '../../Shared/NavBar/NavBar';
import TopBar from '../../Shared/TopBar/TopBar';

function MainHeader() {
	return (
		<div className='MainHeader'>
			<TopBar />
			<NavBar />

			<div className="headerContent">
				 <h1>Best Cleaning <br /> Service in Town</h1>
				 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illum debitis molestias officiis libero dignissimos!</p>
				 <div className="buttonHolder">
				 	<button className='primaryBtn'>Check Availablity</button>
				 	<button className='secondaryBtn'>Learn More</button>
				 </div>
			</div>

		</div>
	)
}

export default MainHeader
