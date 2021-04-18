import React, { useState, useContext, useEffect } from 'react';

import { SelectedServiceContext } from '../../../../App';

import './Book.css';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
require('dotenv').config();


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function Book() {
	const [selectedService, setSelectedService] = useContext(SelectedServiceContext);
	const [inputInfo, setInputInfo] = useState({});
	const [error, setError] = useState({});
	const [uploadMessage, setUploadMessage] = useState('');
	const [fetchedService, setFetchedService] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/seletedService', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(selectedService)
		})
			.then(res => res.json())
			.then(data => setFetchedService(data));
	}, [selectedService])

	// process input text
	const handleInputText = (e) => {
		setUploadMessage('');
		let valid = false;

		const stringRegex = /[a-zA-Z]/;
		valid = stringRegex.test(e.target.value);
		console.log(valid);

		if (valid) {
			const newReview = { ...inputInfo };
			newReview[e.target.name] = e.target.value;
			setInputInfo(newReview);
			valid = false;

		} else {
			const newReview = { ...inputInfo };
			delete newReview[e.target.name];
			setInputInfo(newReview);

			setError({
				error: e.target.name
			});
		}

	}

	// remove error message
	const removeError = () => {
		setUploadMessage('');
		setError({});
	}

	// loadSpinner 
	const loadSpinner = () => {
		setUploadMessage('');
		removeError();
	}


	/*******
	* send processed data
	* to the server
	*******/
	const sendToDatabase = (e) => {

		// create random orderID
		const randomIdGenerator = () => {
			return Math.random().toString(36).substr(2, 7);
		};
		const newInputInfo = { ...inputInfo };
		newInputInfo.orderID = randomIdGenerator();
		newInputInfo.
			setInputInfo(newInputInfo);

		if (
			inputInfo.buyerName &&
			inputInfo.buyerEmail &&
			inputInfo.serviceName &&
			inputInfo.orderID
		) {
			// send product to the database
			fetch('http://localhost:5000/book', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(inputInfo)
			})
				.then(res => res.json())
				.then(data => {
					if (data.insertedCount) {
						setUploadMessage('Service booked successfully!')
					} else {
						setUploadMessage('Oops.. There was an error, please try again.')
					}
				});
		} else {
			setError({
				error: 'generalError'
			});
		}
	}

	return (
		<div className='Book'>
			<div className="serviceInfo">
				<h4>
					{
						fetchedService.length === 0 ?
							'No service selected' :
							fetchedService[0].serviceName
					}
				</h4>
				<h4>৳
					{
						fetchedService.length === 0 ?
							' 0' :
							fetchedService[0].serviceCharge
					}
				</h4>
			</div>
			<div className="part1">
				<h5>Your Name</h5>
				<input onFocus={removeError} onBlur={handleInputText} type="text" name="buyerName" />
				{
					error.error === 'buyerName' && <p style={{ color: '#fa4e92' }}>Please input a valid Name</p>
				}
			</div>
			<div className="part2">
				<h5>Email</h5>
				<input onFocus={removeError} onBlur={handleInputText} type="text" name="buyerEmail" />
				{
					error.error === 'buyerEmail' && <p style={{ color: '#fa4e92' }}>Please input valid email</p>
				}
			</div>
			<div className="part3">
				<h5>Details</h5>
				<input onFocus={removeError} onBlur={handleInputText} type="text" name="serviceName" />
				{
					error.error === 'serviceName' && <p style={{ color: '#fa4e92' }}>Please input valid details</p>
				}
			</div>

			<div className="stripe">
				<Elements stripe={stripePromise}>
					<CheckoutForm
						setError={setError}
						error={error}
						inputInfo={inputInfo}
						sendToDatabase={sendToDatabase}
						fetchedService={fetchedService}
					/>
				</Elements>
			</div>
			<div className="generalError">
				{
					error.error === 'generalError' &&
					<p style={{
						color: '#fa4e92'
					}}>There was an error! Please try again.
          		</p>
				}
				{
					uploadMessage &&
					<p style={{
						color: 'green'
					}}>{uploadMessage}
					</p>
				}
			</div>

		</div>
	)
}

export default Book;