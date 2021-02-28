import React from 'react';
import { NavLink } from 'react-router-dom';

function Empty(props) {
  return (
    <div className='h-screen'>
      <div className='container px-24 mx-auto relative'>
        <div className='py-24'>
          <h2 className='text-3xl font-semibold text-gray-800'>
            Giỏ hàng của bạn trống
          </h2>

          <div className='flex mt-12'>
            <NavLink
              key='homepage'
              to='/'
              className='py-2 px-4 w-auto bg-white border rounded-lg mr-4'
            >
              Về Trang Chủ
            </NavLink>
            <NavLink
              key='products'
              to='/products'
              className='py-2 px-4 w-auto bg-white border rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold'
            >
              Tiếp tục mua sắm
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Empty;
