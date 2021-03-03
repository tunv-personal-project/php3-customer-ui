import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { NavLink } from 'react-router-dom';
import total from '../../helper/total';
import icons from '../../icons';
import routes from '../../routes';
import CartTableItem from './CartTableItem';

function Navbar(props) {
  const [toggleCart, setToggleCart] = useState(false);
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem('cart'))
  );
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleToggleCart = () => {
    setToggleCart(!toggleCart);
  };

  const handleClearCart = () => {
    setCart(null);
    localStorage.removeItem('cart');
  };

  // const parsedLink = (routes) => {
  //   const userData = JSON.parse(localStorage.getItem('user'));

  //   if (userData) {
  //     setUser(userData);
  //     routes[6].is_navbar = false;
  //     routes[7].is_navbar = false;
  //   }

  //   return routes;
  // };

  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container px-6 py-3 mx-auto md:flex md:justify-between md:items-center'>
        <div className='flex items-center justify-between'>
          <div>
            <NavLink
              to='/'
              className='text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300'
            >
              Tú và Bảo
            </NavLink>
          </div>

          <div className='flex md:hidden'>
            <button
              type='button'
              className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
              aria-label='toggle menu'
            >
              <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                <path
                  fill-rule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className='items-center md:flex'>
          <div className='flex flex-col md:flex-row md:mx-6'>
            {/* <a
              className='my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0'
              href='#'
            >
              Home
            </a> */}
            {routes
              .filter((route) => route.is_navbar)
              .map((route, index) => {
                return (
                  route && (
                    <NavLink
                      key={index}
                      to={route.path}
                      className='my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0'
                      activeClassName='text-indigo-400'
                    >
                      {route.name}
                    </NavLink>
                  )
                );
              })}
          </div>

          <div className='flex justify-center md:block'>
            <button
              className='relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300'
              onClick={handleToggleCart}
            >
              <img className='w-6 h-6' src={icons.bag} alt='bag' />
              {cart && (
                <span className='absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full'></span>
              )}
              {toggleCart && (
                <div className='absolute w-96 p-2 bg-white border right-0 rounded-lg shadow-md mt-2 transition ease-in-out duration-300'>
                  <ul className='w-full'>
                    {cart ? (
                      <>
                        <table className='table-auto w-full'>
                          <thead>
                            <tr>
                              <th>Ảnh</th>
                              <th>Tên</th>
                              <th>Số Lượng</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart.map((item) => (
                              <CartTableItem key={item.id} item={item} />
                            ))}
                          </tbody>
                        </table>
                        <h3 className='font-semibold text-left mt-4'>
                          Tổng Cộng:{' '}
                          <NumberFormat
                            value={total(cart)}
                            thousandSeparator={true}
                            decimalSeparator='.'
                            displayType={'text'}
                            suffix=' đ'
                          />
                        </h3>
                        <div className='w-full my-4 flex flex-col'>
                          <button
                            className='py-2 border rounded-lg hover:shadow-md mb-2'
                            onClick={handleClearCart}
                          >
                            Xoá Giỏ Hàng
                          </button>
                          <NavLink
                            to='/checkout'
                            className='py-2 border border-indigo-500 rounded-lg hover:bg-indigo-600 font-semibold text-white bg-indigo-500'
                          >
                            Thanh Toán
                          </NavLink>
                        </div>
                      </>
                    ) : (
                      'Your cart is empty -.-'
                    )}
                  </ul>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
