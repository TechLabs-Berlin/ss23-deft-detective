import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './style.css';
import Logo from '../images/Logo.png';
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
            <div><img src={Logo} alt="Logo" className="CornerLogo" /></div>
            <div className="containerQuestion">
                <div className="stepscircle">
                    <div className="circlenumber-big"><h3>1</h3></div>
                    <div className="circlenumber-small"><h3>2</h3></div>
                    <div className="circlenumber-small"><h3>3</h3></div>
                </div>
                <h1 className="question">What?</h1>
                <h2 className="questiondescription">Let us know what's missing. Be as specific as you can.</h2>
                <div className="information">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <p className="value">Item Name*</p>
                            <label>
                                <input
                                    className="smallInput"
                                    type="text"
                                    name="itemName"
                                    value={formData.itemName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <p className="value">Description</p>
                            <label><textarea
                                className="bigInput"
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
                        <Link to="/when"><button className="next" type="submit">Next</button></Link>
                    </form>
                </div>
            </div>
        </>
    )
}
