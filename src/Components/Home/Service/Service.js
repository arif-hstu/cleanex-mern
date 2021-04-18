import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { SelectedServiceContext } from '../../../App';

import './Service.css';
import iconPlumbing from '../../../icons/iconPlumbing.png';

function Service({ serv }) {
	const [selectedService, setSelectedService] = useContext(SelectedServiceContext);

	const history = useHistory();

	const handleBook = (id) => {
		setSelectedService([id]);

		// redirect to book page
		const path = 'dashboard/book'; 
		history.push(path);
	}
	return (
		<div className='Service' id={serv._id} onClick={()=>handleBook(serv._id)}>
			<div className="iconHolder">
				<div className="icon">
					<img src={serv.serviceIcon} alt="" />
				</div>
			</div>
			<div className="textHolder">
				<p>{serv.serviceName}</p>
				<p>{serv.serviceDetails}</p>
			</div>
			</div>
	)
}

export default Service;