import { Link } from "react-router-dom";
import React from 'react';
import './style.css';
import Logo from '../images/Logo.png';
import MapPage from "../components/Map";

export function Where() {

    return (
        <>
            <img src={Logo} alt="Logo" className="CornerLogo" />
            <div className="containerQuestion">
                <div className="stepscircle">
                    <div className="circlenumber-small"><h3>1</h3></div>
                    <div className="circlenumber-small"><h3>2</h3></div>
                    <div className="circlenumber-big"><h3>3</h3></div>
                </div>
                <h1 className="question">Where?</h1>
                <h2 className="questiondescription">Provide the location of the incident.</h2>
                <div className="informarion">
                    <form>
                        <div className="inputContainer">
                            <MapPage />
                            <div className="buttons">
                                <Link to="/when"><button className="back">Back</button></Link>
                                <Link to="/preview"><button className="next-2" type="submit">Done</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


