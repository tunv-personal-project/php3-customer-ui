import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/Hero';
import List from '../../components/List';
import Cons from '../../components/Feature/Cons';
function Homepage(props) {
  return (
    <>
      <Helmet>
        <title>Trang Chủ</title>
      </Helmet>
      <Hero />
      <Cons />
      <List />
    </>
  );
}

export default Homepage;
