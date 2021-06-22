import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Style from './Styles';

class Header extends Component {
  render() {
    return (
      <Style>
        <ul className='navbar'>
          <li className='navbar-item'>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/blog'>
              Blog
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/cv'>
              CV
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </Style>
    );
  }
}

export default Header;
