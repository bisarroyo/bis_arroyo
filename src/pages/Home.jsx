import React, { Component } from 'react';
import Presentation from '../components/Presentation/Presentation';
import Social from '../components/Social/Social';
import ContactForm from '../components/Form/Form';

import GlobalStyle from '../styles/GlobalStyle';

class Home extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Presentation />
        <Social />
        <ContactForm />
      </div>
    );
  }
}

export default Home;
