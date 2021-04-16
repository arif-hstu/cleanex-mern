import React, { useState } from 'react';
import './AddService.css';
import axios from 'axios';
require('dotenv').config();


function AddService() {
	// handle INPUT PRODUCT to send to the database
	const [inputService, setInputService] = useState({});
	const [error, setError] = useState({});
	const [spinner, setSpinner] = useState(false);
	const [uploadMessage, setUploadMessage] = useState('');

	// handle upload image to the imgbb api
	// const [imageUrl, setImageUrl] = useState('');
	const uploadImage = (img) => {
		let body = new FormData();
		body.set('key', process.env.REACT_APP_IMGBB_KEY)
		body.append('image', img)

		return axios({
			method: 'post',
			url: 'https://api.imgbb.com/1/upload',
			data: body
		})
			.catch(err => {
				setError({
					error: 'serviceIcon'
				})
			})
	};
	const handleImage = (e) => {
		uploadImage(e.target.files[0])
			.then(res => {
				if (res !== undefined) {
					const newService = { ...inputService };
					newService.serviceIcon = res.data.data.url;
					setInputService(newService);
					setSpinner(false);

				} else {
					const newService = { ...inputService };
					delete newService.serviceIcon;
					setInputService(newService);
				}
			})
	}

	// process input data
	const handleInputText = (e) => {
		setUploadMessage('');
		setSpinner(false);

		let valid = false;
		// if input is product name
		if (e.target.name === 'serviceName' || e.target.name === 'serviceDetails') {
			const stringRegex = /[a-zA-Z]/;
			valid = stringRegex.test(e.target.value)

			if (valid) {
				const newService = { ...inputService };
				newService[e.target.name] = e.target.value;
				setInputService(newService);
				valid = false;

			} else {
				const newService = { ...inputService };
				delete newService[e.target.name];
				setInputService(newService);

				setError({
					error: e.target.name
				});
			}
		}

		// if input is price
		if (e.target.name === 'serviceCharge') {
			const numberRegex = /^[0-9]+$/;
			valid = numberRegex.test(e.target.value);

			if (valid) {
				const newService = { ...inputService };
				newService[e.target.name] = e.target.value;
				setInputService(newService);
				valid = false;
			} else {
				const newService = { ...inputService };
				delete newService[e.target.name];
				setInputService(newService);

				setError({
					error: e.target.name
				});
			}
		}
	}

	// remove error message
	const removeError = () => {
		setSpinner(false);
		setError({});
	}

	// loadSpinner 
	const loadSpinner = () => {
		removeError();
		setSpinner(true);
	}


	/*******
	* send processed data
	* to the server
	*******/
	const sendProductToDatabase = (e) => {
		// e.preventDefault();
		if (inputService.serviceName && inputService.serviceCharge && inputService.serviceDetails && inputService.serviceIcon) {

			// send product to the database
			fetch('https://cleanex.herokuapp.com/addService', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(inputService)
			})
				.then(res => res.json())
				.then(data => setUploadMessage(data.response));
		} else {
			setError({
				error: 'generalError'
			});
		}
	}

	return (
		<div className='AddService'>
			<div className="part1">
				<h5>Service Name</h5>
				<input onFocus={removeError} onBlur={handleInputText} id='Product' type="text" name="serviceName" />
				{
					error.error === 'serviceName' && <p style={{ color: '#fa4e92' }}>Please input a valid Service Name</p>
				}
				<h5>Service Charge</h5>
				<input onFocus={removeError} onBlur={handleInputText} type="text" name='serviceCharge' />
				{
					error.error === 'serviceCharge' && <p style={{ color: '#fa4e92' }}>Please input a valid Price</p>
				}
			</div>
			<div className="part2">
				<h5>Details</h5>
				<input onFocus={removeError} onBlur={handleInputText} id='Category' type="textarea" name='serviceDetails' />
				{
					error.error === 'serviceDetails' && <p style={{ color: '#fa4e92' }}>Please input valid Details</p>
				}

				<h5>Image</h5>
				<div className="imageUpload">
					<input type="file" onClick={loadSpinner} onChange={handleImage} />
					{
						error.error === 'serviceIcon' && <p style={{ color: '#fa4e92' }}>There was an error! Please retry.</p>
					}
				</div>
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
					spinner &&
					<p style={{
						color: 'green'
					}}>Uploading Image...
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
			<button onClick={sendProductToDatabase}>Submit</button>
		</div>
	)
}

export default AddService;