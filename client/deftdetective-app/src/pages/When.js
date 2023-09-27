import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './WhatWhenWhere.css';
import './When.css';

export function When() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        picture: null,
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
                            </label>
                        </div>
                        <div>
                            <p>Time</p>
                            <label><textarea
                                name="time"
                                value={formData.time}
                                onChange={handleInputChange}
                                required
                            />
                            </label>
                        </div>
                        <div className="buttons">
                        <Link to="/what"><button className="back">Back</button></Link>
                        <Link to="/where"><button className="next" type="submit">Next</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

// TO DO: Date Range + Time Radio

