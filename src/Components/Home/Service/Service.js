import React from 'react';

import './Service.css';
import iconPlumbing from '../../../icons/iconPlumbing.png'

function Service() {
	return (
		<div className='Service'>
			<div className="iconHolder">
				<div className="icon">
					<img src={iconPlumbing} alt="" />
				</div>
			</div>
			<div className="textHolder">
				<p>Plumbing Service</p>
				<p>Lorem ipsum dolor sit, amet consectetur </p>
			</div>
			</div>
	)
}

export default Service;