import React, { useState } from 'react';
import './itempage.css';
import logo from '../icon/logo.jpg';
import bell from '../icon/bell.svg';
import profile from '../icon/profile.svg';
import { Link } from 'react-router-dom';

import img from '../icon/productImg.jpg';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import pic2 from "../assets/logo.png";
const ItemPage = () => {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const [isClicked, setIsClicked] = useState(false);

    const toggleList = () => {
        setIsClicked(!isClicked);
    };
    const [isHomeClicked, setIsHomeClicked] = useState(false);

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
                        <Link to="/dashboard/items">
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
                    <h2>Items</h2>
                    <img class="bell" src={bell} alt="" />
                    <img class="profile" src={profile} alt="" />
                    <h4 class="profileName">Ben Thomus</h4>
                </div>
                <div class="summery">
                    <div class="summery-sales">
                        <div class="item-heading">
                            <div class="machinary">
                                <h5>Machinary</h5>
                                <hr />
                            </div>
                            <svg class='sort sort1' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" /></svg>
                            <svg class='sort' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                            <div class="searchbar">
                                <h5>Search Items</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                            </div>
                            <button class="home" onClick={handleClickOpen('paper')}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                <h3>Add</h3>
                            </button>
                            <React.Fragment>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    scroll={scroll}
                                    aria-labelledby="scroll-dialog-title"
                                    aria-describedby="scroll-dialog-description"
                                >

                                    <DialogContent dividers={scroll === 'paper'}>
                                        <div class="newWindow">
                                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a>
                                            <h3>Add New Item</h3    >
                                            <img src={img} alt="" style={{ display: 'block', margin: '0 auto', maxWidth: '80%', height: 'auto', borderRadius: '50%', width: '120px', height: '120px', objectFit:"cover" }} />
                                            <svg className='camera' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"/></svg>
                                            <div class="row">
                                                <div class="column">
                                                    <h5>Item Name</h5>
                                                    <input type="text" />
                                                </div>
                                                <div class="column">
                                                    <h5>Second Category</h5>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="column">
                                                    <h5>Brand Name</h5>
                                                    <input type="text" />
                                                </div>
                                                <div class="column">
                                                    <h5>Model Number</h5>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="column">
                                                    <h5>Year</h5>
                                                    <input type="text" />
                                                </div>
                                                <div class="column">
                                                    <h5>Color</h5>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="column">
                                                    <h5>Quentity</h5>
                                                    <input type="text" />
                                                </div>
                                                <div class="column">
                                                    <h5>Tags/Labels</h5>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="column">
                                                    <h5>Gross Price</h5>
                                                    <input type="text" />
                                                </div>
                                                <div class="column">
                                                    <h5>Net Price</h5>
                                                    <input type="text" />
                                                </div>
                                            </div>


                                            <button class="add-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                                <h3>Add Item</h3>
                                            </button>
                                        </div>
                                    </DialogContent>

                                </Dialog>

                            </React.Fragment>
                            <button class="home import">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                                <h3>Import</h3>
                            </button>
                        </div>
                        <table class="sample-table">
                            <thead>
                                <tr class="heading">
                                    <th class="tick-column"></th>
                                    <th><span>Item ID</span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" /></svg></th>
                                    <th><span>Item Name</span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" /></svg></th>
                                    <th><span>Brand</span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" /></svg></th>
                                    <th><span>Mobile No.</span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" /></svg></th>
                                    <th><span>Image</span></th>
                                    <th><span>Year</span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" /></svg></th>
                                    <th><span>Color</span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" /></svg></th>
                                    <th><span>Qty</span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" /></svg></th>
                                    <th><span>Net Price</span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" /></svg></th>
                                    <th><span>Gross Price</span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" /></svg></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><span>1</span></td>
                                    <td><span>Product A</span></td>
                                    <td><span>Brand X</span></td>
                                    <td><span>1234567890</span></td>
                                    <td><span><img src="image1.jpg" alt="Product Image" /></span></td>
                                    <td><span>2022</span></td>
                                    <td><span>Blue</span></td>
                                    <td><span>50</span></td>
                                    <td><span>$25.00</span></td>
                                    <td><span>$1250.00</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><span>1</span></td>
                                    <td><span>Product A</span></td>
                                    <td><span>Brand X</span></td>
                                    <td><span>1234567890</span></td>
                                    <td><span><img src="image1.jpg" alt="Product Image" /></span></td>
                                    <td><span>2022</span></td>
                                    <td><span>Blue</span></td>
                                    <td><span>50</span></td>
                                    <td><span>$25.00</span></td>
                                    <td><span>$1250.00</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><span>1</span></td>
                                    <td><span>Product A</span></td>
                                    <td><span>Brand X</span></td>
                                    <td><span>1234567890</span></td>
                                    <td><span><img src="image1.jpg" alt="Product Image" /></span></td>
                                    <td><span>2022</span></td>
                                    <td><span>Blue</span></td>
                                    <td><span>50</span></td>
                                    <td><span>$25.00</span></td>
                                    <td><span>$1250.00</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><span>1</span></td>
                                    <td><span>Product A</span></td>
                                    <td><span>Brand X</span></td>
                                    <td><span>1234567890</span></td>
                                    <td><span><img src="image1.jpg" alt="Product Image" /></span></td>
                                    <td><span>2022</span></td>
                                    <td><span>Blue</span></td>
                                    <td><span>50</span></td>
                                    <td><span>$25.00</span></td>
                                    <td><span>$1250.00</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><span>1</span></td>
                                    <td><span>Product A</span></td>
                                    <td><span>Brand X</span></td>
                                    <td><span>1234567890</span></td>
                                    <td><span><img src="image1.jpg" alt="Product Image" /></span></td>
                                    <td><span>2022</span></td>
                                    <td><span>Blue</span></td>
                                    <td><span>50</span></td>
                                    <td><span>$25.00</span></td>
                                    <td><span>$1250.00</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><span>1</span></td>
                                    <td><span>Product A</span></td>
                                    <td><span>Brand X</span></td>
                                    <td><span>1234567890</span></td>
                                    <td><span><img src="image1.jpg" alt="Product Image" /></span></td>
                                    <td><span>2022</span></td>
                                    <td><span>Blue</span></td>
                                    <td><span>50</span></td>
                                    <td><span>$25.00</span></td>
                                    <td><span>$1250.00</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><span>1</span></td>
                                    <td><span>Product A</span></td>
                                    <td><span>Brand X</span></td>
                                    <td><span>1234567890</span></td>
                                    <td><span><img src="image1.jpg" alt="Product Image" /></span></td>
                                    <td><span>2022</span></td>
                                    <td><span>Blue</span></td>
                                    <td><span>50</span></td>
                                    <td><span>$25.00</span></td>
                                    <td><span>$1250.00</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><span>1</span></td>
                                    <td><span>Product A</span></td>
                                    <td><span>Brand X</span></td>
                                    <td><span>1234567890</span></td>
                                    <td><span><img src="image1.jpg" alt="Product Image" /></span></td>
                                    <td><span>2022</span></td>
                                    <td><span>Blue</span></td>
                                    <td><span>50</span></td>
                                    <td><span>$25.00</span></td>
                                    <td><span>$1250.00</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><span>1</span></td>
                                    <td><span>Product A</span></td>
                                    <td><span>Brand X</span></td>
                                    <td><span>1234567890</span></td>
                                    <td><span><img src="image1.jpg" alt="Product Image" /></span></td>
                                    <td><span>2022</span></td>
                                    <td><span>Blue</span></td>
                                    <td><span>50</span></td>
                                    <td><span>$25.00</span></td>
                                    <td><span>$1250.00</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><span>1</span></td>
                                    <td><span>Product A</span></td>
                                    <td><span>Brand X</span></td>
                                    <td><span>1234567890</span></td>
                                    <td><span><img src="image1.jpg" alt="Product Image" /></span></td>
                                    <td><span>2022</span></td>
                                    <td><span>Blue</span></td>
                                    <td><span>50</span></td>
                                    <td><span>$25.00</span></td>
                                    <td><span>$1250.00</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><span>1</span></td>
                                    <td><span>Product A</span></td>
                                    <td><span>Brand X</span></td>
                                    <td><span>1234567890</span></td>
                                    <td><span><img src="image1.jpg" alt="Product Image" /></span></td>
                                    <td><span>2022</span></td>
                                    <td><span>Blue</span></td>
                                    <td><span>50</span></td>
                                    <td><span>$25.00</span></td>
                                    <td><span>$1250.00</span></td>
                                </tr>
                                <hr/>
                                
                            </tbody>
                        </table>
                        <div class="transmition">
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg></a>
                            <a class="current" href="">1</a>
                            <a href="">2</a>
                            <a href="">3</a>
                            <a href="">4</a>
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ItemPage;
