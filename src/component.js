import React from 'react'

class Display extends React.Component {

  constructor() {
    super();
    this.state = Display.resetState();
    this.state.generalCounter=0;
  } 

  /* method to avoid code duplication in constructor and cWRP
   could not be used with getDerivedStateFromProps
  resetState = () => ({resettableCounter: 0,}); 
  */

  static resetState () {
    return ({resettableCounter: 0,}); 
  }

  /*
  componentWillReceiveProps(nextProps) {
    if (nextProps.resetCounter===true) 
      this.setState(this.resetState())
  }
  */
  
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.resetCounter === true) {
  //    return {resettableCounter: 0,};
      return Display.resetState();
    } else {
      return null;
    }
  }

  render() {
    return (
        <>
        <div>
        <div>general counter : {this.state.generalCounter}</div>
        <div>resettable counter : {this.state.resettableCounter}</div>
        </div>
        <div>
            <button onClick={this.incCounters}>+</button>
            <button onClick={this.decCounters}>-</button>
        </div>
        </>
    )
  }

  incCounters= () => this.setState(
    {
      resettableCounter: this.state.resettableCounter+1,
      generalCounter: this.state.generalCounter+1 
    }
  )

  decCounters= () => this.setState(
    {
      resettableCounter: this.state.resettableCounter-1,
      generalCounter: this.state.generalCounter-1
    }
  )

}

export default Display