import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './WhatWhenWhere.css';

export function What() {
    const [formData, setFormData] = useState({
        itemName: '',
        description: '',
        picture: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePictureChange = (event) => {
        const pictureFile = event.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            picture: pictureFile,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.target.checkValidity()) {
            // TODO: Add form submission logic, e.g., API request or database insertion
            console.log('Form Data:', formData);
            setFormData({
                itemName: '',
                description: '',
                picture: null,
            });
        } else {
            console.log('Form is not valid');
        }
    };

    return (
        <>
            <nav className="navbar"><div className="circle-navlogo"></div></nav>
            <div className="what-page">
                <div className="stepscircle">
                    <div className="circle-small-one"><h3>1</h3></div>
                    <div className="circle-small-two"><h3>2</h3></div>
                    <div className="circle-small-three"><h3>3</h3></div>
                </div>
                <h1>What?</h1>
                <h2>Let us know what's missing. Be as specific as you can.</h2>
                <div className="what-submit">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <p>Item Name</p>
                            <label>
                                <input
                                    type="text"
                                    name="itemName"
                                    value={formData.itemName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <p>Description</p>
                            <label><textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="file"
                                    name="picture"
                                    accept="image/*"
                                    onChange={handlePictureChange}
                                />
                                <input
                                    type="file"
                                    name="picture"
                                    accept="image/*"
                                    onChange={handlePictureChange}
                                />
                                <input
                                    type="file"
                                    name="picture"
                                    accept="image/*"
                                    onChange={handlePictureChange}
                                />
                            </label>
                        </div>
                        <Link to="/when"><button className="next">Next</button></Link>
                    </form>
                </div>
            </div>
        </>
    )
}
