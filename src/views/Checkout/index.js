import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Empty from './Empty';

function Checkout(props) {
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem('cart'))
  );

  return (
    <>
      <Helmet>
        <title>Thanh Toán</title>
      </Helmet>
      <div className='w-full'>{!cart && <Empty />}</div>
    </>
  );
}

export default Checkout;
