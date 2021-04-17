import React, { useState } from 'react';
import './Review.css';
import axios from 'axios';

function Review() {
	const [inputReview, setInputReview] = useState({});
	const [error, setError] = useState({});
	const [uploadMessage, setUploadMessage] = useState('');

	// process input text
	const handleInputText = (e) => {
		setUploadMessage('');
		let valid = false;

		const stringRegex = /[a-zA-Z]/;
		valid = stringRegex.test(e.target.value);
		console.log(valid);

		if (valid) {
			const newReview = { ...inputReview };
			newReview[e.target.name] = e.target.value;
			setInputReview(newReview);
			valid = false;

		} else {
			const newReview = { ...inputReview };
			delete newReview[e.target.name];
			setInputReview(newReview);

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
		if (
			inputReview.reviewerName && 
			inputReview.designation && 
			inputReview.review 
			) {
			// send product to the database
			fetch('http://localhost:5000/addReview', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(inputReview)
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
		<div className='Review2'>
			<div className="part1">
				<h5>Your Name</h5>
				<input onFocus={removeError} onBlur={handleInputText}  type="text" name="reviewerName" />
				{
					error.error === 'reviewerName' && <p style={{ color: '#fa4e92' }}>Please input a valid Name</p>
				}
			</div>
			<div className="part2">
				<h5>Company Name, Designation</h5>
				<input onFocus={removeError} onBlur={handleInputText}  type="text" name="designation" />
				{
					error.error === 'designation' && <p style={{ color: '#fa4e92' }}>Please input valid info</p>
				}
			</div>
			<div className="part3">
				<h5>Details</h5>
				<input onFocus={removeError} onBlur={handleInputText}  type="textarea" name="review" />
				{
					error.error === 'review' && <p style={{ color: '#fa4e92' }}>Please input valid details</p>
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
			<button className='primaryBtn' onClick={sendToDatabase}>Submit</button>
		</div>
	)
}

export default Review;