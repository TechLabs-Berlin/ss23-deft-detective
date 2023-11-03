import { useFormData } from './FormDataContext';
import { Link } from "react-router-dom"
import './style.css';
import Logo from '../images/Logo.png';

export function Preview() {
    const { formData } = useFormData();

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
                        </div>
                    </div>
                    <div className="previewQuestion">
                        <h4>When</h4>
                        <div className="data">
                            <p>{formData.whenData.date}</p>
                            <p>{formData.whenData.timeOption}</p>
                        </div>
                    </div>
                    <div className="previewQuestion">
                        <h4>Where</h4>
                        <div>
                            <p></p>
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