import logo from './images/logo.png';
import './App.css';
import React, { useState } from 'react';

const months = ['January', 'February', 'March', 'April', 'May', 'August', 'September', 'October', 'November', 'December'];

// Using the Fetch API
// See: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function getData() {
  // TODO move handleGoClick to here
}

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
  const [goMonth, setGoMonth] = useState('');
  const encodedAuthString = '';
  var params = {leagueId: "${inputs.leagueId}", month: "${inputs.month}"};
  const handleGoClick = () => {
    fetch('https://localhost:8080/getMom?'+ new URLSearchParams(params), {
      method: 'GET',
      mode: "cors",
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://localhost',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        "Authorization": "Basic " + encodedAuthString
      }
    })
    .then(response => {
        response.json()
        // data is publicly available data, so it is okay to store inside localStorage (auth tokens would not be okay)
        localStorage.setItem('data', this.response)
    })
    .then(data => console.log(data))
    .catch(error => console.error(error))
    setGoResult(`${inputs.leagueId}`);
    setGoMonth(`${inputs.month}`);

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
            <p className="simple-text">go month: {goMonth}</p>
            <p className="simple-text">go data, local storage: {localStorage.getItem('data')}</p>
          </div>
      </div>
    </div>
  );
}
