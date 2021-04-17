import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import './BookingList.css';


function BookingList() {
	// update list after deleting product 
	const [deletedOrder, setDeletedOrder] = useState({
		deletedId: ''
	})
	// useState to hold the allOrders
	const [allOrders, setAllOrders] = useState([]);
	// fetch products by api
	useEffect(() => {
		axios('https://cleanex.herokuapp.com/orders')
			.then(data => {
				setAllOrders(data.data);
			});
	}, []);

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

	return (
		<>
			<div className='BookingList'>
				<div className="headline">
					<p>Order ID</p>
					<p>Date</p>
					<p>Status</p>
					<p>Total</p>
				</div>
				{
					allOrders.map(order => <> <div id={order._id} className='listItems'>
						<p>{order.orderID}</p>
						<p>{12 || order.orderDate}</p>
						<p>{order.status}</p>
						<p>{order.totalCost}</p>
					</div>
					</>)
				}
			</div>

		</>
	)
}

export default BookingList;