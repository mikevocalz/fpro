import * as React from 'react';
import './App.css';
import  fleeting_white from './fleeting_white.svg';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={fleeting_white} className="App-logo" alt="Fleeting-Logo" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
