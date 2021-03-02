import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import users from '../../services/users';
import Empty from './Empty';
import Items from './Items';

function Checkout(props) {
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem('cart'))
  );
  const [user, setUser] = useState({
    name: '',
    email: '',
    user_id: '',
  });

  useEffect(() => {
    // effect
    const userLocal = localStorage.getItem('token');

    if (userLocal) {
      const fetchU = async () => {
        const response = await users.profile();

        if (response && response.data) {
          console.log('user response', response);
          // log
          setUser({
            user_id: response.data.id,
            name: response.data.name,
            email: response.data.email,
          });
        }
      };
      fetchU();
    } else {
      window.location.href = '/login';
    }

    // fetchU();
    return () => {
      // cleanup
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>Thanh Toán</title>
      </Helmet>
      <div className='w-full'>{!cart && <Empty />}</div>
      {cart && localStorage.getItem('token') ? (
        <Items userData={user} />
      ) : (
        <p>Please LogIn</p>
      )}
    </>
  );
}

export default Checkout;
