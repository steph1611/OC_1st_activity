import React from 'react';
import './App.css';

import Display from './component.js'

class App extends React.Component {

  state={resetCounter:false}

  resetCounter= () => this.setState( {resetCounter: true} );

  render() {
      return (
      <div className="App">
        <header className="App-header">
          <Display resetCounter={this.state.resetCounter}></Display>
          <div>
           <p></p><p></p>
           <button onClick={this.resetCounter}>Reset</button>
          </div>
        </header>
      </div>
    );
  }

  componentDidUpdate () {
    if (this.state.resetCounter!==false)
      this.setState( {resetCounter: false} );
  }

}

export default App;       