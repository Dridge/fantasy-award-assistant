import DateField from 'react-native-datefield';
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Find out who is your fantasy premier league manager of the month!</p>
     </header>
       <body className="App-body">
          <input id="leagueIdInput" type="number"/>
          <p>Date</p>
          <div>
            <p>Rising star weighting</p>
            <input id="risingStarId" type="number"/>
            <p>Domination weighting</p>
            <input id="dominationId" type="number"/>
            <p>Consistency weighting</p>
            <input id="consistencyId" type="number"/>
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
    <button className="simple-button">result</button>
  );
}

export default App;
