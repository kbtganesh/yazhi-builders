import React, { Component } from 'react';
import './service.css'
class service extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='serviceContainer'>
        <h1 className='title'> Why we are the best </h1>
        <h3 className='description'>who are extreamly in love with eco friendly system</h3>
        <div className='cardsContainer'>
          <Cards title='Feature Title Here' desc='Lorem ipsum karis seira ovsie parue ekary lanveir thora' />
          <Cards title='Feature Title Here' desc='Lorem ipsum karis seira ovsie parue ekary lanveir thora' />
          <Cards title='Feature Title Here' desc='Lorem ipsum karis seira ovsie parue ekary lanveir thora' />
        </div>
      </div>
    );
  }
}

const Cards = (props) => {
  return (
    <div className='card'>
      <div className="title"><img/><label>{props.title}</label></div>
      <div className="description">{props.desc}</div>
    </div>
  )
}

export default service;