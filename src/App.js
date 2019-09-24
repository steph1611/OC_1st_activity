import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      general_counter: 0,
      resettable_counter: 0
    };
  } 

  resetCounter= () => this.setState( {resettable_counter: 0} );

  incCounters= () => this.setState(
    {
      resettable_counter: this.state.resettable_counter+1,
      general_counter: this.state.general_counter+1 
    }
  );

  decCounters= () => this.setState(
    {
      resettable_counter: this.state.resettable_counter-1,
      general_counter: this.state.general_counter-1
    }
  );

  render() {
      console.log(this.state.resettable_counter);
      return (
      <div className="App">
        <header className="App-header">
          <div>general counter : {this.state.general_counter}</div>
          <div>resettable counter : {this.state.resettable_counter}</div>
          <div>
            <button onClick={this.resetCounter}>Reset</button>
            <button onClick={this.incCounters}>+</button>
            <button onClick={this.decCounters}>-</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
