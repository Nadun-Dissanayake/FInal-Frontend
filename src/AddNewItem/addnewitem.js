import React, { useState } from 'react';
import './addnewitem.css';
import logo from '../icon/logo.jpg';
import bell from '../icon/bell.svg';
import profile from '../icon/profile.svg';
import img from '../icon/productImg.jpg';


const NewItemPage = () => {
    return (
        <div class="item-background">
            <div class="newWindow">
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
                <h4>Add New Item</h4>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"/></svg>
                <img src={img} alt=""/>
                
                <div class="row">
                    <div>
                        <h5>Item Name</h5>
                        <input type="text"/>
                    </div>
                    <div>
                        <h5>Item Name2</h5>
                        <input type="text"/>
                    </div>
                </div>
                <div class="row">
                    <div>
                        <h5>Item Name3</h5>
                        <input type="text"/>
                    </div>
                    <div>
                        <h5>Item Name4</h5>
                        <input type="text"/>
                    </div>
                </div>
                <div class="row">
                    <div>
                        <h5>Item Name6</h5>
                        <input type="text"/>
                    </div>
                    <div>
                        <h5>Item Name5</h5>
                        <input type="text"/>
                    </div>
                </div>
                <div class="row">
                    <div>
                        <h5>Item Name7</h5>
                        <input type="text"/>
                    </div>
                    <div>
                        <h5>Item Name8</h5>
                        <input type="text"/>
                    </div>
                </div>
                <div class="row">
                    <div>
                        <h5>Item Name9</h5>
                        <input type="text"/>
                    </div>
                    <div>
                        <h5>Item Name10</h5>
                        <input type="text"/>
                    </div>
                </div>
                <button class="add-item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    <h3>Add Item</h3>
                </button>
            </div>
        </div>
    );
};

export default NewItemPage;
