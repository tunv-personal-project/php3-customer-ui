import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import users from '../../services/users';

function Register(props) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    c_password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    c_password: '',
  });

  const [validate, setValidate] = useState({
    name: {
      required: true,
    },
    email: {
      required: true,
    },
    password: {
      required: true,
    },
    c_password: {
      required: true,
    },
  });

  const updateField = (event) => {
    const key = event.target.name;

    if (validate[key].required && validator.isEmpty(event.target.value)) {
      setErrors({ ...errors, [key]: 'Yêu cầu bạn ơi' });
    } else if (key === 'email' && !validator.isEmail(event.target.value)) {
      setErrors({ ...errors, [key]: 'Email sai rồi bạn ơi' });
    } else {
      setErrors({ ...errors, [key]: '' });
    }

    setData({ ...data, [key]: event.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await users.register(data);

      if (response.data && response.data.is_success) {
        console.log('register successfull');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class='w-full flex flex-wrap'>
        <div className='"w-full md:w-1/2 flex flex-col'>
          <div className='flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12'></div>

          <div className='flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32'>
            <p className='text-center text-3xl mt-24'>Đăng Ký</p>

            <div className='flex flex-col pt-3 md:pt-8'>
              <div className='flex flex-col pt-4'>
                <label htmlFor='name' class='text-lg'>
                  Họ và Tên
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Nguyễn Văn A'
                  class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={updateField}
                />
                {errors && errors.name ? (
                  <em className='text-sm text-red-400'>{errors.name}</em>
                ) : (
                  <span></span>
                )}
              </div>
              <div className='flex flex-col pt-4'>
                <label htmlFor='email' class='text-lg'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='johndoe@example.com'
                  class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={updateField}
                />
                {errors && errors.email ? (
                  <em className='text-sm text-red-400'>{errors.email}</em>
                ) : (
                  <span></span>
                )}
              </div>
              <div className='flex flex-col pt-4'>
                <label htmlFor='password' class='text-lg'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='************'
                  class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={updateField}
                />
              </div>
              <div className='flex flex-col pt-4'>
                <label htmlFor='c_password' class='text-lg'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='c_password'
                  name='c_password'
                  placeholder='************'
                  class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={updateField}
                />
              </div>
              <div className='flex flex-col pt-4'>
                <button
                  className='px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold'
                  onClick={handleRegister}
                >
                  Đăng Ký
                </button>
              </div>
            </div>
            <div className='text-center pt-12 pb-12'>
              <p>
                Already have an account?
                <NavLink
                  to='/login'
                  className='text-center pt-12 pb-12 text-indigo-500 hover:text-indigo-600 ml-2'
                >
                  Đăng nhập
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <div className='w-1/2 shadow-2xl'>
          <img
            className='object-cover w-full h-screen hidden md:block'
            src='https://source.unsplash.com/IXUM4cJynP0'
            alt='Hinh anh chi mang tinh chat minh hoa'
          />
        </div>
      </div>
    </>
  );
}

export default Register;
