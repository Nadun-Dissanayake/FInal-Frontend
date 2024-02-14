import React, { useState } from 'react';
import './getstart.css';
import { Link } from 'react-router-dom';
import pic1 from "../assets/background.jpg";
import pic2 from "../assets/logo.png";
import GoogleIcon from '../assets/google-icon.png';
import FacebookIcon from '../assets/facebook.png';

const GetStart = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleButtonClick = (button) => {
        setHoveredButton(button);
    };

    return (
        <div className="getstart-page">
            <div className="background-image">

                <img src={pic1} alt="Background" />
            </div>
            <div className="getstart-card">
                <img src={pic2} alt="Logo" />
                <div className="button-row">
                <Link to="/signup">
                        <button
                            type="submit"
                            onMouseEnter={() => handleButtonClick('signup')}
                            onMouseLeave={() => setHoveredButton(null)}
                            className={hoveredButton === 'signup' ? 'hovered' : ''}
                        >
                            Sign up
                        </button>
                    </Link>
                    <Link to="/login">
                        <button
                            type="submit"
                            onMouseEnter={() => handleButtonClick('login')}
                            onMouseLeave={() => setHoveredButton(null)}
                            className={hoveredButton === 'login' ? 'hovered' : ''}
                        >
                            Log in
                        </button>
                    </Link>
                    <p className='loginmethod'> or sign up with</p>
                </div>
                <div className="gicon">

                        <img src={GoogleIcon} alt="Google Icon" />
                        <img src={FacebookIcon} alt="FaceBook Icon" />

                </div>
            </div>
        </div>
    );
};

export default GetStart;
