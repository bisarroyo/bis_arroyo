import React from 'react';

import Header from './Header';
import Footer from './Footer';

import '../assets/styles/App.scss';

const Layout = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

export default Layout;
