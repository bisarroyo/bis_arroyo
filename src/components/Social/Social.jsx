import React from 'react';
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

import Styles from './Styles';

const Social = () => (
  <Styles>
    <h1 className='social-tittle'>Social</h1>
    <div className='social-container'>
      <div className='social-item'>
        <a href='https://github.com/bisarroyo'>
          <AiOutlineGithub className='icon' />
        </a>
      </div>
      <div className='social-item'>
        <a href='https://www.instagram.com/bismark_ab/'>
          <AiFillInstagram className='icon' />
        </a>
      </div>
      <div className='social-item'>
        <a href='https://www.facebook.com/bis.arroyo/'>
          <FaFacebook className='icon' />
        </a>
      </div>
      <div className='social-item'>
        <a href='https://www.linkedin.com/in/bismarkab/'>
          <AiFillLinkedin className='icon' />
        </a>
      </div>
    </div>
  </Styles>
);

export default Social;
