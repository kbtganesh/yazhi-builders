import React, { Component } from 'react';
import header from './header.css';
import logo from './yazhi.png';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.pageNavigations = ['Home', 'Features', 'Project', 'Service', 'Contact Us'];
  }
  render() {
    let height = window.innerHeight
    let width = window.innerWidth;
    console.log('height: ', height);
    return (
      <div className='headerContainer' style={{ height: height + 'px' }}>
        <div className="header">
          <div className="companyAsset"><lable className="companyName">Yazhi Builders</lable></div>
          <div className="pageNavigations">
            {width>500?this.pageNavigations.map(item => <label className='pageTab'>{item.toUpperCase()}</label>):''}
          </div>
        </div>
        <div className="headerBody">
          <div className="logo">
            <img src={logo} alt='kbt'/>
          </div>
          <div className="information">
            <div className="verticalThinLine"></div>
            <div className="textualInformation">
              <label className="smallTitle">Discover the Colorful World</label>
              <label className="bigTitle">BUILD YOUR DREAM</label>
              <label className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp
or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;