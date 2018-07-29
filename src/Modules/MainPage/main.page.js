import React, { Component } from 'react';
import Header from '../Header/header';
import Features from '../Features/features';
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Header />
        <Features />
      </div>
    );
  }
}

export default MainPage;