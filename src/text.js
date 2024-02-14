import React, { useState } from 'react';
import './loginpage.css';
import pic1 from "../assets/background.jpg";
import GoogleIcon from '../assets/google-icon.jpeg'; // Import your Google icon image

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
    };

    return (
        <div className="login-page">
            <div className="background-image">
                {/* Background image content */}
                <img src={pic1} alt="Background" />
            </div>
            <div className="login-card">
                {/* Login card content */}
                <img src="logo.png" alt="Logo" /> {/* Add your logo */}
                <h1>Welcome Back</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div>
                        <label>
                            <input type="checkbox" />
                            Remember Me
                        </label>
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit">Log in</button>
                </form>
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
                {/* Additional elements */}
                <div>
                    <img src={GoogleIcon} alt="Google Icon" /> {/* Google icon */}
                    <button type="button">Sign up with Google</button> {/* Google login button */}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
