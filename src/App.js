import logo from './images/logo.png';
import './App.css';
import React, { useState } from 'react';

const months = ['January', 'February', 'March', 'April', 'May', 'August', 'September', 'October', 'November', 'December'];
export default function App() {
  const [inputs, setInputs] = useState({
    leagueId: '',
    month: 'January',
    risingStar: 0,
    domination: 0,
    consistency: 0
  });

  const handleChange = (event) => {
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  const [goResult, setGoResult] = useState('');

  const handleGoClick = () => {
    fetch('https://example.com/api/resource', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer <access_token>',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'param1': 'value1',
        'param2': 'value2'
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    setGoResult(`${inputs.leagueId}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header-text">Who is your fantasy premier league manager of the month?</p>
      </header>
      <div className="App-body responsive-three-column-grid">
          <div>
            <label>League Id:
              <input
                id="leagueId"
                name="leagueId"
                type="text"
                onChange={handleChange}
                value={inputs.leagueId} />
            </label>
          </div>
          <div>
            <label>Month:
              <select id="month" name="month" onChange={handleChange} value={inputs.month}>
                {months.map((month) => (
                  <option key={month}>{month}</option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>Rising star weighting:
              <input
                id="risingStarId"
                name="risingStar"
                type="range"
                min="0"
                max="10"
                step="1"
                onChange={handleChange}
                value={inputs.risingStar} />
            </label>
          </div>
          <div>
            <label>Domination weighting:
              <input
                id="dominationId"
                name="domination"
                type="range"
                min="0"
                max="10"
                step="1"
                onChange={handleChange}
                value={inputs.domination} />
            </label>
          </div>
          <div>
            <label>Consistency weighting:
              <input
                id="consistencyId"
                name="consistency"
                type="range"
                min="0"
                max="10"
                step="1"
                onChange={handleChange}
                value={inputs.consistency} />
            </label>
          </div>
          <div>
            <button className="button" onClick={handleGoClick}>GO</button>
          </div>
          <div>
            <p>Manager of the month:</p>
          </div>
          <div>
            <p className="simple-text">live result: {inputs.leagueId}</p>
            <p className="simple-text">go result: {goResult}</p>
          </div>
      </div>
    </div>
  );
}
