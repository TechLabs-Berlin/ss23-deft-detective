import { Link } from "react-router-dom"
import './Home.css';
import './style.css';
import Logo from '../images/Logo.png'
import Arrow from '../images/arrows.png'

export function Home() {
    return (
        <>
            <div className="containerHome">
                <img src={Logo} alt="Logo" className="HomeLogo" />
                <h1 className="Home">Deft Detective</h1>
                <h2 className="Home">LOST&FOUND IN YOUR POCKET</h2>
                <h3 className="Home">Email nearby businesses about your lost item in just three easy steps</h3>
                <div className="ArrowDots">
                    <img src={Arrow} alt="Logo" className="Arrow" />
                    <div className="stepscircle">
                        <div className="circlenumber-middle"><h3>1</h3></div>
                        <div className="circlenumber-middle"><h3>2</h3></div>
                        <div className="circlenumber-middle"><h3>3</h3></div>
                    </div>
                </div>
                <Link to="/what"><button className="lets-go-button" >Let's Go!</button></Link>
            </div>
        </>
    )
}
