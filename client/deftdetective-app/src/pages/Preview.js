import { useFormData } from '../components/FormDataContext';
import { Link } from "react-router-dom"
import { useState } from 'react';
import './style.css';
import Logo from '../images/Logo.png';

export function Preview() {
    const { formData, dispatch } = useFormData();
    const [selectedParagraphs, setSelectedParagraphs] = useState({});
    const imageSrc = formData.whatData.picture ? URL.createObjectURL(formData.whatData.picture) : null;

    const handleCheckboxClick = (index) => {
        const updatedSelection = { ...selectedParagraphs };
        updatedSelection[index] = !updatedSelection[index];

        setSelectedParagraphs(updatedSelection);
    };

    const deleteSelectedParagraphs = () => {
        const updatedPlaces = formData.whereData.places.filter((_, i) => !selectedParagraphs[i]);

        dispatch({ type: 'UPDATE_WHERE', payload: { places: updatedPlaces } });
        setSelectedParagraphs({});
    };

    return (
        <>
            <div className="container">
                <img src={Logo} alt="Logo" className="CornerLogo" />
                <h1 className="question">Report Preview</h1>
                <div className="previewContainer">
                    <div className="previewQuestion">
                        <h4>What</h4>
                        <div className="data">
                            <p className="previewItemName">{formData.whatData.itemName}</p>
                            <p>{formData.whatData.description}</p>
                            {imageSrc && <img src={imageSrc} alt="Preview" />}
                        </div>
                    </div>
                    <div className="previewQuestion">
                        <h4>When</h4>
                        <div className="data">
                            <p>{formData.whenData.date1}</p>
                            <p>{formData.whenData.date2}</p>
                            <p>{formData.whenData.timeOption}</p>
                        </div>
                    </div>
                    <div className="previewQuestion">
                        <h4>Where</h4>
                        <div>
                            {formData.whereData.places.map((place, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        checked={selectedParagraphs[index]}
                                        onChange={() => handleCheckboxClick(index)}
                                    />
                                    <p>
                                        <strong>Business name:</strong> {place.biz_name}
                                    </p>
                                </div>
                            ))}
                            <button onClick={deleteSelectedParagraphs}>Delete Selected</button>
                        </div>
                    </div>
                    <div className="previewButton">
                        <Link to="/where"><button className="back-3">Back</button></Link>
                        <Link to="/mail"><button className="next-3">Next</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
