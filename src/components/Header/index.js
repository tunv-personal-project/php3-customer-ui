import React from 'react';
import Hero from '../Hero';
import Navbar from '../Navbar';

function Header(props) {
  return (
    <header class='bg-white dark:bg-gray-800'>
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
