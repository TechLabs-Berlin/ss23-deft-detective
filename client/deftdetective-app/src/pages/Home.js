import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Home.css';


export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>HomePage</div>
            <button onClick={() => navigate('what')}>What</button>
        </>
    )
}

// function Home() {
//     return (
//         <div className="landing-page">
//             <div className="logo">
//                 <div className="circle"></div>
//             </div>
//             <h1>Deft Detective</h1>
//             <button className="lets-go-button">Let's Go</button>
//             <p className="login-button">Already a user? <a href="/login">Log in!</a></p>
//         </div>
//     );
// }

export default Home;
