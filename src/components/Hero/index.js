import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

function Hero(props) {
  return (
    <div class='container px-6 py-16 mx-auto'>
      <div class='items-center md:flex'>
        <div class='w-full md:w-1/2'>
          <div class='max-w-lg'>
            <h1 class='text-2xl font-semibold text-gray-800 uppercase dark:text-white md:text-3xl'>
              Nơi tốt nhất để mua sắm
            </h1>
            <p class='mt-2 text-gray-600 dark:text-gray-400 mb-3'>
              Gori sẽ mang đến những sản phẩm không chỉ đẹp về mẫu mà mà còn
              chất lượng về chất vải cho bạn. Chúng tớ quan tâm đến nhu cầu của
              mọi cá nhân và trân trọng sản phẩm.
            </p>
            <NavLink
              key='shop'
              to='/products'
              className='px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500'
            >
              Ghé Shop
            </NavLink>
          </div>
        </div>

        <div class='flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2'>
          <img
            class='w-full h-full max-w-2xl'
            src='https://merakiui.com/_nuxt/img/Catalogue-pana.981c20b.svg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
