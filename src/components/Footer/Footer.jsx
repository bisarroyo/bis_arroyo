import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className='footer'>
          <li className='footer-item'>
            <Link to='/'>
              Footer
            </Link>
          </li>
          <li className='footer-item'>
            <Link to='/'>
              Footer
            </Link>
          </li>
          <li className='footer-item'>
            <Link to='/'>
              Footer
            </Link>
          </li>
          <li className='footer-item'>
            <Link to='/'>
              Footer
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
