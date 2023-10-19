import { useNavigate } from 'react-router-dom'
import { useFormData } from './FormDataContext'
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './style.css';
import Logo from '../images/Logo.png';

export function What() {
    const { formData, dispatch } = useFormData()
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target
        dispatch({
            type: 'UPDATE_WHAT',
            payload: { [name]: value },
        })
    }

    const handlePictureChange = (event) => {
        const pictureFile = event.target.files[0]
        dispatch({
            type: 'UPDATE_WHAT',
            payload: { picture: pictureFile },
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    
        if (event.target.checkValidity()) {
            dispatch({
                type: 'UPDATE_WHAT',
                payload: {
                    itemName: formData.whatData.itemName,
                    description: formData.whatData.description,
                },
            })
    
            navigate('/when')
        } else {
            console.log('Form is not valid')
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
                                    value={formData.whatData.itemName}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Wallet"
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <p className="value">Description</p>
                            <label><textarea
                                className="bigInput"
                                name="description"
                                value={formData.whatData.description}
                                onChange={handleInputChange}
                                placeholder="e.g. a red wallet with my ID card and driving license "
                                required
                            />
                            </label>
                        </div>
                        <div>
                            <p className="value">Add photos</p>
                            <label>
                                <input
                                    type="file"
                                    name="picture"
                                    accept="image/*"
                                    onChange={handlePictureChange}
                                />
                            </label>
                        </div>
                        <button className="next" type="submit">Next</button>
                    </form>
                </div>
            </div>
        </>
    )
}


