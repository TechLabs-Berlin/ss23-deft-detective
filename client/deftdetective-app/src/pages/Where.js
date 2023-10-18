import { Link } from "react-router-dom";
import React from 'react';
import './WhatWhenWhere.css';
import './Where.css';
import MapPage from "../components/Map";

export function Where() {

    
    return (
        <>
            <nav className="navbar"><div className="circle-navlogo"></div></nav>
            <div className="container">
                <div className="stepscircle">
                    <div className="circle-small-one-2"><h3>1</h3></div>
                    <div className="circle-small-two-3"><h3>2</h3></div>
                    <div className="circle-small-three-2"><h3>3</h3></div>
                </div>
                <h1>Where?</h1>
                <h2>Provide the location of the incident.</h2>
                <div className="where-submit">
                    <form>
                        <MapPage />
                        <div className="buttons">
                            <Link to="/when"><button className="back">Back</button></Link>
                            <Link to="/preview"><button className="next" type="submit">Done</button></Link>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}


