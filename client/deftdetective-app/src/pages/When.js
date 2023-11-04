import { Link } from "react-router-dom";
import { useFormData } from '../components/FormDataContext'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import './style.css';
import Logo from '../images/Logo.png';


export function When() {
    const { formData, dispatch } = useFormData()
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch({
            type: 'UPDATE_WHEN',
            payload: { [name]: value },
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.target.checkValidity()) {
            dispatch({
                type: 'UPDATE_WHEN',
                payload: {
                    date1: formData.whenData.date1,
                    date2: formData.whenData.date2,
                    timeOption: formData.whenData.timeOption,
                },
            })

            navigate('/where')
        } else {
            console.log('Form is not valid')
        }
    };

    return (
        <>
            <img src={Logo} alt="Logo" className="CornerLogo" />
            <div className="containerQuestion">
                <div className="stepscircle">
                    <div className="circlenumber-small"><h3>1</h3></div>
                    <div className="circlenumber-big"><h3>2</h3></div>
                    <div className="circlenumber-small"><h3>3</h3></div>
                </div>
                <h1 className="question">When?</h1>
                <h2 className="questiondescription">Share the occurence date and time if available, or simply provide a time frame.</h2>
                <div className="when-information">
                    <form onSubmit={handleSubmit}>
                        <div className="inputContainer">
                            <div>
                                <p className="value">Date*</p>
                                <div>
                                    <label className="dateInput">
                                        <input
                                            className="dateInput2"
                                            type="date"
                                            name="date1"
                                            value={formData.date1}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <span>-</span>
                                        <input
                                            className="dateInput2"
                                            type="date"
                                            name="date2"
                                            value={formData.date2}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </label>
                                </div>
                            </div>
                            <p className="value">Time</p>
                            <div className="timeOption">
                                <label className="radio-button">
                                    <input
                                        type="radio"
                                        name="timeOption"
                                        value="12 AM - 4 AM"
                                        checked={formData.whenData.timeOption === '12 AM - 4 AM'}
                                        onChange={handleInputChange}
                                        required
                                    /> <span className="timeOptionText">0-4</span>
                                </label>
                                <label className="radio-button">
                                    <input
                                        type="radio"
                                        name="timeOption"
                                        value="4 AM - 8 AM"
                                        checked={formData.whenData.timeOption === '4 AM - 8 AM'}
                                        onChange={handleInputChange}
                                        required
                                    /> <span className="timeOptionText">4-8</span>
                                </label>
                                <label className="radio-button">
                                    <input
                                        type="radio"
                                        name="timeOption"
                                        value="8 AM - 12 PM"
                                        checked={formData.whenData.timeOption === '8 AM - 12 PM'}
                                        onChange={handleInputChange}
                                        required
                                    /><span className="timeOptionText">8-12</span>
                                </label>
                                <label className="radio-button">
                                    <input
                                        type="radio"
                                        name="timeOption"
                                        value="12 PM - 4 PM"
                                        checked={formData.whenData.timeOption === '12 PM - 4 PM'}
                                        onChange={handleInputChange}
                                        required
                                    /><span className="timeOptionText">12-16</span>
                                </label>
                                <label className="radio-button">
                                    <input
                                        type="radio"
                                        name="timeOption"
                                        value="4 PM - 8 PM"
                                        checked={formData.whenData.timeOption === '4 PM - 8 PM'}
                                        onChange={handleInputChange}
                                        required
                                    /><span className="timeOptionText">16-20</span>
                                </label>
                                <label className="radio-button">
                                    <input
                                        type="radio"
                                        name="timeOption"
                                        value="8 PM - 12 AM"
                                        checked={formData.whenData.timeOption === '8 PM - 12 AM'}
                                        onChange={handleInputChange}
                                        required
                                    /><span className="timeOptionText">20-24</span>
                                </label>
                            </div>
                            <p className="or">or</p>
                            <div>
                                <label className="radio-button">
                                    <input
                                        type="radio"
                                        name="timeOption"
                                        value="I don't know"
                                        checked={formData.whenData.timeOption === "I don't know"}
                                        onChange={handleInputChange}
                                        required
                                    /><span className="timeOptionText">I don't know</span>
                                </label>
                            </div>
                        </div>
                        <div className="buttons">
                            <Link to="/what"><button className="back">Back</button></Link>
                            <button className="next-2" type="submit">Next</button>
                        </div>
                    </form>
                </div>

            </div >
        </>
    )
}



