// import React from 'react';
// import { useNavigate } from 'react-router-dom'
// import './Home.css';
// import { Link } from "react-router-dom";

// function Home() {
//     return (
//         <div className="landing-page">
//             <div className="logo">
//                 <div className="circle"></div>
//             </div>
//             <h1>Deft Detective</h1>
//             <button className="lets-go-button">Let's Go</button>
//             <p className="login-button">Already a user? <a href="/what">Log in!</a></p>
//         </div>

import { Link } from "react-router-dom"
import './Home.css';

export function Home() {
    return (
        <>
            <div className="landing-page">
                <div className="logo">
                    <div className="circle"></div>
                </div>
                <h2>Email nearby businesses about your lost item in just three easy steps</h2>
                <div className="stepscircle">
                    <div className="circle-small">1</div>
                    <div className="circle-small">2</div>
                    <div className="circle-small">3</div>
                </div>
                <Link to="/what"><button className="lets-go-button" >Let's Go!</button></Link>
            </div>
        </>
    )
}
