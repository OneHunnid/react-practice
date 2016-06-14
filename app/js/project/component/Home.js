import React from 'react';

class Intro extends React.Component {
  constructor(props) {
    super(props); // super() passes props to the component
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {next: false};
  }

  handleLogin() {
    this.setState({next: true});
  }

  handlePrevious() {
    this.setState({next: false});
  }

  render() {
    console.log("Current State ", this.state)

    if (this.state.next === false) {
      return (
        <div className="intro">
          <h1 className="logo">Listmark</h1>
          <div className="tagline">The Superior Bookmark Manager.</div>
          <p className="intro-desc">Listmark is the easiest and quickest way to save and share links you find on the web. </p>
          <div className="button" onClick={this.handleLogin}><a href="#">SIGN UP / SIGN IN</a></div>
          <div className="button-learn-more"><a href="#">LEARN MORE</a></div>
        </div>
      );
    }
    else {
      return (
        <div className="intro">
          <h1 className="logo">Listmark</h1>
          <div className="tagline">The Superior Bookmark Manager.</div>
          <p className="intro-desc">Listmark is the easiest and quickest way to save and share links you find on the web. </p>
          <div className="button-wrapper">
            <div className="button-social button--twitter" data-login="google">
              Continue with Twitter
            </div>
            <div className="button-social button--facebook" data-login="google">
              Continue with Facebook
            </div>
            <div className="button-social button--google" data-login="google">
              Continue with Google
            </div>
          </div>
          <div className="button-cancel" onClick={this.handlePrevious}>Cancel</div>
        </div>
      );
    }
  }
}

export default Intro;
