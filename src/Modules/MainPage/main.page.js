import React, { Component } from 'react';
import Header from '../Header/header';
import Features from '../Features/features';
import Service from '../Service/service';
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
        <Service />
      </div>
    );
  }
}

export default MainPage;