import React, { useState } from 'react';
import './App.css';
import SubmitRequestForm from './components/SubmitRequestForm';

function App() {
  const [showSubmitForm, setShowSubmitForm] = useState(false);

  const handleReportLostClick = () => {
    setShowSubmitForm(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Deft Detective</h1>
        <p>Report Lost Items and Help Others Find Them!</p>
        {showSubmitForm ? (
          <SubmitRequestForm />
        ) : (
          <button onClick={handleReportLostClick}>I Want to Report Something Lost!</button>
        )}
      </header>
    </div>
  );
}

export default App;
