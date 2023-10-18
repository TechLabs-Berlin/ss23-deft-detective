import { useNavigate } from 'react-router-dom'
import { useFormData } from './FormDataContext'
import './WhatWhenWhere.css'

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
            <nav className="navbar"><div className="circle-navlogo"></div></nav>
            <div className="container">
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
                                    value={formData.whatData.itemName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <p>Description</p>
                            <label><textarea
                                name="description"
                                value={formData.whatData.description}
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
                            </label>
                        </div>
                        <button className="next" type="submit">Next</button>
                    </form>
                </div>
            </div>
        </>
    )
}
