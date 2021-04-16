import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './OrderList.css';
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
// import BorderColorIcon from '@material-ui/icons/BorderColor';;


function OrderList() {
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
	const deleteService = (e) => {
		if (e.target.parentNode.id || e.target.id) {

			fetch('https://cleanex.herokuapp.com/deleteService', {
				method: 'POST',
				body: JSON.stringify({
					deletedId: e.target.parentNode.id || e.target.id
				}),
				headers: {
					'Content-type': 'application/json'
				}
			})
			.then(res => {
				res.json();
				setDeletedService({
					deletedId: e.target.parentNode.id || e.target.id
				})
			})
			.then(data => {
				//....
			})
			.catch(error => {
				//....
			})
		}
	}

	return (
		<>
			<div className='OrderList'>
				<div className="headline">
					<p>Service Name</p>
					<p>Price</p>
					<p>Category</p>
					<p>Icon</p>
					<p>Action</p>
				</div>
				{
					allServices.map(service => <>
						<div id={service._id} className='listItems'>
							<p>{service.serviceName}</p>
							<p>{service.serviceCharge}</p>
							<p>Catagory</p>
							<p><img src={service.serviceIcon} alt="Product" /></p>
							<div className='actionHolder'>
								
								<button id={service._id} className="deleteIcon" onClick={deleteService}>
									delete
								</button>
							</div>
						</div>
					</>)
				}
			</div>

		</>
	)
}

export default OrderList;