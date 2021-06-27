import React, { Component } from 'react';
import Presentation from '../components/Presentation/Presentation';
import Social from '../components/Social/Social';
import ContactForm from '../components/Form/Form';
import ContainerProjects from '../components/ContainerProjects/ContainerProjects';
import ContainerSkills from '../components/ContainerSkills/ContainerSkills';

class Home extends Component {
  render() {
    return (
      <div>
        <Presentation />
        <ContainerProjects title='Projects' />
        <Social title='Social' />
        <ContainerSkills title='Skills' />
        <ContactForm />
      </div>
    );
  }
}

export default Home;
