import React from 'react';

import  Service from '../Service/Service';
import './Services.css';

import ladyCleaner1 from '../../../images/ladyCleaner1.png'


function Services() {
	return (
		<div className='Services'>
			<div className="serviceList1">
				<Service />
				<Service />
				<Service />
			</div>

			<div className="serviceCenter">
				<div className="serviceFeature">
					<p>25+</p>Services <br /> we provide
				</div>
				<div className="serviceImg">
					<img src={ ladyCleaner1 } alt="" />
					<button className="secondaryBtn">
						Explore More >
					</button>
				</div>
			</div>

			<div className="serviceList2">
				<Service />
				<Service />
				<Service />
			</div>
		</div>
	)
}

export default Services;