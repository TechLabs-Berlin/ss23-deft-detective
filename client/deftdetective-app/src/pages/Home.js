import { Link } from "react-router-dom"
import './Home.css';

export function Home() {
    return (
        <>
            <div className="container">
                <div className="circle"></div>
                <h2>Email nearby businesses about your lost item in just three easy steps</h2>
                <div className="stepscircle">
                    <div className="circle-small"><h3>1</h3></div>
                    <div className="circle-small"><h3>2</h3></div>
                    <div className="circle-small"><h3>3</h3></div>
                </div>
                <Link to="/what"><button className="lets-go-button" >Let's Go!</button></Link>
            </div>
        </>
    )
}
