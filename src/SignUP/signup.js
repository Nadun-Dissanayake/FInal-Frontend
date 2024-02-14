// SignUpPage.js

import React from 'react';
import './SignUpPage.css';
import pic2 from "../assets/logo.png";
import GoogleIcon from '../assets/google-icon.png';
import FacebookIcon from '../assets/facebook.png';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    return (
        <div className="signup-page">
            <div className="logo-container">
                <img src={pic2} alt="Toho Lanka Logo" />
            </div>
            <div className="signup-card">
                <div className='form'>
                <div className='getstart-text'>
                    <h1>Get Started Now</h1>
                    <p style={{ color: 'lightblue' }}>Seamless Access, Exceptional Experience</p>
                </div>
                <form className="single-column-form">
                    <div className="form-row">
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="form-row1">
                        <input type="text" id="firstName"  placeholder='Ben' />
                    </div>
                    <div className="form-row">
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="form-row1">
                        <input type="text" id="lastName" placeholder='Thomas' />
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="form-row1">
                    <input type="email" id="email" placeholder='Toyolanka@gmail.com'/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="password">Password</label>
                        
                    </div>
                    <div className="form-row1">
                    <input type="password" id="password" placeholder='at lesat 8 characters'/>
                    </div>
                    <div className="form-row">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        
                    </div>
                    <div className="form-row1">
                    <input type="password" id="confirmPassword" placeholder='at lesat 8 characters' />
                    </div>
                    
                    <div className="form-row2">
                        <label htmlFor="rememberMe">
                            <input type="checkbox" id="rememberMe" />
                            Remember Me
                        </label>
                    </div>
                    <button1 type="submit">
                    <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                        Sign Up
                    </Link>
                </button1>
                </form>
                
                <div className="social-icons">
                    <p>Sign up with:</p>
                    <img src={FacebookIcon} alt="Facebook" />
                    <img src={GoogleIcon} alt="Google" />
                </div>
                <p className='last'>Already have an account? <a href="/login">Log in</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
