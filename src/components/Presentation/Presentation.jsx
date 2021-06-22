import React from 'react';

import Styles from './Styles';
import profile from '../../assets/images/profile.jpg';

export default function Presentation() {
  return (
    <Styles>
      <div>
        <img src={profile} alt='Bismark Arroyo Bermúdez' />
      </div>
      <div>
        <h2>Bismark Arroyo</h2>
        <p>
          Self-taught person and web developer implementing variety of frameworks y libraries for build projects with high quality and scalable.
        </p>
      </div>
    </Styles>
  );
};
