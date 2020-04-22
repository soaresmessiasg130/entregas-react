import React, { Component } from 'react';

class NavBarDefault extends Component {
  render () {
    return (
      <nav>
        <div className="nav-wrapper cyan accent-3">
          <a href="#name" className="brand-logo">Schedules of Deliveries</a>
          <ul className="right">
            <li><a href="#table">Clients</a></li>
            <li><a href="#table">Products</a></li>
            <li><a href="#table">Historic</a></li>
            <li><a href="#table">About</a></li>
          </ul>
        </div>
      </nav>
          
    );
  }
}

export default NavBarDefault;