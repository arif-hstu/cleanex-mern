import React, { useState, useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { AdminContext } from '../../App';
import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig'
import './Login.css'
import logo from '../../images/logoText.png';

function Login() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [isAdmin, setIsAdmin, admins, setAdmins] = useContext(AdminContext);

	// firebase initialization and functionality
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	} else {
		firebase.app();
	}
	const provider = new firebase.auth.GoogleAuthProvider();

	const handleGoogleLogin = () => {
		firebase.auth()
			.signInWithPopup(provider)
			.then((result) => {

				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;
				// This gives you a Google Access To
				// ken. You can use it to access the Google API.
				var token = credential.accessToken;
				// The signed-in user info.
				var user = result.user;

				// store user info in loggedInUser state 
				const newUserInfo = { ...loggedInUser };
				newUserInfo.displayName = user.displayName;
				newUserInfo.email = user.email;
				setLoggedInUser(newUserInfo);

				const admin = admins.find(item => item.email === user.email);
				if (admin !== undefined) {
					setIsAdmin(true);
					let { from } = { from: { pathname: "/dashboard/orderList" } };
					history.replace(from);
				} else {
					history.replace(from);
				}
				// ...
			}).catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
	}

	// get data to redirect from login page
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	return (
		<>
			{
				!loggedIn &&
				<div className='Login'>
					<div className="logoHolder">
						<Link to='/'><img src={logo} alt="" /></Link>
					</div>
					<div className='registerHolder'>
						<h4>Register and Explore!</h4>
						<button onClick={handleGoogleLogin}>Register</button>
						<p>Already registered?<span onClick={() => setLoggedIn(true)}> Login </span>here</p>
					</div>
				</div>
			}
			{
				loggedIn &&
				<div className='Login'>
					<div className="logoHolder">
						<Link to='/'><img src={logo} alt="" /></Link>
					</div>
					<div className='registerHolder'>
						<h4>Login and Enjoy!</h4>
						<button onClick={handleGoogleLogin}>Login</button>
						<p>Not registered?<span onClick={() => setLoggedIn(false)}> Registration </span>here</p>
					</div>
				</div>
			}
		</>
	)
}

export default Login;