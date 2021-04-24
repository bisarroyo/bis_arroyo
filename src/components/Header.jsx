import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <ul className='navbar'>
          <li className='navbar-item'>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/'>
              Blog
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/'>
              Curriculum
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/'>
              Contact
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
