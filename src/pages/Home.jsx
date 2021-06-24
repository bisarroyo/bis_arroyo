import React, { Component } from 'react';
import Presentation from '../components/Presentation/Presentation';
import Social from '../components/Social/Social';
import ContactForm from '../components/Form/Form';
import ContainerItem from '../components/ContainerItem/ContainerItem';

import GlobalStyle from '../styles/GlobalStyle';

class Home extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Presentation />
        <ContainerItem title='Projects' />
        <Social />
        <ContainerItem title='Skills' />
        <ContactForm />
      </div>
    );
  }
}

export default Home;
