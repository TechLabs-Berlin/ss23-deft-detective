import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './WhatWhenWhere.css';
import './Where.css';

export function Where() {
    const [formData, setFormData] = useState({
        map: '',
    });

    const handleInputChange = (event) => {
        const { map, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [map]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.target.checkValidity()) {
            // TODO: Add form submission logic, e.g., API request or database insertion
            console.log('Form Data:', formData);
            setFormData({
                map: '',
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
                    <div className="circle-small-two-3"><h3>2</h3></div>
                    <div className="circle-small-three-2"><h3>3</h3></div>
                </div>
                <h1>Where?</h1>
                <h2>Provide the location of the incident.</h2>
                <div className="where-submit">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <p>Map</p>
                            <label>
                                <input
                                    type="map"
                                    name="map"
                                    value={formData.map}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="buttons">
                            <Link to="/when"><button className="back">Back</button></Link>
                            <Link to="/preview"><button className="next" type="submit">Next</button></Link>
                        </div>
                    </form>
                </div>

            </div >
        </>
    )
}


