import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './logIn.css';
import pic2 from "../assets/logo.png";
import GoogleIcon from '../assets/google-icon.png';
import FacebookIcon from '../assets/facebook.png';

const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!email) {
            formIsValid = false;
            errors["email"] = "*Please enter your email.";
        } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
            formIsValid = false;
            errors["email"] = "*Please enter valid email.";
        }

        if (!password) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        return formIsValid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            };

            fetch('http://localhost:8080/users/signin', requestOptions)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('token', data.token);
                    navigate('/dashboard');
                })
                .catch(error => {
                    console.error("Login error", error);
                    setErrorMessage("Failed to log in.");
                });
        } else {
            setErrorMessage("Validation failed.");
        }
    };

    return (
        <div className="login-page">
            <div className="logo-container">
                <img src={pic2} alt="Toho Lanka Logo" />
            </div>
            <div className="login-card">
                <div className='form2'>
                    <div className='getstart-text1'>
                        <h1>Welcome Back <span role="img" aria-label="Hi">👋</span></h1>
                        <p style={{ color: 'lightblue' }}>Step into Your Dashboard, One Click Away.</p>
                    </div>
                    <form className="single-column-form1" onSubmit={handleSubmit}>
                        <div className="form-row3">
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="form-row4">
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Toyolanka@gmail.com'/>
                        </div>
                        <div className="form-row3">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-row4">
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='at least 8 characters'/>
                        </div>
                        <div className="form-row5">
                            <label>
                                <input type="checkbox" id="rememberMe" />
                                Remember Me
                            </label>
                            <label>Forget password?</label>
                        </div>
                        <button type="submit" className="submit-btn">Login</button>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                    <p className='login-method'>Or Login with:</p>
                    <div className="social-icons1">
                        <img src={FacebookIcon} alt="Facebook" />
                        <img src={GoogleIcon} alt="Google" />
                    </div>
                    <p className='last1'>Don't you have an account? <a href="/signup">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
