import logo from './images/logo.png';
import './App.css';
import React from 'react';
import { useState } from 'react';

export default function App() {
  const [leagueIdLive, setMessage] = useState('');
  const [month, rising, domination, consistency] = useState('');
  const [updated, setUpdated] = useState(leagueIdLive);
  const handleClick = () => {
      // send inputs to be calculated
      setUpdated(leagueIdLive);
      console.log(month);
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
     <body className="App-body responsive-three-column-grid">
         <div></div>
           <div className="responsive-three-column-grid">
           <div>
            <div>
             <label>League Id:
                    <input
                      id="leagueId"
                      name="leagueId"
                      type="text"
                      onChange={handleChange}
                      value={leagueIdLive}/>
              </label>
            </div>
           </div>
               <div>
                 <div>
                 <label>Month:
                    <select id="month" name="month">
                      <option selected>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                </label>
                 </div>
             </div>
             <div></div>
             <div>
               <div>
                <label> Rising star weighting:
                    <input
                        id="risingStarId"
                        name="risingStar"
                        type="range"
                        min="0"
                        max="10"
                        step="1"
                        />
                </label>
               </div>
             </div>
             <div>
               <div>
                  <label>Domination weighting:
                      <input
                        id="dominationId"
                        name="domination"
                        type="range"
                        min="0"
                        max="10"
                        step="1"
                        />
                    </label>
               </div>
             </div>
             <div>
                <div>
                  <label>Consistency weighting:
                  <input
                      id="consistencyId"
                      name="consistency"
                      type="range"
                      min="0"
                      max="10"
                      step="1"
                    />
                    </label>
                </div>
             </div>
             <div>
             <button className="button" onClick={handleClick}>GO</button>
             </div>
              <div>
                <p>Manager of the month:</p>
              </div>
              <div>
                <p className="simple-text">live result... {leagueIdLive}</p>
                <p className="simple-text">go result... {updated}</p>
              </div>
          </div>
          <div></div>
     </body>
     </div>
  );
}
