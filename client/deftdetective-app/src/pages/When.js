import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './WhatWhenWhere.css';
import './When.css';

export function When() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        timeOption: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.target.checkValidity()) {
            // TODO: Add form submission logic, e.g., API request or database insertion
            console.log('Form Data:', formData);
            setFormData({
                date: '',
                time: '',
                timeOption: '',
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
                    <div className="circle-small-one-2"><h3>1</h3></div>
                    <div className="circle-small-two-2"><h3>2</h3></div>
                    <div className="circle-small-three"><h3>3</h3></div>
                </div>
                <h1>When?</h1>
                <h2>Share the occurence date and time if available, or simply provide a time frame.</h2>
                <div className="what-submit">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <p>Date</p>
                            <label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                />
                                -
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <p>Time</p>
                        <div className="timeOption">
                            <label>
                                <input
                                    type="radio"
                                    name="timeOption"
                                    value="12 AM - 4 AM"
                                    checked={formData.timeOption === '12 AM - 4 AM'}
                                    onChange={handleInputChange}
                                    required
                                /> <span className="timeOptionText">12 AM - 4 AM</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="timeOption"
                                    value="4 AM - 8 AM"
                                    checked={formData.timeOption === '4 AM - 8 AM'}
                                    onChange={handleInputChange}
                                    required
                                /> <span className="timeOptionText">4 AM - 8 AM</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="timeOption"
                                    value="8 AM - 12 PM"
                                    checked={formData.timeOption === '8 AM - 12 PM'}
                                    onChange={handleInputChange}
                                    required
                                /><span className="timeOptionText">8 AM - 12 PM</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="timeOption"
                                    value="12 PM - 4 PM"
                                    checked={formData.timeOption === '12 PM - 4 PM'}
                                    onChange={handleInputChange}
                                    required
                                /><span className="timeOptionText">12 PM - 4 PM</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="timeOption"
                                    value="4 PM - 8 AM"
                                    checked={formData.timeOption === '4 PM - 8 PM'}
                                    onChange={handleInputChange}
                                    required
                                /><span className="timeOptionText">4 PM - 8 PM</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="timeOption"
                                    value="8 PM - 12 AM"
                                    checked={formData.timeOption === '8 PM - 12 AM'}
                                    onChange={handleInputChange}
                                    required
                                /><span className="timeOptionText">8 PM - 12 AM</span>
                            </label>
                        </div>
                        <p>or</p>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="timeOption"
                                    value="IDontKnow"
                                    checked={formData.timeOption === 'IDontKnow'}
                                    onChange={handleInputChange}
                                    required
                                /><span className="timeOptionText">I don't know</span>
                            </label>
                        </div>
                        <div className="buttons">
                            <Link to="/what"><button className="back">Back</button></Link>
                            <Link to="/where"><button className="next" type="submit">Next</button></Link>
                        </div>
                    </form>
                </div>

            </div >
        </>
    )
}

// TO DO: Date Range + Time Radio

