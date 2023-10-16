import { Link } from "react-router-dom"
import './style.css';
import Logo from '../images/Logo.png';

export function Preview() {
    return (
        <>
            <img src={Logo} alt="Logo" className="CornerLogo" />
            <div className="containerHome">
                <h1>Report Preview</h1>
                <Link to="/where"><button>Back</button></Link>
                <Link to="/signup"><button>Next</button></Link>
            </div>
        </>
    )
}
