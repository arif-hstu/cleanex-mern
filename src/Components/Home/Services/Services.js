import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css';

import ladyCleaner1 from '../../../images/ladyCleaner1.png';

function Services() {
	const [firstServiceList, setFirstServiceList] = useState([]);
	const [SecondServiceList, setSecondServiceList] = useState([]);

	useEffect(() => {
		fetch('https://cleanex.herokuapp.com/services?count=6')
			.then(res => res.json())
			.then(data => {
				const firstList = data.slice(0, 3);
				const secondList = data.slice(3, 6);

				setFirstServiceList(firstList);
				setSecondServiceList(secondList);
			});

	}, []);

	return (
		<div className='Services'>
			<div className="serviceList1">
				{
					firstServiceList.map((serv, index) => <Service key={index} serv={serv} />)
				}
			</div>

			<div className="serviceCenter">
				<div className="serviceFeature">
					<p>25+</p>Services <br /> we provide
				</div>
				<div className="serviceImg">
					<img src={ladyCleaner1} alt="" />
					<button className="secondaryBtn">
						Explore More >
					</button>
				</div>
			</div>

			<div className="serviceList2">
				{
					SecondServiceList.map((serv, index) => <Service serv={serv} key={index} />)
				}
			</div>
		</div>
	)
}

export default Services;