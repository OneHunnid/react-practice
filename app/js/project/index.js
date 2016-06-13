import ReactDOM from 'react-dom';
import React from 'react';

// This class displays the Intro class in the DOM
class DisplayOnScreen {
  constructor(props) {
    this.render();
  }
  render() {
    ReactDOM.render(
      <Intro />,
      document.querySelector('.react-container')
    );
  }
}

// This is a Plain Javascript Class using ES6 syntax
// This is what controls the Intro message
class Intro extends React.Component {
  // The constructor to get state replaces getInitialState
  constructor(props) {
    super(props); // super() passes props to the component
    this.Previous = this.Previous.bind(this); //Binds this
    this.Next = this.Next.bind(this);// Binds this
    this.state = {next: false}; // Sets the default state to false
  }
  // Sets the state to true
  Next() {
    this.setState({next: true});
  }
  // Sets the state to false
  Previous() {
    this.setState({next: false});
  }
  // renders the content
  render() {
    console.log("Current State ", this.state)

    if (this.state.next === true) {
      return (
        <div className="intro">
          <h1>Welcome to Reactland!</h1>
          <p>You clicked a button. Great job!</p>
          <button onClick={this.Previous}>cancel</button>
        </div>
      );
    }
    else {
      return (
        <div className="intro">
          <h1>Welcome to Reactland!</h1>
          <p>This area is where you can practice react. Click the button to continue.</p>
          <button onClick={this.Next}>Get Started</button>
        </div>
      );
    }
  }
}

export default DisplayOnScreen;
