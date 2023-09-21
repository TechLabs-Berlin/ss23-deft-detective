import React from 'react';
import './App.css';


function App() {
  return (
    <div className="landing-page">
      <div className="logo">
        <div className="circle"></div>
      </div>
      <h1>Deft Detective</h1>
      <button className="lets-go-button">Let's Go</button>
      <p className="login-button">Already a user? <a href="/login">Log in!</a></p>
    </div>
  );
}

export default App;
