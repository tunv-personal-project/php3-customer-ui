import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import users from '../../services/users';

function Login(props) {
  const [data, setData] = useState({ email: '', password: '' });

  const updateField = (event) => {
    const key = event.target.name;

    setData({ ...data, [key]: event.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await users.login(data);
      if (response.data.is_success) {
        console.log('USER', response);

        const token = response.data.access_token;
        localStorage.setItem('token', token);

        window.location.href = '/';
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  return (
    <>
      <div className='w-full flex flex-wrap'>
        <div class='w-full md:w-1/2 flex flex-col'>
          <div class='flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32'>
            <p class='text-center text-3xl'>Welcome.</p>
            <div
              class='flex flex-col pt-3 md:pt-8'
              onsubmit='event.preventDefault();'
            >
              <div class='flex flex-col pt-4'>
                <label for='email' class='text-lg'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='your@email.com'
                  class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={updateField}
                />
              </div>

              <div class='flex flex-col pt-4'>
                <label for='password' class='text-lg'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={updateField}
                />
              </div>

              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg text-lg hover:bg-gray-700 p-2 mt-8'
                onClick={handleLogin}
              >
                Đăng Nhập
              </button>
            </div>
            <div class='text-center pt-12 pb-12'>
              <p>
                Chưa có tài khoản
                <NavLink
                  to='/register'
                  className='text-center pt-12 pb-12 text-indigo-500 hover:text-indigo-600 ml-2'
                >
                  Đăng ký
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <div class='w-1/2 shadow-2xl'>
          <img
            class='object-cover w-full h-screen hidden md:block'
            src='https://source.unsplash.com/IXUM4cJynP0'
            alt='minh hoa'
          />
        </div>
      </div>
    </>
  );
}

export default Login;
