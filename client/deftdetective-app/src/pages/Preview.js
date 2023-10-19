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
                <h1>Preview</h1>
                <h2>What:</h2>
                <p>Item Name: {formData.whatData.itemName}</p>
                <p>Description: {formData.whatData.description}</p>
                <p>date: {formData.whenData.date}</p>
                <p>timeOption: {formData.whenData.timeOption}</p>
                <Link to="/where"><button>Back</button></Link>
                <Link to="/signup"><button>Next</button></Link>
            </div>
        </>
    );
}