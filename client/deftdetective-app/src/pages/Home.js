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
//     );
// }

// export default Home;

import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <h1>First Page (Landing Page)</h1>
            <Link to="/what"><button>Let's Go!</button></Link>
        </>
    )
}
