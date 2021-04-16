import React from 'react';

import './Expert.css';

import expert1 from '../../../images/expert1.png'

function Expert() {
	const bgImgStyle = {
		background: 'url(' + expert1 + ')',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		backgroundSize: 'cover',
		width: '12rem',
		height: '14rem',
		position: 'relative'
	}
	return (
		<div style={bgImgStyle} className='Expert'>
			<div className="dummyContent">
			</div>
			<div className="content"></div>
			<div className='text'>
				<p className="name">
					Andrea Luies
				</p>
				<p className="designation">
					Head in Laundry
				</p>
			</div>
		</div>
	)
}

export default Expert;