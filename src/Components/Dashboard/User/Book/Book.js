import React, { useState, useContext, useEffect } from 'react';

import { SelectedServiceContext } from '../../../../App';
import { UserContext } from '../../../../App';

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
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const [inputInfo, setInputInfo] = useState({});
	const [error, setError] = useState({});
	const [uploadMessage, setUploadMessage] = useState('');
	const [fetchedService, setFetchedService] = useState([]);

	useEffect(() => {
		fetch('https://cleanex.herokuapp.com/seletedService', {
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

		if (valid && fetchedService[0].serviceName) {
			const newInputInfo = { ...inputInfo };
			newInputInfo[e.target.name] = e.target.value;
			newInputInfo.serviceName = fetchedService[0].serviceName;
			setInputInfo(newInputInfo);
			valid = false;

		} else {
			const newInputInfo = { ...inputInfo };
			delete newInputInfo[e.target.name];
			setInputInfo(newInputInfo);

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
		newInputInfo.totalCost = fetchedService[0].serviceCharge;
		newInputInfo.buyerEmail = loggedInUser.email;
		newInputInfo.status = 'pending';
		setInputInfo(newInputInfo);

		if (
			inputInfo.buyerName &&
			inputInfo.serviceName &&
			inputInfo.orderID
		) {
			// send product to the database
			fetch('https://cleanex.herokuapp.com/book', {
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
				<input onFocus={removeError} type="text" name="buyerEmail" value={loggedInUser.email || ' '} />
				{
					error.error === 'buyerEmail' && <p style={{ color: '#fa4e92' }}>Please input valid email</p>
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
						loggedInUser={loggedInUser}
						setLoggedInUser={setLoggedInUser}
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