import React, { useState, useEffect } from 'react';
import './dashboardpage.css';
import homeIcon from '../icon/home.svg';
import inventoryIcon from '../icon/inventory.svg';
import salesIcon from '../icon/sales.svg';
import purchasesIcon from '../icon/purchases.svg';
import IntegrationIcon from '../icon/integration.svg';
import reportsIcon from '../icon/reports.svg';
import documentIcon from '../icon/documents.svg';
import settingIcon from '../icon/setting.svg';
import logo from '../icon/logo.jpg';
import { Link } from 'react-router-dom';
import bell from '../icon/bell.svg';
import profile from '../icon/profile.svg';
import analitic from '../icon/analitic.svg';
import Demo from "../Demo";
import productImg from '../icon/productImg.jpg';
import arrowIcon from '../icon/arrow.svg';
import pic2 from "../assets/logo.png";
const DashboardPage = () => {

    useEffect(() => {
        // Function to set viewport meta tag
        const setViewportMetaTag = () => {
            const viewportMetaTag = document.querySelector('meta[name="viewport"]');
          
            if (viewportMetaTag) {
              // Update content attribute
              viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=1.0');
            } else {
              // Create new meta tag if not present
              const newViewportMetaTag = document.createElement('meta');
              newViewportMetaTag.name = 'viewport';
              newViewportMetaTag.content = 'width=device-width, initial-scale=1.0';
              
              // Append to the head of the document
              document.head.appendChild(newViewportMetaTag);
            }
        };
        
        // Call the function to set or update the viewport meta tag
        setViewportMetaTag();
    }, []);  
      

    const authToken = localStorage.getItem('token');
    console.log(authToken);

    const [isClicked, setIsClicked] = useState(false);

    const toggleList = () => {
        setIsClicked(!isClicked);
    };

    const [isHomeClicked, setIsHomeClicked] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if (authToken) {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'}, // Assuming authToken is a bearer token
            };

            fetch(`http://localhost:8080/users/getUser/${authToken}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                })
                .catch(error => {
                    console.error("Error fetching user data", error);
                });
        }
    }, [authToken]);

    const handleHomeClick = () => {
        setIsHomeClicked(!isHomeClicked);
    };



    return (
        <div className="dashbord-page">
            <div class="navbar">
                <div class="logo">
                    <img src={pic2} alt="" />
                </div>
                <a href="/dashboard">
                    <button className="home">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                        </svg>
                        <h3>Home</h3>
                    </button>
                </a>
                <button className="home" onClick={toggleList}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M720-360v-80h80q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360h-80Zm0 160v-80h80q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200h-80Zm-160 40q-33 0-56.5-23.5T480-240h-80v-160h80q0-33 23.5-56.5T560-480h120v320H560ZM280-280q-66 0-113-47t-47-113q0-66 47-113t113-47h60q25 0 42.5-17.5T400-660q0-25-17.5-42.5T340-720H200q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h140q58 0 99 41t41 99q0 58-41 99t-99 41h-60q-33 0-56.5 23.5T200-440q0 33 23.5 56.5T280-360h80v80h-80Z" />
                    </svg>
                    <h3>Inventory</h3>
                    {isClicked ? (
                        <svg className="up-arrow" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M7 14l5-5 5 5z" />
                        </svg>
                    ) : (
                        <svg className="down-arrow" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M7 10l5 5 5-5z" />
                        </svg>
                    )}
                </button>
                <ul className={`list-container ${isClicked ? 'open' : ''}`}>
                    <li className="home">
                        <Link class='inventory-item' to="/dashboard/items">
                            <h3>Item</h3>
                        </Link>
                    </li>
                    <li className="home">
                        <Link to="/dashboard/catogary">
                            <h3>Category</h3>
                        </Link>
                    </li>
                </ul>

                <button class="home">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M760-400v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Z" /></svg>
                    <h3>Sales</h3>
                </button>
                <button class="home">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-360v-80h80q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360h-80Zm0 160v-80h80q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200h-80Zm-160 40q-33 0-56.5-23.5T480-240h-80v-160h80q0-33 23.5-56.5T560-480h120v320H560ZM280-280q-66 0-113-47t-47-113q0-66 47-113t113-47h60q25 0 42.5-17.5T400-660q0-25-17.5-42.5T340-720H200q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h140q58 0 99 41t41 99q0 58-41 99t-99 41h-60q-33 0-56.5 23.5T200-440q0 33 23.5 56.5T280-360h80v80h-80Z" /></svg>
                    <h3>Integration</h3>
                </button>





                <button class="home">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                    <h3>Reports</h3>
                </button>
                <button class="home">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" /></svg>
                    <h3>Documents</h3>
                </button>
                <hr />
                <button class="home  setting">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
                    <h3>Setting</h3>
                </button>
                <button class="home  setting1">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                    <h3>SignOut</h3>
                </button>
            </div>
            <div class="dashbord">
                <div class="title">
                    <h2>Dashboard</h2>
                    <img class="bell" src={bell} alt="" />
                    <img class="profile" src={profile} alt="" />
                    <h4 class="profileName">{firstName} {lastName}</h4>
                </div>
                <div class="summery">
                    <div class="summery-sales">
                        <div class="ful-dashboard">
                            <div>
                                <h4>Sales Summery</h4>
                                <div class="month">
                                    <div class="month1">
                                        <h1>250,000 LKR</h1>
                                        <div class="analitic">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z" /></svg>
                                            <div class="sales-month">
                                                <h5>Sales</h5>
                                                <h5>August 2023</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="month1">
                                        <h1>250,000 LKR</h1>
                                        <div class="analitic">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z" /></svg>
                                            <div class="sales-month">
                                                <h5>Sales</h5>
                                                <h5>August 2023</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="month2">
                                        <h1>250,000 LKR</h1>
                                        <div class="analitic">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                                            <div class="sales-month">
                                                <h5>Sales</h5>
                                                <h5>August 2023</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="month">
                                    <div class="month1">
                                        <h1>250,000 LKR</h1>
                                        <div class="analitic">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z" /></svg>
                                            <div class="sales-month">
                                                <h5>Sales</h5>
                                                <h5>August 2023</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="month1">
                                        <h1>250,000 LKR</h1>
                                        <div class="analitic">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z" /></svg>
                                            <div class="sales-month">
                                                <h5>Sales</h5>
                                                <h5>August 2023</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="month2">
                                        <h1>250,000 LKR</h1>
                                        <div class="analitic">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" /></svg>
                                            <div class="sales-month">
                                                <h5>Sales</h5>
                                                <h5>August 2023</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="inventory-summury">
                                <h4>Inventory Summury</h4>
                                <div class="item">
                                    <h1>4.5K</h1>
                                    <div class="total-item-and-arrow">
                                        <div>
                                            <h6>Total Items</h6>
                                            <h6>Augest 2023</h6>
                                        </div>
                                        <img class="arrow" src={arrowIcon} alt="" />
                                    </div>
                                </div>
                                <div class="item">
                                    <h1>4.5K</h1>
                                    <div class="total-item-and-arrow">
                                        <div>
                                            <h6>Total Items</h6>
                                            <h6>Augest 2023</h6>
                                        </div>
                                        <img class="arrow" src={arrowIcon} alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>`
                        <div class="bottom">
                            <div class="top-selling">
                                <h4>Top Selling Item</h4>
                                <table class="sample-table">
                                    <thead>
                                        <tr class="heading">
                                            <th>Item Name</th>
                                            <th>Sold Qty</th>
                                            <th>Remain Qty</th>
                                            <th>Price</th>
                                            <th>Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Product A</td>
                                            <td>50</td>
                                            <td>20</td>
                                            <td>$25.00</td>
                                            <td>$500.00</td>
                                        </tr>
                                        <tr>
                                            <td>Product B</td>
                                            <td>30</td>
                                            <td>10</td>
                                            <td>$40.00</td>
                                            <td>$300.00</td>
                                        </tr>
                                        <tr>
                                            <td>Product B</td>
                                            <td>30</td>
                                            <td>10</td>
                                            <td>$40.00</td>
                                            <td>$300.00</td>
                                        </tr>
                                        <tr>
                                            <td>Product B</td>
                                            <td>30</td>
                                            <td>10</td>
                                            <td>$40.00</td>
                                            <td>$300.00</td>
                                        </tr>
                                         

                                    </tbody>
                                </table>
                            </div>
                            <div class="quintity-items">
                                <h4>Low Quentity Items</h4>
                                <div class="quentity">
                                    <img class="item-img" src={productImg} alt="" />
                                    <div class="details">
                                        <h5>Electric Drill Machine</h5>
                                        <h5>Model No : DLOA23-K</h5>
                                    </div>
                                    <p>Remain Qty : 12</p>
                                    <img class="arrow" src={arrowIcon} alt="" />
                                </div>
                                <div class="quentity">
                                    <img class="item-img" src={productImg} alt="" />
                                    <div class="details">
                                        <h5>Electric Drill Machine</h5>
                                        <h5>Model No : DLOA23-K</h5>
                                    </div>
                                    <p>Remain Qty : 12</p>
                                    <img class="arrow" src={arrowIcon} alt="" />
                                </div>
                                <div class="quentity">
                                    <img class="item-img" src={productImg} alt="" />
                                    <div class="details">
                                        <h5>Electric Drill Machine</h5>
                                        <h5>Model No : DLOA23-K</h5>
                                    </div>
                                    <p>Remain Qty : 12</p>
                                    <img class="arrow" src={arrowIcon} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};


export default DashboardPage;
