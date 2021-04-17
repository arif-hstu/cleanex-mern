import React, { useState } from 'react';
import './Review.css';
import axios from 'axios';

function Review() {
	const [inputEmail, setInputEmail] = useState({});
	const [error, setError] = useState({});
	const [uploadMessage, setUploadMessage] = useState('');

	// process input text
	const handleInputText = (e) => {
		setUploadMessage('');
		let valid = false;

		const stringRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		valid = stringRegex.test(e.target.value)

		if (valid) {
			const newEmail = { ...inputEmail };
			newEmail[e.target.name] = e.target.value;
			setInputEmail(newEmail);
			valid = false;

		} else {
			const newEmail = { ...inputEmail };
			delete newEmail[e.target.name];
			setInputEmail(newEmail);

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
		// e.preventDefault();
		if (inputEmail.email) {

			// send product to the database
			fetch('http://localhost:5000/makeAdmin', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(inputEmail)
			})
				.then(res => res.json())
				.then(data => {
					if (data.insertedCount) {
						setUploadMessage('Admin created successfully!')
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
		<div className='Review'>
			<div className="part1">
				<h5>Email Address</h5>
				<input onFocus={removeError} onBlur={handleInputText} id='Product' type="text" name="email" />
				{
					error.error === 'email' && <p style={{ color: '#fa4e92' }}>Please input a valid Email Address</p>
				}
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
			<button className='primaryBtn' onClick={sendToDatabase}>Make Admin</button>
		</div>
	)
}

export default Review;