import logo from './images/logo.png';
import './App.css';
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header-text" >Who is your fantasy premier league manager of the month?</p>
     </header>
       <body className="App-body">
       <div>
          <p>League Id <input id="leagueIdInput" type="number"/></p>
          <p>Date <input id="date" type="number"/></p>
            <p>Rising star weighting <input id="risingStarId" type="number"/>
            </p>
            <p>Domination weighting <input id="dominationId" type="number"/>
            </p>
            <p>Consistency weighting <input id="consistencyId" type="number"/>
            </p>
            </div>
          <GoButton />
          <p>Manager of the month</p>
          <Result />
          </body>
        <div className="App-footer">
          <p>Copyright © 2023-present, Richard Eldridge. All rights reserved.</p>
        </div>
    </div>
  );
}

function GoButton() {
  return (
    <button className="simple-button">GO</button>
  );
}

function Result() {
  return (
    <p className="simple-text">result</p>
  );
}

export default App;
