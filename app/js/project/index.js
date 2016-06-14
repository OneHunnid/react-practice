import ReactDOM from 'react-dom';
import React from 'react';

import Intro from './component/Home.js';

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

export default DisplayOnScreen;
