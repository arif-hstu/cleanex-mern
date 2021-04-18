import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import './OrderList.css';


function OrderList() {
	// update list after deleting product 
	const [deletedOrder, setDeletedOrder] = useState({
		deletedId: ''
	})
	// handle status change
	const [status, setStatus] = useState({});
	// useState to hold the allOrders
	const [allOrders, setAllOrders] = useState([]);
	// fetch products by api
	useEffect(() => {
		axios('https://cleanex.herokuapp.com/orders')
			.then(data => {
				setAllOrders(data.data);
			});
	}, [status]);

	// handle deleteService funtionality
	const deleteService = (e) => {
		if (e.target.parentNode.id || e.target.id) {

			fetch('https://cleanex.herokuapp.com/deleteOrder', {
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
					setDeletedOrder({
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

	// handle react-select
	const options = [
		{ value: 'pending', label: 'Pending' },
		{ value: 'done', label: 'Done' },
		{ value: 'onGoing', label: 'On Going' }
	];

	// handleStatusChange 
	const handleStatusChange = (e, updateStatus, orderID) => {
		fetch('https://cleanex.herokuapp.com/updateOrder', {
			method: 'POST',
			body: JSON.stringify({
				orderID,
				updatedStatus: e.value
			}),
			headers: {
				'Content-type': 'application/json'
			}
		})
			.then(data => {
				setStatus(e.value);
			})
	}

	const settingStatus = (updateStatus) => {

	}

	return (
		<>
			<div className='OrderList'>
				<div className="headline">
					<p>Name</p>
					<p>Email</p>
					<p>Service Name</p>
					<p>Total Cost</p>
					<p>Status</p>
				</div>
				{
					allOrders.map((order) => <> <div key={order._id} className='listItems'>
						<p>{order.buyerName}</p>
						<p>{order.buyerEmail}</p>
						<p>{order.serviceName}</p>
						<p>{order.totalCost}</p>
						<div className='actionHolder'>
							<Select defaultValue={
								order.status === 'onGoing' ?
								{ value: order.status, label: 'On Going' } :
								{ value: order.status, label: order.status }
							} onChange={(e) => handleStatusChange(e, order.status, order.orderID)} id={order._id} options={options} />
						</div>
					</div>
					</>)
				}
			</div>

		</>
	)
}

export default OrderList;