import React, { useState } from 'react';
import './addcategory.css';
import logo from '../icon/logo.jpg';
import bell from '../icon/bell.svg';
import profile from '../icon/profile.svg';
import img from '../icon/productImg.jpg';


const AddCategoryPage = () => {

    return (
        <div class="item-background">
            <div class="newWindow">
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
                <h4>Add New Category</h4>
                <img src={img} alt=""/>
                <div class="row">
                    <div>
                        <h5>Item Name</h5>
                        <input type="text"/>
                    </div>
                    <div>
                        <h5>Item Name</h5>
                        <input type="text"/>
                    </div>
                </div>
                <div class="row">
                    <div>
                        <h5 className='long-txt'>Item Name</h5>
                        <input class="long" type="text"/>
                    </div>
                </div>
                <div class="row">
                    <div>
                        <h5 className='long-txt'>Item Name</h5>
                        <input class="long" type="text"/>
                    </div>
                </div>
                
                <button class="add-item long-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    <h3>Add Item</h3>
                </button>
            </div>
        </div>
    );
};

export default AddCategoryPage;
