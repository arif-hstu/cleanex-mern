import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './ManageService.css';

function ManageService() {
	// update list after deleting product 
	const [deletedService, setDeletedService] = useState({
		deletedId: ''
	})

	// useState to hold the allServices
	const [allServices, setAllServices] = useState([]);
	// fetch products by api
	useEffect(() => {
		axios('https://cleanex.herokuapp.com/services')
			.then(data => setAllServices(data.data));
	}, [deletedService]);


	// handle deleteService funtionality
	const deleteService = (id) => {
			fetch('https://cleanex.herokuapp.com/deleteService', {
				method: 'POST',
				body: JSON.stringify([id]),
				headers: {
					'Content-type': 'application/json'
				}
			})
			.then(res => {
				res.json();
				setDeletedService({
					deletedId: id
				})
			})
	}

	return (
		<>
			<div className='ManageService'>
				<div className="headline">
					<p>Service Name</p>
					<p>Price</p>
					<p>Category</p>
					<p>Icon</p>
					<p>Action</p>
				</div>
				{
					allServices.map((service, index) => <>
						<div key={index} className='listItems'>
							<p>{service.serviceName}</p>
							<p>{service.serviceCharge}</p>
							<p>Catagory</p>
							<p><img src={service.serviceIcon} alt="Product" /></p>
							<div className='actionHolder'>
								
								<button className="deleteIcon" onClick={()=>deleteService(service._id)}>
									Delete
								</button>
							</div>
						</div>
					</>)
				}
			</div>

		</>
	)
}

export default ManageService;