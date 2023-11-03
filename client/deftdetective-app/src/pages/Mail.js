import { Link } from "react-router-dom";
import { useState } from "react";
import './style.css';
import Logo from '../images/Logo.png';
import Arrow from '../images/arrows.png';

export function Mail() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <div className="previewContainer">
                <img src={Logo} alt="Logo" className="LastLogo" />
                <h1 className="question">Your E-Mail</h1>
                <h2 className="submissiondescription">Insert your email to submit your request</h2>
                <div><p>Email</p>
                    <p><input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Your email"
                    />
                    </p>
                    <button className="submitButton" type="submit">Submit</button>
                </div>
            </div>
        </>
    )
}
