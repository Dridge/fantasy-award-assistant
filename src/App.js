import logo from './images/logo.png';
import './App.css';
import React from 'react';
import { useState } from 'react';

export default function App() {
  const [leagueIdLive, setMessage] = useState('');
  const [updated, setUpdated] = useState(leagueIdLive);
  const handleClick = () => {
      // send inputs to be calculated
      setUpdated(leagueIdLive);
  };
  const handleChange = (event) => {
      setMessage(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header-text" >Who is your fantasy premier league manager of the month?</p>
     </header>
       <body className="App-body">
       <div class="row">
         <div class="column left" style={{ color: `#aaa` }}>
           <h2>Column 1</h2>
           <p>Some text..</p>
         </div>
         <div class="column middle" style={{ color: `#bbb` }}>
           <h2>Column 2</h2>
           <p>Some text..</p>
         </div>
         <div class="column right" style= {{ color: `#ccc` }}>
           <h2>Column 3</h2>
           <p>Some text..</p>
         </div>
       </div>
           <div className="row">
              <div className="column left">
                <label for="leagueId">League Id:</label>
                <label for="month">Month:</label>
              </div>
            </div>
            <div className="column center"/>
            <div className="column right">
              <input
                id="leagueId"
                name="leagueId"
                type="text"
                onChange={handleChange}
                value={leagueIdLive}/>

              <select id="month" name="month">
                <option selected value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
          <br/><br/>
          <label for="risingStarId">Rising star weighting:</label>
            <input
              id="risingStarId"
              name="risingStar"
              type="range"
              value="5"
              min="0"
              max="10"
              step="1"
            />
          <label for="dominationId">Domination weighting:</label>
            <input
              id="dominationId"
              name="domination"
              type="range"
              value="5"
              min="0"
              max="10"
              step="1"
            />
          <label for="consistencyId">Consistency weighting:</label>
            <input
              id="consistencyId"
              name="consistency"
              type="range"
              value="5"
              min="0"
              max="10"
              step="1"
            />

          <button className="simple-button" onClick={handleClick}>GO</button>
          <p>Manager of the month</p>
          <p className="simple-text">live result... {leagueIdLive}</p>
          <p className="simple-text">go result... {updated}</p>
          </body>
       </div>
  );
}
