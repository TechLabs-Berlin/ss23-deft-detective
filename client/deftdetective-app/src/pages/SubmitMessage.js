import './style.css';
import Logo from '../images/Logo.png';
import Illustration from '../images/Illustration.png'

export function SubmitMessage() {
    return (

        <>
            <body className="containerHome">

                <div className="container">
                    <img src={Logo} alt="Logo" className="LastLogo" />
                    <h1 className="question">Submitted!</h1>
                    <h2 className="submissiondescription">We have send an Email to all the location you selected.
                        <p>The one that has your lost item will reply you soon!</p>
                    </h2>
                    <img src={Illustration} alt="Illustration" className="Illustration" />
                </div>
            </body>
        </>
    )
}

export default SubmitMessage