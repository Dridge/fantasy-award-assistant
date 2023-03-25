import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       </header>
       <body className="App-body">
        <GoButton />
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

export default App;
