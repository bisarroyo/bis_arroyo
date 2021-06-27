import React from 'react';

import Navbar from './Navbar/Navbar/Navbar';
import Footer from './Footer/Footer';
import GlobalStyle from '../styles/GlobalStyle';

const Layout = (props) => (
  <>
    <GlobalStyle />
    <Navbar />
    {props.children}
    <Footer />
  </>
);

export default Layout;
