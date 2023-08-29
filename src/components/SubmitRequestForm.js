import React, { useState } from 'react';
import './SubmitRequestForm.css';
import OpenStreetMap from './OpenStreetMap';

function SubmitRequestForm() {
    const [formData, setFormData] = useState({
        itemName: '',
        category: '',
        lostDate: '',
        lostTime: '',
        lostLocation: '',
        lostRadius: 0,
        description: '',
        picture: null,
        email: '',
    });

    const categoryOptions = [
        "Electronics",
        "Jewelry",
        "Clothing",
        "Accessories",
        "Documents",
        "Wallet/Purse",
        "Key",
        "Others",
    ];

    const [showMap, setShowMap] = useState(false);

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

    const handleSeeOnMap = () => {
        console.log('See on Map clicked');
        setShowMap(!showMap);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.target.checkValidity()) {
            // TODO: Add form submission logic, e.g., API request or database insertion
            console.log('Form Data:', formData);
            setFormData({
                itemName: '',
                category: '',
                lostDate: '',
                lostTime: '',
                lostLocation: '',
                lostRadius: 0,
                description: '',
                picture: null,
                email: '',
            });
        } else {
            console.log('Form is not valid')
        }
    };

    return (
        <div>
            <h2>Submit a Lost Item Request</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Lost Item:
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
                    <label>
                        Category:
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select a Category</option>
                            {categoryOptions.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Lost Date:
                        <input
                            type="date"
                            name="lostDate"
                            value={formData.lostDate}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Lost Time:
                        <input
                            type="time"
                            name="lostTime"
                            value={formData.lostTime}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Lost Location:
                        <input
                            type="text"
                            name="lostLocation"
                            value={formData.lostLocation}
                            onChange={handleInputChange}
                            required
                        />
                        <button type="button" onClick={handleSeeOnMap}>See on Map</button>
                    </label>



                    {showMap && (
                        <div className="map-container">
                            <OpenStreetMap latitude={52.5200} longitude={13.4050} />

                        </div>
                    )}
                </div>
                <div>
                    <label>
                        Description of lost Item:
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Upload Picture (optional):
                        <input
                            type="file"
                            name="picture"
                            accept="image/*"
                            onChange={handlePictureChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        E-Mail:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}"
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default SubmitRequestForm;
