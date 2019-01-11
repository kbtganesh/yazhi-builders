import React, { Component } from 'react';
import './features.css'
class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (<div className='featuresParent'>
      <h1 className='title'> What made us Unique </h1>
      <h3 className='description'>who are extreamly in love with eco friendly system</h3>
      <div className='features'>
        <Feature title='Feature Title Here' desc='Lorem ipsum karis seira ovsie parue ekary lanveir thora' />
        <Feature title='Feature Title Here' desc='Lorem ipsum karis seira ovsie parue ekary lanveir thora' />
        <Feature title='Feature Title Here' desc='Lorem ipsum karis seira ovsie parue ekary lanveir thora' />
      </div>
      </div>
    );
  }
}

const Feature = (props) => {
  return (
    <div className='feature-box'>
      <div className="image">
      </div>
      <div className="title">{props.title}</div>
      <div className="description">{props.desc}</div>
    </div>
  )
}
export default Features;