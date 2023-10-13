import { Link } from "react-router-dom"
import './style.css';
import Logo from '../images/Logo.png';

export function Preview() {
    return (
        <>
            <div className="container">
                <img src={Logo} alt="Logo" className="CornerLogo" />
                <h1>Preview</h1>
                <Link to="/where"><button>Back</button></Link>
                <Link to="/signup"><button>Next</button></Link>
            </div>
        </>
    )
}
